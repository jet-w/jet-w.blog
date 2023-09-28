---
title: Requirements of Project
index: true
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-25
category:
  - Assignment
---

## Requirements
### Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic2/project/Marking Guidelines - Project.pdf" ratio="1.4" />

### Marking Guide
<PDF url="/data/unisa/AdvancedAnalytic2/project/project.pdf" ratio="1.4" />
::: 

### Dataset
`BRCA-50` is a Breast cancer dataset, including the expression levels of 50 important genes in Breast cancer. 
1. The dataset includes <span style="color:orange">1212 samples</span> with 
2. <span style="color:orange">112 samples</span> are of <span style="color:orange">normal cases (class = N)</span> and 
3. <span style="color:orange">1100 samples</span> are of <span style="color:orange">cancer patients (class = C)</span>.

### Tasks
1. Use a <span style="color:orange">causal structure learning algorithm</span> to <span style="color:orange">find the gene regulatory network</span>, i.e. the network showing the interactions between genes, using the gene expression data. <span style="color:orange">Explain how the algorithm works.</span> <span style="color:red;font-weight:bold">(4)</span>
    ::: info Hints
    Hints: Please exclude the class variable in building the network
    :::
2. `EBF1` is an important gene that is involved in many biological processes leading to cancer. <span style="color:orange">Find the top 10 other genes</span> that have strong causal effects on `EBF1` using a <span style="color:orange">causal inference algorithm</span>. <span style="color:red;font-weight:bold">(4)</span>
    ::: info Hints
    * Exclude the class variable in building the network
    * If there are multiple possible causal effects between the cause and the effect, we can use the minimum of the absolute values (of the causal effects) as the final result
    * The causal effects are normally ranked based on their absolute values.
    :::

3. Use a <span style="color:orange">local causal structure learning algorithm</span> to <span style="color:orange">find genes in the Markov blanket of `ABCA9` from data</span>. <span style="color:orange">Explain how the algorithm works</span>. <span style="color:red;font-weight:bold">(4)</span>


4. <span style="color:orange">Discretise</span> the dataset to binary using the <span style="color:orange">average expression of ALL genes as the threshold</span>. The discretised dataset will be used in the following questions.

5. Use <span style="color:orange">PC-simple algorithm (pcSelect)</span> to <span style="color:orange">find the parent and children</span> set of the class variable. <span style="color:orange">Explain how PC-simple works</span>.
    * Evaluate the accuracy of the Naïve Bayes classification on the dataset in the following cases:
        1. Use all features (genes) in the dataset
        2. Use only the features (genes) in the parent and children set of the class variable
    * Compare the accuracy of the models in the two cases using 10-fold cross validation. <span style="color:red;font-weight:bold">(6)</span>

6. Given a Bayesian network as in the below figure
![](/data/unisa/AdvancedAnalytic2/project/BayesianNetwork.png)
    1. a) <span style="color:orange">Construct the conditional probability tables</span> for the Bayesian network based on data. <span style="color:red;font-weight:bold">(3)</span>
    1. b) <span style="color:orange">Estimate the probability of the four genes</span> in the network having high expression levels. <span style="color:red;font-weight:bold">(2)</span>
    1. c) <span style="color:orange">Estimate the probability of having cancer</span> when the expression level of `CD300LG` is high and the expression level of `BTNL9` is low. <span style="color:red;font-weight:bold">(2)</span>
    1. d) <span style="color:orange">Prove the result in c) mathematically</span>. <span style="color:red;font-weight:bold">(2)</span>
    1. e) Given we know the value of `CD300LG`, is the “class” <span style="color:orange">conditionally independent</span> of `ABCA9`? And why? <span style="color:red;font-weight:bold">(3)</span>

