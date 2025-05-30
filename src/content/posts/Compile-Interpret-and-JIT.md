---
slug: Compile-Interpret-and-JIT
title: 编译与解释与JIT
description: 编译和解释是相当基础的概念，但如果将他们结合会形成什么样的火花呢？我阅读 Manjusaka 的文章 [a-simple-introduction-about-python-jit](https://www.manjusaka.blog/posts/2024/01/03/a-simple-introduction-about-python-jit/) 时发现我对 JIT 和 “解释” 的了解似乎非常有限，有许多盲区。遂决定进行调研满足自己的好奇心，同时为了让自己记得更牢固而输出，于是有了这篇文章。
date: 2025-03-17T00:30:00+08:00
lastmod: 2025-03-17T00:30:00+08:00
tags:
  - programming language
---

不同国家的人拥有不同的语言，它们在进行沟通时通常需要翻译。人类和硬件的关系也是如此，人类不易看懂硬件的 “机器语言(Machine Language)”，而硬件也不懂人类创造的 “编程语言(Programming Language)”，因此人类和硬件之间需要翻译。现在我们有两种翻译手段，“编译（Compile）” 和 “解释（Interpret）”。

前者提前将编程语言通过 “汇编（Assemble）“、”链接（Link）“ 等手段提前翻译为机器语言，生成可执行文件后交由机器执行，这种方式生成的程序运行速度更快，并且编译优化后的机器代码难以被人类所阅读，分发时能够保护程序源代码不被窃取。

后者则直接将编程语言输入解释器，由解释器一边解释一边执行。相比编译的方式，这种方式能够让程序更快地开始运行，而不需要等待漫长的编译时间，并且后续代码的错误不会影响前置代码的正常运行（编译方式则会因为无法完成编译而无法运行），也更容易开发迭代。解释方式的另一个优点是可移植性，由于解释器并不翻译，而是直接解释执行源代码，所以整个运行过程与底层机器无关，使得解释方式更加便于分发。同时相比于编译器，解释器本身也更加容易构建，其运行时也行也使之适合处理动态类型、范围等问题（但理论上编译器也可以实现）

或许有人和笔者一样，疑惑于 “解释” 究竟是如何进行的。实际上，在解释语言的过程中，运行的主体不是开发者编写的程序而是运行过程中使用的解释器，所有的代码都是解释器的输入，而解释器会根据代码定义的行为执行相应的动作，最后得到输入代码期望的输出。例如 CPython，就是用 C 语言编写的解释器，来执行相应的动作。以程序 `a = 0; a++;` 为例，编写一个简易的解释器如下：

```rust
let line = get_next_line_of_code();
if line.equal("a = 0") {
		set_variable("a", 0);
} else if line =  {
		add_variable("a", 1);
}
```

可以看到，编译和解释，两种方式各有优势。当然，我们也可以将这两种方式结合，如：Java、Python 等知名语言便是这样做的。Java 会先将源代码编译成 Bytecode 这个中间语言，我们平时所看到的 .class 里的内容，Bytecode 本身也是与平台无关的。在这一阶段，会完成复杂的语义分析、语法分析等内容，还会完成部分优化，这为之后的快速解释奠定了基础。在得到 Bytecode 以后，解释器的工作就变得更加容易了，直接将完成各种语法检查，机器更加易懂的语言进行解释。Python 同样有 .pyc 的中间文件，只不过很好地将它隐藏了起来。但基于表征，我们仍然将 Python 归类为解释型语言。

除了直接将其拼接，我们能否更自然地结合着两者呢？当然，这就是即时编译(Just-In-Time Compile, JIT)，一种试图结合编译和解释两者优点的技术，但现在主要用作解释的加速手段。为了加以区别，上文提到的编译被称作 “提前编译（Ahead-of-Time Compile，AOT）”。如其名字所示，JIT 的主要运行方式就是在每块编程语言代码运行之前再将其编译为机器代码，之后立即执行。而不是像 AOT 那样提前完整编译完成再执行。这种方式能够提供比解释更快、接近 AOT 的整体运行速度（但不是首次运行速度，总的来说编译是比解释更加耗费时间的）却保持了解释方式启动快易于 Debug 的特点，也能实现易于分发的可移植性。

公认最早的 JIT 起源于 John McCarthy 在 Lisp 上的工作。它提到了一种运行时翻译但不保留编译结果的方式（尽管准确来说这是一种 “编译并运行系统（Compile-and-Go System）”），这时 JIT 还只是 “动态编译（Dynamic Compile）” 的一个子集。但在 1995 年，Java 使用了 JIT 这一术语描述它的新功能新组件，这使得 JIT 的概念得到了泛化，补充了 “自适应优化（Dynamic Optimizations）” 这一个用法，从而几乎与动态编译等价了。在 1995 年后的一段时间里，许多论文都交替地使用这两个术语（在此之前标准且唯一的术语只有动态编译）。

JIT 更常见的用法是作为解释型语言的辅助，因为编译得到的代码执行速度通常比解释快上许多。在自适应优化这一语境下，JIT 通常是随着 “虚拟机(Virtual Machine, VM)” 一起使用的，在虚拟机解释代码的过程当中，虚拟机可以获取程序的运行信息，例如：记录代码块被使用的次数。在记录次数超过一定阈值后，则认为这些代码为热点代码，虚拟机使用 JIT 即时对这些代码进行编译加速，试图获得比解释更高的性能。

上一段主要是 JIT 在解释过程中的优化应用，但同样是编译，编译型语言也可能通过 JIT 来得到加速（但大部分时候可能是拖累）。因为大量的信息，在运行代码之前的静态分析编译过程中是无法得知的，这给予了 JIT 反超的机会。但 AOT 并非没有办法解决这个问题，由于 JIT 也是通过分析记录得到的运行时信息，所以 AOT 只需要提前得到某些信息，再通过 “基于配置文件优化（Profile-Guided Optimization，PGO）” 就可以达到与 JIT 类似的效果。

而且还有许多内容是无法提前编译的，例如：在运行过程中在能得知的正则表达式，这是 AOT 已经无法继续编译了，但 JIT 还可以即时地编译正则表达式以加速程序运作。同时现代还是有许多语言是直接使用 JIT 而不依赖于解释过程的。Julia 就是一个很典型的例子，作为一种编译型语言，Julia 使用 JIT 来判断在实际运行过程中哪些签名组合的函数是需要被编译，并实际编译它们来换取更快的速度。另外 Java 的部分实现，如：JRockit VM，也使用完全 JIT 而不进行解释的方式运行。但类似于解释再 JIT 优化，JRockit VM 拥有多层编译：第一次运行采用低优化级别的 JIT 执行编译，以保证启动速度。而等到分析出某些代码块称为热点代码以后再用高优先级但编译时间较久的 JIT 来重新编译实现性能优化。当然，我们也可以对编译型语言进行动态优化，甚至运行时代码生成。

但是，似乎直觉上还可以采用另一种结合方式：在开发的过程中采用解释方式进行代码开发，而在分发的过程中使用编译方式进行分发，这样同时得到开发迭代速度快和运行速度快两大优势。又是 Java，也支持了这种方式。J9 VM 和知名的 HotSpot VM 都同时支持两种方式，默认使用混合模式（编译+解释）执行引擎，但也支持 AOT 编译执行。


**Reference**

[1] [Just-in-time compilaion - Wiki](https://en.wikipedia.org/wiki/Just-in-time_compilation)<br/>
[2] [RednaxelaFX 知乎回答](https://www.zhihu.com/question/26913901/answer/35303563)<br/>
[3] [Hadi Brais Stackoverflow Answer](https://stackoverflow.com/questions/48564710/what-is-the-difference-between-just-in-time-compilation-and-dynamic-compilation)<br/>
[4] [kipply's blog - jits intro](https://kipp.ly/jits-intro/)<br/>