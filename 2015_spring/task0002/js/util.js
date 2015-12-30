/**
 * Created by maxinchun on 2015/12/25.
 */

// ---------------------------2.JavaScript数据类型及语言基础------------------------------------------------

// -----------------------------2.1实践判断各种数据类型的方法------------------------------------------------

//判断arr是否是一个数组，返回一个bool值
function isArray(arr) {
    //return Array.isArray(arr);
    return Object.prototype.toString.call(arr) === '[object Array]';
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    //return typeof fn === "function";
    return Object.prototype.toString.call(fn) === '[object Function]';
}

// ------------------------2.2了解值类型和引用类型的区别，了解各种对象的读取、遍历方式-------------------------------------

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整克隆
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等。
function cloneObject(src) {
    var clone = src;

    // 对于Date String Boolean等引用类型的数据，需要考虑调用构造函数重新构造，直接赋值依然会有引用问题（不是真正的clone引用变量）

    //对于Date
    if (src instanceof Date) {
        clone = new Date(src.getDate());
    }

    //对于Object和Array的遍历，可以使用for in ,这样可以保证在Array对象上扩展的属性也可以正确复制
    //对于数组
    if (src instanceof Array) {
        clone = [];
        for (var key in src) {
            clone[key] = cloneObject(src[key]);
        }
    }

    //对于Object
    if (src instanceof Object) {
        clone = {};
        for (var key in src) {
            if (src.hasOwnProperty(key)) {  //忽略掉继承属性
                clone[key] = cloneObject(src[key]);
            }
        }
    }

    //对于数字 字符串 布尔 null undefined
    return clone;
}

// 测试用例：
/*var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(srcObj.a);
console.log(srcObj.b.b1[0]);

console.log(tarObj.a);
console.log(tarObj.b.b1[0]);*/

// -----------------2.3学习数组、字符串、数字等相关方法-------------------------------------

//对于数组进行去重操作，并去空，只考虑数组中元素为数字或字符串，返回一个去重的数组
function uniqArray(arr) {
    var newArr = [];
    for (var i in arr) {
        if (newArr.indexOf(arr[i]) == -1 && arr[i] != "") {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

// 使用示例：
/*var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);*/

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //从头开始遍历字符串
        if (str[i] != " " && str[i] != "\t") {//当字符不为空的时候
            break;
        }
    }

    for (j = str.length - 1; j >= 0; j--) { //从字符串尾部遍历
        if (str[j] != " " && str[j] != "\t") { //当字符不为空的时候
            break;
        }
    }

    return str.slice(i, j + 1);

}

// 对字符串头尾进行空格字符串的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    if (str.length != -1) {
        return str.replace(/^\s+|\s+$/g, '');
    }
}

// 使用示例
/*var str = ' hi!  ';
str = trim(str);
console.log(str);  //'hi!'*/

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 其中fn函数可以接受两个参数：item和index
function each(arr, fn) {
    for (var i in arr) {
        fn(arr[i], i);
    }
}

// 使用示例
/*var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ':' + item);
}

each(arr, output); // 0:java, 1:c, 2:php, 3:html*/


// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var length = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            length++;
        }
    }
    return length;
}

// 使用示例
/*var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj));*/

// ---------------------2.4学习正则表达式-----------------------------------------------------------------------

// 判断是否为邮箱地址
function isEmail(emailStr) {
    //var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    var reg = /^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i;
    return reg.test(emailStr);
}

// 判断是否为手机号码
function isMobilePhone(phone) {
    var reg = /^1[3|4|5|8]\d{9}/;
    return reg.test(phone);
}

/*var email = "23@123.com";
var phone = 15212359645;
console.log(isEmail(email));
console.log(isEmail(phone));
console.log(isMobilePhone(email));
console.log(isMobilePhone(phone));*/


// -----------------------------------------3.DOM----------------------------------------------------------

