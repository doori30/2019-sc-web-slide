//전역변수 
var now = 4;		//페이드 될 li
var depth = 10;		//계속 증가될 z-index
var speed = 1000;		//opacity 속도
var delay = 3000;		//Animation Delay
var interval;

//EVENT
interval = setInterval(intervalCb, delay);
function intervalCb(){
 (now == 4) ? now = 0 : now++; //삼한 방정식
	$(".banner").eq(now).css({"z-index":depth++,"opacity":0});
	//++depth =>11이되고 나서 ++ / depth++=>10인 상태에서 ++(depth는 변수라서 ""안 하고 진행.)
	$(".banner").eq(now).stop().animate({"opacity":1},speed);
}


//동작(기능)
//시작할 때 실행됨.

//애니메이션

