var foo = "bbb";;

//console.log(exports)

exports.foo = foo;

/*exports.add = function(x,y){
	return x+y ;
}*/

function add(x,y){
	return x+y ;
}
exports.add = add;

//非fs的readFile
function readFile(path,callback){
	console.log(path);
}
exports.readFile = readFile;

