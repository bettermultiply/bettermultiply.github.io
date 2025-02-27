---
title: chain
date: 2023-01-01T00:00:00+08:00
dxescription: 
---
I had been notice the (thread)[https://x.com/eatonphil/status/1756458164868776239?s=20] of Phil Eaton.
before this, I never know what is CR,
so it's completely unfamiliar to me(I say here will be lots of unmature words=).

So, let me start.

"Writes aren't complete until they reach the tail (expensive?)."
What is the meaning of the "reach the tail"?
Won't it be 'never' complete?
How to reach the tail?
How to know reach the tail? -> "A client must wait until a response from the tail before considering the write complete."
What is the usage of the feature? -> "Writes not completing until they reach the tail is the part that makes reads linearizable."


The availability of CR is better than Raft  since we can lose all but 2 nodes among any number of nodes in the cluster. 

And then an article is followed.

# Key-Value Store Using Chain Replication

the paper is concerned about simple key-value storage service implementation with high throughput(HT) & high availability(HA).

