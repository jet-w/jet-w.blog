---
title: File MD5
date: 2024-01-26
author: Haiyue
icon: circle-dot
category:
  - python
  - md5
star: false
sticky: false
---


``` python
import hashlib
import os

def getmd5(filename):
    # Open,close, read file and calculate MD5 on its contents 
    with open(filename, 'rb') as file_to_check:
        # read contents of the file
        data = file_to_check.read()    
        # pipe contents of the file through
        return hashlib.md5(data).hexdigest()

def fsmd5(fpath):
    ret = dict()
    for p, folders, fs in os.walk(fpath):
        for i in fs:
            fullpath = os.path.join(p,i)
            relative_f = fullpath[len(fpath)+1:]
            ret[relative_f] = getmd5(fullpath)
    return ret
```