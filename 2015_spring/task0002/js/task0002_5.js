/**
 * Created by maxinchun on 2016/1/1.
 */

var startX; // 点击滑块时鼠标的坐标
var startY;
var startLeft; // 拖动前滑块中心的坐标
var startTop;
var wrap = document.getElementsByClassName('drag-wrap');

/**
 * 获取下一个滑块
 * @param element 当前元素节点
 * @returns {*|Node} 下一个滑块的元素
 */
function nextDrag(element) {
    var brother = element.nextSibling;
    while (brother && brother.nodeName == "#text") {
        brother = nextDrag(brother);
    }
    return brother;
}

/**
 * 将某滑块及其下面的滑块移动move个像素
 * @param element
 * @param move
 */
function moveDrag(element, move) {
    while (element) {
        element.style.top = parseInt(element.style.top) + move + 'px';
        element = nextDrag(element);
    }
}

/**
 * 计算滑块降落的位置
 * @param event
 * @returns {Array}
 */
function getLocation(event) {
    var location = []; // location的第一个元素代表容器的序号，第二个元素代表滑块在容器中的序号
    var moveX = event.clientX - startX; // 计划滑块中心的位置
    var moveY = event.clientY - startY;
    var x = startLeft + moveX;
    var y = startTop + moveY;

    if (x < 20) { // 容器的序号
        location[0] = 0;
    } else if (x >= 230 && x <= 540) {
        location[0] = 1;
    } else {
        location[0] = 2;
    }

    location[1] = Math.floor((y + 20) / 40); // 滑块在容器中的序号
    var dragNum = wrap(location[0].getElementsByClassName('drag').length); //容器中滑块的数量
    location[1] = Math.max(location[1], 1);
    location[1] = Math.min(location[1], dragNum);

    return location;
}

/**
 * 事件函数，开始拖动，整理原容器的其他滑块及记录一些数据
 * @param e
 */
function dragStart(e) {
    // 计算滑块中心相对drag-container的位置
    var wrapLeft = $('.drag-container').offsetLeft;
    e = e || window.event;
    var parent = this.parentNode;
    // 记录鼠标位置
    startX = e.clientX;
    startY = e.clientY;
    // 滑块中心相对容器的位置
    startTop = parseInt(this.style.top) + 20;
    startLeft = parent.offsetLeft - wrapLeft + 75;
    this.style.zindex = 1;
    // 下面的滑块上移41个像素
    moveDrag(nextDrag(this), -41);
}

/**
 * 拖动中，避免浏览器对容器的默认处理（默认无法将数据/元素放置到其他元素中）
 * @param e
 */
function dragging(e) {
    if (this.className !== 'dragging') {
        this.className = 'dragging';
    }
}

/**
 * 拖动中，避免浏览器对容器的默认处理（默认无法将数据/元素放置到其他元素中）
 * @param e
 */
function dragOver(e){
    e.preventDefault();
}

/**
 * 拖动结束，将滑块添加到新的容器
 * @param e
 */
function drop(e) {
    e = e || window.event;
    // 避免浏览器对容器的默认处理（默认已链接方式打开）
    e.preventDefault();
    // 滑块降落的位置
    var location = getLocation(e);
    var myWrap = wrap[location[0]];
    var myDrag = myWrap.getElementsByClassName('drag')[location[1]];
    if (myDrag) {
        var myTop = myDrag.style.top;
    } else {
        var beforeDrag = myWrap.getElementsByClassName('drag')[location[1] - 1];
        if (beforeDrag) {
            var beforeTop = parseInt(beforeDrag.style.top);
        } else {
            var beforeTop = -41;
        }
        var myTop = beforeTop + 41 + 'px';
    }
    moveDrag(myDrag, 41);

    // 将被拖动的滑块添加到新容器中
    var block = document.getElementsByClassName('drag');
    block.style.top = myTop;
    block.style.zIndex = 0;
    block.className = 'drag';
    myWrap.insertBefore(block, myDrag);
}

window.onload = function () {
    var drag = document.getElementsByClassName('drag');
    for (var i = 0; i < drag.length; i++) {
        drag[i].draggable = true;
        drag[i].style.top = (i % 6 * 41) + 'px';

        $.on(document.body, 'dragstart', dragStart);
        $.on(document.body, 'drag', dragging);
    }

    $.on(document.body, 'dragover', dragOver);
    $.on(document.body, 'drop', drop)
}







