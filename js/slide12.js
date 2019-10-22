//전역변수 
var now = 0;
var interval;
var speed = 500;
var delay = 2000;
var cnt = 0; //Ajax으로 가져온 slide갯수
var html = "";
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
		html = '<li class="banner">';
		html += '<img src="'+res.slides[i].src+'" alt="'+res.slides[i].desc+'" class="banner-img">';
		html += '<h2 class="banner-cont">'+res.slides[i].desc+'</h2>';
		html += '</li>';
		$(".banners").append(html);
		html = '<div class="pager">●</div>';
		$(".pagers").append(html);
	}
	$(".banners").append($(".banner").eq(0).clone());
	startInit();
};
}

//EVENT
function startInit(){
$(".bt-prev").click(function () {
	if (now > 0) now--;
	init()
}).hide();
$(".bt-next").click(function () {
	if (now < 4) now++;
	init()
});
$(".pager").click(function(){
	now = $(this).index();
	init()
});
$(".banners-wrap").mouseover(function(){
	clearInterval(interval);
});
$(".banners-wrap").mouseleave(function(){
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
	$(".banners").stop().animate({"left": (-720 * now) + "px"
}, 500,function(){
			if(now == 5){
				now = 0;
				$(".banners").css({"left":0});
			pagerInit();
			btInit();
			}
			});
		}
//버튼정렬
function btInit(){
	pagerInit();
				if (now == 0) {
					$(".bt-prev").hide();
					$(".bt-next").show();
				} else if (now == 4) {
					$(".bt-prev").show();
					$(".bt-next").hide();
				} else {
					$(".bt-prev").show();
					$(".bt-next").show();
				}
			}
//페이저 정렬
function pagerInit(){
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
}