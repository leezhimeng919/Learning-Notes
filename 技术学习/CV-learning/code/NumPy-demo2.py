#_*_coding:utf-8_*_

#灰度变换
from PIL import Image
from numpy import *

im = array(Image.open('../images/test.jpg').convert('L'))


# 对图像进行反向处理
# im2 = 255 - im
pil_im = Image.fromarray(uint8(im)) 

# 将图像像素值变换到100..200区间
# im3 = (100.0/255) * im + 100

# 对图像像素值求平方后得到的图像，二次函数变换
# im4 = 255.0 * (im/255.0)**2
# 绘制图像
# imshow(im)
print int(im.min()), int(im.max())

# show()