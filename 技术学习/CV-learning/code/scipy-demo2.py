rom PIL import Image
from pylab import *
from numpy import *
from scipy.ndimage import filters

im = array(Image.open('../images/test.jpg').convert('L'))


# Sobel
imx = zeros(im.shape)
filters.sobel(im,1,imx)

imy = zeros(im.shape)
filters.sobel(im,0,imy)
magnitude = sqrt(imx**2+imy**2)

