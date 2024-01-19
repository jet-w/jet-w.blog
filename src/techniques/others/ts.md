---
title: Download TS
index: true
icon: "/assets/icon/common/manual.svg"
author: Haiyue
date: 2023-12-15
category:
  - work
---

## download ts
``` python
import requests as req
import pandas as pd
import cv2

def get_video_resolution(ts_file_path):
    try:
        # Open the TS file
        cap = cv2.VideoCapture(ts_file_path)
        # Get the resolution
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        return width, height
    except Exception as e:
        print(f"Error: {e}")
        return None



uri = 'https://embed-cloudfront.wistia.com/deliveries/731e2344da7f9e5dea577a06ba99a98fc3308213.m3u8/'

df = pd.read_excel(r'C:\Users\Administrator\Mozaik\videos.xlsx', 0)
df = df[df['id'].isnull() == False]
base_path = r'C:\Users\Administrator\Mozaik'

base_url = 'https://embed-cloudfront.wistia.com/deliveries/'

for i in df.index:
    item = df.loc[i]
    idx = 1
    temp = None
    while True:
        fname = f"seg-{idx}-v1-a1.ts"
        idx += 1
        folder = f'{item["Title"]}-{item["subtitle"]}'
        print(folder)
        store_path = os.path.join(base_path, folder)
        if not os.path.exists(store_path):
            os.makedirs(store_path)
        fullname = os.path.join(store_path, fname)
        if os.path.exists(fullname):
            continue
        url = f"{base_url}{item['id']}/{fname}"
        print(url)
        resp = req.get(url)
        if 200 == resp.status_code:
            temp = resp.content
            with open(fullname, 'wb') as fw:
                fw.write(resp.content)
            size = get_video_resolution(fullname)
            if size[0] < 1000:
                os.remove(fullname)
                break
        else:
            break
```