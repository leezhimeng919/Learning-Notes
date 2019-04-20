// 1.鸭子类型
// var duck = {
// 	duckSinging:function() {
// 		console.log('gagaga')
// 	}
// };

// var chicken = {
// 	duckSinging:function() {
// 		console.log('jijijiji')
// 	}
// }

// var choir = []

// var joinChoir = function(animal) {
// 	if ( animal && typeof animal.duckSinging === 'function'){
// 		choir.push(animal);
// 		console.log('恭喜加入合唱团');
// 		console.log('合唱团成员数量:' + choir.length);
// 	}
// };

// joinChoir(duck)
// joinChoir(chicken)

// 2.多态
// var makeSound = function( animal) {
// 	if (animal instanceof Duck){
// 		console.log('gagaga');

// 	}
// 	else if(animal instanceof Chicken){
// 		console.log('jijiji');
// 	}
// };

// var Duck = function() {};
// var Chicken = function() {};

// var cheng = new Duck();
// var zhang = new Chicken(); 

// makeSound( cheng )
// makeSound( zhang )

// 3.对象的多态
// var makeSound = function(animal){
// 	animal.sound();
// };

// var Duck = function() {};

// Duck.prototype.sound = function() {
// 	console.log('gagaga');
// };

// var Chicken = function() {};

// Chicken.prototype.sound = function() {
// 	console.log('jijiji');
// };

// makeSound(new Duck())
// makeSound(new Chicken())

// 4.JavaScript的多态
// 多态的作用

// 封装数据
// var myObj = (function() {
// 	var __name = 'jimmy';
// 	return {
// 		getName: function() {
// 			return __name;
// 		}
// 	}

// })()


// console.log(myObj.getName())

//克隆对象 Object.create()

var Plane = function() {
	this.blood = 100;
	this.attackLevel = 1;
	this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
var clonePlane = Object.create(plane);

Object.create = Object.create || function(obj) {
	var F = function() {};
	F.prototype = obj;
	return new F();
}

console.log(plane);
console.log(clonePlane)