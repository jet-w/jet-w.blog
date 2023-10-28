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

### 05. Downlaod 
![Alt text](/data/techniques/google_colab/download.png)
### 06. Upload to Google Drive

### 07. Mount Google Drive
![Alt text](/data/techniques/google_colab/mount_google_drive.png)
### 08. Using the libraries




