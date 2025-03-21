---
title: topological sort/order
hidden: true
---
拓扑排序(topological sort/order) 
其实 topological order 拓扑顺序是一个更合适的名字，
因为 topological order 本身描述的就是一种「顺序」 "linear order"
这种 order 是对DAG(directed acyclic graph: 有向无环图) 的vertices(节点) 而言的
所有排列在前的 element 都对排列在后的 element 没有依赖关系。
具体来说，对于每个边(u, v)都有 节点u 一定排在 节点v 前面(边即为依赖关系的具象化表示)
DAG 和 topological order 和 DAG 互为充要，
即: DAG 一定有至少一个「拓扑排序」，而有环一定没有「拓扑排序」

现在已知的算法已经能在线性时间内构造任意 DAG 的「拓扑排序」了

拓扑排序的应用：
例:
在一个项目当中，存在许多具有相互依赖关系的活动，
一个活动只有在所有依赖活动结束后，才能进行
对所有活动进行拓扑排序就能得到不违背依赖的活动执行顺序
