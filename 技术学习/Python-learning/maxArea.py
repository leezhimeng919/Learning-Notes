# #coding:utf-8
import json
import urllib2

#若果只需要获取一个接口的数据
url = r'https://api.douban.com/v2/book/1220563'

#访问网页
response = urllib2.urlopen(url)

#json解析
html = json.loads(response.read())

#打印所需数据，我这里只打印了书名
print (html['title'])

# def maxArea(height):
# 	left = 0
# 	right = len(height) - 1 
# 	maxarea = 0
# 	h = 0
# 	#area = max(height(left),height(right)) * (right-left)
# 	while right > left:
# 		b = right - left
# 		if height[left] < height[right]:
# 			h = height[left]
# 			left += 1
# 		else:
# 			h = height[right]
# 			right -= 1
# 		area = b * h
# 		if maxarea < area: maxarea = area
# 	return maxarea




# print(maxArea([1,8,6,2,5,4,8,3,7]))

# def revers(list):
# 	if len(list) == 1:
# 		return [list[0]]
# 	return revers(list[1:]) + [list[0]]
# print(revers(['1','2','3']))


# a = ['f','l','e']
# #(a[::-1] == list(a)[::-1])
# print(''.join(list(a)[::-1]))

# 看完了《波西米亚狂想曲》决定写下内心的一些方法
# - 有一个爱自己的人多么的难