/**
 * 说明:
 * 不透明的单例子模式, 需要显式调用Singleton.getInstance(args)
 * 缺点:
 * 不透明, 普通使用new来获取, 但是这里偏要用getInstance, 增加了使用的不透明性
 * Created by lyt9304 on 16/12/10.
 */

var Singleton = function(name){
	this.name = name
}

// 1. 挂载在类上
Singleton.getInstance = function(name){
	// Q:这个this到底值得是谁
	// console.log(this === Singleton) // true
	if(!this.instance){
		this.instance = new Singleton(name)
	}
	return this.instance
}

// 2. 挂载在闭包变量上
// 无论哪种都是为了给instance一个存储的地方
Singleton.getInstance = (function(){
	var instance = null;
	return function(name){
		if(!instance){
			instance = new Singleton(name)
		}
		return instance
	}
})()

var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')

console.log(a === b) // true
console.log(a.name) // a
console.log(b.name) // a, 其实可以看到name没挂上去, 感觉这个例子不是很符合常理

/**
 * haojing中的使用思考
 *
 */