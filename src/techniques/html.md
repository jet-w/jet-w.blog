---
title: HTML
date: 2023-11-05
icon: /assets/icon/common/html.svg
author: Haiyue
category:
  - make
tag:
  - skills
star: false
sticky: false
---
### HTML version
``` html
<!-- HTML 4.01 Strict --> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!-- HTML 4.01 Transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- HTML 4.01 Frameset -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- XHTML 1.0 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<!-- XHTML 1.1 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<!--HTML 5声明-->
<!doctype html> 
```

### Charset and key words
``` html
<!-- charset of the page -->
<meta charset="utf-8">
<!-- key words of website -->
<meta name="keywords" content="HTML5,前端,CSS">
```

### semantic tags
``` html
<!-- header from 1~6 -->
<h1></h1>
<h2></h2>

<!-- head group -->
<hgroup> 
  <h1></h1>
  <h2></h2>
</hgroup>

<!-- em表示语音语调重读 -->
<em></em>

<!-- strong -->
<strong></strong>

<!-- blockquote -->
鲁迅说： <blockquote>我是一个好人</blockquote>

<!-- q short quote -->
子曰<q>学而时习之</q>

<!-- new line-->
<br>
```

### List
``` html
<!--
  列表：html5中有三种创建列表的方式：
    1. 有序列表
    2. 无序列表
    3. 定义列表
  列表之间可以互相嵌套
 -->
<!-- 有序列表 -->
<ol>
  <li>结构</li>
  <li>表现</li>
  <li>行为</li>
</ol>

<!-- 无序列表 -->
<ul>
  <li>结构</li>
  <li>表现</li>
  <li>行为</li>
</ul>

<!-- 定义列表 
  dl 定义一个列表
  dt 表示定义内容
  dd 表示对内容的解释说明
-->
<dl>
  <dt>结构</dt>
  <dd>结构用来规定哪里是标题</dd>
</dl>
```


### Link
``` html
<!--
  target 属性，用来指定超链接打开的方式：
    _self 默认值，在当前页面中打开超链接
    _blank 在新的一个页面中打开超链接
  若把href属性设置为#，这样点击超链接则会回到页面顶部
    
  若把href属性设置为#id，这样可跳转至id指向的元素位置

  若将href属性设置为javascript:;则点击不会有任何反应
 -->
<a href="07.列表.html" target="_blank">超链接</a>

<a href="javascript:;" target="_blank">无反应链接</a>
```

### Image
``` html
<!-- img属于替换元素（介于块和行内元素之间）-->
<img src="">
```

### iframe
``` html
<!-- 内联框架 -->
<iframe src="https://www.qq.com" width="800"></iframe>
```

### multi-media
``` html
<!-- 
音视频:
  默认情况下，不允许用户自己控制播放停止
  属性：
    controls 是否允许用户控制播放
    autoplay 音频文件是否自动播放，若设置autoplay音乐则会自动播放，当目前大部分浏览器都不会自东进行音乐播放
    loop 是否循环播放
 -->

<!-- 音频 -->
<audio src="" controls autoplay loop> </audio>

<audio controls>
  对不起，您的浏览器不支持播放音乐！
  <source src=""/>
</audio>

<!-- 可以让IE8支持的一种写法 -->
<embed src="" type="audio/mp3">


<!-- 视频：和audio使用方法基本一致 -->
<video src=""></video>
```



### Classification of elements in html
``` html
<!--
  元素类型一般分为两类：
    块元素（block element）：
      --在网页中对页面进行布局
    行内元素：
      --行内元素主要用以包裹文字

* 一般情况下在块元素中放行内元素，而不会再行内元素中放块元素
* p元素中不能放任何块元素

浏览器在网页解析式，回对网页中不符合规范的内容进行修正

 -->

<!--
  区块标签：
    header  表示网页头部
    main    表示网页主题（一个页面只有一个main）
    footer  表示网页底部
    nav     表示网页中导航
    aside   和主题相关的其他内容（侧边栏）
    article 表示独立的文章
    section 表示独立的区块，以上标签均不能表示时使用section

    div: 无具体语义，主要用来做布局使用
  行内元素：
    span：无任何语义，一帮用于在网页中选中文字
 -->
```