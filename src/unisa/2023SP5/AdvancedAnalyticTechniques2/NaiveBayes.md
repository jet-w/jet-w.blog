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

## Probabilistic Classification
Establishing a probabilistic model for classification
- Discriminative model
![Discriminative Model](/data/unisa/AdvancedAnalytic2/DiscriminativeModel.jpg)

- Generative model
![Generative Model](/data/unisa/AdvancedAnalytic2/generativemodel.jpg)

### MAP classification rule
- **MAP**: Maximum A Posterior
- **Assign** $x$ to $c^*$ if $P(C=c^*|\Chi=\chi) > P(C=c|\Chi=\chi) c \neq c^*, c=c_1, ..., c_{_L}$

### Generative classification with the MAP rule
- Apply Bayes rule to convert them into posterior probabilities
$P(C=c_i|\Chi=\chi)=\frac{P(\Chi=\chi|C=c_i)P(C=c_i)}{P(\Chi=\chi)} \propto P(\Chi=\chi| C=c_i)P(C=c_i)$ for i=1,2,..., L

## Naïve Bayes

- **Bayes classification**
$P(C|\Chi) \propto P(\Chi|C)P(C)=P(X_1,\cdot\cdot\cdot，X_n|C)P(C)$
Difficulty: learning the joint probability $P(X_1,\cdot\cdot\cdot,X_n|C)$
- **Naïve Bayes classification**
  Assumption that <span style="color:red">all input features are conditionally independent!</span>
$$\begin{equation}
\begin{split}   
  P(X_1,X_2,\cdot\cdot\cdot,X_n|C) &=P(X_1|X_2,\cdot\cdot\cdot,X_n,C)P(X_2,\cdot\cdot\cdot,X_n|C)\\
    &=P(X_1|C)P(X_2,\cdot\cdot\cdot,X_n|C)\\
    &=P(X_1|C)P(X_2|C)\cdot\cdot\cdot P(X_n|C)
\end{split}
\end{equation}$$
  MAP classification rule: for $x=(x_1,x_2,\cdot\cdot\cdot,x_n)$
$[P(x_1|C^*)\cdot\cdot\cdot P(x_n|c^*)]P(c^*)>[P(x_1|c)\cdot\cdot\cdot P(x_n|c)]P(c),c\neq c^*,c=c_1,\cdot\cdot\cdot,c_L$

---

- **Algorithm**: Discrete-Valued Features
  1. **<span style="color:red">Learning Phase</span>**: Given a training set S, 
    For each target value of $c_i(c_i=c_1,\cdot\cdot\cdot,c_{_L})$
    $\hat{P}(C=c_i)\gets$ estimate $P(C=c_i)$ with examples in S;
    for every feature value $\chi_{jk}$ of each feature $X_j(j=1,\cdot\cdot\cdot,n;k=1,\cdot\cdot\cdot,N_j)$
    $\hat{P}(X_j=x_{jk}|C=c_j)\gets$ estimate $P(X_j=x_{jk}|C=c_i)$ with example in $S$;
    **Output**: conditional probability tables; for $X_j,N_j\times L$ elements
  2. **<span style="color:red">Test Phase</span>**: Given an unknown instance $\Chi^{'}=(a_{1}^{'},\cdot\cdot\cdot,a_{n}^{'})$
    Look up tables to assign the label $c^*$ to $\Chi^{'}$ if 
    $[\hat{P}(a_{1}^{'}|c^*)\cdot\cdot\cdot \hat{P}(a_{n}^{'}|c^*)]\hat{P}(c^*) > [\hat{P}(a_{1}^{'}|c)\cdot\cdot\cdot\hat{P}(a_{n}^{'}|c)]\hat{P}(c), c\neq c^*, c=c_1,\cdot\cdot\cdot, c_{_L}$

### Examples: Discrete-Valued Features
P12-P14

---

- **Algorithm**: Continuous-valued Features
  - Numberless values for a feature
  - Conditional probability often modeled with the normal
  $\hat{P}(X_j|C=c_i)=\frac{1}{\sqrt{2\pi}\sigma_{ji}}exp(-\frac{(X_j-\mu_{ji})^2}{2\sigma_{ji}^{2}})$
      $\mu_{ji}$: mean (average) of feature values $X_j$ of examples for which $C=c_j$
      $\sigma_{ji}$: standard deviation of feature values $\Chi_{j}$ of examples for which $C=c_i$

  1. **<span style="color:red">Learning Phase</span>**: 
    for $\Chi=(X_1,\cdot\cdot\cdot,X_n),C=c_1,\cdot\cdot\cdot,c_{_L}$
    **Output**: $n \times L$ normal distributions and $P(C=c_i) i=1,\cdot\cdot\cdot,L$
  2. **<span style="color:red">Test Phase</span>**: Given an unknown instance $\Chi^{'}=(a_{1}^{'},\cdot\cdot\cdot,a_{n}^{'})$
      - Instead of looking-up tables, calculate conditional probabilities with all the normal distributions achieved in the learning phrase
      - Apply the MAP rule to make a decision

### Example: Continuous-valued Features 
P16


## Relevant Issues (undone)
- Violation of Independence Assumption
    - For many real world tasks, $P(X_1,\cdot\cdot\cdot,X_n|C) \neq P(X_1|C)\cdot\cdot\cdot P(X_n|C)$
    - Nevertheless, naïve Bayes works surprisingly well anyway!
- Zero conditional probability Problem
    - If no example contains the attribute value
    - In this circumstance, $$ during test 
    - For a remedy, conditional probabilities estimated with

## Summary
- Naïve Bayes: the conditional independence assumption
    - Training is very easy and fast; just requiring considering each  attribute in each class separately
    - Test is straightforward; just looking up tables or calculating conditional probabilities with estimated distributions 
- A popular generative model
    - Performance competitive to most of state-of-the-art classifiers even in presence of violating independence assumption
    - Many successful applications, e.g., spam mail filtering
    - A good candidate of a base learner in ensemble learning
    - Apart from classification, naïve Bayes can do more… 


## Explanation from [Thuc](https://people.unisa.edu.au/thuc.le)
<YouTube id="w_bPyypZiyo" />

## References
Slides from Thuc (SP52023)