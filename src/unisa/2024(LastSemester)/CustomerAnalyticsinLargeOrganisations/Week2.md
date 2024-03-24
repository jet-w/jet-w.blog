---
title: 02. Descriptive Analytics (W2)
index: true
icon: circle-dot
author: Haiyue
date: 2024-03-22
category:
  - unisa
---
<span style="color:orange;font-weight:bold;font-size: 25px">A/B testing and Discrete Choice Experiments</span>

## Playing golf 
**What influences a score?**
* The type of driver used (oversized or regular size)
* The type of ball used (balata or three pieces)
* Walking and carrying the golf clubs or riding in a golf cart
* Drinking water or drinking beer while playing
* Playing in the morning or playing in the afternoon
* Playing when it is cool or playing when it is hot
* The type of golf shoe spike worn (metal or soft)
* Playing on a windy day or playing on a calm day

::: tabs
@tab One-factor-at-a-time strategy
![T-Test](/data/unisa/customer_analytic/w2/factor.png)

![ANOVA](/data/unisa/customer_analytic/w2/beverage.png)

@tab $2^2$ factorial design

<div style="display:flex">
<div style="flex:1">

![Interaction between type of driver and type of beverage for golf experiment](/data/unisa/customer_analytic/w2/2factors.png)
</div>
<div style="flex:1">

![type of driver](/data/unisa/customer_analytic/w2/typeofdriver.png)
</div>
</div>

$Diver\ effect=\frac{92+94+93+91}{4}-\frac{88+91+88+90}{4} = 3.25$
$Ball\ effect=\frac{92+94+93+91}{4}-\frac{88+91+88+90}{4} = 0.75$
$Drive -\ Ball\ interaction\ effect=\frac{88 + 90 + 92 + 94}{4}-\frac{88+91+93+91}{4} = 0.25$
:::
## Discrete (Stated) Choice Experiment
::: tabs
@tab **3 factors**
* **HACCP label:** (Yes/No)
* **Eco label:** (Yes/No)
* **Price:** (145, 150, 155, or 160 yen)


Aizaki, H. and Nishimura, K., 2008. Design and analysis of choice experiments using R: a brief introduction. *Agricultural Information Research, 17(2)*, pp.86-94.

@tab Full Factorial Design
``` R
library(AlgDesign)
ffd <- gen.factorial(
    c(2,2,4),
    varNames = c("HAC", "ECO", "PRI"),
    factors="all"
)
ffd
```
|  |HAC |ECO |PRI|
|--|--|--|--|
|1 |  1 |  1 |  1|
|2 |  2 |  1 |  1|
|3 |  1 |  2 |  1|
|4 |  2 |  2 |  1|
|5 |  1 |  1 |  2|
|6 |  2 |  1 |  2|
|7 |  1 |  2 |  2|
|8 |  2 |  2 |  2|
|9 |  1 |  1 |  3|
|10|  2 |  1 |  3|
|11|  1 |  2 |  3|
|12|  2 |  2 |  3|
|13|  1 |  1 |  4|
|14|  2 |  1 |  4|
|15|  1 |  2 |  4|
|16|  2 |  2 |  4|

:::

### Discrete Choice Experiment
Consider a product with the following three attributes:
* **The region of origin**: Region A, Region B, Region C
* **The eco-friendly label**:  
    * “Conv.” (conventional cultivation method), 
    * “More” (more eco-friendly cultivation method), and 
    * “Most”  (most eco-friendly cultivation method)
* **The price per piece of the product**: $1, $1.1, $1.2

::: tabs
@tab Design
``` R
library(support.CEs)
des1 <- rotation.design(
    attribute.names = list(
        Region = c("Reg_A", "Reg_B", "Reg_C"),
        Eco = c("Conv.", "More", "Most"),
        Price = c("1", "1.1", "1.2")),
    nalternatives = 2, 
    nblocks = 1, 
    row.renames = FALSE,
    randomize = TRUE, 
    seed = 987
)

questionnaire(choice.experiment.design = des1)
```

@tab Collected data
``` R
## https://cran.r-project.org/web/packages/support.CEs/support.CEs.pdf
data("syn.res1")
syn.res1[1:3, ]

desmat1 <- make.design.matrix(
    choice.experiment.design = des1,
    optout = TRUE, 
    categorical.attributes = c("Region", "Eco"),
    continuous.attributes = c("Price"), 
    unlabeled = TRUE
)
desmat1[1:3, ]
```

``` R
dataset1 <- make.dataset(
    respondent.dataset = syn.res1,
    choice.indicators = c("q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"),
    design.matrix = desmat1
)
dataset1[1:10, ]
```

@tab Analysis - clogit
``` R
library(survival)
clogout1 <- clogit(
    RES ~ ASC + Reg_B + Reg_C + More + Most + Price + strata(STR), 
    data = dataset1
)
clogout1 <- clogit(
    RES ~ ASC + Reg_B + Reg_C + More + Most + More:F + Most:F + Price + strata(STR), 
    data = dataset1
)
clogout1
```
* tips
    ::: info
    Results interpretation is the same as in <span style="color:red">**“normal” Logistic Regression Analysis**.</span>
    :::

@tab Analysis - Goodness of Fit
``` r
gofm(clogout1)
```

@tab Analysis – MWTP
<span style="color:orange">Marginal Willingness to Pay (MWTP)</span>
``` R
mwtp(
    output = clogout1, 
    monetary.variables = c("Price"), 
    nonmonetary.variables = c("Reg_B", "Reg_C", "More", "Most", "More:F", "Most:F"),
    confidence.level = 0.90,
    seed = 987
)

```
:::


## Summary
* Causal research as a part of Descriptive Analytics
* Experiment design
* A/B testing
* Discrete choice experiments
    * Full and partial factorial design
    * Design, data collection, analysis, interpretation
    * Marginal willingness to pay


## Reference
[Tim's slides of Week 2](https://lo.unisa.edu.au/pluginfile.php/4493651/mod_resource/content/2/week_02%20Causal%20research.pptx)