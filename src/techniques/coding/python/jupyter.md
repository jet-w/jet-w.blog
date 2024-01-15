---
#cover: /assets/images/unisa.jpg
title: Jupyter
date: 2024-01-06
author: Haiyue
icon: circle-dot
category:
  - python
  - jupyter
star: false
sticky: false
---

## Install Jupyter

`pip install jupyter`


## Start notebook

`jupyter notebook`


### Specify the startup folder 
1. Generate config
    run `jupyter notebook --generate-config` in cmd, generate config file `~\.jupyter\jupyter_notebook_config.py`
2. Search `#c.NotebookApp.notebook_dir = ''` in this file
3. Replace with `c.NotebookApp.notebook_dir = '{Folder path}'`


## Allow remote access
assign the listen ip to `c.NotebookApp.ip`
assign the listen port to `c.NotebookApp.port`
assign password to `c.NotebookApp.password`
<span style="visibility:hidden">sha1:d3b4cbf9f88c:f4156beb7f9dbf0e3bcf64d1a9ebe13ae116570c</span>