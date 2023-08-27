---
title: Assignment 1
index: false
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-25
category:
  - Assignment
---

## Requirements
### Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic1/assignment1/Assignment1AAT.pdf" ratio="1" />
::: 


### Resources
::: details
[Access Resources](https://lo.unisa.edu.au/mod/folder/view.php?id=3393720)

![Assignment Resources](/data/unisa/AdvancedAnalytic1/assignment1/assignment_res.png)
:::


::: tabs
@tab Quesion1 <span style="color:red;font-weight:bold;">(15 marks)</span>
1. For this question you will need the files from the website named
    `a`. HalfHourSolarRadiation2017.xlsx
    `b`. HalfHourSolarRadiation2018.xlsx
    `c`. PowerSpectrumGeneric.xlsm
    `d`. SolarTemplate.xlsm
    
    The tasks for this question are listed below. 
    1. Take the solar radiation data from File `a`, and copy it into File `c`, and run the <span style="color:orange">power spectrum tool</span> to find out which <span style="color:orange">frequencies</span> are important.
    2. Use File `c` to find the <span style="color:orange">Fourier series model </span>for the seasonality. 
        ::: info
        Note that the Template is designed for hourly data. You will have to make some adjustments to use it for half hourly data plus change the relevant frequencies if necessary.
        :::
    3. Take the <span style="color:orange">difference</span> between the data and the Fourier model - the residuals - and take them to <span style="color:orange">Minitab</span> and <span style="color:orange">find the best ARMA(p,q) model</span>.
    4. Use the <span style="color:orange">ARMA model to forecast one step ahead</span> for the residuals and add that to the Fourier series model to get the full one step ahead forecast.
    5. Use the <span style="color:orange">error metrics defined below to evaluate the model</span>.
    6. Use the <span style="color:orange">models you have developed</span> for 2017 to see <span style="color:orange">how they perform for the 2018 data</span>, the out of sample data. Comment on the differences in the error metrics.

    The <span style="color:orange">Normalised Mean Bias Error (NMBE)</span> is defined by taking the difference between the data $y_i$ and thee model $\hat{y}_i$ for all $i$ and dividing by the number of data values. To normalise it, we divide by the mean of the data. Note that for solar radiation, we only do the calculation for solar elevation greater than or equal to 10 degrees. That is why I included the elevation data.
    $$
    NMBE=\frac{\sum_{i=1}^{n}y_i-\hat{y}_i}{n\bar{y}}
    $$

    We also define the <span style="color:orange">Normalised Mean Absolute Error (NMAE)</span>
    $$
    NMAE=\frac{\sum_{i=1}^{n}|y_i-\hat{y}_i|}{n\bar{y}}
    $$

@tab Question 2 <span style="color:red;font-weight:bold;">(10 marks)</span>
2. For this question you will need the files
    `a`. SolarFarm.xlsx
    `b`. PowerSpectrumGeneric.xlsm
    `c`. SolarTemplate.xlsm
    
    In File `a` is solar farm output in MegaWatts(MW) for every five minutes for a year. 
    1. You are to use the power spectrum to <span style="color:orange">decide on the necessary frequencies</span>, and 
    2. then alter the File `c` to <span style="color:orange">find the Fourier series model</span>. 
    3. Then <span style="color:orange">calculate the residuals</span> and <span style="color:orange">find their ARMA model</span>. 
    4. Then calculate the one step ahead <span style="color:orange">forecast</span> and <span style="color:orange">evaluate the error metrics</span> for all values of output greater than zero.

@tab Question 3 <span style="color:red;font-weight:bold;">(10 marks)</span>
The file on the website `SnowtownWindFarm.xlsx` has a one year of half hour output from a wind farm in South Australia. 

1. Use the power spectrum file from above to show that there is <span style="color:orange">no significant seasonality</span> in the data. 
2. You are now to <span style="color:orange">Compare</span> the best `AR(p)` model with the best `ARMA(p,q)` model that you can find. Use the <span style="color:orange">error metrics</span> for your comparison. 
3. <span style="color:orange">Is there a difference</span> in the number of parameters to estimate in the two models? If so, <span style="color:orange">is it worth it</span> to use the one with extra parameters?
:::



---
All works below
::: tabs
@tab Question 1
The GHI column is selected as the target variable. Because of the data is half hourly dataset, it's a mess of data and not easy to use for analysis. So I convert it into daily data.

Convert code
``` python
import pandas as pd
import math

hh2017_data = pd.read_csv('halfhourly2017_solar.csv')
hh2017_data['group'] = hh2017_data.index / 48
hh2017_data['group'] = hh2017_data['group'].apply(math.floor)
daily_data = hh2017_data.groupby('group').sum()
daily_data.to_csv('daily2017_data.csv')
```

We will get a daily data with 365 days. Using Power Spectrum method to get the frequencies like below.
![Daily Frequency](/data/unisa/AdvancedAnalytic1/assignment1/frequencies.png)
@tab Question 2

@tab Question 3


:::