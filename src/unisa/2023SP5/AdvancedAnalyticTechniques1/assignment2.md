---
title: Assignment 2
index: false
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-10-02
sidebar: false
category:
  - Assignment
---

## Requirements
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic1/assignment2/Assignment2.pdf" ratio="1" />
::: 

## Requirements Analysis
::: details 
[Access Resources](https://lo.unisa.edu.au/mod/folder/view.php?id=3409063)
[Access Resources-FR](/data/unisa/AdvancedAnalytic1/assignment2/assign2_report.docx)
:::
::: tabs
@tab Quesion 1 <span style="color:red;font-weight:bold;">(15 marks)</span>
01.[Files Required: <span style="color:orange;font-weight:bold;">ClementsGapWindFarmOutput.xlsx</span>](/data/unisa/AdvancedAnalytic1/assignment2/ClementsGapWindFarmOutput.xlsx)

The ***tasks*** for this question are listed below.

1. Take the 2011 output (the training set) and find the best <span style="color:orange;font-weight:bold;">*ARMA(p,q)*</span> model for the data.
1. Take the noise <span style="color:orange;font-weight:bold;">*$Z_t$*</span> from that model and check its <span style="color:orange;font-weight:bold;">*SACF*</span>.
1. Calculate <span style="color:orange;font-weight:bold;">*$Z_t^2$*</span> and show that it has the <span style="color:orange;font-weight:bold;">*ARCH*</span> effect.
1. Find the best <span style="color:orange;font-weight:bold;">*ARCH*</span> or <span style="color:orange;font-weight:bold;">*GARCH*</span> model for it.
1. Take the <span style="color:orange;font-weight:bold;">developed models</span> for <span style="color:orange;font-weight:bold;">the output</span> and also for <span style="color:orange;font-weight:bold;">the noise</span> and apply them to <span style="color:orange;font-weight:bold;">the 2012 output data</span>.
1. <span style="color:orange;font-weight:bold;">Evaluate the performance</span> of the models for <span style="color:orange;font-weight:bold;">one step ahead forecasting</span> with <span style="color:orange;font-weight:bold;">error bounds</span> by <span style="color:orange;font-weight:bold;">calculating the coverage and mean prediction interval width</span>, for both 90% and 95% values.
1. <span style="color:orange;font-weight:bold;">Compare the results</span> with <span style="color:orange;font-weight:bold;">constructing the prediction intervals by using the appropriate quantiles</span>.

@tab Question 2 <span style="color:red;font-weight:bold;">(15 marks)</span>
01.[Files Required: <span style="color:orange;font-weight:bold;">MelbourneAirportRain.xlsx</span>](/data/unisa/AdvancedAnalytic1/assignment2/MelbourneAirportRain.xlsx)

The ***tasks*** for this question are listed below.

1. Test the months December, January, February, July, August for <span style="color:orange;font-weight:bold;">normality</span>.
1. For the months that <span style="color:orange;font-weight:bold;">do not follow a <span style="color:red;">normal distribution</span>, test for a <span style="color:red;">Gamma fit</span></span>.
1. Test December, January, February for <span style="color:orange;font-weight:bold;">correlation</span>, and July, August separately.
1. Generate 1000 years of <span style="color:orange;font-weight:bold;">synthetic</span> December, January, February, add the months to <span style="color:orange;font-weight:bold;">get seasonal totals</span>, and <span style="color:orange;font-weight:bold;">generate empirical <span style="color:red;">CDFs</span> for the totals versus the <span style="color:red;">CDFs</span> for the real data</span>.
1. <span style="color:orange;font-weight:bold;">Do the same</span> for July, August.

@tab Question 3 <span style="color:red;font-weight:bold;">(10 marks)</span>
01.[Files Required: <span style="color:orange;font-weight:bold;">MtGambierByMonthsTemperature.xlsx</span>](/data/unisa/AdvancedAnalytic1/assignment2/MelbourneAirportRain.xlsx)
02.[Files Required: <span style="color:orange;font-weight:bold;">MtGambierRainfall.xlsx</span>](/data/unisa/AdvancedAnalytic1/assignment2/MelbourneAirportRain.xlsx)

The ***tasks*** for this question are listed below.

1. Take the monthly rainfall data from `MtGambierRainfall.xlsx` and <span style="color:orange;font-weight:bold;">model the seasonality</span>. Then <span style="color:orange;font-weight:bold;">subtract</span> this from the data.
1. Use <span style="color:orange;font-weight:bold;">exponential smoothing</span> to see <span style="color:orange;font-weight:bold;">the overall trend</span> in the series - <span style="color:orange;font-weight:bold;">try various values of `α` below 0.2</span>.
1. <span style="color:orange;font-weight:bold;">Find the trend</span> for the whole series for <span style="color:orange;font-weight:bold;">the smoothed data</span>, and then <span style="color:orange;font-weight:bold;">find the trends for any sections that you think display differing characteristics</span>.
1. Take the data for the <span style="color:orange;font-weight:bold;">month of December</span> and the <span style="color:orange;font-weight:bold;">Annual mean temperature</span> from `MtGambierByMonthsTemperature.xlsx` and <span style="color:orange;font-weight:bold;">find the trend over time</span>.
1. How much has <span style="color:orange;font-weight:bold;">the mean temperature changed</span> over time in each case?

:::



---
## All works below
### Question 1

#### 1. Take the 2011 output (the training set) and find the best <span style="color:orange;font-weight:bold;">*ARMA(p,q)*</span> model for the data.

![Question 1 - Output ACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_acf.png =400x)

![Question 1 - Output PACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_pacf.png =400x)

![Possible ARMA Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.ARMA_Params.png)

According to the parameters we got. We should compare the mean of squared error (MSE) and p-value of the parameters for each model to select a proper model, the smaller the better. The table below lists all the MSEs.
| | ARMA(3,3) | ARMA(4,1) | AR(4) | AR(3) | AR(2) |
| -- | -- | -- | -- | -- | -- |
| **mean of square error** | overflow | 85.89976922 | 24.75701538 | 24.76769416 | 24.92197907 |

According to the mean of square error, the performance of AR(3) and AR(4) are similar, I select the ***AR(4)*** as the best model.

#### 2. Take the noise <span style="color:orange;font-weight:bold;">*$Z_t$*</span> from that model and check its <span style="color:orange;font-weight:bold;">*SACF*</span>.
I could get the residuals based on the model AR(4) get from the previous step, and name the residuals as Zt-AR(4). Then, we could see the SACF according to the ACF and PACF, like the pictures below.

![ACF of residuals](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_acf.png =400x)
![PACF of residuals](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_pacf.png =400x)

According to the result from ACF and PACF, the ***Zt-AR(4)*** is not suit for using ARMA model to forecast.

#### 3. Calculate <span style="color:orange;font-weight:bold;">*$Z_t^2$*</span> and show that it has the <span style="color:orange;font-weight:bold;">*ARCH*</span> effect.

For calculating the ***ARCH*** effect, it should be seperated into two parts, one for **ARCH** model, another for **GARCH** model.
***3.1*** Effect for ARCH model
![ARCH SACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.arch_effect_acf.png =400x)
![ARCH SPACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.arch_effect_pacf.png =400x)
According to the SACF above, there is ARCH effect for ARCH model.

***3.2*** Effect for GARCH model
![GARCH SACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_squared_acf.png =400x)
![GARCH PSACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_squared_pacf.png =400x)
According to the SACF above, there is also ARCH effect for GARCH model.
#### 4. Find the best <span style="color:orange;font-weight:bold;">*ARCH*</span> or <span style="color:orange;font-weight:bold;">*GARCH*</span> model for it.
For this part, I try to find all possible ARCH and GARCH models, then try to compare the results for finalizing the model.
4.1 ARCH model
According to the squared residuals for ARCH model, five **AR** models for the dataset could be found, the parameters like the picture below.
![ARCH Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.ARCH_Params.png)

According to the parameters above, the coverage rate could be calculated like the picture below.
![Coverage Rate of ARCH Models](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.ARCH_CoverageRate.png)
According to the result, all the coverage rate for the five model are similar, and they all approach 89.6% for score 1.96.

4.2 GARCH model
According to the squared residuals for GARCH model, 10 **ARMA** model for the dataset could be found, the parameters like the picture below.
![GARCH Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.GARCH_Params.png)

For some models will occurs negative values, which will lead to the specified model unavaliable. The coverage rate for each model like the picture below.
![GARCH Coverage Rate](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.GARCH_CoverageRate.png)

According to the result the best model for the residuals is **GARCH(1,1)**, the coverage could be 99.15%.


#### 5. Take the <span style="color:orange;font-weight:bold;">developed models</span> for <span style="color:orange;font-weight:bold;">the output</span> and also for <span style="color:orange;font-weight:bold;">the noise</span> and apply them to <span style="color:orange;font-weight:bold;">the 2012 output data</span>.
According to previous steps, we got two models for the dataset. One is AR(4), another one is GARCH(1,1). All the models will apply to 2012 dataset. The result like the picture below.
![2011 model apply to 2012 dataset 95%](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.Model2011To2012.png)

#### 6. <span style="color:orange;font-weight:bold;">Evaluate the performance</span> of the models for <span style="color:orange;font-weight:bold;">one step ahead forecasting</span> with <span style="color:orange;font-weight:bold;">error bounds</span> by <span style="color:orange;font-weight:bold;">calculating the coverage and mean prediction interval width</span>, for both 90% and 95% values.
The score of 90% is about 1.65 and the score of 95% is about 1.96. The 95% result like the picture below.

The 95% coverage result like the picture below.
![2011 model apply to 2012 dataset 95%](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.Model2011To2012.png)
The 90% coverage result like the picture below.
![2011 model apply to 2012 dataset 90%](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.Model2011To2012.acc90.png)
The statistical summary for the residuals of 2012 data like the picture below.
![Statistical summary for residuals of 2012](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.statisticalfor2012Zt.png)

According to the statistical summary, the standard deviation is about 5.05. The mean predictiion interval width of 95% coverage is about 18.87, for 90% coverage is about 15.89. The real coverage with 1.96 score is 94.75%, and 91.57% for 1.65 score. So we could get 
 $94.75\% \approx 95\%$
 $91.57\% \gt 90\%$
 $5.05*1.96*2 = 19.8  \gt 18.87$
 $5.05*1.65*2 = 16.665  \gt 15.89$
The results suggest that the model is quiet well for the dataset.

#### 7. <span style="color:orange;font-weight:bold;">Compare the results</span> with <span style="color:orange;font-weight:bold;">constructing the prediction intervals by using the appropriate quantiles</span>.

[A simple technique to estimate prediction intervals for any regression model](https://medium.com/@qucit/a-simple-technique-to-estimate-prediction-intervals-for-any-regression-model-2dd73f630bcb)

### Question 2

The ***tasks*** for this question are listed below.

#### 1. Test the months December, January, February, July, August for <span style="color:orange;font-weight:bold;">normality</span>.
For normality test, the ppplot and histogram could be used for testing. 

![Histogram](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.histogram.png)
According to the histogram all the distribution of the months are right skewed.
![PP-Plot](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.pp-plot.png)

According to the ppplot result, the p-value of July and August is greater than 0.05, we can not reject they follow the normal distribution, on the other hand the p-value of January February and December is less than 0.05, we reject the datasets of the three months follow normal distribution.

#### 2. For the months that <span style="color:orange;font-weight:bold;">do not follow a <span style="color:red;">normal distribution</span>, test for a <span style="color:red;">Gamma fit</span></span>.
There are two steps for this question. The first step is to calculate the $\alpha$ and $\beta$ parameters. Another step is to get the distribution and visulize them. According to previous step, the datasets of Janarary and February will be processed.

2.1 Get the parameters for gamma
The parameters $\alpha$ and $\beta$ are calculated like the picture below.
![Parameters For Gamma](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.ParametersForGamma.png)

2.2 Visulize the distribution

![Gamma distribution for Jan and Feb](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.gammadistribution.png)


#### 3. Test December, January, February for <span style="color:orange;font-weight:bold;">correlation</span>, and July, August separately.

![Pearson Correlations in Minitab](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.correlations.png)
![PearsonCorrelationsMatrix](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.PearsonCorrelationsMatrix.png)
Correlations matrix
|  |Jan	|Feb	  |Jul	  |Aug|
| --	| --	|--| -- |--|
|**Feb**	|-0.015	| 	 	 | | |
|**Jul**	|0.198	|-0.070	|  | |
|**Aug**	|-0.132	|-0.000	|-0.009	 | |
|**Dec**	|0.053	|-0.196	|-0.023	| 0.118 |

#### 4. Generate 1000 years of <span style="color:orange;font-weight:bold;">synthetic</span> December, January, February, add the months to <span style="color:orange;font-weight:bold;">get seasonal totals</span>, and <span style="color:orange;font-weight:bold;">generate empirical <span style="color:red;">CDFs</span> for the totals versus the <span style="color:red;">CDFs</span> for the real data</span>.


![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.generate_data_JanFebDec.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.maxmin_JanFebDec.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.freq_JanFebDec.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.accfreq_Jan.png =600x)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.accfreq_Feb.png =600x)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.accfreq_Dec.png =600x)

