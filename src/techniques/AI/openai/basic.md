---
title: Basic Usuage
index: true
icon: circle-dot
author: Haiyue
category:
  - openai
star: false
sticky: false
---


## Role value explaination
1. Role "user" : It means you or who is chatting or who is asking to chat gpt.
2. Role "assistant" : It means open AI(chat gpt) server - who is replying your("user" role) questions.
3. Role "system" : It means the system developer who can internally give some instructions for the conversation. developer can provide option for user input also which depends on the system requirements.


## [Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
### Six strategies for getting better results
#### 1. Write clear instructions
These models can’t read your mind. If outputs are <span style="color:purple">too long, ask for brief replies</span>. If outputs are <span style="color:orange">too simple</span>, ask for <span style="color:orange">expert-level writing</span>. If you dislike the format, demonstrate the format you’d like to see. The <span style="color:orange">less the model has to <span style="color:red;font-weight:bold;">guess</span></span> at what you want, the more likely you’ll get it.

***Tactics***
1. **Include details in your query to get more relevant answers**
    In order to get a highly relevant response, make sure that requests <span style="color:orange">provide any important details or context</span>. Otherwise you are leaving it up to the model to guess what you mean.
    
    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-include-details-in-your-query-to-get-more-relevant-answers)

2. **Ask the model to adopt a persona**
    The <span style="color:orange">system message</span> can be used to <span style="color:orange">specify the persona used</span> by the model in its replies.
    
    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-to-adopt-a-persona)

3. **Use delimiters to clearly indicate distinct parts of the input**
    Delimiters like <span style="color:orange">triple quotation marks, XML tags, section titles, etc.</span> can help demarcate sections of text to be treated differently.
    
    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input)

4. **Specify the steps required to complete a task.**
    Some tasks are best specified as <span style="color:orange">a sequence of steps</span>. <span style="color:orange">Writing the steps out explicitly</span> can make it easier for the model to follow them.
    
    [Example](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-steps-required-to-complete-a-task)

5. **Provide examples**
    <span style="color:orange">Providing general instructions</span> that apply to all examples is generally more efficient than demonstrating all permutations of a task by example, but <span style="color:orange">in some cases providing examples may be easier</span>. For example, if you intend for the model to copy a particular style of responding to user queries which is difficult to describe explicitly. This is known as "few-shot" prompting.

6. **Specify the desired length of the output**
    You can ask the model to produce outputs that are of a given target length. The targeted output length can be specified in terms of the count of words, sentences, paragraphs, bullet points, etc. Note however that instructing the model to generate <span style="color:orange">a specific number of words does not work with high precision</span>. The model can more reliably generate outputs with a specific number of paragraphs or bullet points.

#### 2. Provide reference text
***Tactic***

1. **Instruct the model to answer using a reference text**
    If we can provide a model with trusted information that is relevant to the current query, then we can instruct the model to use the provided information to compose its answer.
    
    Given that all models have limited context windows, we need some way to dynamically lookup information that is relevant to the question being asked. <span style="color:orange">[Embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings)</span> can be used to implement efficient knowledge retrieval. See the tactic "[Use embeddings-based search to implement efficient knowledge retrieval](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)" for more details on how to implement this.

    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-using-a-reference-text)

2. **Instruct the model to answer with citations from a reference text**
    If <span style="color:orange">the input has been supplemented with relevant knowledge</span>, it's straightforward to request that the model add citations to its answers by referencing passages from provided documents. 
    
    ::: note
    The citations in the output can then be verified programmatically by string matching within the provided documents.
    :::

    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)

#### 3. Split complex tasks into simpler subtasks
    
***Tactic***

1. **Use intent classification to identify the most relevant instructions for a user query**
    For tasks in which lots of independent sets of instructions are needed to handle different cases, it can be beneficial to first classify the type of query and to use that classification to determine which instructions are needed. This can be achieved by defining <span style="color:orange">fixed categories</span> and <span style="color:orange">hardcoding instructions</span> that are relevant for handling tasks in a given category. This process can also <span style="color:orange">be applied recursively to decompose a task into a sequence of stages</span>. The advantage of this approach is that each query will contain only those instructions that are required to perform the next stage of a task which can result in lower error rates compared to using a single query to perform the whole task. This can also result in lower costs since larger prompts cost more to run.

[Example](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-intent-classification-to-identify-the-most-relevant-instructions-for-a-user-query)

2. **For dialogue applications that require very long conversations, summarize or filter previous dialogue.**
    Since models have a fixed context length, dialogue between a user and an assistant in which the entire conversation is included in the context window cannot continue indefinitely.

    There are various workarounds to this problem, one of which is to <span style="color:orange">summarize previous turns in the conversation</span>. Once the size of the input reaches a predetermined threshold length, this could trigger a query that summarizes part of the conversation and the summary of the prior conversation could be included as part of the system message. Alternatively, prior conversation could be summarized asynchronously in the background throughout the entire conversation.

    An alternative solution is to dynamically select previous parts of the conversation that are most relevant to the current query. See the tactic "[Use embeddings-based search to implement efficient knowledge retrieval](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)".

3. **Summarize long documents piecewise and construct a full summary recursively**
    Since models have a fixed context length, they cannot be used to summarize a text longer than the context length minus the length of the generated summary in a single query.

    <span style="color:orange">To summarize a very long document such as a book we can use a sequence of queries to summarize each section of the document. Section summaries can be concatenated and summarized producing summaries of summaries</span>. <span style="color:red">This process can proceed recursively until an entire document is summarized</span>. If it’s necessary to use information about earlier sections in order to make sense of later sections, then a further trick that can be useful is to include a running summary of the text that precedes any given point in the book while summarizing content at that point. The effectiveness of this procedure for summarizing books has been studied in previous research by OpenAI using variants of GPT-3.