// ---------------------------3.1简单的DOM操作函数-----------------------------------------------------

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var oldClassName = element.className;
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var originClassName = element.className; //获取原先的样式类
    var pattern = new RegExp("\\b" + oldClassName + "\\b"); //使用构造函数构造动态的正则表达式
    element.className = trim(originClassName.replace(pattern, ""));
}

// 判断siblingNode和element是否为同一个父元素下的同一及的元素，返回bool值、
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
//TODO 不够完善,浏览器的高度和
function getPosition(element) {
    var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;
}

// ----------------------------------------------------------------------------------------------

// 实现一个简单的Query
function $(selector) {
    var element = document;
    var sele = selector.replace(/\s+/, ' ').split(' '); //去除多余的空格并分割
    for (var i in sele) {
        switch (sele[i][0]) { // 从子节点中查找
            case '#' : // id选择
                element = element.getElementById(sele[i].substring(1));
                break; //
            case '.' :
                element = element.getElementsByClassName(sele[i].substring(1))[0];
                break;
            case '[' : // 属性选择
                var valueLoc = sele[i].indexOf('=');
                var temp = element.getElementsByTagName('*');
                var tLength = temp.length;
                if (valueLoc != -1) { // 既有属性，也有值
                    var key = sele[i].substring(1, valueLoc);
                    var value = sele[i].substring(valueLoc + 1, sele[i].length - 1);
                    for (var j in temp) {
                        if (temp[j][key] == value) {
                            element = temp[j];
                        }
                    }
                } else { //只有属性 没有值
                    var key = sele[i].substring(1, sele[i].length - 1);
                    for (var j in temp) {
                        if (temp[j][key]) {
                            element = temp[j];
                            break;
                        }
                    }
                }
                break;
            default :
                element = element.getElementsByTagName(sele[i])[0];
        }
    }
    if (!element) {
        element = null;
    }
    return element;
}

// 可以通过id获取DOM对象，通过#标示，例如
/*
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象,例如
$("a") // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象,例如
$(".classa"); //返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象,例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); //返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性,例如
$("#adom .classa"); //返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
*/


// ------------------------------事件处理函数---------------------------------------------------------------

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event, listener);
}

// 例如：
/*function clicklistener(event) {
    // ...
}
addEvent($("#doma"), "click", clicklistener);*/

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element.removeEventListener(event, listener);
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, 'click', listener);
}

// 实现对Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, 'keydown', function (e) {
        var event = e || window.event;
        var keyCode = event.which || event.keyCode;
        if (keyCode == 13) {
            listener.call(element, event);
        }
    });
}


// 接下来我们把上面几个函数和$做一下结合，当它们变成$对象的一些方法
$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;


/*function clickListener(event) {
    console.log(event);
}

function renderList() {
    $("#list").innerHTML = "<li>new item</li>";
}

function init() {
    each($("#list").getElementsByTagName("li"), function (item) {
        $.click(item, clickListener);
    });
    $.click($("#btn"), renderList);
}

init();*/


//-------------------------------------事件代理-------------------------------------------------

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element, eventName, function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target && target.tagName === tag.toUpperCase()) {
            listener.call(target, event);
        }
    });
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
/*$.deletate($("#list"), "li", "click", clickListener);*/


// ------------------------------------5.BOM---------------------------------------------------

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; Tablet PC 2.0; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; McAfee; InfoPath.2; LCJB; rv:11.0) like Gecko
    if (navigator.userAgent.toLowerCase().indexOf("trident") > -1 && navigator.userAgent.indexOf("rv") > -1) { // ie11及以上
        return navigator.userAgent.substring(navigator.userAgent.indexOf("rv:") + 3, navigator.userAgent.indexOf(")"));
    } else {
        return /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp['\x241']) : -1;
    }
}

