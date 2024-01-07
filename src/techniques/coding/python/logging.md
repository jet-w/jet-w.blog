---
#cover: /assets/images/unisa.jpg
title: Logging
date: 2023-12-22
author: Haiyue
icon: circle-dot
category:
  - python
  - logging
star: false
sticky: false
---
https://realpython.com/python-logging/

## Log Levels
* **DEBUG**
* **INFO**
* **WARNING**
* **ERROR**
* **CRITICAL**

The default severity level is `WARNING` or above.

## Sample code
``` python
import logging

logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')
```


## Basic Configurations
[More details click here](https://docs.python.org/3/library/logging.html#logging.basicConfig)
Some of the commonly used parameters for basicConfig() are the following:

* `level`: The root logger will be set to the specified severity level.
* `filename`: This specifies the file.
* `filemode`: If filename is given, the file is opened in this mode. The default is `a`, which means append.
* `format`: This is the format of the log message.


### Config Level
``` python
import logging

logging.basicConfig(level=logging.DEBUG)
logging.debug('This will get logged')
```
### Other configurations
``` python
import logging

logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
logging.warning('This will get logged to a file')
```

## Logging Variable Data
``` python
import logging

name = 'John'
logging.error('%s raised an error', name)
```

## Capturing Stack Traces
``` python
import logging

a = 5
b = 0

try:
  c = a / b
except Exception as e:
  logging.error("Exception occurred", exc_info=True)
```


## Classes and Functions
The default logger named `root`, which is used by the logging module whenever its functions are called directly like this: `logging.debug()`. You can (and should) define your own logger by creating an object of the Logger class, especially if your application has multiple modules. Let’s have a look at some of the classes and functions in the module.

The most commonly used classes defined in the logging module are the following:

* **Logger**: This is the `class` whose objects will be used in the application code directly to call the functions.
* **LogRecord**: Loggers automatically create `LogRecord` objects that have all the information related to the event being logged, like the name of the `logger`, the function, the line number, the message, and more.
* **Handler**: Handlers send the `LogRecord` to the required output destination, like the console or a file. Handler is a base for subclasses like `StreamHandler`, `FileHandler`, `SMTPHandler`, `HTTPHandler`, and more. These subclasses send the logging outputs to corresponding destinations, like `sys.stdout` or a disk file.
* **Formatter**: This is where you specify the format of the output by specifying a string format that lists out the attributes that the output should contain.

``` python
# logging_example.py

import logging

# Create a custom logger
logger = logging.getLogger(__name__)

# Create handlers
c_handler = logging.StreamHandler()
f_handler = logging.FileHandler('file.log')
c_handler.setLevel(logging.WARNING)
f_handler.setLevel(logging.ERROR)

# Create formatters and add it to handlers
c_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

# Add handlers to the logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)

logger.warning('This is a warning')
logger.error('This is an error')
```


## Other Configuration Methods
### Ini Config File
``` ini
[loggers]
keys=root,sampleLogger

[handlers]
keys=consoleHandler

[formatters]
keys=sampleFormatter

[logger_root]
level=DEBUG
handlers=consoleHandler

[logger_sampleLogger]
level=DEBUG
handlers=consoleHandler
qualname=sampleLogger
propagate=0

[handler_consoleHandler]
class=StreamHandler
level=DEBUG
formatter=sampleFormatter
args=(sys.stdout,)

[formatter_sampleFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
```
In the above file, there are two loggers, one handler, and one formatter. After their names are defined, they are configured by adding the words logger, handler, and formatter before their names separated by an underscore.
``` python
import logging
import logging.config

logging.config.fileConfig(fname='config.ini', disable_existing_loggers=False)

# Get the logger specified in the file
logger = logging.getLogger(__name__)

logger.debug('This is a debug message')
```

### YAML Configuration File
``` yaml
version: 1
formatters:
  simple:
    format: '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
handlers:
  console:
    class: logging.StreamHandler
    level: DEBUG
    formatter: simple
    stream: ext://sys.stdout
loggers:
  sampleLogger:
    level: DEBUG
    handlers: [console]
    propagate: no
root:
  level: DEBUG
  handlers: [console]
```

Loading yaml file
``` python
import logging
import logging.config
import yaml

with open('config.yaml', 'r') as f:
    config = yaml.safe_load(f.read())
    logging.config.dictConfig(config)

logger = logging.getLogger(__name__)

logger.debug('This is a debug message')
```