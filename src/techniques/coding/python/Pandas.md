---
#cover: /assets/images/unisa.jpg
title: Pandas
icon: circle-dot
date: 2023-08-26
category:
  - python
tag:
  - pandas
star: false
sticky: false
---

[pandas - PANel DAta Structures](http://pandas.pydata.org/pandas-docs/stable/index.html)

A clean axis indexing design to support fast data alignment, lookups, 
hierarchical indexing, and more high-performance data structures. 

SQL-like functionality: GroupBy, joining/merging, etc. Missing data 
handling. 
``` python
import pandas as pd
```

## Data structures: series, dataframe, panel
### Series
::: code-tabs
@tab Basic
``` python
obj = pd.Series([4, 7, -5, 3])
obj
obj.values
obj.index

# You can specify the desired indices
obj2 = pd.Series([4, 7, -5, 3],index=['d', 'b', 'a', 'c'])
obj2
```
@tab Selecting values
``` python
obj2['a']
obj2[2]
obj2[['a', 'b', 'c']]
obj2[obj2 > 0]

obj2['d'] = 99

obj2 * 2

'b' in obj2    # series works like fixed-length ordered dictionary

sdict = {'Ohio': 35000, 'Texas': 71000, 'Oregon': 16000, 'Utah': 5000}
obj3 = pd.Series(sdict)

sdict = {'Oregon': 16000, 'Ohio': 35000, 'Texas': 71000, 'California': 'NaN'}
obj4 = pd.Series(sdict)

obj3 + obj4
```
:::

### DataFrame
::: code-tabs
@tab Basic
``` python
data = {'state': ['Ohio', 'Ohio', 'Ohio', 'Nevada', 'Nevada'], 
         'year': [2000, 2001, 2002, 2001, 2002],
          'pop': [1.5, 1.7, 3.6, 2.4, 2.9]}
frame = pd.DataFrame(data)                            # from dictionary

frame = pd.DataFrame(list(range(10)), columns=['a'])  # from list

frame = pd.DataFrame(obj3)                            # from series

frame = pd.DataFrame(np.random.randn(5,3))            # from np.array


frame2 = pd.DataFrame(data, columns=['year','state','pop','debt'],
                      index=['one', 'two', 'three', 'four', 'five'])

frame2.columns
frame2.index

data = {'Nevada': {2001: 2.4, 2002: 2.9},             # from nested dictionary
        'Ohio': {2000: 1.5, 2001: 1.7, 2002: 3.6}}
frame = pd.DataFrame(data)

frame.index.name = 'year'
frame.columns.name = 'state'
frame.values
```

@tab Data retrival
``` pyhon
# by columns
frame2['state']
frame2.year

# by rows
frame2.ix['three']
frame2.ix[2]

frame2.loc['three']
frame2.iloc[2]

frame2.iloc[:, 1]
```
@tab Reassigning values
``` python
frame2['debt'] = np.arange(5.)

val = pd.Series([-1.2, -1.5, -1.7], index=['two', 'four', 'five'])
frame2['debt'] = val

frame2['eastern'] = frame2.state == 'Ohio'

del frame2['eastern']
frame2.columns
```

@tab Dropping entries
``` python
obj = pd.Series(np.arange(5.), index=['a', 'b', 'c', 'd', 'e'])
new_obj = obj.drop('c')

frame2

frame3 = frame2.drop('three', axis = 0)
frame3 = frame2.drop('year', axis = 1)

frame3 = frame2.drop(frame2.index[2], axis=0)
frame3 = frame2.drop(frame2.columns[2], axis=1)
```
:::


### Merging data (join)
::: code-tabs
@tab basic
``` python
left_frame = pd.DataFrame({'key': range(5), 
                           'left_value': ['a', 'b', 'c', 'd', 'e']})
right_frame = pd.DataFrame({'key': range(2, 7), 
                            'right_value': ['f', 'g', 'h', 'i', 'j']})
left_frame
right_frame
```

@tab Merging
``` python
# inner join
pd.merge(left_frame, right_frame, on='key', how='inner')

# left outer join
pd.merge(left_frame, right_frame, on='key', how='left')

# right outer join
pd.merge(left_frame, right_frame, on='key', how='right')

# full outer join
pd.merge(left_frame, right_frame, on='key', how='outer')
```
@tab concatenate
``` python
# Combining data - adding rows
pd.concat([left_frame, right_frame])

# Combining data - adding columns
pd.concat([left_frame, right_frame], axis=1)


left_frame = left_frame.drop(1)
pd.concat([left_frame, right_frame], axis=1)
```
:::


### Groupping data (groupby)
::: code-tabs
@tab basic
``` python
import pandas as pd
import numpy as np

###########################################################
# Check (and set) working directory to read data file


# Read in the data and check it out
mtcars = pd.read_csv("mtcars.csv")
mtcars.head()
mtcars.shape
```

@tab aggregated
``` python
# Compute basic descriptive stats over data
mtcars.describe()
mtcars.mean() # also compute median, std, var, min, max, quantile
mtcars.median()
mtcars.mean(axis=1) # compute row means (ie across columns)

# How many automatic transmission cars are there?
mtcars[mtcars["am"]==0].shape
mtcars[mtcars["am"]==0]

# Plot a histogram
mtcars["mpg"].hist()


# Group by number of cylinders and describe
grouped_by_cyl = mtcars.groupby("cyl")
grouped_by_cyl.mean()

# can group by more than one category
grouped_by_cyl_am = mtcars.groupby(["cyl","am"])

# compute statistics aggregated over groupings
grouped_by_cyl_am.agg([np.mean, np.std])

# count the number of cars in each combination of cyl and am
counts = grouped_by_cyl_am['cyl'].count()

# plot the counts

df = counts.unstack()
ax = df.plot(kind='bar', stacked=True, figsize=(10, 5), colormap="BuGn")
ax.set_ylabel("Count")
patches, labels = ax.get_legend_handles_labels()
ax.legend(patches, labels, loc='best')
```
:::

### Arithmetic between DataFrames and Series
``` python
arr = np.arange(12.).reshape((4, 3))
arr - arr[0]


# broadcasting down the rows
frame = pd.DataFrame(np.arange(12.).reshape((4, 3)), 
                     columns=list('bde'), 
                     index=['Utah', 'Ohio', 'Texas', 'Oregon'])
series = frame.ix[0]
frame - series

frame.columns = ['e', 'd', 'b']
frame - series

# broadcasting down the columns
frame = pd.DataFrame(np.arange(12.).reshape((4, 3)), 
                     columns=list('bde'), 
                     index=['Utah', 'Ohio', 'Texas', 'Oregon'])
                     
series = frame['d']
frame.sub(series, axis=0)                  

series = frame.d[['Texas', 'Ohio', 'Oregon', 'Utah']]
frame.sub(series, axis=0) 
```

### Reindexing
::: code-tabs
@tab Basic
``` python
obj = pd.Series(range(3), index=['a', 'b', 'c'])
obj.index

obj.index[1] = 'd'              # immutable
obj.index = ['a', 'd', 'c']

#import warnings
#warnings.simplefilter(action = "ignore", category = RuntimeWarning)

obj2 = obj.reindex(['a', 'b', 'c', 'd', 'e'])

obj = pd.Series([4.5, 7.2, -5.3, 3.6], index=['d', 'b', 'a', 'c'])
obj
```

@tab With new values
``` python
obj.reindex(['a', 'b', 'c', 'd', 'e'], fill_value=0)

obj = pd.Series(['blue', 'purple', 'yellow'], index=[0, 2, 4])
obj

obj.reindex(range(6), method='ffill')
obj.reindex(range(6), method='bfill')
```
@tab More
``` python
frame = pd.DataFrame(np.arange(9).reshape((3, 3)), 
                     index=['a', 'c', 'd'],
                     columns=['Ohio', 'Texas', 'California'])
# reindex rows
frame.reindex(['a', 'b', 'c', 'd'])

# reindex columns
states = ['Texas', 'Utah', 'California']
frame.reindex(columns=states)

# reindex rows and columns
frame.reindex(index=['a', 'b', 'c', 'd'], columns=states)

# alternative way to reindex
frame.ix[['a', 'b', 'c', 'd'], states]
```

@tab Extra for indexing and slicing
``` python
obj = pd.Series(np.arange(4.),index=['a', 'b', 'c', 'd'])

obj[1]          # works like in numpy
obj['b']  

obj[1:2]        # works like in Python
obj['b':'c']    # takes end-point like in R


data = pd.DataFrame(np.arange(16).reshape((4, 4)),
                    index=['Ohio', 'Colorado', 'Utah', 'New York'],
                    columns=['one', 'two', 'three', 'four'])

data[[1]]
data['two']
data[['two','four']]

data[:2]        
data[data['three'] > 5]

data[data < 5] = 0

data = pd.DataFrame(np.arange(16).reshape((4, 4)),
                    index=['Ohio', 'Colorado', 'Utah', 'New York'],
                    columns=['one', 'two', 'three', 'four'])
                    
data.ix['Colorado', ['two', 'three']]
data.ix[['Colorado','Utah'],['two', 'three']]
data.ix[2]
data.ix[:'Utah', 'two']
data.ix[data.three > 5,:3]                    
```

@tab Hierarchical Indexing
```python
'''
Enables multiple (two or more) index levels on an axis. 
Provides a way to work with higher dimensional data at lower 
dimensions.  
'''

# Series

data = pd.Series(np.random.randn(10), 
                 index=[['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'd', 'd'],
                        [ 1,   2,   3,   1,   2,   3,   1,   2,   2,   3]])

data['b']

data['b':'c']
data.ix[['b', 'c']]

data[:,2]

data.unstack()
data.unstack().stack()


# DataFrames

frame = pd.DataFrame(np.arange(12).reshape((4, 3)),
                     index=[['a','a', 'b', 'b'], [1, 2, 1, 2]],
                     columns=[['Ohio', 'Ohio', 'Colorado'], ['Green', 'Red', 'Green']])

frame.index.names = ['key1', 'key2']
frame.columns.names = ['state', 'colour']

frame['Ohio']    
frame.stack()
frame.stack(level=0)
frame.stack().stack()

frame.unstack().unstack()
frame.unstack(level=[0,1])
```
:::

### Function mapping 
#### apply - vectorisation
``` python
frame = pd.DataFrame(np.random.randn(4, 3), 
                     columns=list('bde'),
                     index=['Utah', 'Ohio', 'Texas', 'Oregon'])

f = lambda x: x.max() - x.min()
frame.apply(f)


def f(x): 
    return pd.Series([x.min(), x.max()], index=['min', 'max'])

frame.apply(f)


# applymap - element-wise application

format = lambda x: '%.2f' % x # returns a formatted string
frame.applymap(format)
```

#### Missing data
``` python
from numpy import nan as NA
data = pd.Series([1, NA, 3.5, NA, 7])

data.dropna()

data[data.notnull()]


sdata = {'Ohio': 35000, 'Texas': 71000, 'Oregon': 16000, 'Utah': 5000}
states = ['California', 'Ohio', 'Oregon', 'Texas']
obj = pd.Series(sdata, index=states)

pd.isnull(obj)
pd.notnull(obj)

obj.fillna(0)
obj.fillna(0, inplace=True)
obj.fillna(obj.mean())


df = pd.DataFrame(np.random.randn(7, 3))
df.ix[:4, 1] = NA; df.ix[:2, 2] = NA
df

cleaned = df.dropna()
cleaned

cleaned2 = df.dropna(thresh=2)
cleaned2
```


## Add/Delete/Query/Mofify
### Add
::: code-tabs
@tab Add Column
``` python

# method 1
citys = ['ny','zz','xy']
df.insert(0,'city',citys) #add column city to the first position, values are specified wity cities

# method 2
jobs = ['student','AI','teacher']
df['job'] = jobs # Add column job to the last position, values are specified with jobs

# method 3
df.loc[:,'salary'] = ['1k','2k','2k','2k','3k'] #Add column salary to the last postion
```

@tab Add Rows
``` python
# add a new row with index equals 4 if index 4 does not exists
# update the data with index equals 4 if index 4 exists
df.loc[4] = ['zz','mason','m',24,'engineer’]

# construct a new dataframe
df_insert = pd.DataFrame({'name':['mason','mario'],'sex':['m','f'],'age':[21,22]},index = [4,5])
# get a new dataframe, do not modify df
# The meaning of ignore_index
#     False: the result using the index from df insert
#     True: the result doesn't using the index from df insert, and will generate a new index
ndf = df.append(df_insert,ignore_index = True)
```
:::

### Delete
::: code-tabs
@tab delete row
``` python
df.drop([1,3],axis = 0,inplace = False)#delete index=1, 3 two rows
```
@tab delete column
``` python
df.drop(['name'],axis = 1,inplace = False)  #delete column column
del df['name']       #delete name column
ndf = df.pop('age')  #delete age column
```
:::
### Query
::: code-tabs
@tab []
``` python
df['name']   # select the column 'name'
df['gender'] # select the column 'gender'
df[['name','gender']] #select multi columns
df[0:]    # select data from the row 0 to the end
df[:2]    # select data from the begining to the row 2, (row 2 is not included)
df[0:1]   # select only row 0
df[1:3]   # select row 1 and row 2
df[-1:]   # select the last row
df[-3:-1] # select the last 3 column to the last 1 column, the last 1 column is not included.
```

@tab loc[]
``` python
# select the specified row and columns
df.loc[0,'name']  # select the cell are specified with row=0, and column='name'
df.loc[0:2, ['name','age']] #select data are specfied with the range row=[0, 2), column=['name', 'age']
df.loc[[2,3],['name','age']] #select the row 2 and row 3, columns are specified with 'name' and 'age'
df.loc[df['gender']=='M','name'] #select column name with rows gender='M'
df.loc[df['gender']=='M',['name','age']] #select column name, age with rows gender='M'
```

@tab iloc[]
``` python
df.iloc[0,0]         #Select row=0, column=0 
df.iloc[1,2]         #Select row=1, column=2
df.iloc[[1,3],0:2]   #select row=1,3， column from 0 to 2 (2 is excluded)
df.iloc[1:3,[1,2]    #select row from 1 to 3 (3 is excluded), column=1,2
```
:::
### Mofify
::: code-tabs
@tab loc[]
``` python
df.loc[1,'name'] = 'aa'              #modify cell value
df.loc[1] = ['bb','ff',11]           #modify row
df.loc[1,['name','age']] = ['bb',11] #modify some values
```
@tab iloc[]
``` python
df.iloc[1,2] = 19              #
df.iloc[:,2] = [11,22,33]      #
df.iloc[0,:] = ['lily','F',15] #
```
:::

## Sort Value
``` python
df.sort_values(by='cost', ascending=False)
```

## References
[Pandas教程（非常详细）](http://c.biancheng.net/pandas/)