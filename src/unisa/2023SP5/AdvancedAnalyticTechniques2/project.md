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
## Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic2/project/project.pdf" ratio="1.4" />

### Marking Guide
<PDF url="/data/unisa/AdvancedAnalytic2/project/Marking Guidelines - Project.pdf" ratio="1.4" />
::: 

## Dataset
`BRCA-50` is a Breast cancer dataset, including the expression levels of 50 important genes in Breast cancer. 
1. The dataset includes <span style="color:orange">1212 samples</span> with 
2. <span style="color:orange">112 samples</span> are of <span style="color:orange">normal cases (class = N)</span> and 
3. <span style="color:orange">1100 samples</span> are of <span style="color:orange">cancer patients (class = C)</span>.

## Tasks
### Load library
``` R
library(tidyverse)
library(gRain)
library(pcalg)
library(bnlearn)
```

### Load data
``` R
data <- read_csv("https://seamice.github.io/data/unisa/AdvancedAnalytic2/project/BRCA_RNASeqv2_top50.csv", col_names = TRUE)
data_no_class <- data %>% select(-class)
```
### Task 1: Causal Structure (CPDAG)
Use a <span style="color:orange">causal structure learning algorithm</span> to <span style="color:orange">find the gene regulatory network</span>, i.e. the network showing the interactions between genes, using the gene expression data. <span style="color:orange">Explain how the algorithm works.</span> <span style="color:red;font-weight:bold">(4)</span>
::: info Hints
Hints: Please exclude the class variable in building the network
:::
---
#### 1.1 **Learn the structure**
Select the `PC` algorithm to learn the `CPTAG`
``` R
pc.fit <- pc(
  suffStat = list(C = cor(data.no.class), n = nrow(data.no.class)), 
  indepTest = gaussCItest, 
  alpha=0.01, 
  labels = colnames(data.no.class)
  #labels = as.character(1:50)  #label node names
)

#data.frame(NUM=1:50, NAME=colnames(data.no.class))
plot(pc.fit, main = "CPDAG")
```
#### 1.2 **Explain how the algorithm works**
`PC algorithm` is an approach to learn the graph from a data set. The algorithm could be plit     into two parts. The first part is to learn the correlation among variables, which is lso called     learning skeleton. The second part is to find the direction of the elationship, which is also     called as orientating the edges.

<span style="font-weight:bold;color:red">For this case</span>,

------------------------------------------------------------------------
**Learning skeleton**

**Input:** Data set ***D***, significant level ***alpha***
**Output:** The undirected graph ***G*** with a set of edges ***E***

The first part, the alpha has been set ***alpha = 0.01***, ***depth = 0***, ***D*** is the ata of     all variables. Assume that all variables are correlated, the correlation set is **E***.    

1. **Repeat**
    * If number of nodes in ***E*** is less then ***depth + 2*** jump to **NextLevel**, else continue.
    * Test the independence of all nodes pairs from ***E*** given condition ***depth*** count combination of other variables from ***E***. If the independence exist, remove the correlation from the ***E***.
    **NextLevel** : <span style="color:red">set ***depth = depth + 1***</span>
2.  If number of Node in ***E*** is less then ***depth + 2*** stop, else continue Repeat.
3.  **Finally**, get the skeleton of the graph ***G***.

------------------------------------------------------------------------

**Orientating the edges**

**Input:** Skeleton ***G***, seperation sets ***S***
**Output:** CPDAG ***G\****

---
* **for** all nonadjacent variables ***X***, ***Y*** with a common neighbor ***K*** do
    * **If** ***K*** does not belongs to separation set of the two nodes ***S(X,Y)*** then
        Replace ***X-K-J*** in ***G*** by ***X-\>K\<-Y***
    * **end**
* **end**

Next, orient as many other undirected edges as possible using the following rules:    
1.  Orient ***X-Y*** into ***X-\>Y*** if exists ***Z-\>X***, ***Z*** and ***K*** are onadjacent.
2.  Orient ***X-Y*** into ***X-\>Y***, if exists a chain ***X-\>Z-\>Y***.
3.  Orient ***X-Y*** into ***X-\>Y***, if exists two chains ***X-Z-\>Y*** and ***X-A-\>Y***, nd ***Z*** and ***A*** are nonadjacent.

Finally, get a CPDAG ***G\****

