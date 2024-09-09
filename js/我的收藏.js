$(document).ready(function(){
    // 记录所有隐藏模块的状态 显示:true 隐藏:false
    var hidden_block = new Array();

    // 默认常用网站

    var defualtWebAddress = new Map();
    
    defualtWebAddress.set("https://www.baidu.com", "百度");
    defualtWebAddress.set("https://www.bilibili.com", "哔哩哔哩");
    defualtWebAddress.set("https://www.weibo.com", "微博");
    defualtWebAddress.set("https://www.taobao.com", "淘宝");
    defualtWebAddress.set("https://global.jd.com", "京东");
    defualtWebAddress.set("https://www.iqiyi.com", "爱奇艺");
    defualtWebAddress.set("https://www.zhihu.com", "知乎");
    defualtWebAddress.set("https://www.huya.com", "虎牙");

    var addedWebAddress = localStorage.getItem('addedWebAddress');
    var webAddress;
    if (addedWebAddress) {
        webAddress = new Map(JSON.parse(addedWebAddress));
    } else {
        webAddress = new Map();
    }

    // 初始化所有隐藏模块的状态为 false
    setHiddenBlockArray();
    setWebAddress();
    // setIco();

    const deletImgs = document.querySelectorAll('.delete_img');

    deletImgs.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            this.src = '../素材/delete_red.png'; // 鼠标悬停时更换图片
        });

        img.addEventListener('mouseleave', function() {
            this.src = '../素材/delete_black.png'; // 鼠标移开时恢复图片
        });
    });

    $(".addr").hover(function() {
        var key;

        if ($(this).children('.addr_delete').length > 0) {
            key = $(this).children('.addr_delete').children('.addr_web').text();
        } else if ($(this).children('.myAddr_delete').length > 0) {
            key = $(this).children('.myAddr_delete').children('.addr_web').text();
        }
    
        $("#addr").text(key);
    })

    $("#addWebSubmit").click(function(){
        // 获取输入框的值
        var addressName = $('input[name="addressName"]').val();
        var webAddressAddr = $('input[name="webAddress"]').val();
        
        // 打印获取到的值到控制台
        // console.log('网站名称:', addressName);
        // console.log('网址:', webAddress);

        webAddress.set(webAddressAddr, addressName);

        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    })

    $("#edit_kid").click(function(){
        defualtWebAddress.forEach(function(value, key){
            localStorage.setItem(key, "true")
        })
        webAddress.clear();
        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    })

    $(".addr_delete").click(function(){
        var key = $(this).children('.addr_web').text();
        localStorage.setItem(key, "false");
        location.reload();
    })

    $(".myAddr_delete").click(function(){
        var key = $(this).children('.addr_web').text();
        var value = webAddress.get(key);

        console.log("(" + value + ")" + " : ", "(" + key + ")");
        webAddress.delete(key);
        webAddress.forEach(function(key, value) {
            console.log("(" + value + ")" + " : ", "(" + key + ")");
        })
        

        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    })

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

    function setIco() {
        var url = "https://www.google.com/s2/favicons?domain=baidu.com";
        $("#icon").attr("src", url);
    }

    function setWebAddress() {
        if(webAddress){
            webAddress.forEach(function(value, key) {
                if(value.length > 10) {
                    value = value.substring(0, 9) + "..";
                }
                $("#webAddress").append("<div class='addr'><span class='addr_name'>"
                    + value + "</span><span class='myAddr_delete'><img class='delete_img' src='../素材/delete_black.png'><p class='addr_web'>"
                    + key + "</p></span></div>");
            })
        }

        defualtWebAddress.forEach(function(value, key) {
            if (localStorage.getItem(key) != "false") {
                $("#webAddress").append("<div class='addr'><span class='addr_name'>"
                    + value + "</span><span class='addr_delete'><img class='delete_img' src='../素材/delete_black.png'><p class='addr_web'>"
                    + key + "</p></span></div>");
            }
        });
    }
});