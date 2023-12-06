---
title: GDAL in python
#cover: /assets/images/unisa.jpg
icon: pen-to-square
date: 2023-12-02
category:
  - geoscience
tag:
  - python
  - gdal
star: false
sticky: true
---

How to config the gdal environment for python.

## Method 1: Compile directory
There is lots of problems need to handle. 

## Method 2: Using Conda to install
To install this package run <span style="color:red;font-weight:bold;">one</span> of the following:
``` bash
conda install -c conda-forge gdal
conda install -c "conda-forge/label/TEST" gdal
conda install -c "conda-forge/label/broken" gdal
conda install -c "conda-forge/label/cf201901" gdal
conda install -c "conda-forge/label/cf202003" gdal
conda install -c "conda-forge/label/gcc7" gdal
```

## Method 3: Copy from qgis


## How to load dll directory
``` bash
SET USE_PATH_FOR_GDAL_PYTHON=YES
```
``` python
import os
os.add_dll_directory(r'D:\tools\anaconda3-2023\Library\bin')
```
