#分治divide&conquer工作原理：
#	1.找出简单的基线条件
#	2.确定如何缩小问题的规模，使其符合基线条件
def numAdd(arr):
	#最简单的基线条件，数组为空或只包含一个元素（数组的递归函数通常是这样）
	#if len(arr) == 1:
	#	return arr[0]
	#if len(arr) == 1:
	#	 return 0
	if arr == []:
		return 0
	#缩小问题规模
	#else:
	#	num = arr[0]
	#	arr.remove(num)
	#	#arr.pop(0)
	#	return num + numAdd(arr)
	#教做人系列
	return arr[0] + numAdd(arr[1:])

#print(numAdd([2,4,6]))

#找出一组数里的最大值
def max(arr):
	if len(arr) == 2:
		return arr[0] if arr[0] > arr[1] else arr[1]
	return arr[0] if max(arr[1:])<arr[0] else max(arr[1:])

#print(max([222,4,6,10,123,32]))

#基准值pivot为数组第一个元素-快速排序
def quicksort(arr):
	if len(arr) < 2:
		return arr
	else:
		pivot = arr[0]
		#表达式 for 变量 in 列表 条件
		less = [i for i in arr[1:] if i < pivot]
		greater = [i for i in arr[1:] if i > pivot]
	return quicksort(less) + [pivot] + quicksort(greater)

#print(quicksort([10,5,2,3]))

#基准值pivot为列表随机一个元素-快速排序
def quicksort_ave(arr):
	return 0