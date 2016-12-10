/**
 * 说明:
 * 代理模式实现单例模式
 * 将类的本身实现, 和保证单一的功能分开, 使用proxy来代为完成单例这个任务
 * 缺点:
 * 这个实现暂时还无法达到复用, 因为proxy中的构造函数是写死的
 * Created by lyt9304 on 16/12/10.
 */

var Normal = function(name){
	this.name = name
}

Normal.prototype.name = function(){
	return this.name
}

var ProxyNormalSingleton = (function(){
	var instance
	return function(name){
		if(!instance){
			instance = new Normal(name)
		}
		return instance
	}
})()

var a = new ProxyNormalSingleton('a')
var b = new ProxyNormalSingleton('b')

console.log(a === b)

/**
 * haojing中的使用思考
 *
 */