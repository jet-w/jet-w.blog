---
title: "Prac: ARCH & GARCH"
index: true
icon: "/assets/icon/common/practices.svg"
author: Haiyue
date: 2023-08-31
category:
  - math
tag:
  - Rain 
  - excel
---

We have know what is the AR, ARMA model. There are relationships between `ARCH` and `AR`, `GARCH` and `ARMA`. If we know the relationshps among them, it will be very helpful for understanding what we do in this practice.

The `ARCH` model is appropriate when the <span style="color:orange;font-weight:bold">error variance</span> in a time series <span style="color:orange;font-weight:bold">follows an autoregressive (AR) model</span>; if an <span style="color:orange;font-weight:bold">autoregressive moving average (ARMA) model is assumed for the error variance</span>, the model is a <span style="color:orange;font-weight:bold">generalized autoregressive conditional heteroskedasticity (`GARCH`) model</span>.

## ARCH mdoel
![ARCH model snapshot](/data/unisa/AdvancedAnalytic1/PracticalArchGArch/ARCH.png)
The description for each column is like below.

`D` column is the original data. 
`E` column is the difference between original data and it's mean. 
`F` column is the square of column `E`. 
`G` column is the forcast of AR(4) model of `F`.
`H` column is the square root of `G`.
`I` column is the lower bound based `H` and bounds coefficient that defined by `N27`.
`J` column is the upper bound based `H` and bounds coefficient that defined by `N27`.
`K` column represents whether original data locats between the bounds defined by `I` and `J`.

`N27` is the coefficient of bounds.
`N28` is the coverage rate calculated based on `K` column.

Based on the desciption of each column above, we could get the fomula for each below.
``` excel
E2 = D2-N$12
F2 = E2^2
G6 = $N$7 + $N$3*F5 + $N$4*F4 + $N$5*F3 + $N$6*F2
H6 = SQRT(G6)
I6 = $N$12-$N$27*H6
J6 = $N$12+$N$27*H6
K6 = IF(AND(D6>I6,D6<J6),1,0)
```

## GARCH mdoel



## [Download Dataset](/data/unisa/AdvancedAnalytic1/PracticalArchGArch/Arch_Garch_examples.xlsx)



## References
[01. Autoregressive conditional heteroskedasticity](https://en.wikipedia.org/wiki/Autoregressive_conditional_heteroskedasticity#:~:text=The%20ARCH%20model%20is%20appropriate,conditional%20heteroskedasticity%20(GARCH)%20model.)