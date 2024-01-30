---
title: Finetuning
index: true
icon: circle-dot
author: Haiyue
category:
  - openai
star: false
sticky: false
---

::: code-tabs
@tab Basic Info
``` python
from google.colab import userdata
from openai import OpenAI
import pandas as pd
import time
import json

levels_def = {
  "No-Reflection": "Professionals do not indicate any significant reflective thought processes and mainly mirror the words and phrases from the question or give a general comment.",
  "Understanding": "Professionals indicate an understanding of concepts or topics from demonstrating a practical application of theory, yet lack specific details of professional or real-life experiences.",
  "Simple Reflection": "Professionals indicate an understanding of the theory in unison with examples of practical application, yet only provide a vague explanation of future actions or outcomes. They do not provide concrete examples of action or application for the future.",
  "Critical Reflection": "Besides relating the theory with examples from real-life experiences, professionals indicate what they are likely to do in the future or what they need to work on. In some cases, professionals might also reflect a change in their perspective."
}

client = OpenAI(api_key=userdata.get('openai_key'))

df = pd.read_csv('https://jet-w.github.io/data/HS/data/Manuallycoded.Answers.csv')[['Answers', 'Question', 'Final']]
df.head(2).style.set_table_attributes('style="text-align:left;"')
```

@tab Basic Functions
``` python
def getTrainPrompt(question, reflection):
  sys_prompt = f'''
Define the best level for reflection based on the level definition and question.

Level definitions:
"""
No Reflection: This level contains the following points
  1. This doesn't provide any kind of understanding or reflection.
  2. Usually, it comprises a simple one-line response.
Understanding: This level contains the following points
  1. This provides an understanding of the situation.
  2. It does not reflect on past learning or professional experience.
  Example: I think having a strategy is very important. This course material on Strategy development is useful.
Simple Reflection: This level contains the following points
  1. This provides understanding as well as some sort of reflection.
  Example: I think having a strategy is very important. However, I have never used strategy will working in teams in the past.
Critical Reflection: This level contains the following points
  1. It reflects the past and provides prescriptions for the future.
  Example: I think having a strategy is very important. I have never used strategy will working in teams in the past. However, going forward, I will extensively use strategies to do bla bla bla.
"""'''
  user_prompt = f'''
Question: """{question}"""
Reflection: """{reflection}"""'''
  return sys_prompt.strip(), user_prompt.strip()


def export2Jsonl(df, filename):
  with open(filename, 'w') as fw:
    for row in training_data_g.iterrows():
      # chat-completion format
      sys_prompt, user_prompt = getTrainPrompt(row[1]['Question'], row[1]['Answers'])
      obj = {
            "messages":[
              { "role":"system", "content": sys_prompt,},
              { "role":"user" , "content": user_prompt},
              { "role":"assistant","content": row[1]['Level']}
            ]
          }
      fw.write(f"{json.dumps(obj)}\n")

      # completion pair format
      #obj = {
      #    'prompt': getTrainPrompt(row[1]['Question'].strip(), row[1]['Answers']),
      #    'completion': row[1]['Level']
      #}
      #fw.write(f"{json.dumps(obj)}\n")
```

@tab Sample&Export
``` python
levels = list(levels_def.keys())
df['Level'] = list(map(lambda i: levels[i-1], df['Final']))

# ### 1. Sample Randomly from each level
training_data_g = df.groupby("Final").sample(frac=.2, random_state=1)
test_data_g = df.drop(training_data_g.index)
#training_data_g.to_json('training_data_g.json', orient="records")

export2Jsonl(training_data_g, 'training_data_g.jsonl')

# ### 2. Sample Randomly from the whole dataset
training_data_r = df.sample(frac=.2, random_state=1)
test_data_r = df.drop(training_data_r.index)
#training_data_r.to_json('training_data_r.json', orient="records")
export2Jsonl(training_data_r, 'training_data_r.jsonl')

```

@tab Upload&Finetuning
``` python
client.files.delete(job.id)
job = client.files.create(
  file=open("training_data_g.jsonl", "rb"),
  purpose="fine-tune"
)
job

finetuning = client.fine_tuning.jobs.create(
  model = "gpt-3.5-turbo",
  training_file = job.id, 
  hyperparameters= {
    "n_epochs": "auto",
  },
  suffix = "sentiment"
)

finetuning
```

@tab Retrive Status
``` python
client.fine_tuning.jobs.list(limit=10)

# Retrieve the state of a fine-tune
client.fine_tuning.jobs.retrieve(finetuning.id)
```
:::



## References
[Official document: Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning/create-a-fine-tuned-model)

[Learn Fine Tuning: Making GPT-3.5 Better at Recognizing Sentiment](https://medium.com/bertcode/learn-fine-tuning-making-gpt-3-5-better-at-recognizing-sentiment-9dc7a36966ae)
[sentiment-ft/training_set.jsonl](https://github.com/bert-bae/bertcode-blog-content/blob/master/sentiment-ft/training_set.jsonl)