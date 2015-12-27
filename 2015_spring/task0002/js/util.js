/**
 * Created by maxinchun on 2015/12/25.
 */

//�ж�arr�Ƿ���һ�����飬����һ��boolֵ
function isArray(arr) {
    //return Array.isArray(arr);
    return Object.prototype.toString.call(arr) === '[object Array]';
}

//�ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    //return typeof fn === "function";
    return Object.prototype.toString.call(fn) === '[object Function]';
}

// ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ��������¡
// �����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object���󡣲�������������������ȡ�
function cloneObject(src) {
    var clone = src;

    // ����Date String Boolean���������͵����ݣ���Ҫ���ǵ��ù��캯�����¹��죬ֱ�Ӹ�ֵ��Ȼ�����������⣨����������clone���ñ�����

    //����Date
    if (src instanceof Date) {
        clone = new Date(src.getDate());
    }

    //����Object��Array�ı���������ʹ��for in ,�������Ա�֤��Array��������չ������Ҳ������ȷ����
    //��������
    if (src instanceof Array) {
        clone = [];
        for (var key in src) {
            clone[key] = cloneObject(src[key]);
        }
    }

    //����Object
    if (src instanceof Object) {
        clone = {};
        for (var key in src) {
            if (src.hasOwnProperty(key)) {  //���Ե��̳�����
                clone[key] = cloneObject(src[key]);
            }
        }
    }

    //�������� �ַ��� ���� null undefined
    return clone;
}

// ����������
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


//�����������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�ص�����
function uniqArray(arr) {
    var newArr = [];
    for (var i in arr) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

// ʹ��ʾ����
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);

// ʵ��һ���򵥵�trim����������ȥ��һ���ַ�����ͷ����β���Ŀհ��ַ�
// �ٶ��հ��ַ�ֻ�а�ǿո�Tab
// ��ϰͨ��ѭ�����Լ��ַ�����һЩ�����������ֱ�ɨ���ַ���strͷ����β���Ƿ��������Ŀհ��ַ�������ɾ�����ǣ���󷵻�һ�����ȥ�����ַ���
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //��ͷ��ʼ�����ַ���
        if (str[i] != " " && str[i] != "\t") {//���ַ���Ϊ�յ�ʱ��
            break;
        }
    }

    for (j = str.length - 1; j >= 0; j--) { //���ַ���β������
        if (str[j] != " " && str[j] != "\t") { //���ַ���Ϊ�յ�ʱ��
            break;
        }
    }

    return str.slice(i, j + 1);

}

// ���ַ���ͷβ���пո��ַ�����ȥ��������ȫ�ǰ�ǿո�Tab�ȣ�����һ���ַ���
// ����ʹ��һ�м���������ʽ��ɸ���Ŀ
function trim(str) {
    if (str.length != -1) {
        return str.replace(/^\s+|\s+$/g, '');
    }
}

// ʹ��ʾ��
var str = ' hi!  ';
str = trim(str);
console.log(str);  //'hi!'

// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
// ����fn�������Խ�������������item��index
function each(arr, fn) {
    for (var i in arr) {
        fn(arr[i], i);
    }
}

// ʹ��ʾ��
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ':' + item);
}

each(arr, output); // 0:java, 1:c, 2:php, 3:html


// ��ȡһ�����������һ��Ԫ�ص�����������һ������
function getObjectLength(obj) {
    var length = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            length++;
        }
    }
    return length;
}

// ʹ��ʾ��
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
}
console.log(getObjectLength(obj));




