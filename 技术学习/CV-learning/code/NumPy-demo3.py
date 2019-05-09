#_*_coding:utf-8_*_

#直方图均衡化
from PIL import Image
from numpy import *
from pylab import *



# 图像缩放函数
def imresize(im,sz):
	pil_im = Image.fromarray(uint8(im))
	return array(pil_im.resize(sz))

# 直方图均衡化
def histeq(im,nbr_bins=256):
	imhist,bins = histogram(im.flatten(),nbr_bins)
	cdf = imhist.cumsum()
	cdf = 255 * cdf / cdf[-1]
	im2 = interp(im.flatten(),bins[:-1],cdf)
	return im2.reshape(im.shape), cdf 

im = array(Image.open('../images/test3.jpg').convert('L'))
im2, cdf = histeq(im)

# figure()
# hist(im.flatten(),128)
imshow(im)

# figure()
# hist(im2.flatten(),128)
# show()
imshow(im2)
show()