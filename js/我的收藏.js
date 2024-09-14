$(document).ready(function(){
    // 记录所有隐藏模块的状态 显示:true 隐藏:false
    var hidden_block = new Array();

    // 默认常用网站

    // var defualtWebAddress = new Map();
    
    // defualtWebAddress.set("https://www.baidu.com", "百度");
    // defualtWebAddress.set("https://www.bilibili.com", "哔哩哔哩");
    // defualtWebAddress.set("https://www.weibo.com", "微博");
    // defualtWebAddress.set("https://www.taobao.com", "淘宝");
    // defualtWebAddress.set("https://global.jd.com", "京东");
    // defualtWebAddress.set("https://www.iqiyi.com", "爱奇艺");
    // defualtWebAddress.set("https://www.zhihu.com", "知乎");
    // defualtWebAddress.set("https://www.huya.com", "虎牙");

    // 遍历每一个 select_addr，添加 hover 事件监听器
    $('.select_addr').each(function() {
        var $addrName = $(this).find('.addr_name'); // 当前 .addr_name 元素
        var $addrWeb = $(this).find('.addr_web');   // 当前 .addr_web 元素
        var $webClass = $(this).closest('.selectWeb').find('.web_class'); // 找到对应的 .web_class 元素

        // 保存原始的 .web_class 内容，方便恢复
        var originalWebClassContent = $webClass.text();

        // 鼠标悬停时更改 .web_class 内容
        $(this).hover(function() {
            $webClass.text($addrWeb.text()); // 将 .web_class 内容设置为 .addr_web 内容
        }, function() {
            // 鼠标移开时恢复原来的 .web_class 内容
            $webClass.text(originalWebClassContent);
        });
    });

    var addedWebAddress = localStorage.getItem('addedWebAddress');
    var selectededWebAddress = localStorage.getItem('selectededWebAddress');

    var selectedAddress;
    if (selectededWebAddress) {
        selectedAddress = new Map(JSON.parse(selectededWebAddress));
    } else {
        selectedAddress = new Map();
    }

    var webAddress;
    if (addedWebAddress) {
        webAddress = new Map(JSON.parse(addedWebAddress));
    } else {
        webAddress = new Map();
    }

    // 初始化所有隐藏模块的状态为 false
    // setHiddenBlockArray();
    setWebAddress();
    checkSelectedWebAddress();
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

        selectedAddress.delete(key);

        localStorage.setItem("selectededWebAddress", JSON.stringify(Array.from(selectedAddress.entries())));
        location.reload();
    })

    $(".myAddr_delete").click(function(){
        var key = $(this).children('.addr_web').text();

        webAddress.delete(key);

        localStorage.setItem("addedWebAddress", JSON.stringify(Array.from(webAddress.entries())));
        location.reload();
    })

    $(".myWeb_status").click(function(){

        var key = $(this).children(".addr_web").text();
        var value = $(this).children(".addr_web_name").text();

        
        if (selectedAddress.has(key, value)) {
            selectedAddress.delete(key);
            console.log("delete " + value + " : " + key);
        } else {
            console.log("add " + value + " : " + key);
            selectedAddress.set(key, value);
        }

        localStorage.setItem("selectededWebAddress", JSON.stringify(Array.from(selectedAddress.entries())));
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

    // function setHiddenBlockArray() {
    //     for (var i = 0; i < $(".hidden_block").length; i++) {
    //         setHiddenBlockStatus(i, false);
    //     }
    // }

    // function setHiddenBlockStatus(index, status) {
    //     var hidden_block_id = "hidden_block_" + index;

    //     hidden_block[index] = status;
    //     if (status) {
    //         $("#" + hidden_block_id).fadeIn();
    //     } else {
    //         $("#" + hidden_block_id).fadeOut();
    //     }
        
    // }

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

        if(selectedAddress) {
            selectedAddress.forEach(function(value, key) {
                if(value.length > 10) {
                    value = value.substring(0, 9) + "..";
                }
                $("#webAddress").append("<div class='addr'><span class='addr_name'>"
                    + value + "</span><span class='addr_delete'><img class='delete_img' src='../素材/delete_black.png'><p class='addr_web'>"
                    + key + "</p></span></div>");
            })
        }

        // defualtWebAddress.forEach(function(value, key) {
        //     if (localStorage.getItem(key) != "false") {
        //         $("#webAddress").append("<div class='addr'><span class='addr_name'>"
        //             + value + "</span><span class='addr_delete'><img class='delete_img' src='素材/delete_black.png'><p class='addr_web'>"
        //             + key + "</p></span></div>");
        //     }
        // });
    }

    function checkSelectedWebAddress() {
        $('.myWeb_status').each(function(index, element) {
            // 'index' 是元素的索引
            // 'element' 是当前遍历到的 DOM 元素
            // $(element) 将当前的 DOM 元素转换为 jQuery 对象
        
            // 例如：获取元素的文本内容
            var key = $(element).children(".addr_web").text();

            var isExit = selectedAddress.has(key);

            // 打印或处理该元素
            console.log(key + " : " + isExit);

            if (isExit) {
                console.log("enter");
                $(element).children(".web_status").attr("src", "../素材/check_green.png");;
            }
        });
        
    }
});