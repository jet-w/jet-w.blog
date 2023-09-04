---
title: Assignment 1
index: false
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-08-25
sidebar: false
category:
  - Assignment
---

## Requirements
### Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic1/assignment1/Assignment1AAT.pdf" ratio="1" />
::: 


### Requirements Analysis
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
        Note that <span style="color:red;font-weight:bold;">the Template is designed for hourly data</span>. You will have to make some adjustments to use it for half hourly data plus change the relevant frequencies if necessary.
        :::
    3. Take the <span style="color:orange">difference</span> between the data and the Fourier model - the residuals - and take them to <span style="color:orange">Minitab</span> and <span style="color:orange">find the best ARMA(p,q) model</span>.
    4. Use the <span style="color:orange">ARMA model to forecast one step ahead</span> for the residuals and add that to the Fourier series model to get the full one step ahead forecast.
    5. Use the <span style="color:orange">error metrics defined below to evaluate the model</span>.
    6. Use the <span style="color:orange">models you have developed</span> for 2017 to see <span style="color:orange">how they perform for the 2018 data</span>, the out of sample data. Comment on the differences in the error metrics.

    The <span style="color:orange">Normalised Mean Bias Error (NMBE)</span> is defined by taking the difference between the data $y_i$ and thee model $\hat{y}_i$ for all $i$ and dividing by the number of data values. To normalise it, we divide by the mean of the data. 
    ::: tip
    Note that for solar radiation, we only do the calculation for solar elevation greater than or equal to 10 degrees. That is why I included the elevation data.
    :::
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
## All works below

### Question 1
The GHI column is selected as the target variable. Because of the data is half hourly dataset, it's a lots of data and not easy to use for analysis. So I convert it into daily data. 

::: tabs
@tab Excel
#### Taks1: Getting Frequencies
* DFT
Using `powerspectrum` excel to get the best frequencies.
    ::: info
    <span style="color:orange">Step1</span>: using half-hourly data
    <span style="color:orange">Step2</span>: Number of data: 17520, Number of frequencies: 2000
    :::
![solar radiation 2017 DFT](/data/unisa/AdvancedAnalytic1/assignment1/solar_dft.png)
It could easily be found that the power of frequencies is greater than 500. Then we could select the value like 
![best_frequencies](/data/unisa/AdvancedAnalytic1/assignment1/solar_best_frequencies.png)
1. Results
    ::: info Results
    The best frequencies are <span style="color:orange">[1, 364,365, 366, 730]</span>.
    :::

#### Task2: Getting the fourier model
* Seasonality
We could calculate the coefficients for the seasonality using fourier model.
![fourier_model](/data/unisa/AdvancedAnalytic1/assignment1/fourier_model.png)
The parameters like below:
``` VBA
P3 = SUM(O5:O17524)
G3 = AVERAGE(G5:G17524)

H1 = 2*PI()/17520*H$4
I1 = 2*PI()/17520*I$4
J1 = 2*PI()/17520*J$4
K1 = 2*PI()/17520*K$4
L1 = 2*PI()/17520*L$4

'The formula should be drag down for filling the necessary cells
H5 = H$2*COS(H$1*$F5)+H$3*SIN(H$1*$F5)
I5 = I$2*COS(I$1*$F5)+I$3*SIN(I$1*$F5)
J5 = J$2*COS(J$1*$F5)+J$3*SIN(J$1*$F5)
K5 = K$2*COS(K$1*$F5)+K$3*SIN(K$1*$F5)
L5 = L$2*COS(L$1*$F5)+L$3*SIN(L$1*$F5)

M5 = SUM(H5:L5)+$G$3
O5 = (G5-M5)^2
```
We should use the solver to minimize the target function in `P3`

![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solar_solver.png =400x)

We could see the seasonality results
![Whole fitting results](/data/unisa/AdvancedAnalytic1/assignment1/wholefittingresults.png)

![Part fitting results](/data/unisa/AdvancedAnalytic1/assignment1/partresult.png)

#### Task 3: Getting the coefficients for AR model
Now we got residuals
![Residuals](/data/unisa/AdvancedAnalytic1/assignment1/residuals.png)
The formula of residuals
``` VBA
O5 = G5-M5
```
Then copy all the residuals to minitab for autocorrelation analysis.
Auto Corrrelation Result
![Auto Correlation](/data/unisa/AdvancedAnalytic1/assignment1/autocorrelation.png =400x)

Partial Auto Corrrelation Result
![Partial Auto Correlation](/data/unisa/AdvancedAnalytic1/assignment1/partialautocorrelation.png =400x)


According to the results of Auto correlation and Partial Auto Correlation, it can see the values are correlated with the past values.


Now we try to use the ARIMA to find the coefficients of the forcasting model.

The first step we try to set the autoregressive is 5.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/autoregressiveparams.png =400x)
The results are here.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/autoregressive5-results.png =400x)

We could see the pvalue of AR5 and Constant are more then 0.05, so we need the exclude the constant and decrease the number of lags, now we try to set autoregressive is 4.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/autoregressiveparams4.png =400x)
According to the results we could see all the pvalues are less than 0.05, so we could use AR(4) model to model the residuals.


