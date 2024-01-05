---
title: Fine Tune Models
date: 2023-11-27
icon: circle-dot
author: Haiyue
category:
  - AI
tag:
  - resources
star: false
sticky: false
--- 
01. [Ultimate Guide to Fine-Tuning in PyTorch : Part 1 — Pre-trained Model and Its Configuration](https://rumn.medium.com/part-1-ultimate-guide-to-fine-tuning-in-pytorch-pre-trained-model-and-its-configuration-8990194b71e)
02. [Ultimate Guide to Fine-Tuning in PyTorch : Part 3 —Deep Dive to PyTorch Data Transforms with Examples](https://rumn.medium.com/ultimate-guide-to-fine-tuning-in-pytorch-part-3-deep-dive-to-pytorch-data-transforms-53ed29d18dde)
03. [Fine-tune a pretrained model](https://huggingface.co/docs/transformers/training)
04. [TORCHVISION OBJECT DETECTION FINETUNING TUTORIAL](https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html)
05. [[NLP Tutorial] Fine-Tuning in PyTorch](https://www.kaggle.com/code/rajkumarl/nlp-tutorial-fine-tuning-in-pytorch)

## Parts
This article is divided into four parts, with each part focusing on different aspects of fine-tuning models.

Part 1 : We will delve into defining a pre-trained model and configuring it to suit your target task.
Part 2 : The second part will explore various techniques to enhance the accuracy of your fine-tuned model.
Part 3 : Moving on to Part Three, we will cover the process of Defining Data and Applying Transformations tailored specifically to your target task.
Part 4 : Finally, in the last of this series, we’ll address Model Training Observability, including which metrics to track during training and how to effectively manage model checkpoints, among other important aspects.

## Outlines
* Introduction — The Model and Its Configuration
* Loading a pre-trained model
* Modifying model head
* Setting Learning Rate, Optimizer and Weight Decay
* Choosing Loss Function
* Freezing Full or Partial network
* Define Model Floating-point precision
* Training and Validation Mode
* Single GPU and Multi GPU
* Conclusion

# Introduction
Defining a model includes a range of important decisions, including selecting the appropriate architecture, customizing the model head, configuring the loss function and learning rate, setting the desired floating-point precision, and determining which layers to freeze or fine-tune, and many more. In this article, we will explore each of these aspects in detail, providing valuable insights to help you effectively define and fine tune your model.

# Loading a pre-trained model