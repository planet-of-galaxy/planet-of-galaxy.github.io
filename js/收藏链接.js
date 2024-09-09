$(document).ready(function(){
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

    setAddrLinkGroup();

    $(".addr_link").click(function() {
        var $href = $(this).children('.key').text();
        window.location.href= $href;
    })

    // $("#edit_kid").click(function(){
    //     window.location.href="我的收藏.html";
    // })

    function setAddrLinkGroup(){
        if(webAddress){
            webAddress.forEach(function(value, key) {
                if(value.length > 10) {
                    value = value.substring(0, 9) + "..";
                }
                $("#addrLinkGroup").append("<div class='addr_link'><span class='link_name'>"
                    + value + "</span><p class='key'>"
                    + key + "</p></span></div>");
            })
        }

        defualtWebAddress.forEach(function(value, key) {
            if (localStorage.getItem(key) != "false") {
                $("#addrLinkGroup").append("<div class='addr_link'><span class='link_name'>"
                    + value + "</span><p class='key'>"
                    + key + "</p></span></div>");
            }
        });
    }
})