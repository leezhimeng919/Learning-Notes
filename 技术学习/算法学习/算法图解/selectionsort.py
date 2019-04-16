# list.pop(),删除List中的一个元素，默认最后一个，并返回该值
# list.append(),数组最后加一个元素

def findSmallest(arr):
	smallest = arr[0]
	smallest_index = 0
	for i in range(1,len(arr)):
		if arr[i] < smallest:
			smallest = arr[i]
			smallest_index = i
	return smallest_index

def selectionSort(arr):
	newArr = []
	for i in range(len(arr)):
		#这里为什么for i in arr:就不行呢？
		#解答：arr遍历的是值而不是下标,pop掉三个数后，就剩两个数了，无法进行第四次循环
		#print(i)
		#print(arr)
		smallest = findSmallest(arr)
		#print(arr)
		newArr.append(arr.pop(smallest))
		#print(arr)
	return newArr

print (selectionSort([5,3,6,10,1]))
