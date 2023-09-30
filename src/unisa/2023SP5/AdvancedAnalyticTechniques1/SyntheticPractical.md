---
title: "Practices: Synthetic Generation"
index: true
icon: "/assets/icon/common/practices.svg"
author: Haiyue
date: 2023-09-28
category:
  - math
tag:
  - Rain 
  - excel
---

## Part 1: How to generate Random data with Excel

### Generate Normal Distribution Ramdom Values
The following pictures show how to generate 1000 normal distribution data.
**Step 1**

![Random Num Generation](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGeneration.png)
**Step 2**
![Random Num Generation Params](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGenerationParams.png)
**Step 3**
Please to evaluation the distribution of the data
![Evaluation](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Evaluation.png =700x)

### Generate Realisation
``` VBA
B6 = A6
B7 = $D$1*B6+A7
```
Fill other cells follow the fomula of `B7`
## Part 2: Lower and Upper Bounds
The whole solar dataset need to seperate into two parts for forecasting. The first part is the `FS Model` that has been given in column `B`, then using `AR(1)` model to forecast the residuals that store in column `C`. The parameter of AR(1) is given in `L1`.
![Lower And Upper Bounds](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/LowerAndUpperBounds.png)

The sum of the two models form the final model. The next step is to construct the lower and upper bounds to estimate the final model. The lower bound equals final model  substract a `specified value`, and the upper bound equals final model add `the same value`. Then to using the bounds to estimate whether the real value been `covered` by the final model.

According to the the content above, the formulas in excel should be like below:
``` VBA
C2 = A2- B2

D3 = C2*$J$1

E2 = B2 + D2

F2 = E2-$L$5*$L$6
G2 = E2+$L$5*$L$6

H2 = AND(A2>F2,A2<G2)
I2 = IF(H2=TRUE,1,0)
```

## Uniform to resample

**Step 1:** Using Random generation to generate a series Uniform distributed data as the probability to resample data from noises.
![Alt text](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomUniform.png =300x)

**Step 2:** Resample the noises using the probabilities
``` VBA
E2=PERCENTILE.INC(C$2:C$366,D2)
```
**Step 3:** Using AR(1) to model the new Noises
``` VBA
F2 = E2
F3 = =$J1*F2+E3
```
**Step 4:** To form the final model
``` VBA
G2 = B2+F2
```

**Step 5:** Visualize the final result
![Alt text](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Result.png)

![Alt text](/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Visualization.png)

**Step 6:** To compare the result from different uniform data
1. generate multi uniform data as the probabilities
2. Store the final models.
3. Comapre the statistical information of the final models.



## [Download Data](/data/unisa/AdvancedAnalytic1/SyntheticPractical/Daily%20DataAnslec.xlsx)


## References
[01 What is a z-score? What is a p-value?](https://desktop.arcgis.com/en/arcmap/latest/tools/spatial-statistics-toolbox/what-is-a-z-score-what-is-a-p-value.htm)