---
title: Assignment 2
index: false
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

## 1. Describe a <span style="color:orange;font-weight:bold">real-world application</span> that uses <span style="color:orange;font-weight:bold">topic modelling</span> and <span style="color:orange;font-weight:bold">explain how the topic model works</span>. <span style="color:red;font-weight:bold">(4)</span>


    The <span style="color:orange;font-weight:bold">recommendation system</span> could use topic modelling to work. The key work is to calculate the similarity. All the works could be processed with three steps.

    1.  Calculating the distribution of topics for two items.
    2.  Calculating the similarity (Kullback-Leibler divergence could be used) between two items based on the distribution of topics.
    3.  The item with higher similarity will get a higher chance for recommendation.

## 2. Download the Twitter dataset (rdmTweets-201306.RData) from the course website and do the following. <span style="color:red;font-weight:bold">(8)</span>
    ``` R
    if(!require(twitteR))
        install.packages("twitteR")
    if(!require(tm))
        install.packages("tm")
    if(!require(wordcloud))
        install.packages("wordcloud")
    
    library(tm)
    library(wordcloud)
    library(dplyr)
    library(stringr)
    library(tidyverse)
    
    load('rdmTweets-201306.RData')
    ```
###  a. <span style="color:orange;font-weight:bold">Text cleaning</span>: remove URLs, convert to lower case, and remove non-English letters or space.
  ``` R
  text_clean <- function(x) {
      text <- x$text
      # remove urls with header
      text <- gsub("https?://\\S+|www\\.\\S+", "", text)
      # remove urls without header
      text <- gsub("\\bwww[1-9a-zA-Z]*\\.\\S+", "", text)
      # convert to lower case and remove non-English letters and space
      text <- tolower(gsub("\\s+", " ", gsub("[^a-zA-Z ]", " ", text)))
      # remove the space
      trimws(text)
  }
  tweet_texts <- unlist(lapply(tweets, text_clean))
  tweet_texts
  ```
###  b. <span style="color:orange;font-weight:bold">Count the frequency</span> of words “data” and “mining”. 
  ***method 1***
  
  ```{r warning=FALSE}
  freq.words <- data.frame(
    "data" = unlist(lapply(tweet_texts, function(x){
        words <- unlist(strsplit(x, "\\s+"))
        sum(words == "data")
      })) , 
    "mining" = unlist(lapply(tweet_texts, function(x){
        words <- unlist(strsplit(x, "\\s+"))
        sum(words == "mining")
      }))
  )
  
  freq <- freq.words %>% summarize(across(everything(), sum, na.rm=TRUE))
  freq
  ```
  
  ***method 2***
  
  ```{r}
  # concatenate all string into one
  text_data <- paste(tweet_texts, collapse=" ")
  
  # Create a corpus and perform text cleaning
  text_corpus <- Corpus(VectorSource(text_data))
  dtm <- DocumentTermMatrix(text_corpus)
  dtm_matrix <- as.matrix(dtm)
  
  freq <- gather(as.data.frame(dtm_matrix), key="col", value="c") %>% 
    filter(col %in% c("data", "mining"))
  freq
  ```
###  c. <span style="color:orange;font-weight:bold">Plot the word cloud</span>. 
  ```{r warning=FALSE}
  # concatenate all string into one
  text_data <- paste(tweet_texts, collapse=" ")
  
  # Create a corpus and perform text cleaning
  text_corpus <- Corpus(VectorSource(text_data))
  
  # Remove the meaningless words
  custom_stopwords <- c("the", "a", "an", "in", "on", "of", "to", "for", "with", "by", "and")
  text_corpus <- tm_map(text_corpus, removeWords, custom_stopwords)
  
  #text_corpus <- tm_map(text_corpus, content_transformer(tolower))
  text_corpus <- tm_map(text_corpus, removePunctuation)
  
  # Create a term-document matrix and calculate word frequencies
  tdm <- TermDocumentMatrix(text_corpus)
  word_freq <- rowSums(as.matrix(tdm))
  
  # Create the word cloud
  wordcloud(names(word_freq), 
            freq = word_freq, 
            scale = c(3, 0.5), 
            min.freq = 3, 
            colors = brewer.pal(8, "Dark2")
  )
  ```
