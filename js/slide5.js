/* 
변수타입
primitive type :Number(0==false), String(""==false), Boolean, undefined==false, null=false
->0을 제외한 숫자는 존재하고 빈값이나 0은 존재하지 않는다.
refernce type : Array, Object 
							 //주소참조
const a = [];// 빈 배열과 빈 객체도 주소부가 존재하기 때문에 true
a[1] = 10; //ok
a=[1,2,3]; //Error

const b = 5;
b = 10; //Error

*/

//전역변수 
var now = 0;
var interval;



//EVENT
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
	init();
	}

//동작(기능)
//시작할 때 실행됨.
(function (){
	pagerInit();
	interval = setInterval(intervalCb, 2000);
//interval실행					실행될 함수 ,gap(시간)
})();
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
