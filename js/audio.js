$("#bt-play").click(function(){
	$(this).hide();
	$("#bt-pause").show();
	$("#snd")[0].play();
});

$("#bt-pause").click(function(){
	$(this).hide();
	$("#bt-play").show();
	$("#snd")[0].pause();
});

$("#bt-stop").click(function(){
$("#snd")[0].pause();
$("#snd")[0].currentTime = 0;
$("#bt-pause").hide();
$("#bt-play").show();
});

$("#bt-muted").click(function(){
	$(this).hide();
	$("#bt-up").show();
	$("#snd")[0].muted = true;
});
$("#bt-up").click(function(){
	$(this).hide();
	$("#bt-muted").show();
	$("#snd")[0].valum=$("#volume").val();
	$("#snd")[0].muted = false;
});

$("#volume").change(function(){
	console.log($(this).val());
	$("#snd")[0].volume = $(this).vla();
	$("#bt-muted").show();
	$("#bt-up").hide();
});

$("#snd-sel").change(function(){
	var src= $(this).val();
	$("#snd")[0].src= src;
	$("#bt-play").trigger("click");
});