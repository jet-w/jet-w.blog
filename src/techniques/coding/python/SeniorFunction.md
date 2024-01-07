---
#cover: /assets/images/unisa.jpg
title: Senior Functions
date: 2023-11-11
author: Haiyue
icon: circle-dot
category:
  - python
  - pip
star: false
sticky: false
---

## Filter
``` python
# returns True if the argument passed is even

def check_even(number):
    if number % 2 == 0:
          return True  
    return False
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# if an element passed to check_even() returns True, select it
even_numbers_iterator = filter(check_even, numbers)

# converting to list
even_numbers = list(even_numbers_iterator)
print(even_numbers)
# Output: [2, 4, 6, 8, 10]
```
## Reduce
``` python
# importing functools for reduce() 
import functools 

# initializing list 
lis = [1, 3, 5, 6, 2] 

# using reduce to compute sum of list 
print("The sum of the list elements is : ", end="") 
print(functools.reduce(lambda a, b: a+b, lis)) 

# using reduce to compute maximum element from list 
print("The maximum element of the list is : ", end="") 
print(functools.reduce(lambda a, b: a if a > b else b, lis)) 

# Reduce function has an optional parameter on the third position stands for the initial value
```

## Map
``` python
numbers = [2, 4, 6, 8, 10]

# returns the square of a number
def square(number):
  return number * number

# apply square() to each item of the numbers list
squared_numbers_iterator = map(square, numbers)

# converting to list
squared_numbers = list(squared_numbers_iterator)
print(squared_numbers)

# Output: [4, 16, 36, 64, 100]
```