---
title: 03. Descriptive Analytics (W3)
index: true
icon: circle-dot
author: Haiyue
date: 2024-03-22
category:
  - unisa
---
<span style="color:orange;font-weight:bold;font-size: 25px">Market Segmentation</span>


## Market segmentation
* Segmentation
    - Males and females of different shapes and sizes, children – clothing, shoes
    - Climate or cultural differences
* Targeting or Positioning
    - Target some distinctive segment
    - Position your company as belonging or appealing to some segment
* Examples
    - Peroni Beer – Italian beer 
    - Italian pizza 

## How might researcher choose to segment?
Measurable, Durable, Accessible, Different, Substantial
| Segmentation base/variable | Examples |
| -- | -- |
| Demographics | Age, gender, income, occupation, education, family size, geography|
| Psychographics | Attitudes, opinions, activities, personality, lifestyle, interests, values |
| Behavioural | Usage rate, main brand, media used|
| Other | Occasion/situation, benefits sought, media habits |

## Database-driven targeting
* Recency, Frequency, and Monetary value (RFM)
* Existing customers base VS new customers
* Heavy VS Light customers

## Methods for segmentation
* Business rules
    * Arbitrary criteria from demographics, psychographics and/or behavior
    * Arbitrary quantile /threshold membership from above characteristics
* Clustering
    * Unsupervised methods of data analysis


## Review Clustering
**Unsupervised classification**
1. Choose meaningful variables 
1. Select a measure of a distance or similarity/dissimilarity
1. Maximize between group distance and minimize within group distance
1. Interpret resulted clusters

## Selection of variables
Your variables:
* are meaningful for the analysis objective
* are (relatively) independent
* are limited in number
* are numerical (one hot encoding for categorical)
* have low kurtosis and skewness statistics (at least in the training set)


## One-hot encoding
``` R
customers <- data.frame(
    id=c(1, 2, 3, 4),  
    gender=c('M', 'M', 'M', 'F'), 
    mood=c('happy’, 'sad', 'happy’, 'sad')
)
customers


library(data.table)
library(mltools)

customers <- one_hot(as.data.table(customers))
customers
```

## Measure of distance
* Manhattan, Euclidian, Minkowski distance: $D(X,Y) = (\displaystyle\sum_{i=1}^{n}|x_i-y_i|^p)^{\frac{1}{p}}$
* Cosine distance: $similarity=cos(\theta)=\frac{A\cdot B}{\lVert A\rVert\lVert B\rVert}=\frac{\sum_{i=1}^{n}A_iB_i}{\sqrt{\sum_{i=1}^nA_i^2}\sqrt{\sum_{i=1}^nB_i^2}}$
* Jaccard distance: $J(A, B) = \frac{A\cap B}{A\cup B}=\frac{|A\cap B|}{|A|+|B|-|A\cap B|}$

## Clustering types and algorithms
* Hierarchical clustering (AGNES, DIANA)
* Partition-based clustering ([k-Means](https://www.naftaliharris.com/blog/visualizing-k-means-clustering), k-Medoids)
* Mean-shift clustering 
* Density-Based Spatial Clustering of Applications with Noise ([DBSCAN](https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/))
* Expectation–Maximization (EM) Clustering

slides 21

## Reference
[Tim's slides of Week 2](https://lo.unisa.edu.au/pluginfile.php/4493649/mod_resource/content/0/week_03%20Market%20Segmentation.pptx)