#_*_coding:utf-8_*_

#主成分分析PCA
from PIL import Image
from numpy import *
from pylab import *

def pca(X):
	num_data,dim = X.shape
	mean_X = X.mean(axio=0)
	X = X - mean_X
	if dim>num_data:
		M = dot(X,X.T)
		e,EV = linalg.eigh(M)
		tmp = dot(X.T,EV).T
		V = tmp[::-1]
		S = sqrt(e)[::-1]
		for i in range(V.shape[1]):
			V[:,i] /= S
	else:
		U,S,V = linalg.svd(X)
		V = V[:num_data]
	return V,S,mean_X

imlist = [
'../images/test.jpg',
'../images/test2.jpg',
'../images/test3.jpg',
'../images/test4.jpg',
]


print [imq+'1' for imq in imlist]
# im = array(Image.open(imlist[0]))
# m,n = im.shape[0:2]
# imnbr = len(imlist)

# immatrix = array([array(Image.open(imq)).flatten() for imq in imlist],'f')

# V,S,immean = pca(immatrix)

# figure()
# gray()
# subplot(2,4,1)
# imshow(immean.reshape(m,n))

# for i in range(7):
# 	subplot(2,4,i+2)
# 	imshow(V[i].reshape(m,n))

# show()