---
#cover: /assets/images/unisa.jpg
title: Numpy
icon: /assets/icon/common/numpy.svg
date: 2023-08-26
category:
  - python
tag:
  - numpy
star: false
sticky: false
---

## Instruction
Fast vectorised array operations for data munging and cleaning, subsetting and filtering, transformation, and any other kinds of computations.

Efficient descriptive statistics and aggregating/summarising data.
 
Data alignment and relational data manipulations for merging and joining together heterogeneous data sets.

Expressing conditional logic as array expressions instead of loops with if-elif-else branches 
 
Groupwise data manipulations (aggregation, transformation, function application) – useful for pandas!
::: tabs

@tab Simple code
``` python
import numpy as np

data = np.array(
  [[5,-10,2], 
   [4, 3, 9]])

type(data)
data

data * 10
data * data

dir(data)

data.size
data.ndim
data.shape
data.dtype
```

@tab Create numpy array
``` python

np.zeros(10)

np.zeros((3,5,3))
np.ones((3,6))

np.empty((2,3))

np.arange(15)

a = np.zeros((3,6))
np.ones_like(a)

np.ones(a.shape)

np.eye(4)
```

@tab numpy data types and conversions
``` python
a = np.array([1.1,2.2,3.3,4,5])
a.dtype

b = a.astype(np.int64)
b.dtype

c = np.array(["aaaaa",2,3,4,4], dtype=np.string_)
c.dtype

c.astype(float)

int_array = np.arange(10)
float_array = np.array([.2, .27, .357])
int_array.astype(float_array.dtype)
```
:::

## Slicing and Indexing
::: tabs

@tab 1D
Slicing in 1 D data
``` python
arr = np.arange(10)
print(arr)

arr[5]

arr[5:8] = 99
print(arr)

# Array slice is a view of the origianl array
arr = np.arange(10)
arr
brr = arr[5:8]
brr

arr[5:8] = 99
arr
brr
```

@tab 2D

Indexing and Slicing in 2D
``` python
arr2d = np.array([[1, 2, 3], [4, 5, 6],[7, 8, 9]])
arr2d.shape
arr2d
arr2d[1][0]        # the same as below
arr2d[1,0]

arr2d[0]           # you can skip later indecis (columns)
arr2d[:1]

arr2d[:, 1]        # for column, you have to mention first index
arr2d[1]

arr2d[:2, 1:]
arr2d[2, 1]

arr2d[1, :2]
arr2d[1:3, :2]

arr2d[1, :2].ndim
arr2d[1:3, :2].ndim

arr2d[1, :2].shape

a = arr2d[1, :2]
a.shape

arr2d[1:2, :2].shape
```

@tab more than 2D
Indexing and Slicing in nD, n > 2
``` python
arr1d = np.arange(12)
arr3d = arr1d.reshape(2,3,2)

arr3d[0]
arr3d[0,0]
arr3d[0,0] = 99

arr3d[:,1]

```

@tab Boolean indexing
``` python
names = np.array(['Belinda', 'Malgorzata', 'John', 'Belinda', 'John', 'Jasper', 'Jasper'])
colours = np.array(['green','red','blue','yellow','brown','green','purple'])

names == 'Belinda'
colours[names == 'Belinda']

colours2 = np.array([['green','red','blue','yellow','brown','green','purple'],
                     ['black','pink','pink','brown','white','red','orange']])

colours2[0, names == 'Belinda']
colours2[1, names == 'Belinda']
colours2[:, names != 'Belinda']
colours2[:, ~(names == 'Belinda')]

### We can combine using & and |
mask = (names == 'Belinda') | (names == 'Jasper')
colours2[:, mask]


data = np.array([-2,3,1,-4,-12,-3,19])
data

data[data < 0] = 0
data
```

@tab Facy Indexing
Fancy Indexing - using integer array as index
Fancy indexing copies the data into a new array
``` python
x = range(8)
x = list(x)
x = x * 4

arr = np.array(x).reshape(4,8).T
arr[[4, 3, 0, 6]]
arr[[-3, -5, -7]]


arr = np.arange(32).reshape((8, 4))
arr

arr[[1, 5, 7, 2], [0, 3, 1, 2]]         # we got only for numbers 

arr[[1, 5, 7, 2]][:, [0, 3]]      # for 4 by 4 array

### ix_() as an alternative
arr[np.ix_([1, 5, 7, 2], [0, 3])]
```
:::

## Some numpy methods

### Reshape
``` python
arr = np.arange(15).reshape((3, 5))
arr
```

### Transpose
``` python
arr.T
```

### Random numbers
arr = np.random.randn(6, 3)
arr

### Dot product
``` python
np.dot(arr.T, arr)
```

### high dimentional array
``` python
arr = np.arange(16).reshape((2, 2, 4))
arr
```

