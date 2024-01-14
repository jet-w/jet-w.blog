---
#cover: /assets/images/unisa.jpg
title: Beautiful Soup
date: 2024-01-11
author: Haiyue
icon: circle-dot
category:
  - python
  - scraping
star: false
sticky: false
---

## Searching

::: tabs
@tab find()
The `find()` method of BeautifulSoup object searches for <span style="color:orange">first element</span> that satisfies the given criteria as an argument.

### By ID
``` python
from bs4 import BeautifulSoup
fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find(id = 'nm')
print (obj)
```

### By Class
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find_all(attrs={"class": "mainmenu"})
print (obj)
```
### By Attributes
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find(attrs={"type":'text'})
print (obj)
```

@tab find_all()
The `find_all()` method also accepts a filter argument. It returns <span style="color:orange">a list of all the elements</span> with the given id. In a certain HTML document, usually a single element with a particular id. Hence, using `find()` instead of `find_all()` is preferrable to search for a given id.

### By ID

``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find_all(id = 'nm')
print (obj)
```

### By Class
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find_all(attrs={"class": "mainmenu"})
print (obj)
```

### By Attributes
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.find_all(attrs={"type":'text'})
print (obj)
```

@tab select()
The `select()` method in BeautifulSoup class accepts <span style="color:orange">CSS selector</span> as an argument. The `#` symbol is the CSS selector for id. It followed by the value of required id is passed to `select()` method. It works as the `find_all()` method.

### By ID

``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select("#nm")
print (obj)
```

### By Class
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select(".heading")
print (obj)
```
### By Attributes
The `select()` method can be called by passing the attributes to be compared against. The attributes must be put in a list object. It returns a list of all tags that have the given attribute.
In the following code, the `select()` method returns all the tags with type attribute.
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select("[type]")
print (obj)
```

@tab select_one()
Like the `find_all()` method, the `select()` method also returns a list. There is also a `select_one()` method to return <span style="color:orange">the first tag</span> of the given argument.

### By ID
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select_one("#nm")
print (obj)
```

### By Class
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select_one(".heading")
print (obj)
```
### By Attributes
The `select()` method can be called by passing the attributes to be compared against. The attributes must be put in a list object. It returns a list of all tags that have the given attribute.
In the following code, the `select()` method returns all the tags with type attribute.
``` python
from bs4 import BeautifulSoup

fp = open("index.html")
soup = BeautifulSoup(fp, 'html.parser')

obj = soup.select_one("[name='marks']")
print (obj)
```



:::




## References
[Beautiful Soup Tutorial](https://www.tutorialspoint.com/beautiful_soup/index.htm)