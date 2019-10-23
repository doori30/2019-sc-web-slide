var AniEasy = (function(){
	function AniEasy(obj){
		this.elem = obj.elem ==undefined ? ".ani-easy":obj.elem;
		this.elem = document.querySelector(this.elem);
		//type은 문자열로
	}//객체의 기본 모듈값(초기화)
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, speed, cb){
	this.css = css;
	this.speed = speed;//외부접근 가능
	this.cb = (typeof cb === 'undefined') ? false : (typeof cb === 'function') ? cb : false;
	for(var key in this.css){
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var pos = Number(this.cssValue.replace("px",""));
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px",""));
	//console.log(pos, tar);
	this.interval;
	interval = setInterval(ani,20,this);
	function ani(obj){
		if(Math.ceil(tar) == pos){
			obj.elem.style[obj.cssName] = pos+"px";
			clearInterval(this.interval);
			if(obj.cb)obj.cb();
		}
		else{
		tar += (pos-tar) * 0.15;
		console.log(tar);
		obj.elem.style[obj.cssName] = tar+"px";
		}
	}
}


/* jQuery animate
obj = {
	target: 700//도달지점
	speed: 500//(ms)
	elem: ".pager","#box","div"//클래스,아이디,태그
}
*/