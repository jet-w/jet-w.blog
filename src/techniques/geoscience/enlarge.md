---
#cover: /assets/images/unisa.jpg
title: AI Super Resoluction
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


::: details Single File to Super Resolution for Tiff

`conf.py`
``` python 
import environ
import os


## load environment file
environ.Env.read_env("base.env")

## load GDAL DLL path
env = environ.Env()
os.add_dll_directory(env('GDAL_DLL', default=r'D:\tools\anaconda3-2023\Library\bin'))


def init():
    ## load environment file
    environ.Env.read_env("base.env")
    ## load GDAL DLL path
    env = environ.Env()
    os.add_dll_directory(env('GDAL_DLL', default=r'D:\tools\anaconda3-2023\Library\bin'))
```

` enlarge.py`
``` python
import os
from conf import *
init()
from osgeo import gdal
from PIL import Image
import numpy as np
import math
from diffusers import LDMSuperResolutionPipeline
import torch
import threading
from threads import *
import copy
import json
from multiprocessing import Process, Pipe
from http_pool.http_pools import Pool
pipeline = None

device = "cuda" if torch.cuda.is_available() else "cpu"
model_id = "CompVis/ldm-super-resolution-4x-openimages"
pipeline = LDMSuperResolutionPipeline.from_pretrained(model_id)
pipeline = pipeline.to(device)

def getPipeline():
    #if None is not pipeline:
    #    return pipeline
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model_id = "CompVis/ldm-super-resolution-4x-openimages"
    pipeline = LDMSuperResolutionPipeline.from_pretrained(model_id)
    pipeline = pipeline.to(device)
    return pipeline

def superResolution(pipe, img):
    Image.frombytes(img)
    enlarge = pipeline(img)
    pipe.send(enlarge)
    print('*****************************************************')


class TiffSuperResoluction:
    def __init__(self, img_path, thread_count = 1):
        self.__img_path__ = img_path
        self.__x_idx__ = 0
        self.__y_idx__ = 0
        self.__tile_size__ = 256
        self.__init_tif__()
        self.__pipeline = getPipeline()
        self.__tile_list__ = list()
        self.__locker__ = threading.Lock()
        self.__read_locker__ = threading.Lock()
        self.__thread_count__ = thread_count
  
    def __init_tif__(self):
        # Read Source file
        self.__ds__ = gdal.Open(self.__img_path__, gdal.GA_ReadOnly)
        if self.__ds__ is None:
            print(f"Could not open image file {self.__img_path__}")
            return None
        trans = copy.copy(list(self.__ds__.GetGeoTransform()))
        trans[1]/=4
        trans[5]/=4
        
        ## Create Output file
        driver = gdal.GetDriverByName("GTiff")
        if os.path.exists(self.__get_enlarge_file__()):
            self.__ret_ds__ = gdal.Open(self.__get_enlarge_file__(), gdal.GA_Update)
        else:
            self.__ret_ds__ = driver.Create(
                self.__get_enlarge_file__(),
                self.__get_width__()*4,
                self.__get_height__()*4,
                self.__get_band_count__(), 
                gdal.GDT_Byte
            )
        self.__ret_ds__.SetGeoTransform(tuple(trans))
    
    def __get_json_file__(self):
        path, _ = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge.json"
    
    def __get_log_file__(self):
        path, _ = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge.log"
    
    def __get_enlarge_file__(self):
        path, ext = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge{ext}"

    def __get_maxx__(self):
        return math.ceil(self.__ds__.RasterXSize/self.__tile_size__)
    
    def __get_maxy__(self):
        return math.ceil(self.__ds__.RasterYSize/self.__tile_size__)
    
    def __get_width__(self):
       return self.__ds__.RasterXSize
    
    def __get_height__(self):
       return self.__ds__.RasterYSize
    
    def __get_band_count__(self):
       return self.__ds__.RasterCount
    
    def __super_resolution__(self, img):
        ret = None
        try:
            ret = self.__pipeline(img, num_inference_steps=100, eta=1).images[0]
        except Exception as e:
            print('error happened')
            print(e)
        finally:
           return ret
    
    def write_process(self, x_idx, y_idx):
        with open(self.__get_log_file__(), 'w') as fw:
            fw.write(f'{x_idx} {y_idx}')
    
    def write_tile_list(self, tile_list):
        with open(self.__get_json_file__(), 'w') as fw:
            fw.write(json.dumps(tile_list))

    def get_process(self):
        x_idx = 0
        y_idx = 0
        if os.path.exists(self.__get_log_file__()):
            with open(self.__get_log_file__(), 'r') as fr:
                line = fr.readline()
                x_idx, y_idx = line.split(" ")
                x_idx = int(x_idx)
                y_idx = int(y_idx)
        return (x_idx, y_idx)
    
    def __calc_tile_list__(self):
        for x_idx in range(self.__x_idx__,self.__get_maxx__()):
            for y_idx in range(self.__y_idx__, math.ceil(self.__get_maxy__())):
                self.__tile_list__.append({"x": x_idx, "y": y_idx, "t": self.__tile_size__})
    
    def __tile__(self, x_idx, y_idx, tile_size):
        temp = self.__get_width__() - x_idx * tile_size
        width = tile_size if temp >= tile_size else temp
        
        temp = self.__get_height__() - y_idx * tile_size
        height = tile_size if temp >= tile_size else temp
        
        x_offset = x_idx * tile_size
        y_offset = y_idx * tile_size
        
        band1 = None
        band2 = None
        band3 = None
        with self.__read_locker__:
            band1 = self.__ds__.GetRasterBand(1).ReadAsArray(x_offset, y_offset, width, height)
            band2 = self.__ds__.GetRasterBand(2).ReadAsArray(x_offset, y_offset, width, height)
            band3 = self.__ds__.GetRasterBand(3).ReadAsArray(x_offset, y_offset, width, height)
        
        image = Image.fromarray(np.stack((band1, band2, band3), axis=-1))
        return image
    

    def __get_tile__(self):
        for x_idx in range(self.__x_idx__,self.__get_maxx__()):
            temp = self.__get_width__() - x_idx * self.__tile_size__
            width = self.__tile_size__ if temp >= self.__tile_size__ else temp
            for y_idx in range(self.__y_idx__, math.ceil(self.__get_maxy__())):
                temp = self.__get_height__() - y_idx * self.__tile_size__
                height = self.__tile_size__ if temp >= self.__tile_size__ else temp
                
                x_offset = x_idx * self.__tile_size__
                y_offset = y_idx * self.__tile_size__
                
                band1 = self.__ds__.GetRasterBand(1).ReadAsArray(x_offset, y_offset, width, height)
                band2 = self.__ds__.GetRasterBand(2).ReadAsArray(x_offset, y_offset, width, height)
                band3 = self.__ds__.GetRasterBand(3).ReadAsArray(x_offset, y_offset, width, height)
                
                image = Image.fromarray(np.stack((band1, band2, band3), axis=-1))
                yield x_idx, y_idx, image
    
    def __write__(self, x_idx, y_idx, enlarge_tile):
        array = np.array(enlarge_tile)
        for i in range(array.shape[2]):
            self.__ret_ds__.GetRasterBand(i+1).WriteArray(array[:,:,i], x_idx*self.__tile_size__*4, y_idx*self.__tile_size__*4)

    def __del__(self):
        self.__ds__ = None
        self.__ret_ds__ = None

    #def run(self, x_idx = 0, y_idx = 0, tile_size = 256):
    #    self.__x_idx__ = x_idx
    #    self.__y_idx__ = y_idx
    #    self.__tile_size__ = tile_size
    #    if os.path.exists(self.__get_log_file__()):
    #        self.__x_idx__, self.__y_idx__ = self.get_process()
    #    for x_idx, y_idx, tile in self.__get_tile__():
    #        print(self.__img_path__, x_idx, y_idx, "/", self.__get_maxx__(), self.__get_maxy__())
    #        self.write_process(x_idx, y_idx)
    #        enlarge = self.__super_resolution__(tile)
    #        if enlarge:
    #            self.__write__(x_idx, y_idx, enlarge)
    #    if os.path.exists(self.__get_log_file__()):
    #        os.rmdir(self.__get_log_file__())

    def write_json(self):
        with open(self.__get_json_file__(), 'w') as fw:
            fw.write(json.dumps(self.__tile_list__))

    def read_json(self):
        with open(self.__get_json_file__(), 'r') as fr:
            self.__tile_list__  = json.loads(fr.read())


    def process_tile(self, tile_info):
        print('processing')
        x_idx = tile_info['x']
        y_idx = tile_info['y']
        tile_size = tile_info['t']

        
        parent_conn, child_conn = Pipe()
        p1 = Process(target=superResolution, args=(parent_conn, self.__tile__(x_idx, y_idx, tile_size)))
        p1.start()
        ret = child_conn.recv()

        with open(f'test/{x_idx}-{y_idx}.jpg', wb) as fw:
            fw.write(ret)

        #try:
        #    enlarge = self.__super_resolution__(self.__tile__(x_idx, y_idx, tile_size))
        #    with self.__locker__:
        #        if enlarge:
        #            self.__write__(x_idx, y_idx, enlarge)
        #            self.write_json()
        #        else:
        #            self.__tile_list__.append(tile_info)
        #except Exception as e:
        #    print(e)
        #    print('processing exception')
        #    self.__tile_list__.append(tile_info)


    
    def thread_run(self, tile_size = 256):
        self.__tile_size__ = tile_size

        if not os.path.exists(self.__get_json_file__()):
            self.__calc_tile_list__()
            self.write_json()
        else:
            self.read_json()
        
        thread_obj = thread_util(self.__thread_count__)

        while len(self.__tile_list__) > 0:
            i = self.__tile_list__.pop()
            print(self.__img_path__, i['x'], i['y'], "/", self.__get_maxx__(), self.__get_maxy__())
            thread_obj.process(self.process_tile, (i,), json.dumps(i))
        thread_obj.wait()
    
    def run(self, tile_size = 256):
        self.__tile_size__ = tile_size

        if not os.path.exists(self.__get_json_file__()):
            self.__calc_tile_list__()
            self.write_json()
        else:
            self.read_json()

        while len(self.__tile_list__) > 0:
            i = self.__tile_list__.pop()
            self.process_tile(i)
#base_path = r'D:\BaiduNetdiskDownload\SuperResolution'
base_path = r'E:\BaiduNetdiskDownload\FirstBatch'
tif_list = map(
    lambda x: os.path.join(base_path, x), 
    filter(lambda x: x.endswith('.tif'), os.listdir(base_path))
)

#for tif in tif_list:
#    if tif.lower().endswith('-enlarge.tif'):
#        continue
#    try:
#        TiffSuperResoluction(tif).run()
#        #TiffSuperResoluction(tif).run(tile_size=512)
#    except Exception as e:
#        print("Exception")
#    else:
#        pass


for tif in tif_list:
    if tif.lower().endswith('-enlarge.tif'):
        continue
    try:
        TiffSuperResoluction(tif, 2).thread_run()
        #TiffSuperResoluction(tif).run()
    except Exception as e:
        print("Exception")
        print(e)
    else:
        pass

```
:::