#### 5. <span style="color:orange;font-weight:bold;">Do the same</span> for July, August.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.generate_data_JulAug.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.maxmin_JulAug.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.freq_JulAug.png)

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.accfreq_Jul.png =600x)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.accfreq_Aug.png =600x)

### Question 3
The ***tasks*** for this question are listed below.

#### 1. Take the monthly rainfall data from `MtGambierRainfall.xlsx` and <span style="color:orange;font-weight:bold;">model the seasonality</span>. Then <span style="color:orange;font-weight:bold;">subtract</span> this from the data.
There are three steps for this question. The first step is to find the best frequencies, the second step is to find the proper parameters for seasonalities, and the last step is to visualize the seasonality result.

The picture below is the frequencies for the dataset. The 50 and 550 is the best for the dataset.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.DFT_power.png)

The picture below is the seasonality parameters using the frequencies got from step1. And also we got the final model and the residuals.
![Seasonality Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.seasonality.png)

The picture is the visualization for the final model of seasonality.
![Seasonality Visualization](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.seasonality_visualization.png)

#### 2. Use <span style="color:orange;font-weight:bold;">exponential smoothing</span> to see <span style="color:orange;font-weight:bold;">the overall trend</span> in the series - <span style="color:orange;font-weight:bold;">try various values of `α` below 0.2</span>.
For this question, I will show the results of four values for the $\alpha$. Details for the pictures below.

