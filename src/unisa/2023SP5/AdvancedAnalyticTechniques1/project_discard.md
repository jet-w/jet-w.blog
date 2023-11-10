---
title: Project - Kalman Filter (Discard)
index: true
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-10-29
category:
  - Assignment
---
[My presentation slides](/data/unisa/AdvancedAnalytic1/project/Kalman%20Filter.pptx)


## What is Kalma Filter
The Kalman Filter is a mathematical algorithm used for estimating and predicting the state of a dynamic system, particularly in the presence of noisy or uncertain data. It consist of five equations.

<div style="display:flex;flex-direction: row;">
<div style="padding-right: 20px">

***Predict State***

---
***<span style="color:red">Predict State:</span>*** 
$\hat{x}_{n+1,n} = F\hat{x}_{n,n} + Gu_n + \omega_n$
***<span style="color:red">Predict Noise:</span>*** 
$\hat{P}_{n+1,n} = F\hat{P}_{n,n}F^T + Q$
</div>

<div style="padding-left: 20px">

***Update State***

---
***<span style="color:red">Kalman Gain:</span>***  
$K_n = P_{n, n-1}H^T(HP_{n,n-1}H^T + R_n)^{-1}$
***<span style="color:red">Update State:</span>*** 
$\hat{x}_{n,n} = \hat{x}_{n,n-1} + K_n(z_n-H\hat{x}_{n,n-1})$
***<span style="color:red">Update Noise:</span>*** 
$P_{n,n} = (I-K_nH)P_{n,n-1}(I-K_nH)^T + K_nR_nK_n^T$
</div>
</div>


## STATE EXTRAPOLATION EQUATION
$\hat{x}_{n+1,n} = F\hat{x}_{n,n} + Gu_n + \omega_n$

| Item | Mean |
| -- | -- |
| $\hat{x}_{n+1,n}$ |  predicted system state vector at time step $n+1$ |
| $\hat{x}_{n,n}$ |  estimated system state vector at time step $n$ |
| $u_n$ |  a <span style="color:orange">control variable</span> or <span style="color:orange">input variable</span> - a measurable (deterministic) input to the system |
| $w_n$ | a <span style="color:orange">process noise</span> or disturbance - an unmeasurable input that affects the state |
| $F$ | a <span style="color:orange">state transition matrix</span> |
| $G$ | a <span style="color:orange">control matrix</span> or <span style="color:orange">input transition matrix</span> (mapping control to state variables) |






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

### Track constant velocity
$v= \frac{\Delta x}{\Delta t}$
$x_{n+1} = x_n + \Delta t*v_n$
$v_{n+1} = v_n$

### How to track a Car
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
\end{bmatrix}u_t$

Then the formulas could be transformed into
$\hat x^- = F\hat x_{t-1} + Bu_{t-1}$


### How to track a plane
If we want to track a plane, how to do it.
The state will be 
$x = x_0 + v_0\Delta t + \frac{1}{2}a\Delta t^2$

::: info
$x$: is the position of a plan
$x_0$: the initial postion 
$v_0$: the initial speed
$a$: The acceleration
$\Delta t$: Sample period
:::

Because of we location a 3 dimentions world. There are 3 components in 3 different direction.

$
x = \begin{cases}
   x= x_0 + v_x\Delta t + \frac{1}{2}a_x\Delta t^2 \\
   y= y_0 + v_y\Delta t + \frac{1}{2}a_y\Delta t^2 \\
   z= z_0 + v_z\Delta t + \frac{1}{2}a_z\Delta t^2
\end{cases}
$

So the state in three world would be like below.
$
\begin{bmatrix}
   x \\
   y \\
   y \\
   v_x \\
   v_y \\
   v_z \\
   a_x \\
   a_y \\
   a_z
\end{bmatrix}
$
$
\begin{bmatrix}
   v_x = \dot{x} \\
   v_y = \dot{y} \\
   v_z = \dot{z} \\
   a_x = \ddot{x} \\
   a_y = \ddot{y} \\
   a_z = \ddot{z}
\end{bmatrix}
$

$
\begin{cases}
   Position_n &= Position_{(n-1)} + Velocity_{(n-1)}\Delta t + \frac{1}{2}Accelerate_{(n-1)}\Delta t^2 \\
   Velocity_n &= Velocity_{(n-1)} + Accelerate_{(n-1)}\Delta t \\
   Accelerate_n &= Accelerate_{(n+1)}
\end{cases}
$

$
\begin{bmatrix}
   x \\
   y \\
   y \\
   \dot{x} \\
   \dot{y} \\
   \dot{z} \\
   \ddot{x} \\
   \ddot{y} \\
   \ddot{z}
\end{bmatrix}
$



$
\begin{bmatrix}
   position \\
   velocity \\
   acceleration
\end{bmatrix}
$


