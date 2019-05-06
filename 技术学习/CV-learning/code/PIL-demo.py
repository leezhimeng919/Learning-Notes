#_*_coding:utf-8_*_ 

from PIL import Image, ImageFilter

# 打开一个jpg图像文件，注意是当前路径:
im = Image.open('../images/test.jpg')
# print im.size 
# (3456,4608)
# 缩放
# im.thumbnail((x,y))

# 使图片模糊
#im.filter(ImageFilter.BLUR).save('../images/blur.jpg', 'jpeg')

# 使图片变灰
#im.convert('L').save('../images/gray.jpg', 'jpeg')

# 复制和粘贴图像区域
box = (100,200,400,400)
region = im.crop(box)

region = region.transpose(Image.ROTATE_180)
im.paste(region,box)
im.save('../images/paste.jpg', 'jpeg')