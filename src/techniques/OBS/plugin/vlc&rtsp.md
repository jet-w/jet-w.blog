---
title: vlc & rtsp
icon: circle-dot
date: 2024-01-15
category:
  - obs
star: false
sticky: false
---

## Step 1: Install rtsp on android
`RTSP Camera Server`

## Step 2: Start rtsp stream server

## Step 3: download playlist from phone
url for download: `http://{phone_ip}/playlist.m3u`

Two types of file format
XML: `rtsp.xspf`
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<playlist xmlns="http://xspf.org/ns/0/" xmlns:vlc="http://www.videolan.org/vlc/playlist/ns/0/" version="1">
	<title>PlayList</title>
	<trackList>
		<track>
			<location>rtsp://192.168.31.254:555/live</location>
			<extension application="http://www.videolan.org/vlc/playlist/0">
				<vlc:id>0</vlc:id>
				<vlc:option>network-caching=100</vlc:option>
			</extension>
		</track>
	</trackList>
	<extension application="http://www.videolan.org/vlc/playlist/0">
		<vlc:item tid="0"/>
	</extension>
</playlist>
```

Plain Text: `rtsp.m3u`
``` txt
#EXTM3U
#PLAYLIST:RTSP Camera Server
#EXTINF:-1, Active camera
rtsp://192.168.31.238:5554/camera
#EXTINF:5, 3/3/22 9:42  959.1 kB
rtsp://192.168.31.238:5554/record220303_0900
#EXTINF:4, 11/14/21 13:50  361.3 kB
rtsp://192.168.31.238:5554/record211114_1300
#EXTINF:7, All records  1.3 MB
rtsp://192.168.31.238:5554/record
#EXTINF:-1, Back camera
rtsp://192.168.31.238:5554/back
#EXTINF:-1, Front camera
rtsp://192.168.31.238:5554/front
```

## Step 4: Add VLC Source on OBS
Select the media file from the previous step

## Step 5: You can see the result from OBS