$
\begin{cases}
   x_n = x_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   y_n = y_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   z_n = z_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   \dot{x}_n = \dot{x}_{n-1} + \ddot{x}_{n-1}\Delta{t}\\
   \dot{y}_n = \dot{y}_{n-1} + \ddot{7}_{n-1}\Delta{t}\\
   \dot{z}_n = \dot{z}_{n-1} + \ddot{z}_{n-1}\Delta{t}\\
   \ddot{x}_{n} = \ddot{x}_{n-1}\\
   \ddot{y}_{n} = \ddot{y}_{n-1}\\
   \ddot{z}_{n} = \ddot{z}_{n-1}
\end{cases}
$


<div style="display:flex;flex-direction: row;">
<div style="padding-right: 20px">

***Predict State***

---
***<span style="color:red">Predict State:</span>*** 
$\hat{x}_{n+1,n} = F\hat{x}_{n,n} + Gu_n + \omega_n$
***<span style="color:red">Predict Noise:</span>*** 
$\hat{P}_{n+1,n} = F\hat{P}_{n,n}F^T + Q$
</div>

<div style="padding-left: 20px">

***Update States***

---
***<span style="color:red">Kalman Gain:</span>***  
$K_n = P_{n, n-1}H^T(HP_{n,n-1}H^T + R_n)^{-1}$
***<span style="color:red">Update State:</span>*** 
$\hat{x}_{n,n} = \hat{x}_{n,n-1} + K_n(z_n-H\hat{x}_{n,n-1})$
***<span style="color:red">Update Noise:</span>*** 
$P_{n,n} = (I-K_nH)P_{n,n-1}(I-K_nH)^T + K_nR_nK_n^T$
</div>
</div>

---

$
\begin{cases}
   x_n = x_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   y_n = y_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   z_n = z_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   \dot{x}_n = \dot{x}_{n-1} + \ddot{x}_{n-1}\Delta{t}\\
   \dot{y}_n = \dot{y}_{n-1} + \ddot{7}_{n-1}\Delta{t}\\
   \dot{z}_n = \dot{z}_{n-1} + \ddot{z}_{n-1}\Delta{t}\\
   \ddot{x}_{n} = \ddot{x}_{n-1}\\
   \ddot{y}_{n} = \ddot{y}_{n-1}\\
   \ddot{z}_{n} = \ddot{z}_{n-1}
\end{cases} = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2}\\
   0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}  
\begin{bmatrix}
   x_{(n-1)} \\
   y_{(n-1)} \\
   z_{(n-1)} \\
   \dot{x}_{ (n-1)} \\
   \dot{y}_{ (n-1)} \\
   \dot{z}_{ (n-1)} \\
   \ddot{x}_{(n-1)} \\
   \ddot{y}_{(n-1)} \\
   \ddot{z}_{(n-1)}
\end{bmatrix}
$

The formula could transform to state prediction. We will set the control vector and transition matrix like below.

The control vector $u_n$:
$
u_n = \begin{bmatrix}
   \ddot{x}_n\\
   \ddot{y}_n\\
   \ddot{z}_n
\end{bmatrix}
$

The state transition matrix $F$:
$
F = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$

The control matrix $G$:
$
G = \begin{bmatrix}
   0.5\Delta{t^2} & 0 & 0\\
   0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 0.5\Delta{t^2}\\
   \Delta{t} & 0 & 0\\
   0 &\Delta{t} & 0\\
   0 & 0 &\Delta{t}
\end{bmatrix}
$

Thus the state prediction formula $\hat{x}_{n+1,n} = F\hat{x}_{n,n} + Gu_n$ will transform like below.
$
\hat{x}_{n+1,n} = 
\begin{bmatrix}
   x_{(n+1,n)} \\
   y_{(n+1,n)} \\
   z_{(n+1,n)} \\
   \dot{x}_{(n+1,n)} \\
   \dot{y}_{(n+1,n)} \\
   \dot{z}_{(n+1,n)}
\end{bmatrix} = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
   x_{(n,n)} \\
   y_{(n,n)} \\
   z_{(n,n)} \\
   \dot{x}_{(n,n)} \\
   \dot{y}_{(n,n)} \\
   \dot{z}_{(n,n)}
\end{bmatrix} + \begin{bmatrix}
   0.5\Delta{t^2} & 0 & 0\\
   0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 0.5\Delta{t^2}\\
   \Delta{t} & 0 & 0\\
   0 &\Delta{t} & 0\\
   0 & 0 &\Delta{t}
\end{bmatrix}\begin{bmatrix}
   \ddot{x}_n\\
   \ddot{y}_n\\
   \ddot{z}_n
\end{bmatrix}
$


#### Airplane without control input

Consider an airplane moving in three-dimensional space with constant acceleration. 

The state vector $\hat{x}_n = \begin{bmatrix}
   x \\
   y \\
   y \\
   \dot{x} \\
   \dot{y} \\
   \dot{z} \\
   \ddot{x} \\
   \ddot{y} \\
   \ddot{z}
