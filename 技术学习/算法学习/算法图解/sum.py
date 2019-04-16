def sum(arr):
	total = 0
	for x in arr:
		total += x
	return total


def sum_recursive(arr):
	if len(arr) == 0:
		return 0
	return arr[0] + sum_recursive(arr[1:])


print(sum_recursive([1,3,6,4]))