---
slug: Introduction to PostCSS
title: 初识 PostCSS
description: 在读别人博客时遇到了 PostCSS 没有看的很明白，遂查，为自己补充一点概念
date: 2025-03-24T00:30:00+08:00
lastmod: 2025-03-24T00:30:00+08:00
tags:
  - Framework
---
PostCSS 小科普：https://www.manjusaka.blog/posts/2016/07/22/%E5%85%B3%E4%BA%8EPostCSS%E7%9A%84%E4%B8%80%E7%82%B9%E5%B0%8F%E7%A7%91%E6%99%AE/

PostCSS 是一个使用 JavaScript 插件来转换 CSS 的工具
-> 什么叫使用 JS 插件？为什么要转换 CSS？
PostCSS 是一个框架，我们可以在框架内嵌入 JS 插件进行使用。
因为我们通常想要对 CSS 进行一些修改，例如：为 CSS 添加前缀。这些确定性的任务如果手动完成就过于劳累了。

添加前缀是为了满足浏览器的兼容性，因为浏览器没有完全统一 CSS 标准
例如，在早期的 ie 浏览器一些属性需要加上 -ms- 而 safari 和 chrome 的一些属性需要加上 -webkit-
.example {
    display: grid;
}

.example {
    display: -ms-grid;
    display: -webkit-grid;
    display: grid;
}


PostCSS 不是类似 Sass 或 Less 的风格预处理器
PostCSS 与 CSS 协作，并且能够轻松集成到上述工具当中。任何有效的 CSS 都可以由 PostCSS 处理
PostCSS 是构建出色的执行 CSS 操作工具的框架。
PostCSS 并不一定执行 CSS 标准，而是允许用户定义自定义的类 CSS 特征。

PostCSS 的解释器采用 词法分析和语法分析 从 Source String -> tokens -> AST 而不是像 Rework analyzer 那样直接转化为AST 是出于性能和抽象复杂度的角度考虑的。

Tokenizer/Lexer 再语法分析中起着重要作用

PostCSS 包含：CSS 解析器(Parser)、Processor (暴露操作 CSS 节点树的 API)、Stringifier 节点树字符串化工具。
-> 为什么要对节点树进行字符串化？
因为为了便于操作，PostCSS 首先将 字符串 CSS 转化为了 AST，而我们最终需要的是字符串形式的 CSS 。



什么是 vendor prefixes（浏览器内核前缀）？
CSS 预处理器是干什么用的？类似 Sass 和 Less
预处理器通过定义一种新的语言，来为 CSS 增加一些编程特性，允许开发者使用这种语言完成 CSS编码，其编译目标文件就是标准的 CSS。