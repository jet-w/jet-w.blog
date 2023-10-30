---
title: Project - Kalman Filter
index: true
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-10-29
category:
  - Assignment
---

## What is Kalma Filter
The Kalman Filter is a mathematical algorithm used for estimating and predicting the state of a dynamic system, particularly in the presence of noisy or uncertain data. It consist of five equations.

### Prediction
1. $\hat x^- = F\hat x_{t-1} + Bu_{t-1}$
2. $P_t^- = FP_{t-1}F^T+Q$ 

### Update
1. $\hat x_t = \hat x_t^- + K_t(Z_t - H\hat x_t^-)$
2. $K_t = P_t^-H^T(HP_t^-H^T+R)^{-1}$
3. $P_t=(I - K_tH)P_t^-$

1. Get the best estimation using the measurment.
2. Kalman gamin.
3. Update the noise distribution of best estimates.

$K_t$: Kalman gain
$R$: Observation covariance


## Important basic concepts
1. Mean  $\mu = \frac{1}{N}\displaystyle\sum_{n=1}^{N}V_n$
2. Expectation: The mean of multiple measurements， similar with mean
3. Variance: $\sigma^2 = \frac{1}{N} \displaystyle\sum_{n=1}^{N}(V_n-\mu)^2$
4. Standard Variance: $\sigma$
5. Normal Distribution (All called Gaussian Distribution)
    $f(x; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{\frac{-(x-\mu)^2}{2\sigma^2}}$
    ![Normal Distribution](/data/unisa/AdvancedAnalytic1/project/normal_distribution.png)
    <span style="color:orange">Typically, measurement errors are normally distributed.</span> The Kalman filter assumes that the measurement errors have a normal distribution.
6. Estimation: An estimate of the hidden state of the system.
7. Accuracy: Describes how close a measured value is to the true value.
8. Precision: Describes the deviation distribution of a series of measured values relative to the same true value
    ::: info
    High-precision systems have measurements with very low variance (i.e., low uncertainty), while low-precision systems have high variance (i.e., high uncertainty).
    :::

::: info
Typically, measurement errors are normally distributed. The Kalman filter assumes that the measurement errors have a normal distribution.
:::

## Example
### How to measure a gold

How to weight a $x$ gold.

![Measure a gold](/data/unisa/AdvancedAnalytic1/project/MeasureAGold.png)

::: info
<span style="color:red">$x$</span>: The true weight of the gold.
<span style="color:red">$z_n$</span>: The measurement of gold.
<span style="color:red">$\hat{x}_{n,n}$</span>: The estimation of $x$ using the measurement at n moment.
<span style="color:red">$\hat{x}_{n+1,n}$</span>: It is the prediction of the future state (time $n+1$) at time $n$, recorded as $x_{n+1,n}$, or extrapolation.
<span style="color:red">$\hat{x}_{n−1,n−1}$</span>: The estimated value of $x$ at time $n−1$, using the measured value $z_{n−1}$ at time $n−1$.
<span style="color:red">$\hat{x}_{n,n-1}$</span>: Apriori estimate - a prediction of the system state at time n at time n−1 (Annotation: for the $n^{th}$ time, $x_{n,n−1}$ is a priori estimate, $x_{n+1, n}$ is prediction)
:::

In order to estimate $x_{n,n}$, we need to store all historical measurements, which is very expensive on memory. And every time a new measurement value is obtained, the calculation needs to be completely restarted from the first measurement, which also consumes a huge amount of CPU computing power.
A more realistic consideration is that it is best to only store the estimated value $x_{n−1,n−1}$ of the previous moment, and simply update it after new measurements are completed.
![Schematic Diagram](/data/unisa/AdvancedAnalytic1/project/SchematicDiagram.png)

|  Formula | Meaning |
| -- | -- |
| $\hat x_{n,n} = \frac{1}{n}\sum_{i=1}^{n}(Z_i)$ |  The mean of measurement |
| $= \frac{1}{n}(\sum_{i=1}^{n-1}(Z_i)+ Z_n)$ | |
| $= \frac{1}{n}\sum_{i=1}^{n-1}(Z_i)+ \frac{1}{n}Z_n$ | |
| $= \frac{1}{n}\frac{n-1}{n-1}\sum_{i=1}^{n-1}(Z_i)+ \frac{1}{n}Z_n$ | |
| $= \frac{n-1}{n}\textcolor{orange}{\frac{1}{n-1}\sum_{i=1}^{n-1}(Z_i)}+ \frac{1}{n}Z_n)$ | The orange item is the estimation at time n-1|
| $= \frac{n-1}{n}\textcolor{orange}{\hat x_{n-1, n-1}}+ \frac{1}{n}Z_n)$ | |
| $= \hat x_{n-1, n-1} - \frac{1}{n}\hat x_{n-1, n-1}+ \frac{1}{n}Z_n$ | |
| $= \hat x_{n-1, n-1} - \frac{1}{n}(\hat x_{n-1, n-1} + Z_n)$ | The final formula |

The final formula is the <span style="color:orange">status update equation</span>. One of five equations of Kalman filter.









## Example of Car
![Alt text](/data/unisa/AdvancedAnalytic1/project/car.png)


Position: $p_t = p_{t-1} + v_{t-1}\Delta t + u_t\frac{\Delta t^2}{2}$
Speed: $v_t = v_{t-1} + u_t\Delta t$

The tow formula could be transfored into 
$
\begin{bmatrix}
   p_t\\
   v_t
\end{bmatrix} = \begin{bmatrix}
   1 & \Delta t\\
   0 & 1
\end{bmatrix}\begin{bmatrix}
   p_{t-1}\\
   v_{t-1}
\end{bmatrix} + \begin{bmatrix}
   \frac{\Delta t^2}{2}\\
   \Delta t
\end{bmatrix}u_t
$

$F_t = \begin{bmatrix}
   1 & \Delta t\\
   0 & 1
\end{bmatrix}, B_t = \begin{bmatrix}
   \frac{\Delta t^2}{2}\\
   \Delta t
\end{bmatrix}u_t
$




Then the formulas could be transformed into
$\hat x^- = F\hat x_{t-1} + Bu_{t-1}$









## References
01. [Kalman Filter](https://www.kalmanfilter.net/CN/default_cn.aspx)
02. [卡尔曼滤波器](https://longaspire.github.io/blog/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2/)
03. [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter)
04. [[Math]理解卡尔曼滤波器 (Understanding Kalman Filter)](https://segmentfault.com/a/1190000000514987#item-1)
05. [卡尔曼滤波器的原理以及在matlab中的实现](https://www.youtube.com/watch?v=2-lu3GNbXM8)