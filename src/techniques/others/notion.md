---
title: Notion skills
date: 2023-08-03
icon: /assets/icon/common/notion.svg
author: Haiyue
category:
  - notion
tag:
  - skills
star: false
sticky: false
---

01. [How to create Progress in Notion](https://uno.notion.vip/notion-formulas-create-a-progress-bar/)
02. [How to add property to gantt item](https://www.redgregory.com/notion/2020/11/13/notion-timeline-build-a-progress-bar-for-nested-tasks)

::: tabs
@tab Script
The progress could be represented using star or circle, etc. All the methods using string slice method to implement. Two things need to be done for that.
1. Create a progress column number. A percentage number will created in this case.
2. Create a formula column to implement the start bar, etc.
``` javascript
slice("••••••••••", 0, round(prop("progress")*10)) + 
slice("○○○○○○○○○○", 0, round((1 - prop("progress"))*10))
```

@tab Bar
Another method is to use the internal method directory. 
1. Create progress column.
2. Select number.
3. Select percentage.
4. Select bar option.
5. Than you could see the percentage and progress bar.
:::

03. How to visualize the columns on gantt item.
::: details Steps for visualization
![](/data/notion/visualize_gantt_item.jpg)
![](/data/notion/visualize_gantt_item-2.jpg)
:::