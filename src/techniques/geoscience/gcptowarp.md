---
title: Warp a Geotif
#cover: /assets/images/unisa.jpg
icon: circle-dot
date: 2023-07-10
category:
  - geoscience
tag:
  - gdal
  - warp
  - gcp
star: false
sticky: true
---

# How to using gcp to warp a geotif
Normally, the gcps will be used to warp a file, there are two steps to process.
- Step1: Finding the gcps, and using gdal_translate to add them to file
- Step2: Using gdalwarp to warp the geo file



## How to sample 

Normally to sample 10 points from the inner content of data.

``` python
    # get the sample offset
    x_offset = dataset.RasterXSize / (xpt_count + 1)
    y_offset = dataset.RasterYSize / (ypt_count + 1)
    
    # construct the req structure
    idx = 1
    pts = {
        "algorithm":"m2",
        "msg": "",
        "pts":[]
    }
    
    for x in range(1, xpt_count + 1):
        for y in range(1, ypt_count + 1):
            idx += 1
            pts["pts"].append({
                "id"  : idx,
                "xpx" : x_offset * x,
                "ypx" : y_offset * y,
                "orgx": geotransform[0]  + geotransform[1] * x_offset * x,
                "orgy": geotransform[3]  + geotransform[5] * y_offset * y,
            })
```

## How to add gcps to file
Use the gdal tool gdal_translate to add all gcps to geotif.
``` python
    gdaltranslate_cmdline = 'gdal_translate -of GTiff'
    if ret['ret']:
        for pt in ret['pts']:
            gdaltranslate_cmdline = f'{gdaltranslate_cmdline} -gcp {pt["xpx"]} {pt["ypx"]} {pt["transx"]} {pt["transy"]}'
    gdaltranslate_cmdline = f"{gdaltranslate_cmdline} {os.path.abspath(tif)} {os.path.join(path, f'tmp.{filename}')}"
```

## How to using gcp to warp file

using the gdal tool gdalwarp to warp geotif
``` python
gdalwarp_cmdline = 'gdalwarp -r bilinear -order 3 -co COMPRESS=NONE  -t_srs EPSG:4326 '
gdalwarp_cmdline = f"{gdalwarp_cmdline} {os.path.join(path, f'tmp.{filename}')} {os.path.join(path, f'tmp.warp.{filename}')}"
```

## The final result

``` python
from osgeo import gdal
import requests as req
import json
import os

# 横向采样点数量（不采集边缘点）
x_pt_count = 10

# 纵向采样点数量（不采集边缘点）
y_pt_count = 10

url = 'http://192.168.31.194:8081/encrypt/m2'

tif_file = 'historymap.tif'

#
# @desc 使用加密服务对数据进行加密
# @param tif  待加密文件
# @param xpt_count 横向采样点数量
# @param ypt_count 纵向采样点数量
# @param m2_url    加密服务地址
def m2encrypt(tif, xpt_count, ypt_count, m2_url):
    # 读取文件
    dataset = gdal.Open(tif)
    
    # 获取Transform
    geotransform = dataset.GetGeoTransform()
    
    # 获取采样间隔
    x_offset = dataset.RasterXSize / (xpt_count + 1)
    y_offset = dataset.RasterYSize / (ypt_count + 1)
    
    # 关闭数据
    dataset = None
    
    # 构建加密请求参数
    idx = 1
    pts = {
        "algorithm":"m2",
        "msg": "",
        "pts":[]
    }
    
    for x in range(1, xpt_count + 1):
        for y in range(1, ypt_count + 1):
            idx += 1
            pts["pts"].append({
                "id"  : idx,
                "xpx" : x_offset * x,
                "ypx" : y_offset * y,
                "orgx": geotransform[0]  + geotransform[1] * x_offset * x,
                "orgy": geotransform[3]  + geotransform[5] * y_offset * y,
            })
    
    # 加密请求
    resp = req.post(url, {'pts_info': json.dumps(pts)})
    
    # 获取加密结果
    ret = json.loads(resp.text)
    
    # 构建处理脚本对文件本身进行加密
    gdaltranslate_cmdline = 'gdal_translate -of GTiff'
    gdalwarp_cmdline = 'gdalwarp -r bilinear -order 3 -co COMPRESS=NONE  -t_srs EPSG:4326 '

    if ret['ret']:
        for pt in ret['pts']:
            gdaltranslate_cmdline = f'{gdaltranslate_cmdline} -gcp {pt["xpx"]} {pt["ypx"]} {pt["transx"]} {pt["transy"]}'
    path, filename = os.path.split(os.path.abspath(tif))
    
    
    gdaltranslate_cmdline = f"{gdaltranslate_cmdline} {os.path.abspath(tif)} {os.path.join(path, f'tmp.{filename}')}"
    gdalwarp_cmdline = f"{gdalwarp_cmdline} {os.path.join(path, f'tmp.{filename}')} {os.path.join(path, f'tmp.warp.{filename}')}"
    
    return gdaltranslate_cmdline, gdalwarp_cmdline
    
cmdlines = m2encrypt(tif_file, x_pt_count, y_pt_count, url)
print(cmdlines[0])
print(cmdlines[1])
```