###  d. Use a <span style="color:orange;font-weight:bold">topic modelling</span> algorithm to fit the Twitter data to 8 topics. Find the top 6 frequent terms (words) in each topic. 
  ``` R
  if(!require(topicmodels))
      install.packages("topicmodels")
  library("topicmodels")
  ```
  
  ``` R
  dtm <- DocumentTermMatrix(text_corpus)
  # Specify the number of topics (k)
  k <- 8
  
  # Fit the LDA model
  lda_model <- LDA(dtm, 
                   k = k, 
                   method = "Gibbs", 
                   control = list(seed = 9999, 
                                  burnin = 1000, 
                                  thin = 100, 
                                  iter = 1000)
                   )
  
  top_words <- terms(lda_model, 6)
  
  lda_model
  top_words 
  ```
## 3. Provide a <span style="color:orange;font-weight:bold">real-world example</span> of a system or an application that <span style="color:orange;font-weight:bold">utilises stream-data</span>. In your example, <span style="color:orange;font-weight:bold">explain the challenges</span> faced by algorithms in analysing stream data and <span style="color:orange;font-weight:bold">suggest some ideas to address those challenges</span> <span style="color:red;font-weight:bold">(6)</span> 
  
    `StockSight` is an application that has been used for many organization. It uses the dataset from     Twitter and news headlines data for stocks to analysis the sentiment of the author. Normally, Twitter and other news platforms     owns a huge amount of data; more even, the data will be posted rapidly, especially on Twitter; some people also will add some     slang, emojis, etc. that will make more challenging for analyzing; Lots of unrelated data exist, etc. All the problems are the     challenges for implementation. The items listed below are some of my ideas for dealing with all the challenges.
    
    1.  Using stream sampling algorithm to deal with huge amount of data and rapid posting data.
    2.  Using NLP techniques to deal with the text, such as slang, emojis, etc.
    3.  Using classification method to deal with unrelated data.

    **References**
    <https://github.com/shirosaidev/stocksight>
## 4. Create a <span style="color:orange;font-weight:bold">data stream</span> of <span style="color:orange;font-weight:bold">two dimensions data points</span>. The data points will <span style="color:orange;font-weight:bold">follow Gaussian distribution</span> with <span style="color:orange;font-weight:bold">5% noise</span> and <span style="color:orange;font-weight:bold">belong to 4 clusters</span>. <span style="color:orange;font-weight:bold">Compare the performance</span> of the following clustering methods in terms of precision, recall, and F1. <span style="color:red;font-weight:bold">(6)</span>
  ``` R
  if(!require(stream))
    install.packages("stream")  
  library(stream)
  ```
  
  ``` R
  stream <- DSD_Gaussians(k = 4, d = 2, noise = .05, p = c(0.9, .5, .3, .1))
  stream
  ```
###  **a.** Use <span style="color:orange;font-weight:bold">Reservoir sampling</span> to <span style="color:orange;font-weight:bold">sample 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold">K-means</span> to cluster the points in the reservoir into <span style="color:orange;font-weight:bold">5 groups</span>, and use <span style="color:orange;font-weight:bold">100 points</span> from the stream to <span style="color:orange;font-weight:bold">evaluate the performance of K-means</span>. 
  ``` R
  Reservoir_Kmeans = DSC_TwoStage(
    micro = DSC_Sample(k = 200), 
    macro = DSC_Kmeans(k = 4)
  )
  update(Reservoir_Kmeans, stream, n=500)
  plot(Reservoir_Kmeans)
  ```
  
  ``` R
  evaluate_static(Reservoir_Kmeans, 
                  stream, 
                  measure =c("f1", "precision", "recall"), 
                  n =100
  )
  
  ```
