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

## Requirements
### Instructions
<PDF url="/data/unisa/AdvancedAnalytic2/assignment1/Assignment1.pdf" ratio="1.4" />

### Marking Guide
<PDF url="/data/unisa/AdvancedAnalytic2/assignment1/MarkingGuidelines-Assignment1.pdf" ratio="1.4" />

## Part 1 


## Part2
For this part, the Weka will be selected as the tool to implement NaiveBayes Classifier, the original need to convert into a proper format. The csv file format is selected, please download the data follow the link below.
[Breast cancer wisconsin data (Have been converted into csv)](/data/unisa/AdvancedAnalytic2/assignment1/breast-cancer-wisconsin.csv)

### Numerical Variables
#### Part A: Model (3 marks)
::: info Requirement
1. <span style="color:orange; font-weight:bold;">Remove the ID attribute</span>. Consider all attributes <span style="color:orange; font-weight:bold;">except the class attribute as numeric attributes</span>.
:::

![Alt text](/data/unisa/AdvancedAnalytic2/assignment1/numeric_distribution.png)

::: info Requirement
2. <span style="color:orange; font-weight:bold;">Build a Naïve Bayes model</span> and <span style="color:orange; font-weight:bold;">classify benign and malignant</span>. Show the <span style="color:orange; font-weight:bold;">screenshot of the model</span> when you train the model with <span style="color:orange; font-weight:bold;">all records</span>.
:::
::: details Full Training Set
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
:::
#### Part B: Explanation (3 marks)
::: info Requirement
Use one record to explain how the model makes classification.
:::
#### Part C: 10 fold cross validation (3 marks)
::: info Requirement
Show the <span style="color:orange; font-weight:bold;">accuracy</span> of the model using <span style="color:orange; font-weight:bold;">10-fold cross validation</span> and the <span style="color:orange; font-weight:bold;">confusion matrix</span>. 
:::
::: details 10 fold cross validation
``` txt
=== Run information ===

Scheme:       weka.classifiers.bayes.NaiveBayes 
Relation:     breast-cancer-wisconsin-weka.filters.unsupervised.attribute.Remove-R1
Instances:    699
Attributes:   10
              Clump Thickness
              Uniformity of Cell Size
              Uniformity of Cell Shape
              Marginal Adhesion
              Single Epithelial Cell Size
              Bare Nuclei
              Bland Chromatin
              Normal Nucleoli
              Mitoses
              Class
Test mode:    10-fold cross-validation

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



Time taken to build model: 0 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances         671               95.9943 %
Incorrectly Classified Instances        28                4.0057 %
Kappa statistic                          0.9127
Mean absolute error                      0.0408
Root mean squared error                  0.1994
Relative absolute error                  9.0336 %
Root relative squared error             41.9578 %
Total Number of Instances              699     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0.952    0.025    0.986      0.952    0.969      0.914    0.988     0.995     benign
                 0.975    0.048    0.914      0.975    0.944      0.914    0.983     0.942     Malignant
Weighted Avg.    0.960    0.033    0.962      0.960    0.960      0.914    0.986     0.976     

=== Confusion Matrix ===

   a   b   <-- classified as
 436  22 |   a = benign
   6 235 |   b = Malignant
```
:::

### Categorical Variables
#### Part D: Discretizetion (3 marks)
::: info Requirement
<span style="color:orange; font-weight:bold;">Discretise</span> the data set using three bins <span style="color:orange; font-weight:bold;">(equal-frequency)</span>. 
:::
The discretizetion should use equal-frequency technique to discretise the numerical data into 3 bins. The configuration file for discrete like the link. [The configuration for equal frequency in Weka](/data/unisa/AdvancedAnalytic2/assignment1/equalFrequency.weka.discrete.conf)

