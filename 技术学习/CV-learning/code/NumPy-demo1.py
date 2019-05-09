# graphics to array
from PIL import Image
from pylab import *

im = array(Image.open('../images/test.jpg'))

print im[2].mean()
