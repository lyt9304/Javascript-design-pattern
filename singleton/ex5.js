/**
 * 说明:
 * 同ex4
 * 实际上的效果就是和jquery中的one的效果一样,
 * 事件只会被触发一次
 * 这里从根本上解决, 也就是事件只绑了一次
 * getSingle本质上来说就是用来返回一个带闭包的函数, 这个闭包里就存了是否已经执行过
 * 所以本质上其实就是flag
 * Created by lyt9304 on 16/12/10.
 */

var bindEvent = function(){
	document.getElementById('app').onclick = function(){
		alert('click')
	}
	return true;
}

var getSingle = function(fn){
	var result
	return function(){
		return result || (result = fn.apply(this))
	}
}

var bindSingleEvent = getSingle(bindEvent)

function render(){
	console.log('正在开始渲染')
	bindSingleEvent()
}

render()
render()
render()

/**
 * haojing中的使用思考
 *
 */