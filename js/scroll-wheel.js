//window.addEventListener("wheel", wheelFn,{passive:false});//순수 자바스크립트 객체라 윈도우가 가지고 있는 이벤트
window.addEventListener("wheel", wheelFn,{passive:false});//순수 자바스크립트 객체라 윈도우가 가지고 있는 이벤트

// document.querySelectorAll(".page").forEach(function(page, key){
// 	page.addEventListener("wheel", wheelFn,{passive:false});
// });
	// console.log(event);
	function wheelFn(){
	event.preventDefault();//기본기능을 막아줌.
	event.stopPropagation();
	var hei = $(window).outerHeight();
	var delta = event.deltaY;
	//var hei = $(window).innerHeight();
	var posY = event.pageY;
	var n = Math.floor(posY/hei);//index 값
	var tar = 0;
	var pageCnt = $(".page").length;//4-1

	if(delta > 0)(n < pageCnt - 1) ? wheelAni((n + 1) * hei):"";
	else(n > 0) ? wheelAni((n - 1) * hei):"";
	// if(delta>0){
	// 	//아래로 휠을 한 
	// 	if(n < pageCnt-1)	wheelAni((n+1) * hei);
	// }
	// else {
	// 	//위로 휠을 한 경우
	// 	if(n > 0)wheelAni((n-1) * hei);
	// }
}
	//console.log(n);//937
	function wheelAni(pos){
		console.log(pos);
		$("html,body").stop().animate({"scrollTop":pos}, 300);
	};
	// if(delta > 0) $("html,body").stop().animate({"scrollTop":hei}, 300);
	// else $("html, body").stop().animate({"scrollTop":0}, 300);
	// }