#_*_coding:utf-8_*_ 

from PIL import Image
from pylab import *

# 读取图像到数组中
im = array(Image.open('../images/test.jpg'))

imshow(im)

x = ginput(3)

print (x)

show()

