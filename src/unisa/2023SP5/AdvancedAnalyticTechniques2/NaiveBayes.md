---
title: Naïve Bayes Classifier
index: true
icon: "/assets/icon/common/data-mining.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-07-31
category:
  - classfier
tag:
  - AI
  - Naïve Bayes
  - Naive Bayes
---

## Background
There are three methods to establish a classifier

A. Model a classification rule directly
B. Model the probability of class memberships given input data
c. Make a probabilistic model of data within each class

Examples
| Method | discriminative classification | generative classification | probabilistic classification | Examples | 
| :--: | :--: | :--: | :--: | -- |
| A | <span style="color:red">Yes</span> | No  | No | k-NN, decision trees, perceptron, SVM|
| B | <span style="color:red">Yes</span> | No  |<span style="color:red">Yes</span>  | perceptron with the cross-entropy cost |
| C | No | <span style="color:red">Yes</span>  |<span style="color:red">Yes</span>  |naive Bayes, model based classifiers|

## Probability Basics
Prior, conditional and joint probability for random variables
- Prior probability: $P(X)$
- Conditional probability: $P(X_1| X_2), P(X_2| X_1)$
- Joint probability: $\chi=(X_1,X_2), P(\chi)=P(X_1,X_2)$
- Relationship: $P(X_1, X_2)=P(X_2|X_1)P(X_1)=P(X_1|X_2)P(X_2)$
- Independence: $P(X_2|X_1)=P(X_2),P(X_1|X_2)=P(X_1),P(X_1,X_2)=P(X_1)P(X_2)$

Bayes Rule
1. $P(C|\chi)=\frac{P(\chi|C) P(C)}{P(\chi)}$
2. $Posterior=\frac{Likelihood \times  Prior}{Evidence}$

### Quiz
We have two six-sided dice. When they are tolled, it could end up with the following occurance:
1. dice 1 lands on side "3"
2. dice 2 lands on side "1"
3. Two dice sum to eight

Answer the following Questions:
1. $P(A)$ = ?
2. $P(B)$ = ?
3. $P(C)$ = ?
4. $P(A|B)$ = ?
5. $P(C|A)$ = ?
6. $P(A,B)$ = ?
7. $P(A,C)$ = ?
8. Is $P(A,C)$ equal to $P(A)*P(C)$ ?



## pLayes
<YouTube id="w_bPyypZiyo" />



https://youtu.be/w_bPyypZiyo