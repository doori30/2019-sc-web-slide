//전역변수 
var now = 0;
var depth = 10;
var speed = 1000;
var delay = 3000;
var interval;

//EVENT
interval = setInterval(intervalCb, delay);
function intervalCb(){
	(now == 4) ? now = 0 : now++;
	$(".pager").eq(now).trigger("click");
};

$(".pager").click(function(){
	now =	$(this).index();
	$(".banner").eq(now).css({"z-index":depth++, "opacity":0});
	$(".banner").eq(now).stop().animate({"opacity":1},2000);
	$(".pager").removeClass("active");
	$(this).addClass("active");
});
$(".pager").eq(now).trigger("click");

$(".banners").mouseover(function(){
clearInterval(interval);
});
$(".banners").mouseleave(function(){
	clearInterval(interval);
	interval = setInterval(intervalCb, delay);
});