![Alt text](/data/unisa/AdvancedAnalytic2/assignment1/categorical_distribution.png)
#### Part E: Model (3 Marks)
1. Model and Evaluation
::: info Requirement
Build a Naïve Bayes model and classify benign and malignant using the discretised dataset. Show the accuracy of the model using 5-fold cross validation and the confusion matrix. 
:::
::: details
``` txt
=== Run information ===

Scheme:       weka.classifiers.bayes.NaiveBayes 
Relation:     breast-cancer-wisconsin-weka.filters.unsupervised.attribute.Remove-R1-weka.filters.unsupervised.attribute.Discretize-F-B3-M-1.0-Rfirst-last-precision6
Instances:    699
Attributes:   10
              Clump Thickness
              Uniformity of Cell Size
              Uniformity of Cell Shape
              Marginal Adhesion
              Single Epithelial Cell Size
              Bare Nuclei
              Bland Chromatin
              Normal Nucleoli
              Mitoses
              Class
Test mode:    5-fold cross-validation

=== Classifier model (full training set) ===

Naive Bayes Classifier

                                  Class
Attribute                        benign Malignant
                                 (0.65)    (0.35)
==================================================
Clump Thickness
  '(-inf-2.5]'                     189.0       8.0
  '(2.5-4.5]'                      165.0      25.0
  '(4.5-inf)'                      107.0     211.0
  [total]                          461.0     244.0

Uniformity of Cell Size
  '(-inf-1.5]'                     381.0       5.0
  '(1.5-5.5]'                       74.0      95.0
  '(5.5-inf)'                        6.0     144.0
  [total]                          461.0     244.0

Uniformity of Cell Shape
  '(-inf-1.5]'                     352.0       3.0
  '(1.5-4.5]'                       99.0      62.0
  '(4.5-inf)'                       10.0     179.0
  [total]                          461.0     244.0

Marginal Adhesion
  '(-inf-1.5]'                     376.0      33.0
  '(1.5-4.5]'                       74.0      77.0
  '(4.5-inf)'                       11.0     134.0
  [total]                          461.0     244.0

Single Epithelial Cell Size
  '(-inf-1.5]'                      47.0       2.0
  '(1.5-2.5]'                      364.0      24.0
  '(2.5-inf)'                       50.0     218.0
  [total]                          461.0     244.0

Bare Nuclei
  '(-inf-1.5]'                     388.0      16.0
  '(1.5-8.5]'                       55.0      87.0
  '(8.5-inf)'                        4.0     139.0
  [total]                          447.0     242.0

Bland Chromatin
  '(-inf-1.5]'                     151.0       3.0
  '(1.5-3.5]'                      289.0      44.0
  '(3.5-inf)'                       21.0     197.0
  [total]                          461.0     244.0

Normal Nucleoli
  '(-inf-1.5]'                     403.0      42.0
  '(1.5-6.5]'                       50.0      91.0
  '(6.5-inf)'                        8.0     111.0
  [total]                          461.0     244.0

Mitoses
  '(-inf-1.5]'                     446.0     135.0
  '(1.5-3.5]'                       11.0      59.0
  '(3.5-inf)'                        4.0      50.0
  [total]                          461.0     244.0



Time taken to build model: 0 seconds

=== Stratified cross-validation ===
=== Summary ===

Correctly Classified Instances         677               96.8526 %
Incorrectly Classified Instances        22                3.1474 %
Kappa statistic                          0.9313
Mean absolute error                      0.0349
Root mean squared error                  0.1744
Relative absolute error                  7.7298 %
Root relative squared error             36.7027 %
Total Number of Instances              699     

=== Detailed Accuracy By Class ===

                 TP Rate  FP Rate  Precision  Recall   F-Measure  MCC      ROC Area  PRC Area  Class
                 0.961    0.017    0.991      0.961    0.976      0.932    0.989     0.995     benign
                 0.983    0.039    0.929      0.983    0.956      0.932    0.989     0.976     Malignant
Weighted Avg.    0.969    0.024    0.970      0.969    0.969      0.932    0.989     0.988     

=== Confusion Matrix ===

   a   b   <-- classified as
 440  18 |   a = benign
   4 237 |   b = Malignant
```
:::
2. Explain the meaning of the numbers in the confusion matrix.

#### Part F: Explaination (3 Marks)
::: info Requirement
Use one record to explain how the model makes classification using the discretised dataset. 
:::

[The result using equal frequency binning](/data/unisa/AdvancedAnalytic2/assignment1/classification_discrete.result.txt)
[The result using Numerical variables](/data/unisa/AdvancedAnalytic2/assignment1/classification_numeric.result.txt)