###  **b.** Use <span style="color:orange;font-weight:bold">Windowing method</span> to <span style="color:orange;font-weight:bold">get 200 data points</span> from 500 data points of the stream. Use <span style="color:orange;font-weight:bold">K-means</span> to cluster the points in the window into <span style="color:orange;font-weight:bold">5 groups</span>, and use <span style="color:orange;font-weight:bold">100 points</span> from the stream to <span style="color:orange;font-weight:bold">evaluate the performance of K-means.</span>
  
  ``` R
  Window_Kmeans = DSC_TwoStage(
    micro = DSC_Window(horizon = 200), 
    macro = DSC_Kmeans(k = 5)
  )
  update(Window_Kmeans, stream, n=500)
  #Window_Kmeans
  
  plot(Window_Kmeans, stream)
  
  ```
  
  ``` R
  evaluate_static(
    Window_Kmeans, 
    stream,
    measure = c("f1","precision","recall"), 
    n =100
  )
  ```
###  **c.** Apply the <span style="color:orange;font-weight:bold">D-Stream clustering method</span> to 500 points from the stream with `gridsize=0.1`, and use 100 points from the stream to <span style="color:orange;font-weight:bold">evaluate the performance</span> of D-stream. 
  ``` R
  dstream <- DSC_DStream(gridsize = .1, Cm = 1.2)
  update(dstream, stream, n = 500)
  plot(dstream, stream)
  ```
  
  ``` R
  evaluate_static(
    dstream, 
    stream,
    measure = c("f1","precision","recall"), 
    n =100
  )
  ```
## 5. Explain a <span style="color:orange;font-weight:bold">real-world application of geographical information system</span>. <span style="color:red;font-weight:bold">(4)</span> 

    QGIS (Quantum GIS) is a powerful and open-source Geographical Information System (GIS) software that provides a comprehensive set     of tools for managing, analyzing, and visualizing geographic and spatial data.
    
    It is widely used for a variety of applications, from mapping and cartography to spatial analysis and data management.
    
    Qgis allows users to import and manage kinds of data, and also provides a wide range of geospatial analysis tools for spatial     queries, buffer analysis, spatial joins, proximity analysis, etc. Users can also create high-quality maps with symbols, labels and     styling options. Besides, Qgis is also high customizable that allow users to adapt it to their specific needs.
    
    The most important is that the Qgis is also an open source and community-driven software. It is freely available for everyone.     Another important point is that it's a cross-platform that is available for multiple operating system.
## 6. Use spatial data analysis packages in R do the following tasks. <span style="color:red;font-weight:bold">(10)</span>
### a. <span style="color:orange;font-weight:bold">Draw a map</span> of Australia where each <span style="color:orange;font-weight:bold">city is represented as a dot</span>. <span style="color:orange;font-weight:bold">Highlight cities</span> with <span style="color:orange;font-weight:bold">population more than one million people</span>. Map should have only the <span style="color:orange;font-weight:bold">borders at country and state levels</span>. 
``` R
if(!require(terra))
  install.packages("terra")
library(terra)
```

``` R
filename <- paste0(getwd(),"/SA2_2021_AUST_SHP_GDA2020/SA2_2021_AUST_GDA2020.shp")
#basename(filename)
ausvec <- vect(filename)
# filter out all empty geometry
ausvec <- ausvec[!is.na(ausvec$AREASQKM21)]

# dissolve based states level
ausvecAgg <- aggregate(ausvec, by="STE_NAME21")

#load population data
auspop <- vect(paste0(getwd(),"/Australia_population.shp"))

#plot Australia with borders at country and state levels
plot(ausvecAgg)

# plot cities with less than 1 million population
plot(auspop[as.integer(auspop$population) < 1000000], add=TRUE, cex = 0.1)
# plot cities with greater than 1 million population, and highlight
plot(auspop[as.integer(auspop$population) >= 1000000], add=TRUE, col="red")
```
### b. Use the <span style="color:orange;font-weight:bold">shapefile</span> provided in the course website to <span style="color:orange;font-weight:bold">draw a map of “South Australia”</span>. <span style="color:orange;font-weight:bold">Keep all borders in the map</span>. Use a colour palette to <span style="color:orange;font-weight:bold">highlight the statistical areas level 4 (SA4)</span>.
 

 ``` R
 # Plot South Australia
 # select data of South Australia
 sa <- ausvec[ausvec$STE_NAME21 == "South Australia"]
 plot(sa, c('SA4_NAME21'))
 ```
