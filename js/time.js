$(document).ready(function(){
	startTime();
	setBgp();
    function startTime(){
        var mDate = new Date();
   		var y = mDate.getFullYear();
   		var M = mDate.getMonth()+1;
   		var d = mDate.getDate();
   		var w = mDate.getDay();
   		var h = mDate.getHours();
  		var m = mDate.getMinutes();
  		var week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
   		h = checkTime(h);
    	                m = checkTime(m);
   		$("#time").html(h+":"+m);
		$("#wk").text(M+"月"+d+"日"+" "+week[w]);
   		t = setTimeout(startTime,500);
   		function checkTime(i){
   			if (i<10) {
   				i = "0" + i;
   			}
   			return i;
   		}
    }
	function setBgp(){
		var mDate = new Date();
		var h = mDate.getHours();
        if(h>=5 && h<=11){
			$("body").css("background-image","url('../materail/梦中的婚礼/梦中的婚礼_清晨.jpg')");
			$("#fac-box").css("background-image","url('../materail/img/清晨.png')");
			$(".webAddress-box").css("background-image","url('../materail/img/清晨.png')")
			$("#music").attr("src","../materail/bgm/清晨.mp3");
		}else if(h>11 && h<15){
			$("body").css("background-image","url('../materail/梦中的婚礼/梦中的婚礼_正午.jpg')");
			$("#fac-box").css("background-image","url('../materail/img/正午.png')");
			$(".webAddress-box").css("background-image","url('../materail/img/正午.png')");
			$("#music").attr("src","../materail/bgm/正午.mp3");
		}else if(h>=15 && h<=19){
			$("body").css("background-image","url('../materail/梦中的婚礼/梦中的婚礼_黄昏.jpg')");
			$("#fac-box").css("background-image","url('../materail/img/黄昏.png')");
			$(".webAddress-box").css("background-image","url('../materail/img/黄昏.png')");
			$("#music").attr("src","../materail/bgm/黄昏.mp3");
		}else if(h>19 && h<24){
			$("body").css("background-image","url('../materail/梦中的婚礼/梦中的婚礼_夜晚.jpg')");
			$("#fac-box").css("background-image","url('../materail/img/夜晚.png')");
			$(".webAddress-box").css("background-image","url('../materail/img/夜晚.png')");
			$("#music").attr("src","../materail/bgm/夜晚.mp3");
		}else{
			$("body").css("background-image","url('../materail/梦中的婚礼/梦中的婚礼_深夜.jpg')");
			$("#fac-box").css("background-image","url('../materail/img/深夜.png')");
			$(".webAddress-box").css("background-image","url('../materail/img/深夜.png')");
			$("#music").attr("src","../materail/bgm/深夜.mp3");
		}
		t = setTimeout(setBgp,3600000);
	}
})