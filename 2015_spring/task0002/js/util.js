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
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

// ʹ��ʾ����
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);





