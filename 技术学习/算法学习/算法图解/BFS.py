#广度优先遍历解决最短路径问题O(V+B)
#用散列表实现图
#需要用到队列来表示储广度优先搜索的搜索列表
#检查过的节点不能再查了，不然会死循环的情况，所以需要标记查过的节点