### transpose
``` python
arr.transpose((1, 0, 2))

# swapaxes 
arr.swapaxes(1, 0)
```



### unary ufuncs
[Universal functions (ufuncs) - element-wise transformation](http://docs.scipy.org/doc/numpy/reference/ufuncs.html)
``` python
arr = np.arange(1,6)

np.square(arr)
np.sqrt(arr)
np.log(arr)


# binary ufunc
x = y = np.random.randn(8)
np.add(x, y)                  
np.multiply(x, y)
np.divide(x, y)


# return of multiple arrays
arr = np.random.randn(7) * 10

np.modf(arr)
```

### Vectorisation
``` python
points = np.arange(-5, 5, 0.01) # 1000 equally spaced points
xs, ys = np.meshgrid(points, points)
ys

z = np.sqrt(xs ** 2 + ys ** 2)
z


import matplotlib.pyplot as plt
plt.imshow(z)
plt.colorbar()
plt.title("Image plot of $\sqrt{x^2 + y^2}$")
```


### Conditional logic
``` python
xarr = np.array([1.1, 1.2, 1.3, 1.4, 1.5])
yarr = np.array([2.1, 2.2, 2.3, 2.4, 2.5])
cond = np.array([True, False, True, True, False])

result = [(x if c else y) for x, y, c in zip(xarr, yarr, cond)]
result

result = np.where(cond, xarr, yarr)
result


arr = np.random.randn(4,4)
arr

np.where(arr > 0, 2, -2)

np.sign(arr) * 2

# Another example

cond1 = np.array([True, True, False, False])
cond2 = np.array([True, False, True, False])
n = len(cond1)
result = []
for i in range(n):
    if cond1[i] and cond2[i]:
        result.append(0)
    elif cond1[i]: 
        result.append(1)
    elif cond2[i]: 
        result.append(2)
    else:
        result.append(3)
result


np.where(cond1 & cond2, 0, np.where(cond1, 1, np.where(cond2, 2, 3)))
```

### Array aggregations
``` python
arr = np.random.randn(5, 4) 
arr

arr.mean(axis=0)                  # Column means
arr.std(axis=0)                   # Column standard deviation
arr.median(axis=0)                # Column medians

np.mean(arr, axis=0)              # Column means
np.std(arr, axis=0)               # Column standard deviation
np.median(arr, axis=0)            # Column medians


arr = np.random.randn(100)
(arr > 0).sum()                   # Number of positive values
(arr > 0).mean() == 0.48
```

### Boolean arrays
``` python
bools = np.array([False, False, True, False])
bools.any() 
bools.all()
```

## Input and Output
::: code-tabs
@tab Binary File
``` python
arr = np.arange(10)
np.save('some_array.npy', arr)             # uncompressed binary

np.load('some_array.npy')


np.savez('array_archive.npz', a=arr, b=arr*2)

arch = np.load('array_archive.npz')        # zip archive
arch['b']
arch['a']
```

@tab Text File
``` python
# more on reading files in pandas
arr = np.arange(12).reshape(4,3)
np.savetxt('array_ex.txt', arr, delimiter='==')

del arr
arr = np.loadtxt('array_ex.txt', delimiter='==')

arr = np.genfromtxt('array_ex.txt', delimiter='==')
```
:::

## Random Number Generation

::: code-tabs
@tab generate
``` python
arr = np.random.normal(size=100000)

dir(np.random)
```


@tab Simple random walk
``` python
import random
steps = 1000
position = 0
walk = [position]
for i in range(steps):
    step = 1 if random.randint(0, 1) else -1
    position += step
    walk.append(position)

import matplotlib.pyplot as plt
# %matplotlib inline

plt.plot(walk)
plt.title("Simple random walk with +1/-1 steps")
# plt.show()


steps = 1000
draws = np.random.choice([-1,1], size=steps)
walk = draws.cumsum()

import matplotlib.pyplot as plt
# %matplotlib inline

plt.plot(walk)
plt.title("Simple random walk with +1/-1 steps")
```

@tab Simulating many random walks
``` python
nwalks = 5000
nsteps = 1000
draws = np.random.choice([-1,1], size=(nwalks, nsteps))
walks = draws.cumsum(1)

walks.max()
walks.min()

hits30 = (np.abs(walks) >= 30).any(1)
hits30.sum()

crossing_times = (np.abs(walks[hits30]) >= 30).argmax(1)
crossing_times.mean()

import matplotlib.pyplot as plt
# %matplotlib inline

plt.plot(walks.T)
plt.title(str(nwalks) + " simple random walks with +1/-1 steps")

plt.hist(walks[:,999], bins=53)  # 
plt.title("Distribution for the very last step")
```



## References
[NumPy教程（快速入门版](http://c.biancheng.net/numpy/)