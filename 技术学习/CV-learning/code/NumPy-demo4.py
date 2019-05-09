#_*_coding:utf-8_*_

#图像平均
from PIL import Image
from numpy import *
from pylab import *

def computer_average(imlist):
	averageim = array(Image.open(imlist[0]),'f')
	for imname in imlist[1:]:
		try:
			averageim += array(Image.open(imname))
		except:
			print imname + '...skipped'
	averageim /= len(imlist)
	return array(averageim, 'uint8')


imlist = [
'../images/test.jpg',
'../images/test2.jpg',
'../images/test3.jpg',
'../images/test4.jpg',
]

im = computer_average(imlist)
imshow(im)
show()