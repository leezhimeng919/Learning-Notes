var url = require('url')

var obj = url.parse('/pinglun?name=sadsad&message=asdsadasdsa',true)

console.log(obj.query.name)