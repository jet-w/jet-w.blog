---
title: Assignment1
index: true
icon: "/assets/icon/common/data-mining.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-18
category:
  - Assignment
---


<PDF url="/data/unisa/AdvancedAnalytic2/assignment1/Assignment1.pdf" ratio="1.4" />



## Part2

### Numerical Variables
#### Part A (3 marks)
1. <span style="color:red; font-weight:bold;">Remove the ID attribute</span>. Consider all attributes <span style="color:red; font-weight:bold;">except the class attribute as numeric attributes</span>.
    ![Alt text](/data/unisa/AdvancedAnalytic2/assignment1/numeric_distribution.png)
2. <span style="color:red; font-weight:bold;">Build a Naïve Bayes model</span> and <span style="color:red; font-weight:bold;">classify benign and malignant</span>. Show the <span style="color:red; font-weight:bold;">screenshot of the model</span> when you train the model with <span style="color:red; font-weight:bold;">all records</span>.
``` txt
=== Classifier model (full training set) ===

Naive Bayes Classifier

                                  Class
Attribute                        benign Malignant
                                 (0.65)    (0.35)
==================================================
Clump Thickness
  mean                            2.9563     7.195
  std. dev.                       1.6725    2.4238
  weight sum                         458       241
  precision                            1         1

Uniformity of Cell Size
  mean                            1.3253    6.5726
  std. dev.                       0.9067    2.7139
  weight sum                         458       241
  precision                            1         1

Uniformity of Cell Shape
  mean                            1.4432    6.5602
  std. dev.                       0.9967    2.5567
  weight sum                         458       241
  precision                            1         1

Marginal Adhesion
  mean                            1.3646    5.5477
  std. dev.                       0.9957    3.2038
  weight sum                         458       241
  precision                            1         1

Single Epithelial Cell Size
  mean                            2.1201    5.2988
  std. dev.                       0.9161    2.4465
  weight sum                         458       241
  precision                            1         1

Bare Nuclei
  mean                            1.3468    7.6276
  std. dev.                       1.1765    3.1102
  weight sum                         444       239
  precision                            1         1

Bland Chromatin
  mean                            2.1004    5.9793
  std. dev.                       1.0792    2.2691
  weight sum                         458       241
  precision                            1         1

Normal Nucleoli
  mean                            1.2904    5.8631
  std. dev.                       1.0577    3.3437
  weight sum                         458       241
  precision                            1         1

Mitoses
  mean                            1.1889    2.7401
  std. dev.                       0.4833    2.5138
  weight sum                         458       241
  precision                        1.125     1.125
```
#### Part B (3 marks)
Use one record to explain how the model makes classification.

#### Part C (3 marks)
Show the <span style="color:red; font-weight:bold;">accuracy</span> of the model using <span style="color:red; font-weight:bold;">10-fold cross validation</span> and the <span style="color:red; font-weight:bold;">confusion matrix</span>. 

#### Part D (3 marks)
<span style="color:red; font-weight:bold;">Discretise</span> the data set using three bins <span style="color:red; font-weight:bold;">(equal-frequency)</span>. 

### Categorical Variables
#### Part E (3 Marks)
1. Build a Naïve Bayes model and classify benign and malignant using the discretised dataset. Show the accuracy of the model using 5-fold cross validation and the confusion matrix. 

2. Explain the meaning of the numbers in the confusion matrix.

#### Part F (3 Marks)
Use one record to explain how the model makes classification using the discretised dataset. 


[Breast cancer wisconsin data (Have been converted into csv)](/data/unisa/AdvancedAnalytic2/assignment1/breast-cancer-wisconsin.csv)
[The result using equal frequency binning](/data/unisa/AdvancedAnalytic2/assignment1/classification_discrete.result.txt)
[The result using Nominal variables](/data/unisa/AdvancedAnalytic2/assignment1/classification_numeric.result.txt)
[The configuration for equal frequency in Weka](/data/unisa/AdvancedAnalytic2/assignment1/equalFrequency.weka.discrete.conf)
