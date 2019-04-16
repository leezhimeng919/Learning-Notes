import zipfile,os
readingNote = zipfile.ZipFile('readingnote.zip')
print(readingNote.namelist())
fileInfo = readingNote.getinfo('mydata.dat')
print('%s,%d'%(round(fileInfo.file_size/fileInfo.compress_size,2),11))

readingNote.extractall('.')
readingNote.close()