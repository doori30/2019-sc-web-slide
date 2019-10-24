var AniEasy = (function(){
	function AniEasy(elem){
		this.elem =(elem ==undefined) ? ".ani-easy":elem;
		//																	false				true
		this.elem = document.querySelector(this.elem);
		//																	".banners"
		//type은 문자열로
		this.interval;
	}//객체의 기본 모듈값(초기화)
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, cb){
	this.css = css; //{"left":"-720px"} css.left/css["left"]둘다 지원해줌.
	this.cb = (typeof cb === 'function') ? cb : null;
	//this.cb = (typeof cb === 'undefined') ? false : (typeof cb === 'function') ? cb : false;
	//						타입을 문자열로 리턴.	
	for(var key in this.css){
		this.cssName = key;
		this.cssValue = this.css[key];
	}//애니메이션이 여러가지로 움직일 것은 감안하여 만든거...
	var pos = Number(this.cssValue.replace("px","")); //-720px ->-720(문자) ->-720(숫자)
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px",""));
	//							초기위치값 (숫자)
	//console.log(pos, tar);
	clearInterval(this.interval);
	this.interval = setInterval(ani,20,this);
	function ani(obj){
	//함수 표현식 단점 변수를 선언후 실행이 가능하다.	var ani =function(){}
	//	함수안 this는 함수의 최상위 객체를 가리킴.(윈도우)
		if(Math.ceil(Math.abs(tar)) == Math.abs(pos)){
			//				양수 절대값을 올림 ==목표값도 양수 절대값으로 만남.
			clearInterval(obj.interval);
			obj.elem.style[obj.cssName] = pos+"px";
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