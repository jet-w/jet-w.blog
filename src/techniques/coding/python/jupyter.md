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
