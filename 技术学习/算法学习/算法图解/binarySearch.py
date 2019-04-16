#书上说会自动取整，然而并不会
#三种取整方法math.ceil向上，math.floor向下
#round四舍五入，x.5奇进偶不进
def binary_search(list,item):
	low = 0
	high = len(list) - 1

	while low <= high:
		mid = round((low + high) / 2)
		#print(mid)
		guess = list[mid]
		#print(guess)
		if item == guess:
			return mid
		if item < guess:
			high = mid - 1
		else:
			low = mid + 1
	return None

My_list=[1,3,5,7,9]

print(binary_search(My_list,5))
