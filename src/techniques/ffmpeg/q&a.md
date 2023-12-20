---
title: Use cases
index: true
icon: "/assets/icon/common/manual.svg"
author: Haiyue
date: 2023-12-19
category:
  - ffmpeg
---
## Split mp3 into multiparts

``` bash
# segment_time 
ffmpeg -i somefile.mp3 -f segment -segment_time 3 -c copy out%03d.mp3
```