## Client & Server
::: details Server
``` python
import web
import sys
sys.path.append('.')

import torch
from diffusers import LDMSuperResolutionPipeline
from PIL import Image
import io

pipeline = None

device = "cuda" if torch.cuda.is_available() else "cpu"
model_id = "CompVis/ldm-super-resolution-4x-openimages"
pipeline = LDMSuperResolutionPipeline.from_pretrained(model_id)
pipeline = pipeline.to(device)

urls = (
    '/enlarge', 'SuperResolution',
)
app = web.application(urls, globals())

class SuperResolution:
    def __init__(self):
        pass

    def POST(self):
        data = web.data()
        if data:
            stream = io.BytesIO(data)
            img = Image.open(stream)
            
            ret_img = pipeline(img)['images'][0]

            # Create a BytesIO object
            buffer = io.BytesIO()
            print(type(ret_img))
            print(dir(ret_img))
            # Save the image to the BytesIO object in a specific format (e.g., JPEG)
            ret_img.save(buffer, format='PNG')

            # Get the bytes from the BytesIO object
            return  buffer.getvalue()

if __name__=="__main__":
    web.internalerror = web.debugerror
    app.run()
```
:::

::: details Client
`http_pool.http_pools.py`
``` python
import subprocess
import requests as req
import threading
import psutil
import time
import io
from PIL import Image

class Pool:
    _instance_lock = threading.Lock()
    def __init__(self, ports):
        if hasattr(self, '__is_instance__'):
            return
        self.__is_init_server__ = False
        self.__process_list__ = []
        self.__locker__ = threading.Lock()
        self.commands = []
        self.__ports__ = ports
        #for p in ports:
        #    self.commands.append(['python', 'http_pool/http_worker.py', f'{p}'])
        self.base_url = "http://127.0.0.1"
        self.uri = "/enlarge"

    def __init_server__(self):
        if not self.__is_init_server__:
            self.__is_init_server__ = True
            for command in self.commands:
                self.__process_list__.append(subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, text=True))
            time.sleep(20)
    
    def __get_url__(self, port):
        return f"{self.base_url}:{port}{self.uri}"
    
    def __del__(self):
        for i in self.__process_list__:
            if None is i.poll():
                parent = psutil.Process(i.pid) 
                for child in parent.children(recursive=True):
                    child.terminate()
                i.terminate()

    #def __new__(cls, *args, **kwargs):
    #    if not hasattr(Pool, "_instance"):
    #        with Pool._instance_lock:
    #            if not hasattr(Pool, "_instance"):
    #                Pool._instance = object.__new__(cls)
    #    return Pool._instance
    
    def __get_process__(self):
        with self.__locker__:
            #return self.__process_list__.pop()
            return self.__ports__.pop()
    
    def __revoke_process__(self, item):
        with self.__locker__:
            self.__ports__.append(item)
            #self.__process_list__.append(item)

    def super_resolution(self, img):
        #self.__init_server__()
        #process = self.__get_process__()
        port = self.__get_process__()
        resp = None
        ret = None
        try:
            
            # Create a BytesIO object
            buffer = io.BytesIO()
            # Save the image to the BytesIO object in a specific format (e.g., JPEG)
            img.save(buffer, format='PNG')
            #resp = req.post(self.__get_url__(process.args[-1]), img, timeout=600)
            resp = req.post(self.__get_url__(port), buffer.getvalue(), timeout=600)
            buffer = io.BytesIO(resp.content)
            # Open the image using PIL.Image
            ret = Image.open(buffer)
        except Exception as e:
            print(e)
        finally:
            self.__revoke_process__(port)
        if ret:
            return ret
```

