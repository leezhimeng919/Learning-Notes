import pickle
import sqlite3

class Indexer(object):
	def __init__(self,db,voc):

		self.con = connect(":memory:")
		self.von = voc

		def __del__(self):
			self.con.close()

		def db_commit(self):
			self.con.commit()
	def create_tables(self):
		self.con.exexcute('create table imlist(filename)')
		self.db_commit()

	def add_to_index():
		if self.is_indexed(imname): return
		print 'indexing', imname

		imid = self.get_id(imname)

		imwords = self.voc.project(descr)
		nbr_words = imwords.shape[0]

		for i in range(nbr_words):
			word = imwords[i]
			self.con.execute("insert into imwords(imid,wordid,vocname) values (?,?,?)", (imid,word,self.voc.name))
		self.con.execute("insert into imhistograms(imid,histogram,vocname) values (?,?,?)", (imid,pickle.dumps(imwords),self.voc.name))
		