![$\alpha = 0.002$](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.002.png =400x)

![$\alpha = 0.02$](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.02.png =400x)

![$\alpha = 0.1$](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.1.png =400x)

![$\alpha = 0.2$](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.2.png =400x)

#### 3. <span style="color:orange;font-weight:bold;">Find the trend</span> for the whole series for <span style="color:orange;font-weight:bold;">the smoothed data</span>, and then <span style="color:orange;font-weight:bold;">find the trends for any sections that you think display differing characteristics</span>.

I will set the parameter $\alpha$ equals 0.05 of smoothed data. And then to process the smoothed data. There are 3 steps to do. The first step is to find the trend of the whole dataset. The second step is to split the dataset into multiple sections, and the last step is to find the trends for each section.

3.1 Find the trend of whole dataset.
I use the univariate linear regression to model the trend. The result like the picture below.
![Trend of whole dataset](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_trend.png)

3.2 Split whole dataset into multiple sections.
Accoriding the visualization of the dataset, the dataset could be split into two sections, the first section(from the begining to 40) rise rapidly, and the second section oscillate around a variable. So the dataset could be split into two sections like the pciture below.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.TheParametersOfTrends.png)

3.3 find the trends for the two sections
The trends of the two sections like the picture belowl
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.VisualizationOfTrends.png)


#### 4. Take the data for the <span style="color:orange;font-weight:bold;">month of December</span> and the <span style="color:orange;font-weight:bold;">Annual mean temperature</span> from `MtGambierByMonthsTemperature.xlsx` and <span style="color:orange;font-weight:bold;">find the trend over time</span>.

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.temperature-trend.png)

#### 5. How much has <span style="color:orange;font-weight:bold;">the mean temperature changed</span> over time in each case?

According to the result from the last step, the mean temperature changed over time should be calculated via the linear regression parameters with the whole 73 years on this dataset. 
The temperature changed over time for December should be, 
a*year = 0.028117 * 73 = <span style="color:red">2.05</span>
The temperature changed over time for December should be, 
a*year = 0.018201 * 73 = <span style="color:red">1.32</span>