function isValidCookieName(cookieName) {
    // http://www.w3.org/Protocols/rfc2109/rfc2109
    // Syntax:  General
    // The two state management headers, Set-Cookie and Cookie, have common
    // syntactic properties involving attribute-value pairs.  The following
    // grammar uses the notation, and tokens DIGIT (decimal digits) and
    // token (informally, a sequence of non-special, non-white space
    // characters) from the HTTP/1.1 specification [RFC 2068] to describe
    // their syntax.
    // av-pairs   = av-pair *(";" av-pair)
    // av-pair    = attr ["=" value] ; optional value
    // attr       = token
    // value      = word
    // word       = token | quoted-string

    // http://www.ietf.org/rfc/rfc2068.txt
    // token      = 1*<any CHAR except CTLs or tspecials>
    // CHAR       = <any US-ASCII character (octets 0 - 127)>
    // CTL        = <any US-ASCII control character
    //              (octets 0 - 31) and DEL (127)>
    // tspecials  = "(" | ")" | "<" | ">" | "@"
    //              | "," | ";" | ":" | "\" | <">
    //              | "/" | "[" | "]" | "?" | "="
    //              | "{" | "}" | SP | HT
    // SP         = <US-ASCII SP, space (32)>
    // HT         = <US-ASCII HT, horizontal-tab (9)>

    return (new RegExp('^[^\\x20\\x7f\\(||)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+x24')).test(cookieName);
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    if (!isValidCookieName(cookieName)) {
        return;
    }
    var exdate = ''; //过期时间
    if (expiredays) {
        exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        // toGMTString is deprecated and should no longer be used, it's only there for backwards compatibility, use toUTCString() instead
        var expires = ';expires=' + exdate.toUTCString();
    }
    // 废弃escape()方法生成新的由十六进制转移序列替换的字符串，使用encodeURI或encodeURIComponent代替
    document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + expires;
}

function getCookie(cookieName) {
    if (!isValidCookieName(cookieName)) {
        return null;
    }
    var re = new RegExp(cookieName = '=(.*?)($|;)');
    return re.exec(document.cookie)[1] || null;
}

// -------------------------------------------------6.Ajax---------------------------------------------------------

// -------------------------学习Ajax,并尝试自己封装一个Ajax方法。实现如下方法---------------------------------------------
// options是一个对象,里面可以包括的参数为：
// 1. type: post或者get，可以有一个默认值
// 2. data: 发送的数据，为一个键值对象或者一个用&连接的赋值字符串
// 3. onsuccess: 成功时的调用函数
// 4. onfail: 失败时的调用函数
function ajax(url, options) {
    // 创建对象
    var xmlhttp;
    if (window.XMLHttpRequest) { //code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //处理data
    if (options.data) {
        var dataArr = [];
        for (var item in options.data) {
            dataArr.push(item + "=" + encodeURI(options.data[item]));
        }
        var data = dataArr.join("&");
    }

    //处理type
    if (!options.type) {
        options.type = "GET";
    }
    options.type = options.type.toUpperCase();

    //发送请求
    if (options.type == "GET") {
        var myUrl = "";
        if (options.data) {
            myUrl = url + "?" + data;
        } else {
            myUrl = url;
        }
        xmlhttp.open("GET", myUrl, true);
        xmlhttp.send();
    } else if (options.type == "POST") {
        xmlhttp.open("OPST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencodeed");
        xmlhttp.send(data);
    }

    // 响应处理
    xmlhttp.onreadystatechange = function () {
        // 请求数据成功响应
        if (xmlhttp.readyState ==4 && xmlhttp.status == 200) {
            if(options.data.onsuccess){
                options.data.onsuccess(xmlhttp.responseText,xmlhttp.responseXML);
            }
        }else{
            if(options.data.onfail){
                options.data.onfail(xmlhttp.responseType,xmlhttp.responseXML);
            }

        }
    }


}

// 使用示例：
/*ajax(
    'http://localhost:8080/server/ajaxtest',
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);*/



function removeNode(node) {
    if (node) {
        node.parentNode.removeChild(node);
    }
}