\end{bmatrix}
$

The state transition matrix $
F = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2}\\
   0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix} 
$

The state extrapolation equation is: 
$
\begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0 & 0.5\Delta{t^2}\\
   0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}  
\begin{bmatrix}
   x_{(n-1)} \\
   y_{(n-1)} \\
   z_{(n-1)} \\
   \dot{x}_{ (n-1)} \\
   \dot{y}_{ (n-1)} \\
   \dot{z}_{ (n-1)} \\
   \ddot{x}_{(n-1)} \\
   \ddot{y}_{(n-1)} \\
   \ddot{z}_{(n-1)}
\end{bmatrix} \rightarrow 
\begin{cases}
   x_n = x_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   y_n = y_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   z_n = z_{n-1} + v_{n-1}\Delta t + \frac{1}{2}a_{n-1}\Delta t^2\\
   \dot{x}_n = \dot{x}_{n-1} + \ddot{x}_{n-1}\Delta{t}\\
   \dot{y}_n = \dot{y}_{n-1} + \ddot{7}_{n-1}\Delta{t}\\
   \dot{z}_n = \dot{z}_{n-1} + \ddot{z}_{n-1}\Delta{t}\\
   \ddot{x}_{n} = \ddot{x}_{n-1}\\
   \ddot{y}_{n} = \ddot{y}_{n-1}\\
   \ddot{z}_{n} = \ddot{z}_{n-1}
\end{cases}
$



#### Airplane with control input
he state vector $\hat{x}_n$ that describes the estimated airplane position and velocity in a cartesian coordinate system like below.

$
\hat{x}_n = \begin{cases}
   \hat{x}_n\\
   \hat{y}_n\\
   \hat{z}_n\\
   \hat{\dot{x}}_n\\
   \hat{\dot{y}}_n\\
   \hat{\dot{z}}_n
\end{cases}
$

The control vector $u_n$ that <span style="color:orange">describes the measured airplane acceleration</span> in a cartesian coordinate system 
$
u_n = \begin{bmatrix}
   \ddot{x}_n\\
   \ddot{y}_n\\
   \ddot{z}_n
\end{bmatrix}
$

The state transition matrix: $
F = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$

The control matrix: $
G = \begin{bmatrix}
   0.5\Delta{t^2} & 0 & 0\\
   0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 0.5\Delta{t^2}\\
   \Delta{t} & 0 & 0\\
   0 &\Delta{t} & 0\\
   0 & 0 &\Delta{t}
\end{bmatrix}
$

Thus the state prediction formula $\hat{x}_{n+1,n} = F\hat{x}_{n,n} + Gu_n$ will transform like below.

$
\hat{x}_{n+1,n} = 
\begin{bmatrix}
   x_{(n+1,n)} \\
   y_{(n+1,n)} \\
   z_{(n+1,n)} \\
   \dot{x}_{(n+1,n)} \\
   \dot{y}_{(n+1,n)} \\
   \dot{z}_{(n+1,n)}
\end{bmatrix} = \begin{bmatrix}
   1 & 0 & 0 &\Delta{t} & 0 & 0\\
   0 & 1 & 0 & 0 &\Delta{t} & 0\\
   0 & 0 & 1 & 0 & 0 &\Delta{t}\\
   0 & 0 & 0 & 1 & 0 & 0\\
   0 & 0 & 0 & 0 & 1 & 0\\
   0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
   x_{(n,n)} \\
   y_{(n,n)} \\
   z_{(n,n)} \\
   \dot{x}_{(n,n)} \\
   \dot{y}_{(n,n)} \\
   \dot{z}_{(n,n)}
\end{bmatrix} + \begin{bmatrix}
   0.5\Delta{t^2} & 0 & 0\\
   0 & 0.5\Delta{t^2} & 0\\
   0 & 0 & 0.5\Delta{t^2}\\
   \Delta{t} & 0 & 0\\
   0 &\Delta{t} & 0\\
   0 & 0 &\Delta{t}
\end{bmatrix}\begin{bmatrix}
   \ddot{x}_n\\
   \ddot{y}_n\\
   \ddot{z}_n
\end{bmatrix}
$

## References
01. [Kalman Filter](https://www.kalmanfilter.net/CN/default_cn.aspx)
02. [卡尔曼滤波器](https://longaspire.github.io/blog/%E5%8D%A1%E5%B0%94%E6%9B%BC%E6%BB%A4%E6%B3%A2/)
03. [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter)
04. [[Math]理解卡尔曼滤波器 (Understanding Kalman Filter)](https://segmentfault.com/a/1190000000514987#item-1)
05. [卡尔曼滤波器的原理以及在matlab中的实现](https://www.youtube.com/watch?v=2-lu3GNbXM8)