#### Task 4: Using the ARMA model to forecast
Now we copy the coefficients to excel, and try to model the AR(4) like the picture below.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/AR(4).png)
``` VBA
S9 = Q8*$V$5 + Q7*$V$6 + Q6*$V$7 + Q5*$V$8
```



We could to visualize the fitting result of AR(4)
Partial Fitting Result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/AR(4)partialfittingresult.png)
Whole Data Fitting Result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/AR(4)wholefittingresult.png)

According to the results above, we could know, the seasonality and AR(4) could fitting very well on our data. Now we need to combine the two components to see the final result.

![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/finalmodel.png =400x)
``` VBA
AA9 = M9+S9
```
Partial Final Model Fitting Result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/partialfinalmodelfittingresult.png)

Whole Final Model Fitting Result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/wholefinalmodelfittingresult.png)

According to the graph, we could know the final model could fit the data very well.


#### Task 5: To evaluating the model
<span style="color:red;font-weight:bold;"> I switch to template excel to implement all the steps. So, the postion for cells will totally change.</span> You could change all values above to the correct position.


We could know the error metric include several indicators.
* indicators
    ::: info Formulas
    $MeAPE = MEDIAN(|\frac{\hat{y_i}-y_i}{y_i}|*100)$
    $MBE = \frac{1}{n}\displaystyle\sum_{i=1}^n(\hat{y_i}-y_i)$
    $NRMSE = \frac{\sqrt{\frac{\sum_{i=1}^n(\hat{y_i}-y_i)^2}{n}}}    {\bar{y}}$
    $NMBE=\frac{\sum_{i=1}^{n}y_i-\hat{y}_i}{n\bar{y}}$
    $NMAE=\frac{\sum_{i=1}^{n}|y_i-\hat{y}_i|}{n\bar{y}}$
    :::

![Solar2017](/data/unisa/AdvancedAnalytic1/assignment1/error_metric_solar_2017.png)

``` vba
L7 = SUBTOTAL(2,K15:K17530)
T7 = SUBTOTAL(1,N15:N17530)
V1 = AGGREGATE(12,1,R15:R17530)
V2 = SUBTOTAL(109, O15:O17530)/L7
V3 = SQRT(SUBTOTAL(109,Q15:Q17530)/L7)/T7
V4 = SUBTOTAL(109, P15:P17530)/(L7*T7)
V5 = SUBTOTAL(109, O15:O17530)/(L7*T7)

# H column are the data of elevations
K1  = IF(H11>=10,1,0)

O15 = (A15-N15)
P15 = ABS(O15)
Q15 = O15^2
R15 = IF(A15=0,0,ABS(K15*P15/A15)*100)
```

If we want to select the valid metric according to our data, should filter all the data where `K` column equals 1.
Then we get.




#### Task 6: Testing the ARMA model using 2018 data
Using the model get from the 2017 dataset, to predict the data in 2018.
The whole fitting result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/wholefittingresult.png)
The part fitting result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/partfittingresult.png)
Actually, when the data if not possible be zero, so we could reset all negative number to 0. so we could get.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/partfittingresultwithoutnegativeresult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/error_metric_solar_2018.png)


* Important Node
    ::: warning <span style="color:red;font-weight:bold">Important</span>
    Some steps above does not use the template file, it's a little ugly and unclear. I will redo it in the solar template, the files could download via the like below.
    :::

@tab Python
All code please read the content on [Power Spectrum](https://colab.research.google.com/drive/1DYajPS1LLACJMo6n8Xe2EflSgX3G0WpQ#scrollTo=ZX9IJDHiedYb)
* All python code
    ::: code-tabs
    @tab loading libraries
    ``` python
    import math
    import pandas as pd
    import requests as req
    import numpy as np
    import matplotlib.pyplot as plt
    ```
    
    @tab DFT & Plot
    
    ``` python
    def DFT_Excel(data, num_frequencies):
      num_data = len(data)
      n2 = num_data / 2
      ret = {'frequency':[], 'ai':[], 'bi':[], 'power':[]}
      for i in range(num_frequencies):
        s1 = 0
        s2 = 0
        s0 = sum(data)
        for j in range(1, num_data):
          cit = math.cos(math.pi * i / n2*(j+1))
          sit = math.sin(math.pi * i / n2*(j+1))
          s1 = s1 + cit * data[j]
          s2 = s2 + sit * data[j]
    
        s1 /= n2
        s2 /= n2
    
        ret['frequency'].append(i)
        ret['ai'].append(s1)
        ret['bi'].append(s2)
        ret['power'].append(s1**2 + s2**2)
      ret['ai'][0] = sum(data)/len(data)
      return pd.DataFrame(ret)
    
    def dft_plot(power_spectrum, title):
      plt.bar(daily_power_spectrum['frequency'][1:], daily_power_spectrum['power'][1:],)
      plt.title(title, fontsize=14)
      plt.xlabel('Frequency', fontsize=14)
      plt.ylabel('Power', fontsize=14)
      #plt.grid(True)
      plt.show()
    ```
    @tab Reading data
    ``` python
    response = req.get('https://seamice.github.io/data/unisa/AdvancedAnalytic1/assignment1/        HalfHourSolarRadiation2017.xlsx')
    solar_radia2017 = pd.read_excel(response.content)
    ```
    @tab PowerSpectrum
    ``` python
    # convert half-hourly data to daily data
    solar_radia2017['group'] = solar_radia2017.index / 2
    solar_radia2017['group'] = solar_radia2017['group'].apply(math.floor)
    hourly_data = solar_radia2017.groupby('group').sum()
    
    hourly_power_spectrum = DFT_Excel(hourly_data.GHI, 200)
    
    dft_plot(hourly_power_spectrum, 'Hourly Power Spectrum')
    ```
    :::
Using Power Spectrum method to get the frequencies graph like below.
![Daily Frequency](/data/unisa/AdvancedAnalytic1/assignment1/frequencies.png =x300)

According to the frequency graph, it's easy to find the best frequency is 1.
:::

### Question 2

#### Task 1: Find frequencies
Copy data from `solarfarm` to `powerspectrum`, using Number of objects: 105120, number of frequencies: 10000. We could see the power barchart like below.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmfrequencies.png =400x)
According to the graph above, we could know the best frequencies is around 10, here we regards the frequencies that the value of power are greater than 2, the best frequencies could get like the picture below.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmfrequencies_number.png)

