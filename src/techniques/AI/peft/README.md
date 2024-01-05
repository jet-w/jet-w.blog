---
title: PEFT
index: false
icon: list-check
author: Haiyue
category:
  - readme
---

PEFT (Parameter-Efficient Fine-Tuning) is a library for efficiently <span style="color:orange">adapting large pretrained models</span> to various downstream applications <span style="color:orange">without fine-tuning all of a model’s parameters</span> because it is prohibitively costly. PEFT methods only <span style="color:orange">fine-tune a small number of (extra) model parameters</span> - significantly decreasing computational and storage costs - while yielding performance comparable to a fully fine-tuned model. This makes it more accessible to train and store large language models (LLMs) on consumer hardware.

PEFT is integrated with the Transformers, Diffusers, and Accelerate libraries to provide a faster and easier way to load, train, and use large models for inference.