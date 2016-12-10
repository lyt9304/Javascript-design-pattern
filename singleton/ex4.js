/**
 * 说明:
 * 将单例部分的逻辑抽出并能够复用
 * 实际上这个例子已经不是简单的单例对象的概念了
 * 凡事只需要创建一次的dom, 触发一次的事件等等都可以使用
 * 要点就是扔到getSingle中的函数, 在第一次执行创建后, 一定要有不为假值的返回值
 * 这样才能区分是否已经创建或执行, 其实就是高端一点的flag..
 * Created by lyt9304 on 16/12/10.
 */

var createIframe = function(){
	var iframe = document.createElement('iframe')
	iframe.style.display = 'none'
	document.body.appendChild(iframe)
}

var getSingle = function(fn){
	var result
	return function(){
		return result || (result = fn.apply(this))
	}
}

var createSingleIframe = getSingle(createIframe)

createSingleIframe()
createSingleIframe()
createSingleIframe()

/**
 * haojing中的使用思考
 * 只需要跑一次/创建一次的时候都能用啊, 感觉很方便
 */