---
title: "Practices(W6: Rainfall Modelling)"
index: true
icon: timeline
author: Haiyue
date: 2023-08-31
category:
  - math
tag:
  - Rain 
  - excel
---


## Rainfall Modelling (W6)
### Part1: Getting Gamma model parameters
* The instructions
    ::: info instructions
    1.	Take the file called `PoorakaMonthlyFit.xls`.  It contains a sheet that shows the fitting procedure <span style="color:orange">using Likelihood to fit a Gamma Distribution</span> to data for the 87 years for June for Pooraka.  Try matching moments to see what you get for the parameters as well. 
    2.	You are to repeat this for May-September.  Check out both the methods and apply to the other months.  Then see about in each case.
    :::

* Setting Parameters
``` VBA
'The likelihood fomula
B3 = (D$1-1)*LN(A3)-A3/$D$2-$D$1*LN($D$2)-$D$3

'initialize the α and β
D1 = 1
D2 = 2
```
Other cells please refer to the picture below to fill.
![The formula before maximizing](/data/unisa/AdvancedAnalytic1/w6/rainfall_beformaximizing.png =700x)

Using the solver to maximize the sum of likelihood. Please set the parameter follow the picture below.
![Using solver to maximize](/data/unisa/AdvancedAnalytic1/w6/rainfall_solver.png =500x)
* Note:
    ::: info
    Please note, it is necessary add a constraint that $\alpha, \beta > 0$.
    :::
After maximizing, the result will be like the picture below.
![The formula](/data/unisa/AdvancedAnalytic1/w6/rainfall.png =700x)

### Part2: Getting gamma distribution data
* The instructions
    ::: info instructions
    3.	For synthetic generation, it is a little more complicated but not much.  I have gone to Data Analysis and then Random Number Generation.  Pick 1 variable, and 3000 values (I did 200 just to make sure the file was small), Uniform Distribution, and then the range is [0.0001,0.9999] so we don’t get any odd values in the synthetic generation.  The Output Range starts in `A5`.  In `B5`, you will see I have the formula `=GAMMAINV(A5,$D$1,$D$2)`.  That selects the rainfall total from the `Gamma Distribution` with our parameter estimates that corresponds to the probability in `A5`.  Copy that down for all the values in column A.  Repeat for all months.  Then, put the synthetic monthly totals in adjoining columns in a new sheet.  Find the seasonal totals for all 3000 cases.  Put the columns of historical data side by side in the same sheet.  Once again find the totals.  Then using the Histogram menu item on Data Analysis, compare the two sets of totals – you will need to use the cumulative probability option.
    4.	Markov Equilibrium Vector.  In cells `A1:B2` put the values of the transition matrix for the daily rainfall, 0.73, 0.27, 0.36, 0.64 from the workshop.  The next part is tricky so follow carefully.  Highlight cells `D1:E2`, and enter the formula `=mmult(A1:B2,A1:B2)` and hold down the shift and control keys and then hit enter.  You will get the transition matrix squared.  Square this result in cells `G1:H2`, using the same technique.  Repeat until you get convergence.  How many powers of the matrix did you get to for convergence? Now calculate the equilibrium vector by using the procedure given in the workshop and compare results.  
    :::

### Getting histogram
Step 1. Get max and min of the data.
Step 2. Construct the bins data of the data.
![Step1&2](/data/unisa/AdvancedAnalytic1/w6/step1&2.png =100x)
Step 3. Using the histogram tool to generate frequencies.
![histogram tool](/data/unisa/AdvancedAnalytic1/w6/histogram_tool.png =300x)
![histogram tool parameters](/data/unisa/AdvancedAnalytic1/w6/histogram_tool_parameters.png =300x)
![histogram result](/data/unisa/AdvancedAnalytic1/w6/histogram_result.png =300x)

### Geting GAMMA.DATA
Step 1: Constructing data
``` VBA
S2 = Q2/2
S3 = S2+5
T2 = GAMMA.DIST(AJ2,$D$1,$D$2,FALSE())
U2 = T2*SUM(R:R)*5
```

Step 2: Visualize the frequency and Gamma frequency
![Final Result](/data/unisa/AdvancedAnalytic1/w6/FrequencyAndGammaFrequency.png)

:::
