---
title: 03. Market Segmentation (W3)
index: true
icon: circle-dot
author: Haiyue
date: 2024-03-23
category:
  - unisa
---
<span style="color:orange;font-weight:bold;font-size: 25px">Descriptive Analytics - Market Segmentation</span>


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

### How might researcher choose to segment?
Measurable, Durable, Accessible, Different, Substantial
| Segmentation base/variable | Examples |
| -- | -- |
| Demographics | Age, gender, income, occupation, education, family size, geography|
| Psychographics | Attitudes, opinions, activities, personality, lifestyle, interests, values |
| Behavioural | Usage rate, main brand, media used|
| Other | Occasion/situation, benefits sought, media habits |

### Database-driven targeting
* Recency, Frequency, and Monetary value (RFM)
* Existing customers base VS new customers
* Heavy VS Light customers

### Methods for segmentation
* Business rules
    * Arbitrary criteria from demographics, psychographics and/or behavior
    * Arbitrary quantile /threshold membership from above characteristics
* Clustering
    * Unsupervised methods of data analysis


## Review Clustering
**Unsupervised classification**
1. Choose <span style="color:orange">meaningful</span> variables
1. Select a <span style="color:orange">measure of a distance</span> or similarity/dissimilarity
1. <span style="color:orange">Maximize</span> between group distance and <span style="color:orange">minimize</span> within group distance
1. <span style="color:orange">Interpret resulted clusters</span>

### Selection of variables
Your variables:
* are <span style="color:orange">meaningful</span> for the <span style="color:orange">analysis objective</span>
* are (relatively) <span style="color:orange">independent</span>
* are <span style="color:orange">limited</span> in number
* are <span style="color:orange">numerical</span> (<span style="color:orange">one hot encoding</span> for categorical)
* have <span style="color:orange">low kurtosis and skewness</span> statistics (at least in the training set)


### One-hot encoding
``` R
library(data.table)
library(mltools)
customers <- data.frame(
    id=c(1, 2, 3, 4),  
    gender=c('M', 'M', 'M', 'F'), 
    mood=c('happy’, 'sad', 'happy’, 'sad')
)

customers <- one_hot(as.data.table(customers))
customers
```

### Measure of distance
* Manhattan, Euclidian, Minkowski distance: $D(X,Y) = (\displaystyle\sum_{i=1}^{n}|x_i-y_i|^p)^{\frac{1}{p}}$
* Cosine distance: $similarity=cos(\theta)=\frac{A\cdot B}{\lVert A\rVert\lVert B\rVert}=\frac{\sum_{i=1}^{n}A_iB_i}{\sqrt{\sum_{i=1}^nA_i^2}\sqrt{\sum_{i=1}^nB_i^2}}$
* Jaccard distance: $J(A, B) = \frac{A\cap B}{A\cup B}=\frac{|A\cap B|}{|A|+|B|-|A\cap B|}$

### Clustering types and algorithms
* Hierarchical clustering (AGNES, DIANA)
* Partition-based clustering ([k-Means](https://www.naftaliharris.com/blog/visualizing-k-means-clustering), k-Medoids)
* Mean-shift clustering 
* Density-Based Spatial Clustering of Applications with Noise ([DBSCAN](https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/))
* Expectation–Maximization (EM) Clustering

## Example: Tourist Risk Taking
The data set contains 563 respondents who state how often they take risks from the following six categories:
1. **recreational risks:** e.g., rock-climbing, scuba diving
1. **health risks:** e.g., smoking, poor diet, high alcohol consumption
1. **career risks:** e.g., quitting a job without another to go to
1. **financial risks:** e.g., gambling, risky investments
1. **safety risks:** e.g., speeding
1. **social risks:** e.g., standing for election, publicly challenging a rule or decision

Respondents are presented with an ordinal scale consisting of five answer options ***[NEVER(1), RARELY(2), QUITE OFTEN(3), OFTEN(4), VERY OFTEN(5)]***.

[Code On Google Colab](https://colab.research.google.com/drive/1foZjUC1BdNab0XvMMQmRThQ549qHxCoQ?usp=sharing)

::: code-tabs
@tab Hierarchical clustering
``` R
risk <- read_csv("risk.csv")
dim(risk)
head(risk)

colMeans(risk)

risk.dist <- dist(risk, method = "manhattan")
risk.hcl <- hclust(risk.dist, method = "complete")
risk.hcl

plot(risk.hcl, main = "", labels = FALSE)

c2 <- cutree(risk.hcl, h = 20)
table(c2)
c6 <- cutree(risk.hcl, k = 6)
table(c6)

c2.means <- aggregate(risk, list(Cluster = c2), mean)
round(c2.means[, -1], 1)
c6.means <- aggregate(risk, list(Cluster = c6), mean)
round(c6.means[, -1], 1)
```

``` R
library("flexclust")
barchart(risk.hcl, risk, k = 2)

library("flexclust")
barchart(risk.hcl, risk, k = 6)
```
@tab DBScan
``` R
library(dbscan)
library(readr)
library("factoextra")
risk <- read_csv("risk.csv")

res.db <- dbscan(risk, eps= 1.5, minPts = 5)
res.db

fviz_cluster(res.db, risk, geom = "point")
```

@tab EMCluster
``` R
library(EMCluster)

emobj <- simple.init(risk, nclass = 6)
risk.em <- emcluster(risk, emobj, assign.class = TRUE)

par(mfrow = c(1, 1))
plotem(risk.em, risk)

summary(risk.em)
```
@tab Cluster Plot
``` R
library(cluster) 
clusplot(risk, risk.em$class, color=TRUE, 
         shade=TRUE, labels=2, lines=0)

em.means <- aggregate(risk, 
                      list(Cluster = risk.em$class), 
                      mean)
round(em.means[, -1], 1)

```
:::
## Summary
* Segmentation – to do or not to do?
* Methods for segmentation: business rules vs clustering
* Variables to consider
* Distance measures
* One-hot encoding
* Clustering algorithms
* Interpretation of clusters

## Reference
[Tim's slides of Week 3](https://lo.unisa.edu.au/pluginfile.php/4493649/mod_resource/content/0/week_03%20Market%20Segmentation.pptx)