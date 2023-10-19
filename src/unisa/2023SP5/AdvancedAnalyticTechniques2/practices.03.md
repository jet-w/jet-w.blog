---
title: Practices Part3
index: true
icon: "/assets/icon/common/flags.svg"
icon-size: "4rem"
author: Haiyue
date: 2023-10-19
category:
  - classfier
---


## Week 8: Data Stream Mining
In this practical, we use the stream R package for analysing stream data. Please install the stream package to complete the practical.

### I. Creating a data stream
1. We firstly create a generator to generate stream data points that will belong to one of three clusters `(k=3)`. Each data point will have 2 dimensions `(d=2)`. The data points will follow Gaussian distribution with 5% noise. When a new data point is requested from this data generator, a cluster will be chosen randomly using the probability weights in `p`.
    ``` R
    library("stream")
    stream <- DSD_Gaussians(k = 3, d = 2, noise = .05, p = c(.5, .3, .1))
    stream
    ```

2. Generate 5 data points using the generator.
``` R
p <- get_points(stream, n = 5)
p
```

3. Use option `class=TRUE` to see which cluster a data point belongs to. Please note that noise data points (5%) do have the class labels (NA).
``` R
p <- get_points(stream, n = 10, class = TRUE)
p
```

4. Plot the 500 points from the data stream
``` R
plot(stream, n=500)
```

### II. Reading and writing data streams
1. Write the created stream with 100 data points to a file called data.csv
``` R
write_stream(stream, "data.csv", n = 100, sep = ",")
```

2. Read back the data.csv file to R.
``` R
stream_data = DSD_ReadStream("data.csv")
```

3. Note that the data has not been read to the stream_data until we use get_points
``` R
get_points(stream_data, n=5)
```

### III. Reservoir Sampling
1. Create a stream with 3 clusters and 5% noise
``` R
stream <- DSD_Gaussians(k = 3, d = 2, noise = .05, p = c(.5, .3, .1))
```

2. Create a Reservoir sampling mechanism with 20 points will be sampled from the stream
``` R
sample <- DSAggregate_Sample(k = 20)
```

3. Update the data for sample using 500 data points from stream
``` R
update(sample, stream, 500)
sample
```
4. Get the data from sample
``` R
get_points(sample)
```

5. Plot the data points in sample
``` R
plot(get_points(sample))
```

### IV. Data Stream Clustering
1. We firstly prepare the clustering algorithm. We use DSC_DStream which implements the D-Stream algorithm (Tu and Chen 2009). D-Stream assigns points to cells in a grid. For the example we use a gridsize of 0.1.

``` R
dstream <- DSC_DStream(gridsize = .1, Cm = 1.2)
dstream
```

2. The clusters are currently empty, but they are ready to get data points from the stream.
``` R
update(dstream, stream, n = 500)
dstream

plot(dstream, stream)
```

3. There are a number of micro-clusters. We can get the centers of the micro-clusters using:
``` R
head(get_centers(dstream))
```

## Week 10: Data Stream Mining

### I. Evaluation of data stream clustering
Internal evaluation measures:
- “average.between” Average distance between clusters
- “average.within” Average distance within clusters
- “max.diameter” Maximum cluster diameter
- “entropy” entropy of the distribution of cluster memberships

External evaluation measures:
- “precision” and “recall”:
    - Precision=TP/(TP+FP)
    - Recall=TP/(TP+FN)
- “purity”: Average purity of clusters. The purity of each cluster is the proportion of the points of the majority true group assigned to it.
- “Euclidean”: Euclidean dissimilarity of the memberships

``` R
library("stream")
stream <- DSD_Gaussians(k = 3, d = 2, noise = .05)
```
1. Use Reservoir sampling to generate 100 data points and use K-means to generate 4 clusters.
``` R
Reservoir_Kmeans = DSC_TwoStage(micro = DSC_Sample(k = 100), macro = DSC_Kmeans(k = 4))
update(Reservoir_Kmeans, stream, n=500)
Reservoir_Kmeans
```

``` R
plot(Reservoir_Kmeans, stream)
evaluate_static(Reservoir_Kmeans, stream, measure =c("average.between", "precision", "recall"), n =500)
```

2. Use sliding window method rather than Reservoir sampling in the above example. Compare the precision and recall of the two methods.
::: info Hint
Window_Kmeans = DSC_TwoStage(micro = DSC_Window(horizon = 100), macro = DSC_Kmeans(k = 4)).
:::
``` R
Window_Kmeans = DSC_TwoStage(micro = DSC_Window(horizon = 100), macro = DSC_Kmeans(k = 4))
update(Window_Kmeans, stream, n=500)
Window_Kmeans

plot(Window_Kmeans, stream)
```

``` R
evaluate_static(Window_Kmeans, stream,measure = c("average.between","precision","recall"), n =500)
```

### II. Concept Drift
Concept drift means the changes of the data generating process over time. It implies that the statistical properties of the data also change when time passes. A good data mining algorithm should be able to deal with concept drift. In the stream package, DSD_Benchmark(1) is an example data stream which contains concept drift. To show the concept drift we request four times 250 data points from the stream and plot them. To fast-forward in the stream we request 1400 points in between the plots and ignore them. The codes below will show 4 figures of the data at different time points.

``` R
stream <- DSD_Benchmark(1)
stream
```

``` R
for(i in 1:4) {
    plot(stream, 250, xlim = c(0, 1), ylim = c(0, 1))
    tmp <- get_points(stream, n = 1400)
}
```

We can use animation package to demonstrate this:
``` R
reset_stream(stream)
animate_data(stream, n = 10000, horizon = 100
, xlim = c(0, 1), ylim = c(0, 1))
library("animation")
animation::ani.options(interval = .1)
ani.replay()
```

### III. Evaluation of data stream clustering with concept drift
1. Using Reservoir sampling and K-means
``` R
stream = DSD_Benchmark(1)
Reservoir_Kmeans= DSC_TwoStage(micro = DSC_Sample(k = 100, biased = TRUE), macro = DSC_Kmeans(k = 2))
update(Reservoir_Kmeans, stream, n=500)
plot(Reservoir_Kmeans, stream)


evaluate_stream(Reservoir_Kmeans, stream, measure = c( "precision", "recall"), n =5000, horizon=100)
```

2. Evaluate the Sliding window + K-means clustering
``` R
#2. Sliding window + K-means clustering
Window_Kmeans = DSC_TwoStage(micro = DSC_Sample(k = 100, biased = TRUE), macro = DSC_Kmeans(k = 2))
update(Window_Kmeans, stream, n=500)
Window_Kmeans

plot(Window_Kmeans, stream)

evaluate_static(Window_Kmeans, stream, measure = c("precision", "recall"), n =5000, orizon=100)
```