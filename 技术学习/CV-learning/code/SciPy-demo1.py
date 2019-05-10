#_*_coding:utf-8_*_
from PIL import Image
from numpy import *
from scipy.ndimage import filters

im = array(Image.open('../images/test.jpg').convert('L'))
im2 = filters.gaussian_filter(im,5)