$(document).ready(function(){
    // 记录所有隐藏模块的状态 显示:true 隐藏:false
    var hidden_block = new Array();
    // 初始化所有隐藏模块的状态为 false
    setHiddenBlockArray();

    // 点击时间模块 重载页面
    $("#time_block").click(function(){
        location.reload();
    })

    // 点击中间偏左模块
    $("#middle_left").click(function(){
        setHiddenBlockStatus(0, false);
    })

    // 点击中间的中间模块
    $("#middle_middle").click(function(){
        setHiddenBlockStatus(0, true);
    })

    // 点击中间偏右模块
    $("#middle_right").click(function(){
        setHiddenBlockStatus(0, false);
    })

    function setHiddenBlockArray() {
        for (var i = 0; i < $(".hidden_block").length; i++) {
            setHiddenBlockStatus(i, false);
        }
    }

    function setHiddenBlockStatus(index, status) {
        var hidden_block_id = "hidden_block_" + index;

        hidden_block[index] = status;
        if (status) {
            $("#" + hidden_block_id).fadeIn();
        } else {
            $("#" + hidden_block_id).fadeOut();
        }
        
    }

})