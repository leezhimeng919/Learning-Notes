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



#获取图像列表
imlist = sift.get_imlist('./images3/')
nbr_images = len(imlist)
#获取特征列表
featlist = [imlist[i][:-3]+'sift' for i in range(nbr_images)]

# load vocabulary
# 载入词汇
with open('./images3/vocabulary.pkl', 'rb') as f:
    voc = pickle.load(f)

#创建索引
indx = imagesearch.Indexer('test0604.db',voc)

indx.create_tables()
# go through all images, project features on vocabulary and insert
#遍历所有的图像，并将它们的特征投影到词汇上
for i in range(nbr_images)[:500]:
    locs,descr = sift.read_features_from_file(featlist[i])
    indx.add_to_index(imlist[i],descr)
# commit to database
#提交到数据库
indx.db_commit()

con = sqlite3.connect('test0604.db')
print (con.execute('select count (filename) from imlist').fetchone())
print (con.execute('select * from imlist').fetchone())
