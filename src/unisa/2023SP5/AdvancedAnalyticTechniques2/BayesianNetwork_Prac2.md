---
title: Practice 2 - Bayesian Network Inference
index: true
icon: "/assets/icon/common/data-mining.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-07
category:
  - classfier
tag:
  - AI
  - Bayesian Network
---

## Install package
``` r
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install(c("graph", "RBGL", "Rgraphviz"))

install.packages('gRain', , dependencies=TRUE)
```

## Create the conditional probability table for the Asia network
``` r
library(gRain)

yn <- c("yes","no")

a <- cptable(~asia, values=c(1,99),levels=yn)
t.a <- cptable(~tub|asia, values=c(5,95,1,99),levels=yn)
s <- cptable(~smoke, values=c(5,5), levels=yn)
l.s <- cptable(~lung|smoke, values=c(1,9,1,99), levels=yn)
b.s <- cptable(~bronc|smoke, values=c(6,4,3,7), levels=yn)
e.lt <-
cptable(~either|lung:tub,values=c(1,0,1,0,1,0,0,1),levels=yn)
x.e <- cptable(~xray|either, values=c(98,2,5,95), levels=yn)
d.be <- cptable(~dysp|bronc:either, values=c(9,1,7,3,8,2,1,9),
levels=yn)
plist <- compileCPT(list(a, t.a, s, l.s, b.s, e.lt, x.e, d.be))
plist
#Checking the (conditional) probability of some nodes
plist$tub
plist$either
```
## Draw the network
``` r
net1=grain(plist) 
plot(net1)
```
## Convert data into table
``` r
plist$tub %>% as.data.frame.table
```
## Query the marginal probabilities P(lung) and P(bronc):
``` r
querygrain(net1, nodes=c("lung","bronc"), type="marginal")
```
## Query the joint probability P(lung, bronc):
``` r
querygrain(net1, nodes=c("lung","bronc"), type="joint")
```
## Query the conditional probability P(lung|bronc)
``` r
querygrain(net1, nodes=c("lung","bronc"), type="conditional")
```

## Result
![result](/data/unisa/AdvancedAnalytic2/prac2/result.jpg)



## More quesitons
Calculate the following probabilities:
- P(lung=yes,bronc=yes)
- P(bronc=yes)
- P(lung=yes|smoke=yes)
- P(xray=yes|smoke=yes)
- P(xray=yes|smoke=yes, asia=yes)
- P(lung=yes|asia=yes)
- P(bronc=yes|smoke=yes, asia=yes)