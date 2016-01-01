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
 *
 * @param event
 * @returns {Array}
 */
function getLocation(event) {
    var location = [];
    var moveX = event.clientX - startX;
    var moveY = event.clientY - startY;
    var x = startLeft + moveX;
    var y = startTop + moveY;

    if (x < 20) {
        location[0] = 0;
    } else if (x >= 230 && x <= 540) {
        location[0] = 1;
    } else {
        location[0] = 2;
    }

    location[1] = Math.floor((y + 20) / 40);
    var dragNum = wrap(location[0].getElementsByClassName('drag').length); //容器中滑块的数量
    location[1] = Math.max(location[1], 1);
    location[1] = Math.min(location[1], dragNum);

    return location;
}