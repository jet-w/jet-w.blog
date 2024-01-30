---
title: QA
date: 2024-01-27
icon: circle-dot
author: Haiyue
category:
  - AI
star: false
sticky: false
--- 


## OMP: Error #15: Initializing libiomp5md.dll, but found mk2iomp5md.dll already initialized.
``` info
OMP: Error #15: Initializing libiomp5md.dll, but found mk2iomp5md.dll already initialized.
OMP: Hint: This means that multiple copies of the OpenMP runtime have been linked into the program. That is dangerous, since it can degrade performance or cause incorrect results. The best thing to do is to ensure that only a single OpenMP runtime is linked into the process, e.g. by avoiding static linking of the OpenMP runtime in any library. As an unsafe, unsupported, undocumented workaround you can set the environment variable <span style="color:orange">KMP_DUPLICATE_LIB_OK=TRUE</span> to allow the program to continue to execute, but that may cause crashes or silently produce incorrect results. For more information, please see http://www.intel.com/software/products/support/.
```


```
```
