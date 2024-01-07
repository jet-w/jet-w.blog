---
#cover: /assets/images/unisa.jpg
title: Environment
date: 2023-12-03
author: Haiyue
icon: circle-dot
category:
  - python
  - env
star: false
sticky: false
---

## environ-python

``` python
# load environment file
environ.Env.read_env(str(ENV_FILENAME))

# read environment variable
env = environ.Env()
# Load the values in the env file if it exists
env('ENV_FILENAME', default='local.env')
```

``` env
USE_PATH_FOR_GDAL_PYTHON=YES
```


## Virtual Environment
``` bash
python -m venv /path/to/new/virtual/environment
```

