---
title: 07. UI&Server
index: true
icon: "/assets/icon/common/submarine.svg"
author: Haiyue
date: 2023-10-27
category:
  - work
---


| URI | Type | ReqParam | Resp | Desc |
| -- | -- | -- | -- | -- |
| /api/models | GET | None | `[{label: "", value: ""},{label: "", value: ""}]` | Get avaliable models list |
| /api/manual_levels | GET | None | `{"level_name": ""}` | Get the definition of Manual levels |
| /api/parse | POST | [Click Here for Details](#request-parameters-of-parse-api) | [Click Here for Details](#response-of-parse-api) | Make summarization and make levels based on contents |


## Request Parameters of Parse API
### For Manual Levels
``` json
{
    "level": "Manual", 
    "model": "",
    "LevelDefinition": {
        "level_name": "definition"
    },
    "text": "The content"
}
```
### For Auto Levels
``` json
{
    "level": "Auto", 
    "model": "",
    "text": "The content"
}
```
## Response of Parse API
### Response Data For Manual Levels
``` json
{
    "Level": "normal",
    "Summarization": "Joseph caught running red light, adjudicated by TCI."
}
```

### Response Data For Auto Levels
``` json
{
    "level": 3,
    "reason": "Minor traffic violation captured by camera.",
    "domain": "Traffic Law",
    "narrative": "Joseph Citizen caught running red light."
}
```



https://haystack.deepset.ai/
https://www.philschmid.de/inferentia2-llama-7b

[如何让子元素的大小与父元素大小相同？](https://www.volcengine.com/theme/4759773-R-7-1)