### Task 2: Causal Effects (IDA)
2. `EBF1` is an important gene that is involved in many biological processes leading to cancer. <span style="color:orange">Find the top 10 other genes</span> that have strong causal effects on `EBF1` using a <span style="color:orange">causal inference algorithm</span>. <span style="color:red;font-weight:bold">(4)</span>
    ::: info Hints
    * <span style="color:red">Exclude the class variable</span> in building the network
    * If there are <span style="color:red">multiple possible causal effects</span> between the cause and the effect, we can use the <span style="color:red">minimum</span> of the absolute values (of the causal effects) as the final result
    * The causal effects are normally <span style="color:red">ranked based on their absolute values</span>.
    :::
    ---
    **Solution**: Using `ida` to calculate the causal effects of all other variables on `EBF1` based on the graph built from task 1, then sort the final result base on the values come from `ida` algorithm.
    ``` r
    # Get gene EBF1 index
    EBF1_idx <- match("EBF1", names(data.no.class))
    CausalOnEBF1 <- data.frame(
      causality = unlist(
        lapply(
          (1:50)[-EBF1_idx], 
          function(idx){
            min(
              abs(
                idaFast(
                  idx,
                  EBF1_idx,
                  cov(data.no.class),
                  pc.fit@graph)
              )
            )
          }
        )
      ),
      variable  = names(data.no.class)[-EBF1_idx]
    ) 
    CausalOnEBF1 %>% 
      arrange(across(causality, desc))

    (CausalOnEBF1 %>% 
      arrange(across(causality, desc)))$variable[1:10]
    ```
    According to the result, it could easily get the top 10 genes have strongest causal effects on `EBF1` are `FXYD1`, `ABCA10`, `TMEM220`, `ARHGAP20`, `FIGF`, `KLHL29`, `GPIHBP1`, `TMEM132C`, `RDH5`, `ABCA9`.
### Task 3: Local Causal Structure & Markov blanket
3. Use a <span style="color:orange">local causal structure learning algorithm</span> to <span style="color:orange">find genes in the Markov blanket of `ABCA9` from data</span>. <span style="color:orange">Explain how the algorithm works</span>. <span style="color:red;font-weight:bold">(4)</span>

---
**Solution:** We could use local structure learning algorithm `IAMB` to get the Markov blanket of `ABCA9` from the data
#### 3.1 Calculating the Markov Blanket
``` R
data.num <- data %>% select(-class)
data.num$class <- ifelse(data$class == 'C', 1, 0)
ABCA9.mb <- learn.mb(
    data.frame(data.num),
    "ABCA9",
    method = "iamb", 
    alpha = 0.01
)
ABCA9.mb
```
According to the result above, the Markov Blanket of `ABCA9` has 23 nodes.
#### 3.2 Explanation

The **IAMB** is an abbreviation for ***Incremental Association Markov Blanket***, the algorithm could be separated into two phases, the ***Growing pahse*** and ***Shrinking phase***. Details for the two phases are below:
**CMI:** Conditional mutual information

**Input:** dataset ***D***; target ***T***
**Output:** ***MB(T)***

------------------------------------------------------------------------
**Growing Phase:**
* **Repeat** till ***MB(T)*** does not change
    -   Find the node ***X*** from dataset ***D*** [exclude all the nodes in ***MB(T)*** and ***T***]{style="color:red"} that has the maximum **CMI**
    -   **IF** ***X*** independence with ***T*** given ***MB(T)***, Then
        -   <span style="color:red">Add</span> ***X*** to ***MB(T)***
    -   **End IF**
------------------------------------------------------------------------
**Shrinking Phase:**
* **For** each node ***X*** from ***MB(T)***
    -   **IF** ***X*** independence with ***T*** given ***MB(T)*** [exclude]{style="color:red"} ***X***, **Then**
        - <span style="color:red">Remove</span> ***X*** from ***MB(T)***
    -   **End IF**
* **End For**

Finally, get the final ***MB(T)***.

------------------------------------------------------------------------

