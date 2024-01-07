---
#cover: /assets/images/unisa.jpg
title: Pip configuration
date: 2023-10-29
author: Haiyue
icon: circle-dot
category:
  - python
  - pip
star: false
sticky: false
---

## How to change default installation location

[pip documentation](https://pip.pypa.io/en/stable/topics/configuration/)


## pip config file.
``` ini
[global]
target=C:\Users\Bob\Desktop
```


## Pip install packages from github


``` bash
# For HTTP
pip install git+https://bitbucket.org/<project_owner>/<project_name>

# For SSH
pip install git+ssh://git@bitbucket.org/<project_owner>/<project_name>.git/

#For Local Git Repository
pip install git+file///path/to/your/git/project/
```