#### Task 2: Make seasonality
After getting the best frequencies, we could using solver to minimize the SSE(Sum square of error), to find the best coefficients to our model.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarframsolverparams.png =400x)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarframseasonalityResult.png =x150)
We could visualize the seasonality model fitting resutls.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmPartialFittingresult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmPartialFittingresult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmWholeFittingresult.png)
According to the graph, we could see the seasonality could fit the data well, but still have a large gap in the middle of the data.

#### Task 3: ARIMA coefficients
After getting the seasonality model, then could get the residuals to find the cofficients for ARIMA model.
The autocorrelation result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmautocorrelation.png =400x)
The partial autocorrelation result
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmpartialautocorrelation.png =400x)
According to the data graph, we could find the data the correlated with the past data. Next we try to find the best coefficients for the forecasting model.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmErrorMsgWithConstant.png =400x)
According to the graph above, we could know the constant is no significant with the model, so we should remove it during searching the coefficients.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmParamsForARMA.png =400x)

After getting the coefficients, we could using the model to forecast the data, the pictures below show the forecasting results.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmPartialAR(4)MA(1)FittingResult.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmWholeAR(4)MA(1)FittingResult.png)

#### Task 4: Final model
The previous has been split the data analysis into two components, in this step, combine the two components to form the final model.

The picture below will show the final results.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmPartialFinalModelFittingResult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarfarmWholeFinalModelFittingResult.png)

#### Task 5: Error Metric
According to the source data, which contains zero value, so the MeAPE is not suit for evaluating the forecasting model.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/solarframErrorMetric.png)



### Question 3

#### Task 1: Find frequencies
When we use the power spectrum, the result should get like 
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_dftResult.png)

According to the graph above, it not easy to find the few frequencies that holds the important position. It seems there is lots of frequencies that are important. So, we could say there is no significant seasonality in the data.

#### Task 2: Compare AR(p) and ARMA(p,q)

According to the previous results, we just need to find the coefficients for AR(p) and ARMA(p,q) model on the original dataset.

After searching, the best AR model should be AR(4), and ARMA model should be ARMA(2,1).
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_coefficients_ARMA.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_coefficients_AR.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_AR4WholeFittingResult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_AR4PartialFittingResult.png)


![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_ARMA(2,1)WholeFittingResult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_ARMA(2,1)PartialFittingResult.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment1/sonwtown_ErrorMetric.png)


[Download the solarRadiation Process](/data/unisa/AdvancedAnalytic1/assignment1/solar_radiation.7z)
[The final Excel](/data/unisa/AdvancedAnalytic1/assignment1/SolarTemplate_Finalwork.xlsm)
[final Report](/data/unisa/AdvancedAnalytic1/assignment1/Assignment1-Math[5045](Haiyue).docx)




## References
01. [Seasonality Analysis and Forecast in Time Series](https://medium.com/swlh/seasonality-analysis-and-forecast-in-time-series-b8fbba820327)
02. [Seasonality: What It Means in Business and Economics, Examples](https://www.investopedia.com/terms/s/seasonality.asp)
03. [Using Python and Auto ARIMA to Forecast Seasonal Time Series](https://medium.com/@josemarcialportilla/using-python-and-auto-arima-to-forecast-seasonal-time-series-90877adff03c)
04. [A Guide to Time Series Analysis in Python](https://builtin.com/data-science/time-series-python)
04. [Error Metrics: How to Evaluate Your Forecasts](https://www.jedox.com/en/blog/error-metrics-how-to-evaluate-forecasts/)