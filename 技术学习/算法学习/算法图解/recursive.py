#如果使用循环，程序性能可能更高，如果使用递归，程序可能更容易理解
#base case基线条件：函数不调用自己的条件 recursive case递归条件：函数调用自己的条件
def factorial(num):
	if num == 1:
		return 1
	else:
		return num*factorial(num-1)

print(factorial(3))