#### 4. Give the model time to "think"
***Tactic***
1. **Instruct the model to work out its own solution before rushing to a conclusion**
Sometimes we get better results when we explicitly instruct the model to reason from first principles before coming to a conclusion. Suppose for example we want a model to evaluate a student’s solution to a math problem. The most obvious way to approach this is to simply ask the model if the student's solution is correct or not.

[Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)

2. **Use inner monologue or a sequence of queries to hide the model's reasoning process**
    The previous tactic demonstrates that it is <span style="color:orange">sometimes important for the model to reason in detail</span> about a problem before answering a specific question. For some applications, the reasoning process that a model uses to arrive at a final answer would be inappropriate to share with the user. For example, in tutoring applications we may want to encourage students to work out their own answers, but a model’s reasoning process about the student’s solution could reveal the answer to the student.

    Inner monologue is a tactic that can be used to mitigate this. The idea of inner monologue is to instruct the model to put parts of the output that are meant to be hidden from the user into a structured format that makes parsing them easy. Then before presenting the output to the user, the output is parsed and only part of the output is made visible.

3. **Ask the model if it missed anything on previous passes**
    Suppose that we are using a model to list excerpts from a source which are relevant to a particular question. After listing each excerpt the model needs to determine if it should start writing another or if it should stop. <span style="color:orange">If the source document is large, it is common for a model to stop too early and fail to list all relevant excerpts</span>. In that case, better performance can often be obtained by prompting the model with followup queries to find any excerpts it missed on previous passes.
    
    [Examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-if-it-missed-anything-on-previous-passes)
#### 5. Use external tools
<span style="color:orange">Compensate for the weaknesses</span> of the model by <span style="color:orange">feeding it the outputs</span> of other tools. For example, a text retrieval system (sometimes called RAG or retrieval augmented generation) can tell the model about relevant documents. A code execution engine like OpenAI's Code Interpreter can help the model do math and run code. If a task can be done more reliably or efficiently by a tool rather than by a language model, offload it to get the best of both.

***Tactic***
1. **Use embeddings-based search to implement efficient knowledge retrieval**
    A model can leverage <span style="color:orange">external sources of information</span> if provided as part of its input. This can help the model to <span style="color:orange">generate more informed and up-to-date responses</span>. For example, if a user asks a question about a specific movie, it may be useful to add high quality information about the movie (e.g. actors, director, etc…) to the model’s input. Embeddings can be used to implement efficient knowledge retrieval, so that relevant information can be added to the model input dynamically at run-time.

    <span style="color:orange">A text embedding is a vector that can measure the relatedness between text strings</span>. Similar or relevant strings will be closer together than unrelated strings. This fact, along with the existence of fast vector search algorithms means that embeddings can be used to implement efficient knowledge retrieval. In particular, <span style="color:orange">a text corpus can be split up into chunks</span>, and each chunk can be embedded and stored. Then a given query can be embedded and vector search can be performed to find the embedded chunks of text from the corpus that are most related to the query (i.e. closest together in the embedding space).

    Example implementations can be found in the [OpenAI Cookbook](https://cookbook.openai.com/examples/vector_databases/readme). See the tactic “[Instruct the model to use retrieved knowledge to answer queries](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-using-a-reference-text)” for an example of how to use knowledge retrieval to minimize the likelihood that a model will make up incorrect facts.

2. **Use code execution to perform more accurate calculations or call external APIs**
    Language models cannot be relied upon to perform arithmetic or long calculations accurately on their own. In cases where this is needed, <span style="color:orange">a model can be instructed to write and run code instead of making its own calculations</span>. In particular, a model can be instructed to put code that is meant to be run into a designated format such as triple backtick. After an output is produced, the code can be extracted and run. Finally, if necessary, the output from the code execution engine (i.e. Python interpreter) can be provided as an input to the model for the next query.

    Another good use case for code execution is <span style="color:orange">calling external APIs</span>. If a model is instructed in the proper use of an API, it can write code that makes use of it. <span style="color:orange">A model can be instructed in how to use an API by providing it with documentation and/or code samples showing how to use the API</span>.

    ::: warning Warning
    Executing code produced by a model is not inherently safe and precautions should be taken in any application that seeks to do this. In particular, a sandboxed code execution environment is needed to limit the harm that untrusted code could cause.
    :::
    [Example](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-code-execution-to-perform-more-accurate-calculations-or-call-external-apis)

3. **Give the model access to specific functions**
    <span style="color:orange">The Chat Completions API</span> allows passing a list of function descriptions in requests. This enables models to generate function arguments according to the provided schemas. Generated function arguments are returned by the API in JSON format and can be used to execute function calls. Output provided by function calls can then be fed back into a model in the following request to close the loop. This is the recommended way of using OpenAI models to call external functions. To learn more see the [function calling section](https://platform.openai.com/docs/guides/function-calling) in our introductory text generation guide and more [function calling examples](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models) in the OpenAI Cookbook.

#### 6. [Test changes systematically](https://platform.openai.com/docs/guides/prompt-engineering/strategy-test-changes-systematically)
    More details please read the official document.


## [Fine-Turning GPT](https://platform.openai.com/docs/guides/fine-tuning/preparing-your-dataset)
[Mastering GPT-3: A Comprehensive Guide to Fine-Tuning with OpenAI, Complete with Examples](https://medium.com/@kapildevkhatik2/mastering-gpt-3-a-comprehensive-guide-to-fine-tuning-with-openai-complete-with-examples-e28515c22d92)