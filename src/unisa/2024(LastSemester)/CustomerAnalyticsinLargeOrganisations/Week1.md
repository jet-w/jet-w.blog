---
title: 01. Customer Analytics (W1)
index: true
icon: circle-dot
author: Haiyue
date: 2024-03-16
category:
  - unisa
---


## Problems need to solve
* Who are our customers? 
* What do they need? 
* What do they want?
* What should we do?

## Knowledge needed
* Business Intelligence
* Predictive analytics
* Unsupervised methods
* Time series analysis
* Statistics
* Probability theory

## Types of Analytics
* Descriptive Analytics – <span style="color:orange">What has happened? </span>
* Predictive Analytics – <span style="color:orange">What might happen?</span>
* Prescriptive Analytics – <span style="color:orange">What should we do?</span>

## Type of research
* Descriptive Research – <span style="color:orange">Aware of Problem</span>
    What are our sales? 
    Who are our customers?
* Exploratory Research – <span style="color:orange">Ambiguous Problem</span>
    Our sales are down – Why? 
* Causal Research – <span style="color:orange">Problem Clearly Defined</span>
    Do we get higher sales if we change packaging?


## Data collection

<div style="display:flex">
<div style="flex:1">

* **Exploratory Research**
    * Focus groups
    * Online communities
</div>

<div style="flex:1">

* **Descriptive Research**
    * Surveys
    * <span style="color:blue">Self-reporting</span>
    * <span style="color:blue">Panel data</span>
    * <span style="color:orange">Scanner data</span>
    * <span style="color:orange">Mobile, Web data</span>
</div>
<div style="flex:1">

* **Causal Research**
    * Experiments
</div>
</div>

### Exploratory Research
::: tabs
@tab Focus groups
* Qualitative research data gathering technique 
* Moderated unstructured discussionbetween diverse group of people
* Members discuss some topics and allowed to influence each other

    ::: tip
    “Aha!” moment
    Slow and expensive
    :::
@tab Online communities
Working with C Space, IKEA:
* Ran online communities in seven core, globally representative countries (USA, China, India, Denmark, Germany, Japan and Russia)
* Surveyed more than 21,000 people across 22 countries to robustly validate insights and hypotheses
:::

### Descriptive Research
::: tabs
@tab Surveys
1. **Approaches**
    * Face-to-face
    * Mailout
    * Online
2. **Survey Design**
    * Do we ask right questions?
    * Do we collect right data?
3. **Two important characteristics:**
    * **Predictive validity** – data make good predictions for variables of interest
    * **Test-retest reliability** – if we are to re-measure, do we get the same result?
4. **The factors need to consider for Survey Design**
    * Mode of Data Collection
    * Impact of Survey Fatigue
    * The Effect of Survey Question Wording
    * How You Order Your Questions
    * Different Survey Question Formats
    * Accuracy of the Answers You Receive
    * Bias in Self-Reported Behavior
    * Survey Analysis Plan

    [resources](https://www.researchnow.com/blog/10-best-practices-survey-screening/?lang=gb)

### Sampling Techniques
* Simple Random Sample
    each member of population has an equal chance
* Stratified Random Sample 
    split population in groups (eg sex), then SRS from groups
* Cluster Sample
    organize population in clusters, then choose clusters and SRS from them
* Voluntary-Response Sample
    members of population who have chosen to respond
* Convenience Sample
    members of population from which data are easy to collect
* Systematic Sample
    every $𝑛^{𝑡ℎ}$ member of the population is selected

### Sample Size
$CI=\hat{\mu} {+\atop-} + z_{cr}\sqrt{\frac{\sigma ^2}{N}}\Rightarrow N = (\frac{2z_{cr}\sigma}{D})^2$
$CI = \hat{p} {+\atop-}z_{cr}\sqrt{\frac{p(1-p)}{N}} \Rightarrow N=\frac{4z_{cr}^{2}p(1-p)}{D^2}$

Margin of error: $D=(CI^+ - CI^-)/2$


@tab <span style="color:blue">Self-reporting, panel data</span>

* Panel of customers representing & different demographic groups
* Report all purchases
* Purchase trigged surveys
* Mobile surveys

#### data
**Nielsen US Panel 2016**
* 63,150 households
* 10,745,635 shopping trips
* 67,767,386 purchases
* 4,231,283 SKUs

@tab <span style="color:orange">Scanner data</span>
Passive data collection
* Scanner data 
* Media planning – radio, TV audience
* Social Media Analysis – Facebook, Twitter, Instagram
* Mobile data – Facebook, Foursquare, coupon services
* Web data – web logs, Google

***Scanner data***
<div style="display:flex">
<div style="flex:1">

**Pros**
Completeness
Timeliness
Accuracy
</div>
<div style="flex:1">

**Cons**
* Misses out on convenience stores and even some big retailers (Aldi, Whole Foods)
* Cannot make causal statements
* Don’t know behaviors and psychographics
* Don’t know the exact set of choices faced by the consumer at the time of decision.
</div>
</div>


##### Assignments
* An average size supermarket
* About 1,000,000 transactions per month
* 36 months of data
* Unique feature of the data – customer ID
:::

## Causal Research 
**Experiments and Field Tests**
* **Scientific testing** where specific variables and hypothesis can be tested
* **Controlled environment**, where a set of variables are kept constant
* **Invariable behavior** between cause and effect to establish a cause-effect relationship

**Correlation and Causation**
* **Correlation** - relationship between two variables.
* **Causation** - one variable producing an effect in another variable.

### Causal Inference: Three Requirements
* **Correlation**: Evidence of association between X and Y
* **Temporal antecedence**: X must occur before Y
* **No third factor driving both**: Control of other possible factors


## Summary
* Types of analytics: descriptive, predictive, prescriptive
* Types of descriptive analytics: 
    descriptive research, exploratory research, causal research
* Data collection for each type of research. Active/passive data collection
    * Focus groups, online communities
    * Survey, self-reporting, panel data, scanner data, online and mobile data
    * Experiments
* Correlation vs Causality


## Reference
[Tim's slides of Week 1](https://lo.unisa.edu.au/pluginfile.php/4493654/mod_resource/content/2/week_01%20Descriptive%20analytics.pptx)