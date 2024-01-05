---
title: Use cases
index: true
icon: circle-dot
author: Haiyue
date: 2023-12-19
category:
  - ffmpeg
---
## How to get help
``` bash
Parameters help:
  -h      -- print basic options
  -h long -- print more options
  -h full -- print all options (including all format and codec specific options, very long)
  -h type=name -- print all options for the named decoder/encoder/demuxer/muxer/filter/bsf
```
### Basic Options
::: code-tabs
@tab Global options
``` bash
Global options (affect whole program instead of just one file:
-loglevel loglevel  set logging level
-v loglevel         set logging level
-report             generate a report
-max_alloc bytes    set maximum size of a single allocated block
-y                  overwrite output files
-n                  never overwrite output files
-ignore_unknown     Ignore unknown stream types
-filter_threads     number of non-complex filter threads
-filter_complex_threads  number of threads for -filter_complex
-stats              print progress report during encoding
-max_error_rate maximum error rate  ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
-bits_per_raw_sample number  set the number of bits per raw sample
-vol volume         change audio volume (256=normal)
```
@tab Per-file main options
``` bash
-f fmt              force format
-c codec            codec name
-codec codec        codec name
-pre preset         preset name
-map_metadata outfile[,metadata]:infile[,metadata]  set metadata information of outfile from infile
-t duration         record or transcode "duration" seconds of audio/video
-to time_stop       record or transcode stop time
-fs limit_size      set the limit file size in bytes
-ss time_off        set the start time offset
-sseof time_off     set the start time offset relative to EOF
-seek_timestamp     enable/disable seeking by timestamp with -ss
-timestamp time     set the recording timestamp ('now' to set the current time)
-metadata string=string  add metadata
-program title=string:st=number...  add program with specified streams
-target type        specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")
-apad               audio pad
-frames number      set the number of frames to output
-filter filter_graph  set stream filtergraph
-filter_script filename  read stream filtergraph description from a file
-reinit_filter      reinit filtergraph on input parameter changes
-discard            discard
-disposition        disposition
```
@tab Video options:
``` bash
-vframes number     set the number of video frames to output
-r rate             set frame rate (Hz value, fraction or abbreviation)
-s size             set frame size (WxH or abbreviation)
-aspect aspect      set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
-bits_per_raw_sample number  set the number of bits per raw sample
-vn                 disable video
-vcodec codec       force video codec ('copy' to copy stream)
-timecode hh:mm:ss[:;.]ff  set initial TimeCode value.
-pass n             select the pass number (1 to 3)
-vf filter_graph    set video filters
-ab bitrate         audio bitrate (please use -b:a)
-b bitrate          video bitrate (please use -b:v)
-dn                 disable data
```
@tab Audio options:
``` bash
-aframes number     set the number of audio frames to output
-aq quality         set audio quality (codec-specific)
-ar rate            set audio sampling rate (in Hz)
-ac channels        set number of audio channels
-an                 disable audio
-acodec codec       force audio codec ('copy' to copy stream)
-vol volume         change audio volume (256=normal)
-af filter_graph    set audio filters
```
@tab Subtitle options:
``` bash
-s size             set frame size (WxH or abbreviation)
-sn                 disable subtitle
-scodec codec       force subtitle codec ('copy' to copy stream)
-stag fourcc/tag    force subtitle tag/fourcc
-fix_sub_duration   fix subtitles duration
-canvas_size size   set canvas size (WxH or abbreviation)
-spre preset        set the subtitle options to the indicated preset
```
:::


## Usuage
### Split media into multi-parts

``` bash
# segment_time 
ffmpeg -i somefile.mp3 -f segment -segment_time 3 -c copy out%03d.mp3
```

### 
``` bash
# From time 4.5 seconds to output 1 frame named output.png
ffmpeg -i input.mp4 -ss 4.500 -vframes 1 output.png

# From time 4.5 seconds to output 10 frame continously named output%d.png (%d if format string for integer)
ffmpeg -i input.mp4 -ss 4.500 -vframes 10 output%d.png

# set frame per senond is 1, output 1 frame per second.
ffmpeg -i input.mp4 -vf fps=1 output%d.png

# set frame per senond is 0.1, output 0.1 frame per second, so the result is output 1 frame every 10 seconds.
ffmpeg -i input.mp4 -vf fps=0.1 output%d.png

# set frame per senond is 10, output 10 frame per second
ffmpeg -i input.mp4 -vf fps=10 output%d.png
```


## Other Resources
``` bash
然后从视频中提取图片的命令如下：
ffmpeg -i [视频路径] -r 1 -q:v 2 -f image2 image-%d.jpeg
 视频路径：如 "myvideo.mp4"(这时这个视频也在bin文件目录下才可以直接这么写)，或者完整路径的

  -r   ：每秒提取的帧数，如上面为每秒1帧，即一张图像
  -q:v ：图片质量
  -f   ：图片格式，上述为image2
image-%d.jpeg：生成图像的文件名，可以加上完整路径，%d会使文件名按整数编号，如上述生成图像为image-1.jpeg, image-2.jpeg, ...

还有其他参数：
  -t      ：持续时间，如-t 4表示持续4s
  -ss     ：起始时间，如-ss 01:30:14，从01:30:14开始
  -vframes：指定抽取的帧数，如-vframes 120，指定抽取120张
  -s      ：格式大小，如-s 640x360
  -y      ：覆盖，直接使用
```


ffmpeg使用：
https://blog.csdn.net/qq_43057180/article/details/105676230

youtube downloader online: https://yt1s.com/en17