### c. <span style="color:orange;font-weight:bold">Create a spatial vector of “Greater Adelaide”</span>. Aggregate the polygons to draw a map that shows <span style="color:orange;font-weight:bold">only the borders</span> for statistical areas <span style="color:orange;font-weight:bold">level 3 (SA3)</span>.
      
``` R
greater_adelaide <- ausvec[ausvec$GCC_NAME21 == "Greater Adelaide"]
# dissolve based on SA4 level
greater_adelaide.sa3Agg <- aggregate(greater_adelaide, by="SA3_NAME21")

#plot only the level 3 border of Greater Adelaide
plot(greater_adelaide.sa3Agg)
```
### d. For this point you need to check the data in “crimeCounts.csv” available in the course website.

#### a. Use the variable <span style="color:orange;font-weight:bold">“SA3_NAME21”</span> to obtain a spatial vector of “Salisbury”. 
``` R
## a
salibury <- ausvec[ausvec$SA3_NAME21 == "Salisbury"]
plot(salibury)
```

#### b. <span style="color:orange;font-weight:bold">Create a new attribute</span> with the name crimeCounts containing the offence count (July 2022 – June 2023) for the suburbs in Salisbury spatial vector.
``` R
## b
# load crime data
crime_count <- read.csv('crimeCounts.csv')
# rename columns
names(crime_count) <- c('id', 'suburb', 'crimeCounts')
# convert to lower case for easy to compare
crime_count$lowerSub <- tolower(crime_count$suburb)

# create a suburb dataframe for merging
suburb.df <- data.frame(
  "lowerSub" = tolower(salibury$SA2_NAME21)
)
suburb.df <- left_join(suburb.df, crime_count, by="lowerSub")

#assign crimeCounts for the suburbs in Salisbury
salibury$crimeCounts <- suburb.df$crimeCounts

# show the count and suburbs
data.frame(
  "suburb" = salibury$SA2_NAME21,
  "crimeCounts" = salibury$crimeCounts
)
```
#### c. <span style="color:orange;font-weight:bold">Create a spatial raster</span> to <span style="color:orange;font-weight:bold">display the crimeCounts</span> in Salisbury. Select a colour palette so that <span style="color:orange;font-weight:bold">high crimeCounts</span> are represented <span style="color:orange;font-weight:bold">in red colour</span>. 

``` R

## c
```

#### d. Show <span style="color:orange;font-weight:bold">Salisbury</span> suburb <span style="color:orange;font-weight:bold">names</span> and <span style="color:orange;font-weight:bold">borders</span> in the map.
``` R
## d
plot(salibury, c('SA2_NAME21'))
```
### e. Create a <span style="color:orange;font-weight:bold">html page</span> with an <span style="color:orangefont-weight:bold">interactive map</span> containing the <span style="color:orange;font-weight:bold">markers</span> of your<span style="color:orange;font-weight:bold">top 5 restaurants in Adelaide</span>. Include in your <span style="color:orangefont-weight:bold">report a screenshot of the interactive map</span>. <span style="color:orange;font-weight:bold">Upload thehtml</span> as additional file in your submission.
I implemented using two methods, both of the approaches are based on leaflet library.
1.  Using leaflet package in R to create an interactive map.
2.  Using leaflet library to create a single web page app.

``` R
if(!require(leaflet))
  install.packages("leaflet")
if(!require(sf))
  install.packages("sf")

library(sf)
library(leaflet)

# Create a leaflet map
leaflet() %>%
  addTiles() %>%  # Add a basemap
  addMarkers(lng = 138.60956081250663,lat = -34.92074609311045,popup = "Schnithouse Rundle St") %>%
  addMarkers(lng = 138.59883250622383,lat = -34.924407169226825,popup = "GEORGES") %>%
  addMarkers(lng = 138.5941120067306,lat = -34.92806706283753,popup = "Nu Thai Restaurant") %>%
  addMarkers(lng = 138.6006364073467, lat = -34.932289053377616, popup = "La Trattoria Restaurant & Pizza Bar") %>%
  addMarkers(lng = 138.61282628115364, lat = -34.93249827609448, popup = "Ballaboosta") %>%
  addMarkers(lng = 138.62167389866696, lat = -34.944179031545026, popup = "Fumo Restaurant")
```


