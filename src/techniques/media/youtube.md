---
title: YouTube
index: true
icon: circle-dot
author: Haiyue
category:
  - media
---

[Download online](https://en.savefrom.net/1-youtube-video-downloader-544tK/)

## Download Youtube Locally
``` python
from pytube import YouTube

list_of_videos = ["url_for_video_1", "url_for_video_2"]

for i in list_of_videos:
    video = YouTube(i)
    video.streams.get_by_itag(18).download("folder_name_for_videos")
```