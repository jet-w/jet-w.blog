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
[Access Resources](https://lo.unisa.edu.au/mod/folder/view.php?id=3409063)

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

According to the parameters we got. We should compare the mean of error of variance to select proper model.
| | ARMA(3,3) | ARMA(4,1) | AR(4) | AR(3) | AR(2) |
| -- | -- | -- | -- | -- | -- |
| **mean of square error** | overflow | 85.89976922 | 24.75701538 | 24.76769416 | 24.92197907 |

According to the mean of square error, the best model should be ***AR(4)***.

#### 2. Take the noise <span style="color:orange;font-weight:bold;">*$Z_t$*</span> from that model and check its <span style="color:orange;font-weight:bold;">*SACF*</span>.

![ACF of residuals](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_acf.png =400x)
![PACF of residuals](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_pacf.png =400x)

#### 3. Calculate <span style="color:orange;font-weight:bold;">*$Z_t^2$*</span> and show that it has the <span style="color:orange;font-weight:bold;">*ARCH*</span> effect.
![ARCH SACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.arch_effect_acf.png =400x)
![ARCH SPACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.arch_effect_pacf.png =400x)
According to the SACF above, there is no ARCH effect.

![GARCH SACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_squared_acf.png =400x)
![GARCH PSACF](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.output_zt_squared_pacf.png =400x)
According to the SACF above, there is GARCH effect.
#### 4. Find the best <span style="color:orange;font-weight:bold;">*ARCH*</span> or <span style="color:orange;font-weight:bold;">*GARCH*</span> model for it.

![ARCH Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.ARCH_Params.png)
 
![Coverage Rate of ARCH Models](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.ARCH_CoverageRate.png)

![GARCH Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.GARCH_Params.png)
![GARCH Coverage Rate](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.GARCH_CoverageRate.png)

#### 5. Take the <span style="color:orange;font-weight:bold;">developed models</span> for <span style="color:orange;font-weight:bold;">the output</span> and also for <span style="color:orange;font-weight:bold;">the noise</span> and apply them to <span style="color:orange;font-weight:bold;">the 2012 output data</span>.

![2011 model apply to 2012 dataset 95%](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.Model2011To2012.png)

#### 6. <span style="color:orange;font-weight:bold;">Evaluate the performance</span> of the models for <span style="color:orange;font-weight:bold;">one step ahead forecasting</span> with <span style="color:orange;font-weight:bold;">error bounds</span> by <span style="color:orange;font-weight:bold;">calculating the coverage and mean prediction interval width</span>, for both 90% and 95% values.

![2011 model apply to 2012 dataset 90%](/data/unisa/AdvancedAnalytic1/assignment2/img/q1.Model2011To2012.acc90.png)


#### 7. <span style="color:orange;font-weight:bold;">Compare the results</span> with <span style="color:orange;font-weight:bold;">constructing the prediction intervals by using the appropriate quantiles</span>.



### Question 2

The ***tasks*** for this question are listed below.

#### 1. Test the months December, January, February, July, August for <span style="color:orange;font-weight:bold;">normality</span>.
![Histogram](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.histogram.png)
![PP-Plot](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.pp-plot.png)


#### 2. For the months that <span style="color:orange;font-weight:bold;">do not follow a <span style="color:red;">normal distribution</span>, test for a <span style="color:red;">Gamma fit</span></span>.

![Parameters For Gamma](/data/unisa/AdvancedAnalytic1/assignment2/img/q2.ParametersForGamma.png)



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
#### 5. <span style="color:orange;font-weight:bold;">Do the same</span> for July, August.

### Question 3
The ***tasks*** for this question are listed below.

#### 1. Take the monthly rainfall data from `MtGambierRainfall.xlsx` and <span style="color:orange;font-weight:bold;">model the seasonality</span>. Then <span style="color:orange;font-weight:bold;">subtract</span> this from the data.

![Seasonality Parameters](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.seasonality.png)

![Seasonality Visualization](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.seasonality_visualization.png)

#### 2. Use <span style="color:orange;font-weight:bold;">exponential smoothing</span> to see <span style="color:orange;font-weight:bold;">the overall trend</span> in the series - <span style="color:orange;font-weight:bold;">try various values of `α` below 0.2</span>.
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.02.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.002.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.1.png)
![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_alpha_0.2.png)

#### 3. <span style="color:orange;font-weight:bold;">Find the trend</span> for the whole series for <span style="color:orange;font-weight:bold;">the smoothed data</span>, and then <span style="color:orange;font-weight:bold;">find the trends for any sections that you think display differing characteristics</span>.

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.smoothing_trend.png)

I dont's understand the second part.
<span style="color:red;font-weight:bold;">`then find the trends for any sections that you think display differing characteristics`</span>

#### 4. Take the data for the <span style="color:orange;font-weight:bold;">month of December</span> and the <span style="color:orange;font-weight:bold;">Annual mean temperature</span> from `MtGambierByMonthsTemperature.xlsx` and <span style="color:orange;font-weight:bold;">find the trend over time</span>.

![Alt text](/data/unisa/AdvancedAnalytic1/assignment2/img/q3.temperature-trend.png)

#### 5. How much has <span style="color:orange;font-weight:bold;">the mean temperature changed</span> over time in each case?


I dont's understand the meaning