#### References
[01]. [An Improved IAMB Algorithm for Markov Blanket Discovery](http://www.jcomputers.us/vol5/jcp0511-18.pdf)

[02]. [Discovering Markov Blankets: Finding Independencies Among Variables](https://cseweb.ucsd.edu//~elkan/254/Verma.pdf)


### Task 4: Discrete the dataset
4. <span style="color:orange">Discretise</span> the dataset to binary using the <span style="color:orange">average expression of ALL genes as the threshold</span>. The discretised dataset will be used in the following questions.

**Solution:**
**Step 1**: Calculating the mean
**Step 2**: Discrete the data (1: $\gt$ mean 0: $\lt$ mean)

Because of the `pcSelect` method <span style="color:red">only support numeric variables</span>, so the discrete variables need to be <span style="color:red">replaced with 1 and 0 according to **step 2**</span>.

``` R
# The mean of each gene
# mean.val <- as.data.frame(apply(data.no.class, 2, mean))
# The mean of All genes
mean.val <- mean(apply(data.no.class, 2, mean))
names <- colnames(data.no.class)

data.binary <- as.data.frame(
  sapply(
    colnames(data.no.class), 
    function(x) ifelse(data.no.class[,x] >mean.val, 1, 0)
))
data.binary$class <- ifelse(data$class == 'C', 1, 0)


#data.binary.c <- as.data.frame(
#  sapply(
#    colnames(data.no.class), 
#    function(x) ifelse(data.no.class[,x] >mean.val, 'T', 'F')
#))
#data.binary.c$class <- ifelse(data$class == 'C', 'T', 'F')
```


### Task 5: PC-Simple
5. Use <span style="color:orange">PC-simple algorithm (pcSelect)</span> to <span style="color:orange">find the parent and children</span> set of the class variable. <span style="color:orange">Explain how PC-simple works</span>.
    * Evaluate the accuracy of the Naïve Bayes classification on the dataset in the following cases:
        1. Use all features (genes) in the dataset
        2. Use only the features (genes) in the parent and children set of the class variable
    * Compare the accuracy of the models in the two cases using 10-fold cross validation. <span style="color:red;font-weight:bold">(6)</span>

**References:**
1. [An Improved IAMB Algorithm for Markov Blanket Discovery](http://www.jcomputers.us/vol5/jcp0511-18.pdf)
2. [Discovering Markov Blankets: Finding Independencies Among Variables](https://cseweb.ucsd.edu//~elkan/254/Verma.pdf)
#### 5.1 Find the parents and children

```{r}
class.pc <- pcSelect(
  data.binary %>% select(class),
  data.binary %>% select(-class),
  alpha = 0.01
)
class.pc <- data.frame(ispc = class.pc$G, zmin = class.pc$zMin)
class.pc[order(class.pc$zmin, decreasing=TRUE),]

rownames(class.pc[class.pc$ispc == TRUE,])
```
According to the result above, it could easily found that the parents and children of `class` variable are `FIGF`, `ARHGAP20`, `CD300LG`, `KLHL29`, `CXCL2`, `ATP1A2`, `MAMDC2`, `TMEM220`, `SCARA5`, `ATOH8`.

#### 5.2 Explanation of PC-Simple

PC-Simple is an algorithm to find the parents and children of a target node via conditional independence tests base on a threshold ***alpha***,

**Input:** Dataset ***D*** consist of set of predictor variables ***X*** and target variable ***Z***; a significant levle ***alpha*** for conditional independence test.
**Output:** The parents and children set ***PC*** of target ***Z***

**For** this case, the ***alpha*** has been set ***0.01***, ***k = 0*** , ***PC(k)*** equals all other variables.
- **Repeat** if count of ***PC*** is greater than ***k***
    -   ***k = k+1***
    -   ***PC(k) = PC(k-1)***
    -   **For** each node ***X*** from ***PC(k-1)***
        - **For** each combination nodes ***S*** from ***PC(k-1)*** excludes ***X*** and count of ***S*** equals ***k-1***
            -   **IF** ***X*** and ***Z*** are independent given ***S*** at significance level     ***alpha***, Then
                -   remove ***X*** from ***PC(K)***
            -   **End IF**
        -   **End For**
    -   ***End For***

The ***PC*** is the final result.

#### 5.3 Naïve Bayes classification

```{r}
library(caret)
```
##### 5.3.1 Naive Bayes classification with all features

```{r}
set.seed(100)
trctrl <- trainControl(method = "cv", number = 10, savePredictions=TRUE)
nb_all <- train(
  factor(class) ~., 
  data = data.binary, 
  method = "naive_bayes", 
  trControl=trctrl, 
  tuneLength = 0
)
nb_all
```
##### 5.3.2 Naive Bayes classification with related features

```{r}
data.binary.related <- data.binary[,append(rownames(class.pc[class.pc$ispc == TRUE,]), "class")]
nb_pc <- train(
  factor(class) ~., 
  data = data.binary.related, 
  method = "naive_bayes", 
  trControl=trctrl, 
  tuneLength = 0
)
nb_pc
```
##### 5.3.3 Comparision between the two models

``` R
confusionMatrix(nb_all)
confusionMatrix(nb_pc)
```
According to the confusion matrix, we could get indicators table like below.

| indicators                | ***ma***                    | ***mr***                    |
|---------------------|----------------------|-----------------------------|
| **accuracy**              | 0.9761                      | <span style="color:red">0.9843</span> |
| **precision(1)** : cancer | <span style="color:red">0.9982</span> | 0.9809                      |
| **precision(0)**: normal  | 0.7589                      | <span style="color:red">1</span> |
| **recall(1)**: cancer     | 0.9760                      | <span style="color:red">1</span>|
| **recall(0)**: normal     | <span style="color:red">0.9770</span> | 0.8421                      |

The precision stands for the accuracy of prediction cases, the recall represents the accuracy of actual cases that has been recognized. According to the table above, the overall accuracy of ***mr*** is better than ***ma***. For cancer cases, the ***ma*** perform better than ***mr*** on prediction, but for recall value of ***mr*** is better than ***ma***. For normal cases, the ***mr*** works better than ***ma*** on precision, but the ***ma*** perform better on recall than ***mr***.

### Task 6: Calculating based on specified DAG
6. Given a Bayesian network as in the below figure
![](/data/unisa/AdvancedAnalytic2/project/BayesianNetwork.png)
#### 6.1 a) <span style="color:orange">Construct the conditional probability tables</span> for the Bayesian network based on data. <span style="color:red;font-weight:bold">(3)</span>

##### 6.1.1 Construct using `cptable`
For constructing the net, using the ***T*** instead of ***1*** and using ***F*** instead of ***0***.

``` R
data.graph <- data.binary %>% select(BTNL9,CD300LG,class,IGSF10,ABCA9)

yn <- c('T','F')

B     <- cptable(~BTNL9, 
                 values= (data.graph %>% 
                            select(BTNL9) %>%
                            group_by(BTNL9) %>%
                            count() %>%
                            arrange(across(BTNL9, desc)))$n,
                 levels=yn)
CD.B  <- cptable(~CD300LG|BTNL9, 
                 values=(data.graph %>% 
                            select(CD300LG, BTNL9) %>%
                            group_by(CD300LG, BTNL9) %>%
                            count() %>%
                            arrange(across(BTNL9, desc),
                                    across(CD300LG, desc)))$n,
                 levels=yn)
c.CD  <- cptable(~class|CD300LG, 
                 values=(data.graph %>% 
                            select(class, CD300LG) %>%
                            group_by(class, CD300LG) %>%
                            count() %>%
                            arrange(across(CD300LG, desc),
                                    across(class, desc)))$n, 
                 levels=yn)
I.c   <- cptable(~IGSF10|class, 
                 values=(data.graph %>% 
                            select(IGSF10, class) %>%
                            group_by(IGSF10, class) %>%
                            count() %>%
                            arrange(across(class, desc), 
                                    across(IGSF10, desc)
                                    ))$n, 
                 levels=yn)

AB.B_I<- cptable(~ABCA9|BTNL9:IGSF10,
                 values=(data.graph %>% 
                            select(ABCA9, BTNL9,IGSF10) %>%
                            group_by(ABCA9, BTNL9,IGSF10) %>%
                            count() %>%
                            arrange( 
                              across(IGSF10, desc), 
                              across(BTNL9, desc),
                              across(ABCA9, desc)))$n,
                 levels=yn)

plist <- compileCPT(list(B, CD.B, c.CD, I.c, AB.B_I))
plist
net=grain(plist) 

plot(net$dag)
```

##### 6.1.2 Construct using `bnlearn`

```{r}
bn.dag = model2network("[BTNL9][CD300LG|BTNL9][ABCA9|BTNL9:IGSF10][class|CD300LG][IGSF10|class]")
graphviz.plot(bn.dag)
```
-   learn parameters from data
```{r}
bn.fitted <- bn.fit(
  bn.dag,
  data.binary %>% select(BTNL9, CD300LG, class, IGSF10, ABCA9)
) 
```
#### 6.2 b) <span style="color:orange">Estimate the probability of the four genes</span> in the network having high expression levels. <span style="color:red;font-weight:bold">(2)</span>


This question aims to calculate the ***joint probability*** of the four genes in the network for each value of the four variables equal ***T***. It could be expressed with the formula ***P(BTNL9=T, CD300LG=T, IGSF10=T, ABCA9=T)***.

##### 6.2.1 Method 1

```{r}
querygrain(net, nodes=c("BTNL9", "CD300LG", "IGSF10", "ABCA9"), type="joint")
```

According to the table above, it could get the ***P(BTNL9=T, CD300LG=T, IGSF10=T, ABCA9=T)=<span style="color:red">0.073736</span>***

##### 6.2.2 Method 2

```{r}
joint_pb <- setEvidence(
  net, 
  evidence=list(BTNL9="T", CD300LG="T",  IGSF10="T", ABCA9="T")
)
pEvidence(joint_pb)
```
According to the table above, it could get the same result with method 1.

#### 6.3 c) <span style="color:orange">Estimate the probability of having cancer</span> when the expression level of `CD300LG` is high and the expression level of `BTNL9` is low. <span style="color:red;font-weight:bold">(2)</span>

> This question actually ask us to calculate the conditional probability ***P(class=T\| CD300LG=T, BTNL9=F)***, here I will use `cpquery` method for get the conditional probability.

```{r}
querygrain(net, nodes=c("class","CD300LG","BTNL9"), type="conditional")
```
So the final result ***P(class=T\|CD300LG=T,BTNL9=F)*** = <span style="color:red">***0.2585034***</span>

#### 6.4 d) <span style="color:orange">Prove the result in c) mathematically</span>. <span style="color:red;font-weight:bold">(2)</span>

According to the graph, `BTNL9` is the parent of `CD300LG`, so

***P(class=T\| BTNL9=F,CD300LG=T)***
***= P(class=T\|CD300LG=T)***
***= (32+6)/(32+107+6+2)***
= <span style="color:red">***0.2585034***</span>

#### 6.5 e) Given we know the value of `CD300LG`, is the “class” <span style="color:orange">conditionally independent</span> of `ABCA9`? And why? <span style="color:red;font-weight:bold">(3)</span>


**Anwser:** <span style="color:red">**No**</span>

**Explanation:** According to Markov condition, every node in a Bayesian network is conditionally independent of its nondescendants, given its parents. So the parent `CD300LG` of `class` is given, `ABCA9` is the descendant of `class` variable, so the `class` is not conditionally independent of `ABCA9`.


----

[Download RMD](/data/unisa/AdvancedAnalytic2/project/Project.Rmd)
[online code](https://colab.research.google.com/drive/13V7I9g8k69c61NJzuwc80PwrOwM-Dz-0?usp=sharing)
## References
Algorithm:
<http://www.sci-princess.info/wp-content/uploads/Causal-Graphs-and-the-PC-Algorithm.pdf>
[https://pooyanjamshidi.github.io/csce580/lectures/CSCE580-GuestLecture--BNLearning.pdf](https://pooyanjamshidi.github.io/csce580/lectures/CSCE580-GuestLecture–BNLearning.pdf)
<https://arxiv.org/pdf/0908.3817.pdf>
<https://www.bnlearn.com/about/slides/slides-useRconf13.pdf>

pcalg:
<https://stat.ethz.ch/Manuscripts/buhlmann/pcalg-software.pdf>
<https://cran.r-project.org/web/packages/pcalg/pcalg.pdf>
<https://cran.r-project.org/web/packages/pcalg/vignettes/vignette2018.pdf>

bnlearn:
<https://www.bnlearn.com/examples/graphviz-plot/>
<https://www.bnlearn.com/documentation/man/cpquery.html>
<https://rdrr.io/github/vspinu/bnlearn/man/cpquery.html>
<https://dipartimenti.unicatt.it/scienze-statistiche-23-25-1-17ScutariSlides.pdf>

Graphviz
<https://rdrr.io/bioc/Rgraphviz/man/GraphvizAttributes.html#:~:text=Font%20size%2C%20in%20points%2C%20for,Label%20for%20the%20graph.>
<https://www.cs.cmu.edu/afs/cs/project/jair/pub/volume18/acid03a-html/node2.html>

Chinese Sample:
<https://www.cnblogs.com/payton/articles/4608383.html>
