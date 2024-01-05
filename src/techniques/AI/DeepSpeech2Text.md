---
title: Audio to Text (DeepSpeech)
date: 2023-11-27
icon: circle-dot
author: Haiyue
category:
  - AI
tag:
  - audio2text
star: false
sticky: false
---
## What is DeepSpeech
DeepSpeech is an open source Python library that enables us to build automatic speech ecognition systems. It is based on Baidu’s 2014 paper titled [Deep Speech: Scaling up end-to-end speech recognition](https://arxiv.org/abs/1412.5567).


## Local Speech to Text
The libraries are needed.
1. `deepspeech`
2. `numpy`
3. `webrtcvad`: voice activity detection (VAD) library developed by Google for WebRTC (real time communication).
To install all the libraries using the command
``` bash
pip install deepspeech numpy webrtcvad
```

For the asynchronous transcription, three files are needed, which are
1. One file to handle interaction with WAV data
2. one file to transcribe speech to text on a WAV file,
3. one to use these two in the command line
And also the pretrained DeepSpeech model and scorer are needed.
To download the files using the commands
``` bash
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.pbmm
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/deepspeech-0.9.3-models.scorer
```

### WAV Handler

`wav_handler.py`
``` python
import collections
import contextlib
import wave

# Reading Audio Data from a WAV file
"""Reads a .wav file.
Input: path to a .wav file
Output: tuple of pcm data, sample rate, and duration
"""
def read_wave(path):
    '''
    Let’s start with creating a function to read WAV files. This function will take an input,  this input is the path to a WAV file. The file will use the contextlib library to open the  WAV file and read in the contents as bytes. Next, we run multiple asserts on the WAV file -  it must have one channel, have a sample width of 2, have a sample rate of 8, 16, or 32 kHz.

    Once we have asserted that the WAV file is in the right format for processing, we extract the  frames. Next, we extract the pcm data from the frames and the duration from the metadata.  Finally, we return the PCM data, the sample rate, and the duration.
    '''
    with contextlib.closing(wave.open(path, 'rb')) as wf:
        num_channels = wf.getnchannels()
        assert num_channels == 1
        sample_width = wf.getsampwidth()
        assert sample_width == 2
        sample_rate = wf.getframerate()
        assert sample_rate in (8000, 16000, 32000)
        frames = wf.getnframes()
        pcm_data = wf.readframes(frames)
        duration = frames / sample_rate
        return pcm_data, sample_rate, duration

# Writing Audio Data to a WAV file
"""Writes a .wav file.
Input: path to new .wav file, PCM audio data, and sample rate.
Output: a .wav file
"""
def write_wave(path, audio, sample_rate):
    '''
    Now let’s create the function to write audio data to a WAV file. This function requires three parameters, the path to a file to write to, the audio data, and the sample rate. This function writes a WAV file in the same way that the read function asserts its parameters. All we do is here is set the channels, sample width, and frame rate and then write the audio frames.
    '''
    with contextlib.closing(wave.open(path, 'wb')) as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(audio)

"""Represents a "frame" of audio data.
Requires the number of byes, the timestamp of the frame, and the duration on init"""
class Frame(object):
    '''
    We’re going to create a class called Frame to hold some information to represent our audio data and make it easier to handle. This object requires three parameters to be created: the bytes, the timestamp in the audio file, and the duration of the Frame.
    '''
    def __init__(self, bytes, timestamp, duration):
        self.bytes = bytes
        self.timestamp = timestamp
        self.duration = duration

# Creating Frames of Audio Data for DeepSpeech to Transcribe
"""Generates audio frames from PCM audio data.
Input: the desired frame duration in milliseconds, the PCM data, and
the sample rate.
Yields/Generates: Frames of the requested duration.
"""
def frame_generator(frame_duration_ms, audio, sample_rate):
    '''
    this function as a frame generator or a frame factory that returns an iterator. This function requires three parameters: the frame duration in milliseconds, the audio data, and the sample rate.
    
    This function starts by deriving an interval of frames from the passed in sample rate and frame duration in milliseconds. We start at an offset and timestamp of 0. We also create a duration constant equal to the number of frames in a second.
    
    While the current offset can be incremented by the interval constant and be within the number of frames of the audio, we generate a Frame for each interval and then increment the timestamp and offset appropriately.
    '''
    n = int(sample_rate * (frame_duration_ms / 1000.0) * 2)
    offset = 0
    timestamp = 0.0
    duration = (float(n) / sample_rate) / 2.0
    while offset + n < len(audio):
        yield Frame(audio[offset:offset + n], timestamp, duration)
        timestamp += duration
        offset += n

# Collecting Voice Activated Frames for Speech to Text with DeepSpeech
"""Filters out non-voiced audio frames.
Given a webrtcvad.Vad and a source of audio frames, yields only
the voiced audio.
Arguments:
sample_rate - The audio sample rate, in Hz.
frame_duration_ms - The frame duration in milliseconds.
padding_duration_ms - The amount to pad the window, in milliseconds.
vad - An instance of webrtcvad.Vad.
frames - a source of audio frames (sequence or generator).
Returns: A generator that yields PCM audio data.
"""
def vad_collector(sample_rate, frame_duration_ms,
                  padding_duration_ms, vad, frames):
    '''
    function to collect all the frames that contain voice. This function requires a sample rate, the frame duration in milliseconds, the padding duration in milliseconds, a voice activation detector (VAD) from webrtcvad, and the audio data frames.

    The VAD algorithm uses a padded ring buffer and checks to see what percentage of the frames in the window are voiced. When the window reaches a 90% voiced frame rate, the VAD triggers and begins yielding audio frames. While generating frames, if the percentage of voiced audio data in the frame drops below 10%, it will stop generating frames.
    '''
    num_padding_frames = int(padding_duration_ms / frame_duration_ms)
    # We use a deque for our sliding window/ring buffer.
    ring_buffer = collections.deque(maxlen=num_padding_frames)
    # We have two states: TRIGGERED and NOTTRIGGERED. We start in the
    # NOTTRIGGERED state.
    triggered = False
    voiced_frames = []
    for frame in frames:
        is_speech = vad.is_speech(frame.bytes, sample_rate)
        if not triggered:
            ring_buffer.append((frame, is_speech))
            num_voiced = len([f for f, speech in ring_buffer if speech])
            # If we're NOTTRIGGERED and more than 90% of the frames in
            # the ring buffer are voiced frames, then enter the
            # TRIGGERED state.
            if num_voiced > 0.9 * ring_buffer.maxlen:
                triggered = True
                # We want to yield all the audio we see from now until
                # we are NOTTRIGGERED, but we have to start with the
                # audio that's already in the ring buffer.
                for f, s in ring_buffer:
                    voiced_frames.append(f)
                ring_buffer.clear()
        else:
            # We're in the TRIGGERED state, so collect the audio data
            # and add it to the ring buffer.
            voiced_frames.append(frame)
            ring_buffer.append((frame, is_speech))
            num_unvoiced = len([f for f, speech in ring_buffer if not speech])
            # If more than 90% of the frames in the ring buffer are
            # unvoiced, then enter NOTTRIGGERED and yield whatever
            # audio we've collected.
            if num_unvoiced > 0.9 * ring_buffer.maxlen:
                triggered = False
                yield b''.join([f.bytes for f in voiced_frames])
                ring_buffer.clear()
                voiced_frames = []
    if triggered:
        pass
    # If we have any leftover voiced audio when we run out of input,
    # yield it.
    if voiced_frames:
        yield b''.join([f.bytes for f in voiced_frames])

```

### Transcribe Speech to Text
`wav_transcriber.py`
``` python
import glob
import webrtcvad
import logging
import wav_handler
from deepspeech import Model
from timeit import default_timer as timer

# Pick Which DeepSpeech Model to Use
'''
Load the pre-trained model into the memory
@param models: Output Graph Protocol Buffer file
@param scorer: Scorer file
@Retval
Returns a DeepSpeech Object
'''
def load_model(models, scorer):
    '''
    to load up the model and scorer for DeepSpeech to run speech to text with. This function takes two parameters, the models graph, which we create a function to produce below, and the path to the scorer file. All it does is load the model from the graph and enable the use of the scorer. This function returns a DeepSpeech object.
    '''
    ds = Model(models)
    ds.enableExternalScorer(scorer)
    return ds

# Speech to Text on an Audio File with DeepSpeech
'''
Run Inference on input audio file
@param ds: Deepspeech object
@param audio: Input audio for running inference on
@param fs: Sample rate of the input audio file
@Retval:
Returns a list [Inference, Inference Time, Audio Length]
'''
def stt(ds, audio, fs):
    '''
    This function is the one that does the actual speech recognition. It takes three inputs, a DeepSpeech model, the audio data, and the sample rate.
    
    We begin by setting the time to 0 and calculating the length of the audio. All we really have to do is call the DeepSpeech model’s stt function to do our own stt function. We pass the audio file to the stt function and return the output.
    '''
    inference_time = 0.0
    audio_length = len(audio) * (1 / fs)
    # Run Deepspeech
    output = ds.stt(audio)
    return output

# DeepSpeech Model Graph Creator Function
'''
Resolve directory path for the models and fetch each of them.
@param dirName: Path to the directory containing pre-trained models
@Retval:
Retunns a tuple containing each of the model files (pb, scorer)
'''
def resolve_models(dirName):
    '''
    This is the function that creates the model graph for the load_model function we created a couple sections above. This function takes the path to a directory. From that directory, it looks for files with the DeepSpeech model extension, pbmm and the DeepSpeech scorer file extension, .scorer. Then, it returns both of those values.
    '''
    pb = glob.glob(dirName + "/*.pbmm")[0]
    logging.debug("Found Model: %s" % pb)
    scorer = glob.glob(dirName + "/*.scorer")[0]
    logging.debug("Found scorer: %s" % scorer)
    return pb, scorer


# Voice Activation Detection to Create Segments for Speech to Text
'''
Generate VAD segments. Filters out non-voiced audio frames.
@param waveFile: Input wav file to run VAD on.0
@Retval:
Returns tuple of
   segments: a bytearray of multiple smaller audio frames
             (The longer audio split into mutiple smaller one's)
   sample_rate: Sample rate of the input audio file
   audio_length: Duraton of the input audio file
'''
def vad_segment_generator(wavFile, aggressiveness):
    '''
    The last function in our WAV transcription file generates segments of text that contain voice. We use the WAV handler file we created earlier and webrtcvad to do the heavy lifting. This function requires two parameters: a WAV file and an integer value from 0 to 3 representing how aggressively we want to filter out non-voice activity.
    
    We call the read_wave function from the wav_handler.py file we created earlier and imported above to get the audio data, sample rate, and audio length. We then assert that the sample rate is 16kHz before moving on to create a VAD object. Next, we call the frame generator from wav_handler.
    
    We convert the generated iterator to a list which we pass to the vad_collector function from wav_handler along with the sample rate, frame duration (30 ms), padding duration (300 ms), and VAD object. Finally, we return the collected VAD segments along with the sample rate and audio length.
    '''
    audio, sample_rate, audio_length = wav_handler.read_wave(wavFile)
    assert sample_rate == 16000, "Only 16000Hz input WAV files are supported for now!"
    vad = webrtcvad.Vad(int(aggressiveness))
    frames = wav_handler.frame_generator(30, audio, sample_rate)
    frames = list(frames)
    segments = wav_handler.vad_collector(sample_rate, 30, 300, vad, frames)
    return segments, sample_rate, audio_length
```

### Reading Arguments for DeepSpeech Speech to Text
We create a main function that takes one parameter — `args`. These are the arguments passed in through the command line. We use the `argparse` library to parse the arguments sent in. We also create helpful tips on how to use each one.

We use `aggressive` to determine how aggressively we want to filter. audio directs us to the audio file path. model points us to the directory containing the model and scorer. Finally, stream dictates whether or not we are streaming audio. Neither stream nor audio is required, but one or the other must be present.
``` python
import sys
import os
import logging
import argparse
import subprocess
import shlex
import numpy as np
import wav_transcriber
# Debug helpers
logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)
def main(args):
    parser = argparse.ArgumentParser(description='Transcribe long audio files using webRTC VAD or use the streaming interface')
    parser.add_argument('--aggressive', type=int, choices=range(4), required=False,
                       help='Determines how aggressive filtering out non-speech is. (Interger between 0-3)')
    parser.add_argument('--audio', required=False,
                       help='Path to the audio file to run (WAV format)')
    parser.add_argument('--model', required=True,
                       help='Path to directory that contains all model files (output_graph and scorer)')
    parser.add_argument('--stream', required=False, action='store_true',
                       help='To use deepspeech streaming interface')
    args = parser.parse_args()
    if args.stream is True:
        print("Opening mic for streaming")
    elif args.audio is not None:
        logging.debug("Transcribing audio file @ %s" % args.audio)
    else:
        parser.print_help()
        parser.exit()
```

### Using DeepSpeech for Real Time or Asynchronous Speech Recognition
This is still inside the main function we started above. Once we parse all the arguments, we load up DeepSpeech. First, we get the directory containing the models. Next, we call the `wav_transcriber` to resolve and load the models.

If we pass the path to an audio data file in the command line, then we will run asynchronous speech recognition. The first thing we do for that is call the VAD segment generator to generate the VAD segments and get the sample rate and audio length. Next, we open up a text file to transcribe to.

For each of the enumerated segments, we will process each chunk by using `numpy` to pull the segment from the buffer and the speech to text function from `wav_transcriber` to do the speech to text functionality. We write to the text file until we run out of audio segments.

If we pass stream instead of audio, then we open up the mic to stream audio data in. If you don’t need real time automatic speech recognition, then you can ignore this part. First, we have to spin up a subprocess to open up a mic to stream in real time just like we did with PyTorch local speech recognition.

We use the `subprocess` and `shlex` libraries to open the mic to stream voice audio until we shut it down. The model will read 512 bytes of audio data at a time and transcribe it.

``` python
# Point to a path containing the pre-trained models & resolve ~ if used
dirName = os.path.expanduser(args.model)
# Resolve all the paths of model files
output_graph, scorer = wav_transcriber.resolve_models(dirName)
# Load output_graph, alpahbet and scorer
model_retval = wav_transcriber.load_model(output_graph, scorer)
if args.audio is not None:
    # Run VAD on the input file
    waveFile = args.audio
    segments, sample_rate, audio_length = wav_transcriber.vad_segment_generator(waveFile, args.aggressive)
    f = open(waveFile.rstrip(".wav") + ".txt", 'w')
    logging.debug("Saving Transcript @: %s" % waveFile.rstrip(".wav") + ".txt")
    for i, segment in enumerate(segments):
        # Run deepspeech on the chunk that just completed VAD
        logging.debug("Processing chunk %002d" % (i,))
        audio = np.frombuffer(segment, dtype=np.int16)
        output = wav_transcriber.stt(model_retval, audio, sample_rate)
        logging.debug("Transcript: %s" % output)
        f.write(output + " ")
    # Summary of the files processed
    f.close()
else:
    sctx = model_retval.createStream()
    subproc = subprocess.Popen(shlex.split('rec -q -V0 -e signed -L -c 1 -b 16 -r 16k -t raw - gain -2'),
                                stdout=subprocess.PIPE,
                                bufsize=0)
    print('You can start speaking now. Press Control-C to stop recording.')
    try:
        while True:
            data = subproc.stdout.read(512)
            sctx.feedAudioContent(np.frombuffer(data, np.int16))
    except KeyboardInterrupt:
        print('Transcription: ', sctx.finishStream())
        subproc.terminate()
        subproc.wait()
if __name__ == '__main__':
    main(sys.argv[1:])
```


## Resource
[A Guide to DeepSpeech Speech to Text](https://medium.com/plain-simple-software/a-guide-to-deepspeech-speech-to-text-b4b051477cfa)

