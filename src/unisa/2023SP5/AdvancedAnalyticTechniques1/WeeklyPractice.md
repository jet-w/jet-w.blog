---
title: Practices
index: true
icon: timeline
author: Haiyue
date: 2023-08-02
category:
  - math
tag:
  - linear regression
  - excel
---
[How to find Tools in Excel](https://zhuanlan.zhihu.com/p/61531510)

## Trend
### **Practice 1**: Linear Regression
#### **Part1**: Simple Linear Regression
::: details <span style="color:red;font-weight: bold;">Click for</span> Steps of Simple Linear Regression
##### **Step 1**: View the original data set
![Original](/data/unisa/AdvancedAnalytic1/LakeHuron-1.png)

##### **Step 2**: Year subtract 1875 for starting from 0
![Add New Column](/data/unisa/AdvancedAnalytic1/LakeHuron-2.jpg)

##### **Step 3**: Select Analysis tool
![Analysis tool](/data/unisa/AdvancedAnalytic1/LakeHuron-3.png)

##### **Step 4**: Select regression tools
![Select Regression](/data/unisa/AdvancedAnalytic1/LakeHuron-4.jpg)

##### **Step 5**: Setting parameter for regression
![Setting Parameters](/data/unisa/AdvancedAnalytic1/LakeHuron-5.jpg)

##### **Step 6**: Results and Visualization
![Results](/data/unisa/AdvancedAnalytic1/LakeHuron-6.jpg)
::: info More Details of the Parameters
Please refer [here](./LinearRegressionAnalysis) for more information of each parameters
:::


#### **Part2**: Multiple Linear Regression
::: details <span style="color:red;font-weight: bold;">Click for</span> Steps of Multiple Linear Regression
Do Regression on $x$ and $x^2$.
##### **Step 1**: Copy Data to a New Place
![Copy data](/data/unisa/AdvancedAnalytic1/LakeHuron-part2-1.jpg)

##### **Step 2**: Create new column
![New column $x^2$](/data/unisa/AdvancedAnalytic1/LakeHuron-part2-2.jpg)

##### **Step 3**: Select Analysis tool and set parameters
Select tool please refer to Step3 and Step 4 from Part1
![Set Parameters](/data/unisa/AdvancedAnalytic1/LakeHuron-part2-3.jpg)

##### **Step 4**: Results
![Results](/data/unisa/AdvancedAnalytic1/LakeHuron-part2-4.jpg)
:::


### **Minitab**: Simple Linear Regression
[Download Minitab](https://drive.google.com/file/d/1G7GS4dQ-b22q4gMHFv4wojYlHMJHgk-m/view?usp=drive_link)

::: details <span style="color:red;font-weight: bold;">Click for</span> Steps on Minitab
#### **Step 1**: Copy Data to Minitab
![Copy data](/data/unisa/AdvancedAnalytic1/minitab-simple-1.jpg)

#### **Step 2**: Select Regression Tool
![Tool](/data/unisa/AdvancedAnalytic1/minitab-simple-2.jpg)

#### **Step 3**: Set Parameters
![Storage](/data/unisa/AdvancedAnalytic1/minitab-simple-3.jpg)
![Graphs](/data/unisa/AdvancedAnalytic1/minitab-simple-4.jpg)

#### **Step 4**: Results
![Numerical Results](/data/unisa/AdvancedAnalytic1/minitab-simple-5.jpg)

#### **Step 5**: Visualization
![Select Menu](/data/unisa/AdvancedAnalytic1/minitab-simple-6.jpg)

![Setting Parameters](/data/unisa/AdvancedAnalytic1/minitab-simple-7.jpg)

![Visualization Result](/data/unisa/AdvancedAnalytic1/minitab-simple-8.jpg)
::: 

## Seasonality
### **Practice 2**:: Solver
Use Solver to find an optimal (maximum or minimum) value for a formula in one cell — called the objective cell — subject to constraints, or limits, on the values of other formula cells on a worksheet. Solver works with a group of cells, called decision variables or simply variable cells that are used in computing the formulas in the objective and constraint cells. Solver adjusts the values in the decision variable cells to satisfy the limits on constraint cells and produce the result you want for the objective cell.

Put simply, you can use Solver to determine the maximum or minimum value of one cell by changing other cells. For example, you can change the amount of your projected advertising budget and see the effect on your projected profit amount.

::: details <span style="color:red;font-weight: bold;">Click for</span> Steps for using solver
#### Step 1: Planning
Fill each cell using the formula below
``` vba
N4 =AVERAGE(N5:N76)
 
O1 =2*PI()/12
P1 =4*PI()/12
Q1 =6*PI()/12
 
O5 =O$2*COS(O$1*$M5)+O$3*SIN(O$1*$M5)
P5 =P$2*COS(P$1*$M5)+P$3*SIN(P$1*$M5)
Q5 =Q$2*COS(Q$1*$M5)+Q$3*SIN(Q$1*$M5)
R5 =SUM(O5:Q5)+$N$4
S5 =(N5-R5)^2

S3 =SUM(S5:S77)
```
Drag the formulas on row 5 to fill the rest of cells.

![The number after filling the formula](/data/unisa/AdvancedAnalytic1/Solver-1.jpg)

#### Step 2: Select the solver
![Setting parameters 1](/data/unisa/AdvancedAnalytic1/Solver-2.jpg)

#### Step 2: Setting the parameters of solver
![Setting parameters 2](/data/unisa/AdvancedAnalytic1/Solver-3.jpg)
![Visualization Result](/data/unisa/AdvancedAnalytic1/Solver-4.jpg)

#### Step 2: View the result
![Visualization Result](/data/unisa/AdvancedAnalytic1/Solver-5.jpg)
:::

## **Practice 3**: Prediction

## Resources
### Practice Week 5 (Video)
::: details Practical video for week 5
<YouTube id="l86bk7thYSE" />
:::


## References
01. The practice instruction from [John](https://people.unisa.edu.au/john.boland) in SP52023.
02. [Software office website](https://support.microsoft.com/en-gb/office/define-and-solve-a-problem-by-using-solver-5d1a388f-079d-43ac-a7eb-f63e45925040#:~:text=Solver%20adjusts%20the%20values%20in,cell%20by%20changing%20other%20cells.)
