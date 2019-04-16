from wsgiref.simple_server import make_server
from hello import app

httpd = make_server('', 3000, app)
print('serving HTTP on port 3000...')
httpd.serve_forever()