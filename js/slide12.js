//전역변수 
var now = 0;
var interval;
var speed = 500;
var delay = 2000;
var cnt = 0; //Ajax으로 가져온 slide갯수
var html = ["",""];
var ajax = new XMLHttpRequest();

//통신
//시작 
ajax.onreadystatechange = slideInit; //CallBack Init
//XMLHttpRequest값이 변하면 slideInit을 실행
ajax.open("GET", "../json/slide.json");//동기화(false),비동기화(true)
$.ajax({url: "../json/slide.json",success:slideInit});
//		type: "get",//생략가능 기본 get방식
//		dataType: "json",//생략가능
ajax.send();

//동작
function slideInit(res) {
	if(this.readyState ==4 && this.status == 200){
		var res = JSON.parse(this.responseText);
		// console.log(this.responseText); //STRING 형식의 json원본
		// console.log(JSON.parse(this.responseText));	//JS -> Object형식
		// console.log(JSON.stringify(this.responseText));	//JS -> STRING
	cnt = res.slides.length;
	for (var i in res.slides) {
		html[0] += '<li class="banner">';
		html[0] += '<img src="'+res.slides[i].src+'" alt="'+res.slides[i].desc+'"class="banner-img">';
		html[0] += '<h2 class="banner-cont">'+res.slides[i].desc+'</h2>';
		html [0]+= '</li>';
		html[1] += '<div class="pager"data-idx="'+i+'">●</div>';
	}
	document.querySelector(".banners").innerHTML=html[0];
	document.querySelector(".pagers").innerHTML=html[1];//DOM
		//배열																속성(변수)/append(메소드-함수)
		//innerHTML
	//document.querySelector(".banners").innerHTML.querySelector(".banner");//배너중에 첫번째
	//DOM을 사용할 수 있는 appendChild();->문자열은 올수 없다.
	document.querySelector(".banners").appendChild(document.querySelectorAll(".banner")[0].cloneNode(true));//배너중에 첫번째
	startInit();
};
}

//EVENT
function startInit(){
	document.querySelector(".bt-prev").style.display = "none";
	document.querySelector(".bt-prev").addEventListener("click",function(){
	if (now > 0) now--;
	init()
});
document.querySelector(".bt-next").addEventListener("click",function(){
	if (now < 4) now++;
	init()
});
document.querySelectorAll(".pager").forEach(function(item,key){
	//.forEach(function(v,i,a){	value,index,배열
	item.addEventListener("click",function(e){
		//																type,listner
		now = $(this).dataset["idx"];
		init();
});
});

document.querySelector(".banners-wrap").addEventListener("mouseover",function(){
	clearInterval(interval);
});
document.querySelector(".banners-wrap").addEventListener("mouseleave",function(){
	clearInterval(interval);
	interval = setInterval(intervalCb, 2000);
});
//interval CallBack
function intervalCb(){
	now++;
	//시작할 때 실행됨.
	init();
}
	pagerInit();
	interval = setInterval(intervalCb, 2000);
	//interval실행					실행될 함수 ,gap(시간)
}
//이벤트 발생할 때 실행되는 함수
function init(){
	ani();
	btInit();
	pagerInit();
}
//애니메이션
function ani() {
	var aniEasy = new AniEasy({elem:".banners"});
	aniEasy.animate({"left":(-720*now)+"px"},500,function(){
		if(now == 5){
			now = 0;
			document.querySelector(".banners").style.left=0;
		pagerInit();
		btInit();
		}
	});
		}
//버튼정렬
function btInit(){
	pagerInit();
				if (now == 0) {
					document.querySelector(".bt-prev").style.display="none";
					document.querySelector(".bt-next").style.display="block";
				} else if (now == 4) {
					document.querySelector(".bt-prev").style.display="block";
					document.querySelector(".bt-next").style.display="none";
				} else {
					document.querySelector(".bt-prev").style.display="block";
					document.querySelector(".bt-next").style.display="block";
				}
			}
//페이저 정렬
function pagerInit(){
	document.querySelectorAll(".pager").forEach(function(item,key){
		if(key == now) item.classList.add("sctive");
		else item.classList.remove("active");//class를 컨트롤
	});
	/* $(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active"); */
}
