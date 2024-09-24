$(document).ready(function(){
    // 记录所有隐藏模块的状态 显示:true 隐藏:false
    var hidden_block = new Array();
    // 初始化所有隐藏模块的状态为 false
    setHiddenBlockArray();

    var show = -1;
    hiddenBlockCliked(0);

    // 点击时间模块 重载页面
    $("#time_block").click(function(){
        location.reload();
    })

    // 点击中间偏左模块
    $("#middle_left").click(function(){
        // setHiddenBlockStatus(0, false);
    })

    // 点击中间的中间模块
    $("#middle_middle").click(function(){
        // setHiddenBlockStatus(0, true);
    })

    // 点击中间偏右模块
    $("#middle_right").click(function(){
        // setHiddenBlockStatus(0, false);
    })

    //侧边栏跳转
    $("#help_0").click(function(){
        hiddenBlockCliked(0);
    })
    $("#help_1").click(function(){
        hiddenBlockCliked(1);
    })
    $("#help_2").click(function(){
        hiddenBlockCliked(2);
    })
    $("#help_3").click(function(){
        hiddenBlockCliked(3);
    })

    function hiddenBlockCliked(index) {
        if (show != index) {
            $("#help_" + show).css("background-color", "transparent");

            setHiddenBlockStatus(show, false);
            show = index;
            setHiddenBlockStatus(show, true);

            $("#help_" + show).css("background-color", "beige");
        }
    }

    function setHiddenBlockArray() {
        for (var i = 0; i < $(".hidden_block").length; i++) {
            setHiddenBlockStatus(i, false);
        }
    }

    function setHiddenBlockStatus(index, status) {
        var hidden_block_id = "hidden_block_" + index;

        hidden_block[index] = status;
        if (status) {
            $("#" + hidden_block_id).show();
        } else {
            $("#" + hidden_block_id).hide();
        }
        
    }

})