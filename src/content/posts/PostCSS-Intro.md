---
slug: Introduction to PostCSS
title: 初识 PostCSS
description: 在读别人博客时遇到了 PostCSS 没有看的很明白，遂查，为自己补充一点概念
date: 2025-03-24T00:30:00+08:00
lastmod: 2025-03-24T00:30:00+08:00
tags:
  - Framework
---
本文的写作依旧来自 Manjusaka 的博客（因为我最近想把他的博客从头到尾看一遍）[PostCSS 小科普](https://www.manjusaka.blog/posts/2016/07/22/%E5%85%B3%E4%BA%8EPostCSS%E7%9A%84%E4%B8%80%E7%82%B9%E5%B0%8F%E7%A7%91%E6%99%AE/)。因为我缺失太多知识所以必须补充更多知识才能读懂，所以总归是与他的博客不太一样的。

PostCSS 是一个用于转换 CSS 的框架，通过在框架内嵌入 JavaScript 插件来使用它。
这里引申出两个问题：1. 如何在框架中使用插件？ 2. 为什么要转换 CSS？

先来解决第一个问题，下图展示了 PostCSS 的工作流，可以看到，所有插件都是线性地排列，轮流处理解析 CSS 文本得到的中间形式，在插件完成输出后再将中间形式转化为 CSS 文本。

[PostCSS Workflow](../attachments/PostCSS/PostCSS-Workflow.png)

第二个问题中所谓的「转换」其实可以视作「变更」。更具体来说，是对 CSS 进行一系列的修改，使之更符合开发者预期。这也是 PostCSS 的开发初衷（我瞎猜的，别信），希望提供一个便利的框架，方便开发者编写插件完成它们希望对 CSS 代码进行的修改，以此减少开发者在编写代码时所做的“体力活”，也减少一些规则可识别的错误，让代码变得更加强大。例如：AutoPrefixer 就是一个方便的为 CSS 添加前缀的插件。

于是问题又来了😓，为什么我们为 CSS 添加插件？

添加前缀并不像字面意思那样仅仅向某些字段前添加内容（我曾经这么认为），而是为 CSS 添加属性，满足对不同浏览器因为没有完全遵照统一的 CSS 标准而产生的兼容性问题。
以下代码就是一个最小的例子，在早期的 ie 浏览器一些属性前需要加上 -ms- ，而 safari 和 chrome 的一些属性需要加上 -webkit-，才能按预期渲染。

```css
/** Autoprefixer 处理前 */
.example {
    display: grid;
}

/** Autoprefixer 处理后*/
.example {
    display: -ms-grid;
    display: -webkit-grid;
    display: grid;
}
```

有点偏题了......，让我拉回来。

再来简单讲讲 PostCSS 自身。PostCSS 不进行语法和语义的自定义，也不是像 Sass 或者 Less 这样的 样式预处理器(style preprocessor)。相反，PostCSS 期望开发者能够方便地将其集成到 Sass 等预处理器上，用于处理任何「有效的」CSS，这意味着，PostCSS 不一定需要执行 CSS 语法标准，可以允许用户自定义 CSS-like(类CSS) 的特征作为输入。

PostCSS 架构包含：Toeknizer/Lexer, Parser, Processor, Stringifier 四个主要部分。

1. ***Tokenizer/Lexer*** 负责生成 token 列表，但它没有使用像：类，这样，任何可能拖慢 Tokenizer 速度的高级构造，实现了对速度的优化，因此可能看起来不是那么美观（可读性差）。
2. ***Parser*** 生成抽象语法树(AST)，也就是我们前面所提到的中间结构，这种结构广泛应用在各种编译器上。
3. ***Preprocessor*** 结构非常简单，用于初始化插件并允许语法转换，通过公开操作 CSS 节点树的 API 来为插件提供服务。
4. ***Stringifier*** 通过遍历的方式，将处理完成的 AST 转化成标准的 CSS 字符串。

不同于 PostCSS 将 Tokenizer 和 Parser 进行拆分，采用从 Source String -> tokens -> AST 的方法。另一种非常流行的方法是直接将字符串转化为 AST，像 Rework analyzer 就是采用这种风格。但这种方法在代码库很大的情况下会出现代码难以阅读，速度变得很慢等问题。出于性能和抽象复杂度的角度考虑，PostCSS 选择将二者分离的设计，来实现速度非常快的 Tokenizer 和易于阅读的解析器（但难以阅读和速度缓慢也是双方的缺点）进行互补，也专注于各自的功能。


PS: 最后讲讲像 Sass, Less 这种预处理器是干什么的。预处理器通过定义一种新的语言，来为 CSS 增加一些编程特性，允许开发者使用这种语言完成 CSS编码，其编译目标文件就是标准的 CSS。

**Reference**

[1] [PostCSS Docs](https://postcss.org/docs/postcss-architecture)<br/>
[2] [关于PostCSS的一点小科普 - Manjusaka](https://www.manjusaka.blog/posts/2016/07/22/%E5%85%B3%E4%BA%8EPostCSS%E7%9A%84%E4%B8%80%E7%82%B9%E5%B0%8F%E7%A7%91%E6%99%AE/)