---
#cover: /assets/images/unisa.jpg
title: SingleClass
date: 2023-12-18
author: Haiyue
icon: /assets/icon/common/pool.svg
category:
  - python
  - csv
star: false
sticky: false
---

## Using `__new__`
``` python
import threading

class class_ins:
    _instance_lock = thr0eading.Lock()
    def __init__(self):
        print('__init__')
        if hasattr(self, 'tile_dbs'):
            return
        print('__init__ later')
        self.tile_dbs = dict()
    #Single Class
    def __new__(cls, *args, **kwargs):
        print(cls, args, kwargs)
        print(type(cls))
        print(cls.__name__)
        if not hasattr(eval(cls.__name__), "_instance"):
            with eval(cls.__name__)._instance_lock:
                if not hasattr(eval(cls.__name__), "_instance"):
                    eval(cls.__name__)._instance = object.__new__(cls)
        return eval(cls.__name__)._instance
    def __del__(self):
        pass

a = class_ins()
```


## Using `__metaclass__`
``` python
```