---
title: Requirements of Assign2
index: true
icon: "/assets/icon/common/assignment.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-10-20
category:
  - Assignment
---

## Requirements
[Assignment 2 - Student Portal](https://lo.unisa.edu.au/mod/assign/view.php?id=3365817)
### Instructions
::: details Instructions
<PDF url="/data/unisa/AdvancedAnalytic2/assignment2/Assignment 2_Oct2023.pdf" ratio="1.4" />
:::


Use `Rmarkdown` to do the following tasks(2). Please note that the presentation of the document and the range of `Rmarkdown` features/functions used are matter.

1. Describe a <span style="color:orange;font-weight:bold">real-world application</span> that uses <span style="color:orange;font-weight:bold">topic modelling</span> and <span style="color:orange;font-weight:bold">explain how the topic model works</span>. <span style="color:red;font-weight:bold">(4)</span>

2. Download the Twitter dataset (rdmTweets-201306.RData) from the course website and do the following. <span style="color:red;font-weight:bold">(8)</span>
  a. <span style="color:orange;font-weight:bold">Text cleaning</span>: remove URLs, convert to lower case, and remove non-English letters or space. 
  b. <span style="color:orange;font-weight:bold">Count the frequency</span> of words “data” and “mining”. 
  c. <span style="color:orange;font-weight:bold">Plot the word cloud</span>. 
  d. Use a <span style="color:orange;font-weight:bold">topic modelling</span> algorithm to fit the Twitter data to 8 topics. Find the top 6 frequent terms (words) in each topic. 

3. Provide a <span style="color:orange;font-weight:bold">real-world example</span> of a system or an application that <span style="color:orange;font-weight:bold">utilises stream-data</span>. In your example, <span style="color:orange;font-weight:bold">explain the challenges</span> faced by algorithms in analysing stream data and <span style="color:orange;font-weight:bold">suggest some ideas to address those challenges</span> <span style="color:red;font-weight:bold">(6)</span> 

4. Create a <span style="color:orange;font-weight:bold">data stream</span> of <span style="color:orange;font-weight:bold">two dimensions data points</span>. The data points will <span style="color:orange;font-weight:bold">follow Gaussian distribution</span> with <span style="color:orange;font-weight:bold">5% noise</span> and <span style="color:orange;font-weight:bold">belong to 4 clusters</span>. <span style="color:orange;font-weight:bold">Compare the performance</span> of the following clustering methods in terms of precision, recall, and F1. <span style="color:red;font-weight:bold">(6)</span>
  **a.** Use <span style="color:orange;font-weight:bold">Reservoir sampling</span> to <span style="color:orange;font-weight:bold">sample 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold">K-means</span> to cluster the points in the reservoir into <span style="color:orange;font-weight:bold">5 groups</span>, and use <span style="color:orange;font-weight:bold">100 points</span> from the stream to <span style="color:orange;font-weight:bold">evaluate the performance of K-means</span>. 
  **b.** Use <span style="color:orange;font-weight:bold">Windowing method</span> to <span style="color:orange;font-weight:bold">get 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold">K-means</span> to cluster the points in the window into <span style="color:orange;font-weight:bold">5 groups</span>, and use <span style="color:orange;font-weight:bold">100 points</span> from the stream to <span style="color:orange;font-weight:bold">evaluate the performance of K-means.</span>
  **c.** Apply the <span style="color:orange;font-weight:bold">D-Stream clustering method</span> to 500 points from the stream with `gridsize=0.1`, and use 100 points from the stream to <span style="color:orange;font-weight:bold">evaluate the performance</span> of D-stream. 

5. Explain a <span style="color:orange;font-weight:bold">real-world application of geographical information system</span>. <span style="color:red;font-weight:bold">(4)</span> 

6. Use spatial data analysis packages in R do the following tasks. <span style="color:red;font-weight:bold">(10)</span>
    <ol type="a">
      <li>
      <span style="color:orange;font-weight:bold">Draw a map</span> of Australia where each <span style="color:orange;font-weight:bold">city is represented as a dot</span>. <span style="color:orange;font-weight:bold">Highlight cities</span> with <span style="color:orange;font-weight:bold">population more than one million people</span>. Map should have only the <span style="color:orange;font-weight:bold">borders at country and state levels</span>. 
      </li>
      <li>
      Use the <span style="color:orange;font-weight:bold">shapefile</span> provided in the course website to <span style="color:orange;font-weight:bold">draw a map of “South Australia”</span>. <span style="color:orange;font-weight:bold">Keep all borders in the map</span>. Use a colour palette to <span style="color:orange;font-weight:bold">highlight the statistical areas level 4 (SA4)</span>.
      </li>
      <li>
      <span style="color:orange;font-weight:bold">Create a spatial vector of “Greater Adelaide”</span>. Aggregate the polygons to draw a map that shows <span style="color:orange;font-weight:bold">only the borders</span> for statistical areas <span style="color:orange;font-weight:bold">level 3 (SA3)</span>.
      </li>
      <li>
      For this point you need to check the data in “crimeCounts.csv” available in the course website.
      <ol style="list-style-type: circle;">
          <li>Use the variable <span style="color:orange;font-weight:bold">“SA3_NAME21”</span> to obtain a spatial vector of “Salisbury”. </li>
          <li><span style="color:orange;font-weight:bold">Create a new attribute</span> with the name crimeCounts containing the offence count (July 2022 – June 2023) for the suburbs in Salisbury spatial vector.</li>
          <li><span style="color:orange;font-weight:bold">Create a spatial raster</span> to <span style="color:orange;font-weight:bold">display the crimeCounts</span> in Salisbury. Select a colour palette so that <span style="color:orange;font-weight:bold">high crimeCounts</span> are represented <span style="color:orange;font-weight:bold">in red colour</span>. </li>
          <li>Show <span style="color:orange;font-weight:bold">Salisbury</span> suburb <span style="color:orange;font-weight:bold">names</span> and <span style="color:orange;font-weight:bold">borders</span> in the map.</li>
      </ol>
    </li>
    <li>
    Create a <span style="color:orange;font-weight:bold">html page</span> with an <span style="color:orange;font-weight:bold">interactive map</span> containing the <span style="color:orange;font-weight:bold">markers</span> of your <span style="color:orange;font-weight:bold">top 5 restaurants in Adelaide</span>. Include in your <span style="color:orange;font-weight:bold">report a screenshot of the interactive map</span>. <span style="color:orange;font-weight:bold">Upload the html</span> as additional file in your submission.
    </li>
    </ol>


