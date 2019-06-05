# -*- coding: utf-8 -*-
import pickle
import imagesearch
import sift
import sqlite3
from sift import get_imlist

#获取图像列表
imlist = get_imlist('./images3/')
nbr_images = len(imlist)
#获取特征列表
featlist = [imlist[i][:-3]+'sift' for i in range(nbr_images)]

#载入词汇
f = open('./images3/vocabulary.pkl', 'rb')
voc = pickle.load(f)
f.close()

src = imagesearch.Searcher('test0604.db',voc)
locs,descr = sift.read_features_from_file(featlist[0])
iw = voc.project(descr)

print 'ask using a histogram...'
print src.candidates_from_histogram(iw)[:10]

src = imagesearch.Searcher('test0604.db',voc)
print 'try a query...'
print src.query(imlist[0])[:10]
nbr_results = 12
res = [w[1] for w in src.query(imlist[0])[:nbr_results]]
imagesearch.plot_results(src,res)