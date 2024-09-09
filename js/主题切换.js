$(document).ready(function(){
    setTheme();

    $("#submit").click(function(){
        var theme = $('input[name="theme_radio"]:checked').val();
        localStorage.setItem("theme", theme);
        location.reload();
        return;
    })

    // var last_time_minutes;
    // var last_time_seconds;
    // $("#theme").hover(function(){
    //     var mDate = new Date();
    //     var minutes = mDate.getMinutes();
	// 	var seconds = mDate.getSeconds();
 
    //     if (last_time_minutes == minutes && last_time_seconds > seconds - 2) {
    //         return;
    //     }

    //     last_time_minutes = minutes;
    //     last_time_seconds = seconds;
    //     $("#theme_context").fadeIn();
    // }, function() {
    //     $("#theme_context").fadeOut();
    // })

    function setTheme() {
        // 可以依据时间自动选择不同主题
        // var mDate = new Date();
   		// var year = mDate.getFullYear();
   		// var month = mDate.getMonth()+1;
   		// var date = mDate.getDate();
   		// var day = mDate.getDay();
   		// var hours = mDate.getHours();
  		// var minutes = mDate.getMinutes();
		// var seconds = mDate.getSeconds();

        var theme = localStorage.getItem("theme");
        var theme_id = $("#theme_id").text();

        if (theme == theme_id) {
            $('input[name="theme_radio"][value="' + theme_id + '"]').prop('checked', true);
            return;
        }

        if (theme == "主题0") {
            window.location.href = "主题0.html";
        } else if (theme == "主题1"){
            window.location.href = "主题1.html";
        } else {
            localStorage.setItem("theme", "主题0");
            window.location.href = "主题0.html";
        }

        return;
    }

})