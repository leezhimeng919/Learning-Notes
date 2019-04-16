import re
names = re.compile(r'Agent (\w)(\w)\w*')
text = 'Agent Alice told Agent Carol that Agent Eve knew Agent Bob was a double Agent !'
mo = names.sub(r'\1\2****', text)
print(mo)