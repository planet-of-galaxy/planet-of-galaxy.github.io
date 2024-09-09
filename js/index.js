$(document).ready(function(){
    setWebAddress2();
    $("#search1 .search-btn").click(function(){
        var $href = "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=" + $("#search1 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search2 .search-btn").click(function(){
        var $href = "https://www.baidu.com/s?wd=" + $("#search2 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search3 .search-btn").click(function(){
        var $href = "https://www.google.com/search?q=" + $("#search3 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search1 .search-submit").click(function(){
        var $href = "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=" + $("#search1 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search2 .search-submit").click(function(){
        var $href = "https://www.baidu.com/s?wd=" + $("#search2 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $("#search3 .search-submit").click(function(){
        var $href = "https://www.google.com/search?q=" + $("#search3 .search-input").val();
        window.location.href= $href;
        return false;
    })
    $(".search-input").click(function(){
        $(this).css("width","250px");
    })
    var audio_flage = false;
    var collect_flage = false;
    $("#time-box").click(function(){
        if (!audio_flage) {
            $("#music").css("display","block");
            audio_flage = true;
        }else{
            $("#music").css("display","none");
            audio_flage = false;
        }
    })
    $("#time").click(function time(){
        $(".search-input").val("");
        $(".search-input").css("width","0px");
        $(".fac").css("display","none");
        $(".webAddress-box").css("display","none");
        $(".wb").css("display","none");
        $("#add").css("display","none");
        $("#prompt").text("");
		audio_flage = true;
        top_flage = false;
        collect_flage = false;
        // location.reload();
    })
    var top_flage = false;
    $("#top").click(function(){
        if(!top_flage){
            $(".fac").fadeIn(300);
            $(".fac").css("height","50px");
			$(".search-input").css("width","0px");
            top_flage = true;
        }else{
            $(".search-input").val("");
            $(".fac").css("display","none");
            $(".webAddress-box").css("display","none");
            $(".wb").css("display","none");
            $("#add").css("display","none");
            $(".search-input").css("width","0px");
            top_flage = false;
        }
        collect_flage = false;
        $("#prompt").text("");
    })
    var add_flage = false;
    $("#add").click(function(){
        $("#webAddress2").css("display","none");
        $("#webAddress3").css("display","flex");
        add_flage = true;
    })
    $(".addweb").click(function(){
        add_flage = true;
    })
    $("#add_can").click(function(){
        add_flage = true;
        $("#webAddress3").css("display","none");
        $("#webAddress2").css("display","block");
    })
    $("#add_sub").click(function(){
        add_flage =  true;
        if (localStorage.addwebNum) {
            localStorage.addwebNum = Number(localStorage.addwebNum)+1;
        }else{
            localStorage.addwebNum = 0;
        }
        localStorage.setItem(localStorage.addwebNum,$("#key").val());
        localStorage.setItem($("#key").val(),$("#value").val());
        setWebAddress2();
        window.location.href="";
    })
    $("#favorite").click(function(){
        if(add_flage){
            add_flage = false;
            return false;
        }
        if(!top_flage){
            $(".fac").fadeIn(300);
            $(".fac").css("height","50px");
            top_flage = true;
        }else{
            $(".search-input").val("");
            $(".fac").css("display","none");
            $(".webAddress-box").css("display","none");
            top_flage = false;
        }
        collect_flage = false;
        $("#prompt").text("");
		$(".search-input").css("width","0px");
    })
    $("#myFavorite").hover(function(){
        $("#webAddress3").css("display","none");
        $("#webAddress2").css("display","none");
        $(".wb").css("display","none");
        $("#add").css("display","none");
        $("#webAddress2").css("width","0");
        $("#webAddress1").css("display","block");
        $("#webAddress1").animate({width:'800px'});
        $("#prompt").text("");
        collect_flage = false;
    })
    $("#collect").hover(function(){
        $("#webAddress3").css("display","none");
        $("#webAddress1").css("display","none");
        $("#webAddress1").css("width","0");
        $("#webAddress2").css("display","block");
        $("#webAddress2").animate({width:'800px'});
        $(".wb").css("display","inline-flex");
        $("#add").css("display","inline-flex");
    })
    $("#blbl").click(function(){
        window.location.href= "https://www.bilibili.com/";
    })
    $("#bdtb").click(function(){
        window.location.href= "https://tieba.baidu.com/";
    })
    $("#xlwb").click(function(){
        window.location.href= "https://weibo.com/";
    })
    $("#ggfy").click(function(){
        window.location.href= "https://translate.google.com/";
    })
    $("#wyyy").click(function(){
        window.location.href= "https://music.163.com/";
    })
    $("#csdn").click(function(){
        window.location.href= "https://www.csdn.net/";
    })
    $("#bottom").click(function(){
        $("#music").css("display","none");
    })
    $(".wb").click(function(){
        var num = $(this).children('.num').text();
        var key = $(this).children('.key').text();
        if(!collect_flage){
            var $href = localStorage.getItem(key);
            window.location.href= $href;
            return false;
        }else {
            localStorage.removeItem(num);
            localStorage.removeItem(key);
            window.location.href="";
        }
    })
    $("#bottom").click(function(){
        var flage = $('#webAddress2').css('display') == 'none';
        if(!collect_flage&&!flage){
            collect_flage = true;
            $("#prompt").text("点击 我的收藏 中的网址以删除");
        }else {
            collect_flage = false;
            $("#prompt").text("");
        }
    })
    function setWebAddress2(){
        var key;
        var name;
        var num = 0;
        if(localStorage.addwebNum){
            for(var i = 0;i<=localStorage.addwebNum;i++){
                if(!localStorage.getItem(i)){continue;};
                key = localStorage.getItem(i);
                name = key.substring(0,8);
                $("#webAddress2").append("<div class='wb'><span>" + name + "</span><p class='num'>" + i + "</p><p class='key'>" + key + "</p></div>");
                if (num==4||num==9) {
                    $("#webAddress2").append("<br>");
                }
                num++;
            }
        }
        if ((!localStorage.addwebNum)||num<15) {
            $("#webAddress2").append("<div id='add'><i class='far fa-plus-square'></i></div>");
        }
    }
})