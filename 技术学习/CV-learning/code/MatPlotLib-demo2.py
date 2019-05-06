#_*_coding:utf-8_*_ 

from PIL import Image
from pylab import *

# 读取图像到数组中
im = array(Image.open('../images/test.jpg').convert('L'))

# 新建一个图像
figure()

# 不使用颜色信息
gray()

# 在原点的左上角显示轮廓图像
contour(im, origin='image')

axis('equal')
axis('off')

figure()
hist(im.flatten(),128)
show()