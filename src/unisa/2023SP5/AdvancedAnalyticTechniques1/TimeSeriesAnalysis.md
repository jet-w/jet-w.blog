---
title: Time Series Analysis
index: true
icon: timeline
author: Haiyue
date: 2023-08-09
category:
  - math
tag:
  - Time Series
---

## Objectives of time series analysis
- Use model to provide compact description of data
- <span style="color:orange; font-weight: bold">Recognise</span> presence of seasonal components and <span style="color:orange; font-weight: bold">remove them</span> so <span style="color:orange; font-weight: bold">as not to confuse them with long-term trends</span> (**seasonal adjustment**).
- Other applications of time series models
    * Separation (or filtering) of noise from signals
    * Prediction of future values of a series
    * Testing hypotheses
    * Predicting one series from observations of another
    * Controlling future values of a series by adjusting parameters
- Time series models are also useful in simulation studies

## Some simple time series models
- Important part of time series analysis: select, suitable probability model for data
::: info Definition
A <span style="color:orange; font-weight: bold">time series model</span> for observed data ${x_t}$ is a specification of <span style="color:orange; font-weight: bold">the joint distributions</span> (or only means and covariances) of <span style="color:orange; font-weight: bold">a sequence of random variables</span> ${X_t}$ of which ${x_t}$ is a realization.
:::

- A complete probabilistic time series model for ${X_1, X_2, ...}$ specifies all the probabilities
::: center
$P[X_1 \leq x_1\text{, ..., }X_n \leq x_n ], -\infin \lt x_1, ..., x_n \lt \infin, n=1,2,...$
:::
Such a specification of all joint distributions is rarely used because it contains too many parameters to be estimated from avaliable data.



References
1. https://www.youtube.com/watch?v=RwJnPw1tzKM
2. https://www.youtube.com/watch?v=aP05EpN1M58&list=PLYEmLA_7ilZPHis6d-xEGqQ_8Enuv_s32&index=4
3. https://www.youtube.com/watch?v=fav8_LGY75Y&list=PLYEmLA_7ilZPHis6d-xEGqQ_8Enuv_s32&index=2
4. https://www.youtube.com/watch?v=ikkOBWQj9X8&list=PLnG1U6UeKOIir0ytWi8GihemUFUZynWBL
5. https://www.youtube.com/watch?v=2mM8BUqWAZ4