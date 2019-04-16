import  os

filenames = ('a','b','c')
for filename in filenames:
	#os.path.join()连接文件路径，根据系统使用正反斜杠
	print(os.path.join("C:\\users\\Bin",filename))
#打印当前工作目录
print(os.getcwd())
#修改当前工作目录
os.chdir('./')
print(os.getcwd())
#创建文件夹
#os.makedirs('C:\\Users\\Apple\\Desktop\\个人学习\\Python学习\\makedirs')
#相对路径转绝对路径
print(os.path.abspath('../express-demo'))
#判断路径是不是绝对路径
print(os.path.isabs('C:\\'))
#os.path.relpath(path,start),5个位置？
print(os.path.relpath('C:\\Windows','..\\'))
print(os.getcwd())