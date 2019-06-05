# -*- coding: utf-8 -*-
import os
from PIL import Image
from pylab import *
from numpy import *

import pickle
import vocabulary

import imagesearch
import sift
import sqlite3
from sift import get_imlist


#获取图像列表
imlist = get_imlist('./images3/')
#print(imlist)
nbr_images = len(imlist)
#获取特征列表
featlist = [imlist[i][:-3]+'sift' for i in range(nbr_images)]

#print(featlist)
#提取文件夹下图像的sift特征
for i in range(nbr_images):
    sift.process_image(imlist[i], featlist[i])
#    print 
#生成词汇
voc = vocabulary.Vocabulary('test0604')
voc.train(featlist, 1000, 10)

#保存词汇
# saving vocabulary
with open('./images3/vocabulary.pkl', 'wb') as f:
    pickle.dump(voc, f)
print ('vocabulary is:', voc.name, voc.nbr_words)