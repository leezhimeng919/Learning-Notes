#_*_coding:utf-8_*_ 

from PIL import Image
from pylab import *

im = array(Image.open('../images/test.jpg'))

# 绘制图像
imshow(im)

# 四个点(100,200)(100,500)(400,200)(400,500)
x = [100,100,400,400]
y = [200,500,200,500]

# 使用红色叉状标记绘制点
plot(x,y,'rx')
# 绘制连接前两个点的线
plot(x[:2],y[:2])
# 添加标题，显示绘制的图像
title('Plotting: "im test.jpg"')
# 不显示坐标轴
axis('off')
show()