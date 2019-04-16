import math

def binSearch(lst, item):
	mid = len(lst) //2
	found = False
	if lst[mid] == item:
		found = True
		return found
	if mid == 0:
		#mid等于0就是找到最后一个元素了。
		found = False
		return found
	else:
		if item > lst[mid]: #找后半部分
  			#print(lst[mid:])
			return binSearch(lst[mid:], item)
		else:
			return binSearch(lst[:mid], item) #找前半部分


def binaryDC(arr,item):
	mid = len(arr)//2	
	if item == arr[mid]:
		return arr
	#mid为0就是找到最后一个元素了 1/2向下取整为0
	if mid == 0:
		return -1
	else:
		if item > arr[mid]:
			return binaryDC(arr[mid:],item)
		else:
			# `：`左闭右开
			return binaryDC(arr[:mid],item)

My_list=[1,3,5,7,9]

print(binaryDC(My_list,9))