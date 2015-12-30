/**
 * Created by maxinchun on 2015/12/30.
 */

/*实现一个类似百度搜索框的输入提示的功能。
 要求如下：
 允许使用鼠标点击选中提示栏中的某个选项
 允许使用键盘上下键来选中提示栏中的某个选项，回车确认选中
 选中后，提示内容变更到输入框中*/

var promptWrap = $('.prompt-wrap');
var myText = $('.myText');
var word = $('.prompt-wrap').getElementsByTagName('li');
var result = [];

window.onload = function () {
    for (var i in word) {
        $.click(word[i], function () { // 鼠标事件(点击 移进 移开)
            myText.value = this.innerHTML;
            clear();
        });
        $.on(word[i], 'mouseover', function () {
            word[0].className = '';
            this.className = 'choose';
        });
        $.on(word[i], 'mouseout', function () {
            word[0].className = 'choose';
            this.className = '';
        });
    }
}

/**
 *
 * @param value
 * @param e
 */
function showHint(value, e) {
    if (window.event) { // 获取键盘按下的字符
        var keynum = e.keyCode;
    } else if (e.which) {
        var keynum = e.which;
    }
    if (keynum != 38 && keynum != 40 && keynum != 13) { // 不响应上下键及回车键
        ajax('prompt.php',
            {
                data: {
                    q: value,
                    onsuccess: function (responseText, xhr) {
                        clear();
                        word[0].innerHTML = value; // word[0]储存value
                        console.info(responseText);
                        if (responseText) {
                            promptWrap.style.display = 'block';
                            result = responseText.replace(/\s+/g, '').split(',');
                            console.info(result);
                            for (var i in result) {
                                word[i + 1].innerHTML = result[i];
                            }
                        } else {
                            promptWrap.style.display = 'none';
                        }
                    },
                    onfail: function (responseTex, xhr) {
                        console.info(responseTex);
                    }
                }
            }
        );
    }
}

function move(e) { // 键盘事件（上下键及回车）
    var rlen = result.length;
    if (rlen) {
        if (window.event) { // 获取键盘按下的字符
            var keynum = e.keyCode;
        } else if (e.which) {
            var keynum = e.which;
        }
        var index = parseInt($('.choose').id[3]); // 获取choose元素为第几个
        switch (keynum) {
            case 38: //up arrow
                word[index].className = '';
                if (index == 0) {
                    index = rlen;
                } else {
                    index--;
                }
                word[index].className = 'choose';
                myText.value = word[index].innerHTML;
                break;
            case 40: //down arrow
                word[index].className = '';
                if (index == rlen) {
                    index = 0;
                } else {
                    index++;
                }
                word[index].className = 'choose';
                myText.value = word[index].innerHTML;
                break;
            case 13: // enter
                clear();
        }
    }
}

function clear() {
    for(var i in word){
        word[i].innerHTML = '';
    }
    $('.choose').className = '';
    word[0].className = 'choose';
    result.length = 0;
    promptWrap.style.display = 'none';
}
