/**
 * 说明:
 * 透明的单例子模式, 需要创建IIFE和闭包
 * 对构造函数直接动手脚, 所以调用方式符合直觉
 * 缺点:
 * 需要创建IIFE和闭包所以其实不太好,
 * 违反单一职责原则, 又要负责类本身的东西, 又要负责保证类只有一个
 * Created by lyt9304 on 16/12/10.
 */

var Singleton = (function(){
	var instance

	var Singleton = function(){
		if(instance){
			return instance
		}
		instance = this
	}

	return Singleton

})()

var a = new Singleton('a')
var b = new Singleton('b')

console.log(a === b)

/**
 * haojing中的使用思考
 *
 */