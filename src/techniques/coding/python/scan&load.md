---
#cover: /assets/images/unisa.jpg
title: Scan and Load Dynamically
date: 2024-01-20
author: Haiyue
icon: circle-dot
category:
  - python
  - scraping
star: false
sticky: false
---

`__init__.py`
``` python
from .base import base
import os
import importlib.util
import sys
import inspect
import threading
import copy

class class_loader:
    _instance_lock = threading.Lock()
    def __init__(self):
        if hasattr(self, '_tag_'):
            return
        self._tag_ = dict()
        self.__load__()
    
    def __load__(self):
        ret = dict()
        filepath, _ = os.path.split(__file__)
        _, module_name = os.path.split(filepath)
        
        files = filter(lambda x: x.endswith('.py'), os.listdir(filepath))
        files = filter(lambda x: not x.startswith('__'), files)
        files = filter(lambda x: not x.startswith('base'), files)
        #print(list(files))
        for f in files:
            fullpath = os.path.join(filepath, f)
            name, __ = os.path.splitext(f)
            spec = importlib.util.spec_from_file_location(f'{module_name}.{name}', fullpath)
            mo = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(mo)
            
            # get all classes in module mo
            clses = filter(lambda x: inspect.isclass(getattr(mo, x)), dir(mo))
            # Get all classes derived from base
            clses = filter(lambda x: issubclass(getattr(mo, x), base) and not x=='base', clses)
            # Get all classes has class attribute TASK_NAME
            clses = filter(lambda x: hasattr(getattr(mo, x), 'TASK_NAME'), clses)
            
            for cls in clses:
                class_type = getattr(mo, cls)
                ret[class_type.TASK_NAME] = class_type
        self._tag_.update(ret)
    
    def getTaskMap(self):
        return copy.copy(self._tag_)
    
    #Single Class
    def __new__(cls, *args, **kwargs):
        if not hasattr(eval(cls.__name__), "_instance"):
            with eval(cls.__name__)._instance_lock:
                if not hasattr(eval(cls.__name__), "_instance"):
                    eval(cls.__name__)._instance = object.__new__(cls)
        return eval(cls.__name__)._instance
    
    def __del__(self):
        pass


def getTaskIns(task_name):
    tasks = class_loader().getTaskMap()
    if tasks.__contains__(task_name):
        return tasks[task_name]()
    return None
        
        
        
ins = getTaskIns('Task-A')
ins.say()
```


`a.py`
``` python
from .base import base
dd = 0
def aaa():
    pass
class A(base):
    TASK_NAME = 'Task-A'
    def __init__(self):
        self.__name__ = 'A'
        
    def say(self):
        print(f'say class {self.__name__}')
        

class D(base):
    TASK_NAME = 'Task-D'
    def __init__(self):
        self.__name__ = 'D'
        
    def say(self):
        print(f'say class {self.__name__}')


class E(base):
    TASK_NAME = 'Task-D'
    def __init__(self):
        self.__name__ = 'E'
        
    def say(self):
        print(f'say class {self.__name__}')
```


`b.py`
``` python
from .base import base

class B(base):
    TASK_NAME = 'Task-B'
    def __init__(self):
        self.__name__ = 'B'
        
    def say(self):
        print(f'say class {self.__name__}')
```
