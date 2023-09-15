---
title: Project
index: false
icon: "/assets/icon/common/data-mining.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-25
category:
  - Assignment
---

## Requirements
### Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic2/project/project.pdf" ratio="1.4" />

### Marking Guide
<PDF url="/data/unisa/AdvancedAnalytic2/project/Marking Guidelines - Project.pdf" ratio="1.4" />
::: 

### Dataset
`BRCA-50` is a Breast cancer dataset, including the expression levels of 50 important genes in Breast cancer. 
1. The dataset includes <span style="color:orange">1212 samples</span> with 
2. <span style="color:orange">112 samples</span> are of <span style="color:orange">normal cases (class = N)</span> and 
3. <span style="color:orange">1100 samples</span> are of <span style="color:orange">cancer patients (class = C)</span>.

### Tasks
#### Load library
``` R
library(tidyverse)
library(gRain)
library(pcalg)
library(bnlearn)
```

#### Load data
``` R
data <- read_csv("https://seamice.github.io/data/unisa/AdvancedAnalytic2/project/BRCA_RNASeqv2_top50.csv", col_names = TRUE)
data_no_class <- data %>% select(-class)
```
#### Task 1: Causal Structure (CPDAG)
1. Use a <span style="color:orange">causal structure learning algorithm</span> to <span style="color:orange">find the gene regulatory network</span>, i.e. the network showing the interactions between genes, using the gene expression data. <span style="color:orange">
    Explain how the algorithm works.</span> <span style="color:red;font-weight:bold">(4)</span>
    ::: info Hints
    Hints: Please exclude the class variable in building the network
    :::
    ---
    * 1.1 **Learn the structure**
    Select the `PC` algorithm to learn the `CPTAG`
    ``` R
    pc.fit <- pc(
      suffStat = list(C = cor(data_no_class), n = nrow(data_no_class)), 
      indepTest = gaussCItest, 
      alpha=0.05, 
      labels = colnames(data_no_class)  #label node names
    )
    plot(pc.fit, main = "Estimated graph")
    ```
    * 1.2 **Explain how the algorithm works**
    The algorithm could be split into two parts, the first part is to learn the skeleton or the graph, the second part is to orienting the edges of the skeleton.

#### Task 2: Causal Effects (IDA)
2. `EBF1` is an important gene that is involved in many biological processes leading to cancer. <span style="color:orange">Find the top 10 other genes</span> that have strong causal effects on `EBF1` using a <span style="color:orange">causal inference algorithm</span>. <span style="color:red;font-weight:bold">(4)</span>
    ::: info Hints
    * <span style="color:red">Exclude the class variable</span> in building the network
    * If there are <span style="color:red">multiple possible causal effects</span> between the cause and the effect, we can use the <span style="color:red">minimum</span> of the absolute values (of the causal effects) as the final result
    * The causal effects are normally <span style="color:red">ranked based on their absolute values</span>.
    :::
    ---
    **Solution**: Reuse the `CPDAG` learned from the task 1, then using `ida` method to calculate the causal effect of `EBF1` from other variables
    ``` r
    # Get gene EBF1 index
    EBF1_idx <- match("EBF1", names(data_no_class))
    
    # Get the causi
    ret <- data.frame(
      score = abs(
        idaFast(
          EBF1_idx, 
          (1:50)[-EBF1_idx], 
          cov(data_no_class), 
          pc.fit@graph)
        ),
      name = colnames(data_no_class)[-EBF1_idx]
    )
      
    ret[order(ret$score, decreasing=TRUE),]
    ```
#### Task 3: Local Causal Structure & Markov blanket
3. Use a <span style="color:orange">local causal structure learning algorithm</span> to <span style="color:orange">find genes in the Markov blanket of `ABCA9` from data</span>. <span style="color:orange">Explain how the algorithm works</span>. <span style="color:red;font-weight:bold">(4)</span>

---
**Solution:** We could use local structure learning algorithm `IAMB` to get the Markov blanket of `ABCA9` from the data
##### 3.1 Calculating the Markov Blanket
``` R
ABCA9.mb <- learn.mb(
    data.frame(data_no_class),
    "ABCA9",
    method = "iamb", 
    alpha = 0.01
)
ABCA9.mb
```
##### 3.2 Explanation


