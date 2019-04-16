import shelve
#模块名不要和文件名重名，我这里傻逼了。
#shelfFile = shelve.open('mydata')
#cats = ['Zophie','Pooka','Simon']
#shelfFile['cats'] = cats
#shelfFile.close()

shelfFile = shelve.open('mydata')
print(shelfFile.keys())
print(list(shelfFile['cats']))
shelfFile.close()