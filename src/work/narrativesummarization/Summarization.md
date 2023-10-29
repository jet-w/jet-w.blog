---
title: 02. Text Summarization
index: true
icon: "/assets/icon/common/submarine.svg"
author: Haiyue
date: 2023-10-27
category:
  - work
---
01. [Extractive Summarization on Colab <span style="color:red">(Please do not made public)</span>](https://colab.research.google.com/drive/1al92FMOhPry8m20sqcF40w5au8AH5LPT?usp=sharing)
02. [OpenAI test on Colab <span style="color:red">(Please do not made public)</span>](https://colab.research.google.com/drive/1IVOY5bo8AK7gu2svt2rLpeIlYVpSeLIV?usp=sharing)
03. [PaLM Test on Colab](https://colab.research.google.com/drive/1E6UyNTrt40_wMDa7K2ZYrx4-hIymoqcf?usp=sharing)
---

The table below is the summarization for <span style="color:orange;">text summarization</span> and <span style="color:orange;">key entity extraction</span>. The next plan is to validate most of them find the best model and fine-tune them to fill our own needs.

| Name | Website |Type | 
| --- | --- | --- |
| GPT2 | [Github](https://github.com/openai/gpt-2) | OpenSource |
| XLNet | [Github](https://github.com/zihangdai/xlnet) | OpenSource |
| BERT | [Github of Bert](https://github.com/google-research/bert) [Bert-Summarizer](https://pypi.org/project/bert-extractive-summarizer/) | OpenSource |
| KeyBERT | [Github of KeyBert](https://github.com/MaartenGr/KeyBERT) | OpenSource |
| TextRank | [Github Site](https://github.com/summanlp/textrank) [Another Example](https://github.com/letiantian/TextRank4ZH) | OpenSource |
| TF-IDF | | Unknow |
| Word2Vec | [Github Site](https://github.com/danielfrg/word2vec) | OpenSource |
| Gensim | [Github Site](https://github.com/piskvorky/gensim) | OpenSource |
| Sumy | [Github Site](https://github.com/miso-belica/sumy) | OpenSource |
| NLTK | [Github Site](https://github.com/nltk/nltk) | OpenSource |
| T5 | [Github Site](https://github.com/google-research/t5x) | OpenSource |
| GPT-3~4 | [Github Sample](https://github.com/openai/openai-cookbook)[openai documentation](https://platform.openai.com/docs/models/overview) | Commercial |
| AWS Service | [AWS Comprehend](https://aws.amazon.com/comprehend/)|Commercial |
| PaLM | [PaLM API: Text Quickstart with Python](https://developers.generativeai.google/tutorials/text_quickstart) | Commerical |

---

## Annotated bibliography 
01. [Text Summarization using BERT, GPT2, XLNet](https://medium.com/analytics-vidhya/text-summarization-using-bert-gpt2-xlnet-5ee80608e961)
    ::: info
    Very general text to describe summarization.

    Other options are given: <span style="color:orange;font-weight:bold;">[GPT2](https://jalammar.github.io/illustrated-gpt2/), [XLNet](https://towardsdatascience.com/xlnet-a-clever-language-modeling-solution-ab41e87798b0)</span>
    :::

02. [BERT Extractive Summarizer vs Word2Vec Extractive Summarizer: Which one is better and faster?](https://utomorezadwi.medium.com/bert-extractive-summarizer-vs-word2vec-extractive-summarizer-which-one-is-better-and-faster-c6d6d172cb91)
    ::: info
    Very general text to describe summarization.

    Other options are given: <span style="color:orange;font-weight:bold;">[TextRank](https://medium.com/data-science-in-your-pocket/text-summarization-using-textrank-in-nlp-4bce52c5b390), [TF-IDF](https://towardsdatascience.com/text-summarization-using-tf-idf-e64a0644ace3), and [Word2Vec](https://medium.com/jatana/unsupervised-text-summarization-using-sentence-embeddings-adb15ce83db1)</span>
    :::
03. [Extractive Summarization with BERT Extractive Summarizer](https://www.holisticseo.digital/python-seo/summarize/)
    ::: info
    Very general description fro summarization.
    :::
04. [5 Powerful Text Summarization Techniques in Python](https://www.turing.com/kb/5-powerful-text-summarization-techniques-in-python)
    ::: tabs
    @tab Gensim
    ``` python
    from gensim.summarization.summarizer import summarize
    from gensim.summarization import keywords
    import wikipedia
    import en_core_web_sm

    # To import the wikipedia content:
    wikisearch = wikipedia.page("")
    wikicontent = wikisearch.content
    nlp = en_core_web_sm.load()
    doc = nlp(wikicontent)

    # To summarize based on percentage:
    summ_per = summarize(wikicontent, ratio = "")
    print("Percent summary")
    print(summ_per)
    
    #To summarize based on word count:
    summ_words = summarize(wikicontent, word_count = "")
    print("Word count summary")
    print(summ_words)
    ```

    @tab Sumy
    ***LexRank***: LexRank is a graphical-based summarizer.
    ``` python
    from sumy.summarizers.lex_rank import LexRankSummarizer
    summarizer_lex = LexRankSummarizer()
    
    # Summarize using sumy LexRank
    summary= summarizer_lex(parser.document, 2)
    lex_summary=""
    for sentence in summary:
        lex_summary+=str(sentence)
    print(lex_summary)
    ```

    ***Luhn***: Developed by an IBM researcher of the same name, Luhn is one of the oldest summarization algorithms and ranks sentences based on a frequency criterion for words.
    ``` python
    from sumy.summarizers.luhn import LuhnSummarizer
    summarizer_1 = LuhnSummarizer()
    summary_1 =summarizer_1(parser.document, 2)
    
    for sentence in summary_1:
        print(sentence)
    ```

    ***LSA***: Latent semantic analysis is an automated method of summarization that utilizes term frequency with singular value decomposition. It has become one of the most used summarizers in recent years.
    ``` python
    from sumy.summarizers.lsa import LsaSummarizer
    summarizer_lsa = LsaSummarizer()
    
    # Summarize using sumy LSA
    summary =summarizer_lsa(parser.document,2)
    lsa_summary=""
    
    for sentence in summary:
        lsa_summary+=str(sentence)
    print(lsa_summary)
    ```

    ***TextRank***: And last but not least, there is TextRank which works exactly the same as in Gensim.
    ``` python
    # Load Packages
    from sumy.parsers.plaintext import PlaintextParser
    from sumy.nlp.tokenizers import Tokenizer
    
    # For Strings
    parser = PlaintextParser.from_string(text,Tokenizer("english"))
    from sumy.summarizers.text_rank import TextRankSummarizer
    
    # Summarize using sumy TextRank
    summarizer = TextRankSummarizer()
    summary =summarizer_4(parser.document,2)
    text_summary=""
    
    for sentence in summary:
        text_summary+=str(sentence)
    print(text_summary)
    ```

    @tab NLTK
    The 'Natural Language Toolkit' is an NLP-based toolkit in Python that helps with text summarization.
    ``` python
    import nltk
    from nltk.corpus import stopwords
    from nltk.tokenize import word_tokenize, sent_tokenize

    Input your text for summarizing below:
    
    text = """ """
    
    # Next, you need to tokenize the text:
    stopWords = set(stopwords.words("english"))
    words = word_tokenize(text)

    # Now, you will need to create a frequency table to keep a score of each word:
    freqTable = dict()
    for word in words:
        word = word.lower()
        if word in stopWords:
            continue
        if word in freqTable:
            freqTable[word] += 1
        else:
            freqTable[word] = 1
    
    # Next, create a dictionary to keep the score of each sentence:
    sentences = sent_tokenize(text)
    sentenceValue = dict()
    
    for sentence in sentences:
        for word, freq in freqTable.items():
            if word in sentence.lower():
                if word in sentence.lower():
                    if sentence in sentenceValue:
                        sentenceValue[sentence] += freq
                    else:
                        sentenceValue[sentence] = freq
    sumValues = 0
    for sentence in sentenceValue:
        sumValues += sentenceValue[sentence]
    
    # Now, we define the average value from the original text as such:
    average = int(sumValues / len(sentenceValue))
    
    # And lastly, we need to store the sentences into our summary:
    summary = ''
    for sentence in sentences:
        if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.2 * average)):
            summary += " " + sentence
    print(summary)
    ```

    @tab T5
    To make use of Google’s T5 summarizer, there are a few prerequisites.

    First, you will need to install PyTorch and Hugging Face’s Transformers. You can install the     transformers using the code below:
    
    `pip install transformers`
    
    Next, import PyTorch along with the AutoTokenizer and AutoModelWithLMHead objects:
    ``` python
    import torch
    from transformers, import AutoTokenizer, AutoModelWithLMHead
    ```

    Next, you need to initialize the tokenizer model:
    ``` python
    tokenizer = AutoTokenizer.from_pretrained('t5-base')
    model = AutoModelWithLMHead.from_pretrained('t5-base', return_dict=True)
    ```

    From here, you can use any data you like to summarize. Once you have gathered your data, input the code below to tokenize it:
    ``` python
    inputs = tokenizer.encode("summarize: " + text,
        return_tensors='pt',
        max_length=512,
        truncation=True)
    ```
    
    Now, you can generate the summary by using the model.generate function on T5:
    ``` python    
    summary_ids = model.generate(inputs, max_length=150, min_length=80, length_penalty=5., num_beams=2)
    ```
    Feel free to replace the values mentioned above with your desired values. Once it’s ready, you can move on to decode the tokenized summary using the tokenizer.decode function:
    ``` python
    summary = tokenizer.decode(summary_ids[0])
    ```
    And there you have it: a text summarizer with Google’s T5. You can replace the texts and values at any time to summarize various arrays of data.

    @tab GPT-3
    GPT-3 is a successor to the GPT-2 API and is much more capable and functional. Let’s take a look at how to get it running on Python with an example of downloading PDF research papers.

    First, you will need to import all dependencies:
    ``` python
    import openai
    import wget
    import pathlib
    import pdfplumber
    import numpy as np
    ```

    You will then need to install openai to interact with GPT-3, so make sure you have an API key. You can get one here.
    You will also need wget to download PDFs from the internet. This will further require pdfplumber to convert it back to text. Install all three with pip:
    
    ``` bash
    pip install openai
    pip install wget
    pip install pdfplumber
    ```

    To download the PDF and return its local path, enter the following:
    ``` python
    def getPaper(paper_url, filename="random_paper.pdf"):
        """
        Downloads a paper from the given url and returns
        the local path to that file.
        """
        
        downloadedPaper = wget.download(paper_url, filename)
        downloadedPaperFilePath = pathlib.Path(downloadedPaper)
        
        return downloadedPaperFilePath
    ```
    Now, you need to convert the PDF into text so GPT-3 can read it:
    
    ``` python
    paperFilePath = "random_paper.pdf"
    paperContent = pdfplumber.open(paperFilePath).pages
    
    def displayPaperContent(paperContent, page_start=0, page_end=5):
        for page in paperContent[page_start:page_end]:
            print(page.extract_text())

    displayPaperContent(paperContent)
    ```
        
    Now that you have the text, it’s time to start summarizing it:
    ``` python
    def showPaperSummary(paperContent):
        tldr_tag = "\n tl;dr:"
        openai.organization = 'organization key'
        openai.api_key = "your api key"
        engine_list = openai.Engine.list()
    ```

    Here, we are letting the GPT-3 model know that we require a summary. Then, we proceed to set up the environment to use the openai API.
    ``` python
    for page in paperContent:
        text = page.extract_text() + tldr_tag
        response = openai.Completion.create(
            engine="davinci",
            prompt=text,
            temperature=0.3, 
            max_tokens=140,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            stop=["\n"])
        print(response["choices"][0]["text"])
    ```
    
    This code extracts the text from each page, feeds the GPT-3 model the max tokens for each page, and prints it to the terminal.
    Now that everything is set up, we can run the summarizer:
    ``` python
    paperContent = pdfplumber.open(paperFilePath).pages
    showPaperSummary(paperContent)
    ```

    Text summarization is very useful for people dealing with large amounts of written data on a daily basis, such as online magazines, research sites, and even for teachers in schools.
    While there are simple methods of text summarization in Python such as Gensim and Sumy, there are far more powerful but slightly complicated summarizers such as T5 and GPT-3.
    Which technique to choose really comes down to preference and the use-case for each of these summarizers. But in theory, AI-based summarizers will prove better in the long run as they will constantly learn and provide superior results.
    :::

05. [How to do text summarization with deep learning and Python](https://www.activestate.com/blog/how-to-do-text-summarization-with-python/)
    ::: info
    Text summarises based on frequency metric
    :::
06. [Text Summarization in Python](https://www.mygreatlearning.com/blog/text-summarization-in-python/)
    ::: info Not valuable
    Abstractive Summarization
    ``` python
    # Step 1: import the required libraries. 
    from nltk.corpus import stopwords
    from nltk.tokenize import word_tokenize, sent_tokenize

    # Step 2: Remove the Stop Words and store them in a separate array of words.
    #Stop Words
    #  Words such as is, an, a, the, and ‘for‘ do not add value to the meaning of a sentence. For example, let us take a look at the following sentence:
    #  GreatLearning is one of the most valuable websites for ArtificialIntelligence aspirants.
    #  After removing the stop words in the above sentence, we can narrow the number of words and preserve the meaning as follows:
    #  [‘GreatLearning’, ‘one’, ‘useful’, ‘website’, ‘ArtificialIntelligence‘, ‘aspirants’, ‘.’]

    # Step 3: create a frequency table of the words.
    stopwords = set (stopwords.words("english"))
    words = word_tokenize(text)
    freqTable = dict()

    # Step 4: We will assign a score to each sentence depending on the words it contains and the frequency table.
    sentences = sent_tokenize(text)
    sentenceValue = dict()

    # Step 5: Assign a score to compare the sentences within the text.
    sumValues = 0
    for sentence in sentenceValue:
        sumValues += sentenceValue[sentence]
    average = int(sumValues / len(sentenceValue))

    ```
    :::
07. [Bert Offical Website](https://pypi.org/project/bert-extractive-summarizer/)

08. [Summarize a Text with Python — Continued](https://towardsdatascience.com/summarize-a-text-with-python-continued-bbbbb5d37adb)
    ::: info 
    Text Summarization Using <span style="color:orange;font-weight:bold">NLTK</span>.
    :::
09. [Python | Text Summarizer](https://www.geeksforgeeks.org/python-text-summarizer/)
    ::: info 
    Text Summarization Using <span style="color:orange;font-weight:bold">NLTK</span>.
    :::
10. [Summarize text content using Generative AI (Generative AI)](https://cloud.google.com/vertex-ai/docs/samples/aiplatform-sdk-summarization#whats-next)
    ::: info
    Summarization using google generative AI. <span style="color:orange;font-weight:bold">(Useful but huge project, it will takes lots of time to validate)</span>
    :::

11. [Github XLNet(zihangdai)](https://github.com/zihangdai/xlnet)
    ::: info
    Valuable project using<span style="color:orange;font-weight:bold">XLNet</span>. It will takes lot of time to validate.
    :::

12. [XLNet — A new pre-training method outperforming BERT on 20 tasks](https://medium.com/keyreply/xlnet-a-new-pre-training-method-outperforming-bert-on-20-tasks-b34daeee8edb)
    ::: info
    Describe another approach <span style="color:orange;font-weight:bold">(XLNet)</span> versus to BERT.
    :::

13. [The Illustrated GPT-2 (Visualizing Transformer Language Models)](https://jalammar.github.io/illustrated-gpt2/)
    ::: info
    Principle introduction
    :::

14. [Harnessing the Power of Google Bard with Python: A Comprehensive Guide](https://docs.kanaries.net/articles/google-bard-api)