#### Task 4: Discrete the dataset
4. <span style="color:orange">Discretise</span> the dataset to binary using the <span style="color:orange">average expression of ALL genes as the threshold</span>. The discretised dataset will be used in the following questions.

**Solution:**
**Step 1**: Calculating the mean
**Step 2**: Discrete the data (1: $\gt$ mean 0: $\lt$ mean)

Because of the `pcSelect` method <span style="color:red">only support numeric variables</span>, so the discrete variables need to be <span style="color:red">replaced with 1 and 0 according to **step 2**</span>.

``` R
mean.val <- as.data.frame(apply(data.no.class, 2, mean))
names <- colnames(data.no.class)

data.binary <- as.data.frame(
  sapply(
    colnames(data.no.class), 
    function(x) ifelse(data.no.class[,x] >mean.val[x,], 1, 0)
))
data.binary$class <- ifelse(data$class == 'C', 1, 0)
```


#### Task 5: PC-Simple
5. Use <span style="color:orange">PC-simple algorithm (pcSelect)</span> to <span style="color:orange">find the parent and children</span> set of the class variable. <span style="color:orange">Explain how PC-simple works</span>.
    * Evaluate the accuracy of the Naïve Bayes classification on the dataset in the following cases:
        1. Use all features (genes) in the dataset
        2. Use only the features (genes) in the parent and children set of the class variable
    * Compare the accuracy of the models in the two cases using 10-fold cross validation. <span style="color:red;font-weight:bold">(6)</span>


##### 5.1 Find the parents and children

```{r}
class.pc <- pcSelect(
  data.binary %>% select(class),
  data.binary %>% select(-class),
  alpha = 0.05
)
class.pc <- data.frame(ispc = class.pc$G, zmin = class.pc$zMin)
class.pc[order(class.pc$zmin, decreasing=TRUE),]
```
According to the result above, it could easily found that the parents and children of `class` variable are `MYOM1`, `SCARA5`, `ATP1A2`, `HIF3A`, `FIGF`, `CA4`, `C2orf40`, `LYVE1`, `DMD`.

##### 5.2 Explanation of PC-Simple

##### 5.3 Naïve Bayes classification

```{r}
library(caret)
```
###### 5.3.1 Naive Bayes classification with all features

```{r}
set.seed(100)
trctrl <- trainControl(method = "cv", number = 10, savePredictions=TRUE)
nb_fit <- train(
  factor(class) ~., 
  data = data.binary, 
  method = "naive_bayes", 
  trControl=trctrl, 
  tuneLength = 0
)
nb_fit
```
###### 5.3.1 Naive Bayes classification with all features

```{r}
set.seed(100)
trctrl <- trainControl(method = "cv", number = 10, savePredictions=TRUE)
nb_fit <- train(
  factor(class) ~., 
  data = data.binary, 
  method = "naive_bayes", 
  trControl=trctrl, 
  tuneLength = 0
)
nb_fit
```
###### 5.3.4 Comparision between the two models




#### Task 6: Calculating based on specified DAG
6. Given a Bayesian network as in the below figure
![](/data/unisa/AdvancedAnalytic2/project/BayesianNetwork.png)
##### 6.1 a) <span style="color:orange">Construct the conditional probability tables</span> for the Bayesian network based on data. <span style="color:red;font-weight:bold">(3)</span>
##### 6.2 b) <span style="color:orange">Estimate the probability of the four genes</span> in the network having high expression levels. <span style="color:red;font-weight:bold">(2)</span>
##### 6.3 c) <span style="color:orange">Estimate the probability of having cancer</span> when the expression level of `CD300LG` is high and the expression level of `BTNL9` is low. <span style="color:red;font-weight:bold">(2)</span>
##### 6.4 d) <span style="color:orange">Prove the result in c) mathematically</span>. <span style="color:red;font-weight:bold">(2)</span>
##### 6.5 e) Given we know the value of `CD300LG`, is the “class” <span style="color:orange">conditionally independent</span> of `ABCA9`? And why? <span style="color:red;font-weight:bold">(3)</span>

