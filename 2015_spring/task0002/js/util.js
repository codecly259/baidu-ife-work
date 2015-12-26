/**
 * Created by maxinchun on 2015/12/25.
 */

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
var srcObj = {
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
console.log(tarObj.b.b1[0]);


//对于数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重的数组
function uniqArray(arr) {
    var newArr = [];
    for (var i in arr) {
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

// 使用示例：
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);