`enlarge.py`
``` python
import os
from conf import *
init()
from osgeo import gdal
from PIL import Image
import numpy as np
import math
import torch
import threading
from threads import *
import copy
import json
import time
from http_pool.http_pools import Pool

class TiffSuperResoluction:
    def __init__(self, img_path, ports):
        self.__init_tif__(img_path)
        self.__pipeline = None # getPipeline()
        self.__thread_count__ = len(ports)
        print(ports)
        self.__pool__ = Pool(copy.copy(ports))
        #pool = Pool(4)
        #pool.
  
    def __init_tif__(self, img_path):
        self.__img_path__ = img_path
        self.__x_idx__ = 0
        self.__y_idx__ = 0
        self.__tile_size__ = 256
        self.__tile_list__ = list()
        self.__write_locker__ = threading.Lock()
        self.__read_locker__ = threading.Lock()
        # Read Source file
        self.__ds__ = gdal.Open(self.__img_path__, gdal.GA_ReadOnly)
        if self.__ds__ is None:
            print(f"Could not open image file {self.__img_path__}")
            return None
        
        trans = copy.copy(list(self.__ds__.GetGeoTransform()))
        trans[1]/=4
        trans[5]/=4
        
        ## Create Output file
        driver = gdal.GetDriverByName("GTiff")
        if os.path.exists(self.__get_enlarge_file__()):
            self.__ret_ds__ = gdal.Open(self.__get_enlarge_file__(), gdal.GA_Update)
        else:
            self.__ret_ds__ = driver.Create(
                self.__get_enlarge_file__(),
                self.__get_width__()*4,
                self.__get_height__()*4,
                self.__get_band_count__(), 
                gdal.GDT_Byte
            )

        if self.__ret_ds__:
            self.__ret_ds__.SetGeoTransform(tuple(trans))
            self.__ret_ds__.SetProjection(self.__ds__.GetProjection())
    
    def __get_json_file__(self):
        path, _ = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge.json"
    
    def __get_log_file__(self):
        path, _ = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge.log"
    
    def __get_enlarge_file__(self):
        path, ext = os.path.splitext(self.__img_path__)
        return f"{path}-enlarge{ext}"

    def __get_maxx__(self):
        return math.ceil(self.__ds__.RasterXSize/self.__tile_size__)
    
    def __get_maxy__(self):
        return math.ceil(self.__ds__.RasterYSize/self.__tile_size__)
    
    def __get_width__(self):
       return self.__ds__.RasterXSize
    
    def __get_height__(self):
       return self.__ds__.RasterYSize
    
    def __get_band_count__(self):
       return self.__ds__.RasterCount
    
    def __super_resolution__(self, img):
        return self.__pool__.super_resolution(img)
        #ret = None
        #print('-----------------')
        #try:
        #    ret = self.__pipeline(img, num_inference_steps=100, eta=1).images[0]
        #except Exception as e:
        #    print('super resolution error happened')
        #    print(e)
        #finally:
        #   return ret
    
    def write_process(self, x_idx, y_idx):
        with open(self.__get_log_file__(), 'w') as fw:
            fw.write(f'{x_idx} {y_idx}')
    
    def write_tile_list(self, tile_list):
        with open(self.__get_json_file__(), 'w') as fw:
            fw.write(json.dumps(tile_list))

    def get_process(self):
        x_idx = 0
        y_idx = 0
        if os.path.exists(self.__get_log_file__()):
            with open(self.__get_log_file__(), 'r') as fr:
                line = fr.readline()
                x_idx, y_idx = line.split(" ")
                x_idx = int(x_idx)
                y_idx = int(y_idx)
        return (x_idx, y_idx)
    
    def __calc_tile_list__(self):
        for x_idx in range(self.__x_idx__,self.__get_maxx__()):
            for y_idx in range(self.__y_idx__, math.ceil(self.__get_maxy__())):
                self.__tile_list__.append({"x": x_idx, "y": y_idx, "t": self.__tile_size__})
    
    def __tile__(self, x_idx, y_idx, tile_size):
        temp = self.__get_width__() - x_idx * tile_size
        width = tile_size if temp >= tile_size else temp
        
        temp = self.__get_height__() - y_idx * tile_size
        height = tile_size if temp >= tile_size else temp
        
        x_offset = x_idx * tile_size
        y_offset = y_idx * tile_size
        
        band1 = None
        band2 = None
        band3 = None
        with self.__read_locker__:
            band1 = self.__ds__.GetRasterBand(1).ReadAsArray(x_offset, y_offset, width, height)
            band2 = self.__ds__.GetRasterBand(2).ReadAsArray(x_offset, y_offset, width, height)
            band3 = self.__ds__.GetRasterBand(3).ReadAsArray(x_offset, y_offset, width, height)
        
        image = Image.fromarray(np.stack((band1, band2, band3), axis=-1))
        return image
    

    def __get_tile__(self):
        for x_idx in range(self.__x_idx__,self.__get_maxx__()):
            temp = self.__get_width__() - x_idx * self.__tile_size__
            width = self.__tile_size__ if temp >= self.__tile_size__ else temp
            for y_idx in range(self.__y_idx__, math.ceil(self.__get_maxy__())):
                temp = self.__get_height__() - y_idx * self.__tile_size__
                height = self.__tile_size__ if temp >= self.__tile_size__ else temp
                
                x_offset = x_idx * self.__tile_size__
                y_offset = y_idx * self.__tile_size__
                
                band1 = self.__ds__.GetRasterBand(1).ReadAsArray(x_offset, y_offset, width, height)
                band2 = self.__ds__.GetRasterBand(2).ReadAsArray(x_offset, y_offset, width, height)
                band3 = self.__ds__.GetRasterBand(3).ReadAsArray(x_offset, y_offset, width, height)
                
                image = Image.fromarray(np.stack((band1, band2, band3), axis=-1))
                yield x_idx, y_idx, image
    
    def __write__(self, x_idx, y_idx, enlarge_tile):
        array = np.array(enlarge_tile)
        for i in range(array.shape[2]):
            self.__ret_ds__.GetRasterBand(i+1).WriteArray(array[:,:,i], x_idx*self.__tile_size__*4, y_idx*self.__tile_size__*4)

    def __del__(self):
        self.__ds__ = None
        self.__ret_ds__ = None

    def write_json(self):
        with open(self.__get_json_file__(), 'w') as fw:
            fw.write(json.dumps(self.__tile_list__))

    def read_json(self):
        with open(self.__get_json_file__(), 'r') as fr:
            self.__tile_list__  = json.loads(fr.read())

    def process_tile(self, tile_info):
        print('processing')
        x_idx = tile_info['x']
        y_idx = tile_info['y']
        tile_size = tile_info['t']
        
        try:
            enlarge = self.__super_resolution__(self.__tile__(x_idx, y_idx, tile_size))
            with self.__write_locker__:
                if enlarge:
                    self.__write__(x_idx, y_idx, enlarge)
                    self.write_json()
                else:
                    self.__tile_list__.append(tile_info)
        #except Exception as e:
        #    print(e)
        #    print('processing exception###########')
        #    self.__tile_list__.append(tile_info)
        finally:
            pass

    def thread_run(self, tile_size = 256):
        self.__tile_size__ = tile_size

        if not os.path.exists(self.__get_json_file__()):
            self.__calc_tile_list__()
            self.write_json()
        else:
            self.read_json()

        thread_obj = thread_util(self.__thread_count__)
        while len(self.__tile_list__) > 0:
            i = self.__tile_list__.pop()
            print(self.__img_path__, i['x'], i['y'], "/", self.__get_maxx__(), self.__get_maxy__())
            thread_obj.process(self.process_tile, (i,), json.dumps(i))
        thread_obj.wait()
    
    def run(self, tile_size = 256):
        self.__tile_size__ = tile_size

        if not os.path.exists(self.__get_json_file__()):
            self.__calc_tile_list__()
            self.write_json()
        else:
            self.read_json()

        while len(self.__tile_list__) > 0:
            i = self.__tile_list__.pop()
            self.process_tile(i)

#base_path = r'D:\BaiduNetdiskDownload\SuperResolution'
#base_path = r'E:\BaiduNetdiskDownload\FirstBatch'
base_path = r'E:\BaiduNetdiskDownload\test'
#base_path = r'D:\BaiduNetdiskDownload\MultiTest'
tif_list = map(
    lambda x: os.path.join(base_path, x), 
    filter(lambda x: x.endswith('.tif'), os.listdir(base_path))
)

for tif in tif_list:
    print(tif)
    if not tif.lower().endswith('-enlarge.tif'):
        print(tif)
        #TiffSuperResoluction(tif, [9000, 9002, 9003, 9004, 9005]).thread_run()
        TiffSuperResoluction(tif, [9000]).thread_run()
        break
```


`conf.py`
``` python
import environ
import os


## load environment file
environ.Env.read_env("base.env")

## load GDAL DLL path
env = environ.Env()
os.add_dll_directory(env('GDAL_DLL', default=r'D:\tools\anaconda3-2023\Library\bin'))


def init():
    ## load environment file
    environ.Env.read_env("base.env")
    ## load GDAL DLL path
    env = environ.Env()
    os.add_dll_directory(env('GDAL_DLL', default=r'D:\tools\anaconda3-2023\Library\bin'))
```
:::