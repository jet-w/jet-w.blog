---
title: Google Colab Techniques
index: true
icon: laptop-code
author: Haiyue
category:
  - google
---


## How to make libraries on Google Drive
### 01. List the previous packages
``` python
!ls /usr/local/lib/python3.10/dist-packages/
```
### 02. Install the necessary packages
``` python
!pip install KeyBERT
!pip install keybert[flair]
!pip install keybert[gensim]
!pip install keybert[spacy]
!pip install keybert[use]
```

### 03. Find the new packages (Using KeyBERT as example)
``` python
!ls /usr/local/lib/python3.10/dist-packages/
```
Compare with result with step 1, and find the different items.

### 04. Zip packages
``` python
!zip -r sample_data/keybert.zip /usr/local/lib/python3.10/dist-packages/wikipediaapi     \
/usr/local/lib/python3.10/dist-packages/Wikipedia_API-0.6.0.dist-info
```
::: info
copy the file to google drive directly.
``` bash
zip -r palm.zip pylibs
cp palm.zip /content/drive/MyDrive/python_pkg
```
:::
### 05. Downlaod 
![Alt text](/data/techniques/google_colab/download.png)

### 06. Upload to Google Drive

### 07. Mount Google Drive
![Alt text](/data/techniques/google_colab/mount_google_drive.png)
### 08. Using the libraries

## How to install packages into specified location
### 1. Modify the location of package location
``` python
!mkdir /content/pylibs

with open('/etc/pip.conf', 'w') as fw:
  fw.write(
"""
[global]
log = /var/log/pip.log
# No need to spam users between the time a `pip` release is
# made and the time it shows up in a build.
disable-pip-version-check = True
target=/content/pylibs

[list]
# We set this to avoid warnings about upcoming format deprecations.
format = columns
""")
```

### 2. install packages you need. (all the packages will be installed into the new location)
### 3. Add the new path into search path
``` python
import sys
sys.path.append('/content/pylibs')
```

### 4. You could use the packages like usually.