/**
 * Created by maxinchun on 2015/12/29.
 */

$.click($(".btn1"), function () {
    var hobbies = $("#text").value.split(",");
    console.info(hobbies);
    hobbies = uniqArray(hobbies);
    console.info(hobbies);
    $("p").innerHTML = hobbies;
});


$.click($(".btn2"), function () {
    var hobbyies = $("textarea").value.replace(/[\s,，、;；]+/g, ' ').split(' '); // 将多个分隔符都转化为空格分隔符并分割字符串
    console.info(hobbyies);
    hobbyies = uniqArray(hobbyies);
    console.info(hobbyies);
    $(".p2").innerHTML = hobbyies;

});

function showHobby() {
    var hobbyies = $(".text3").value.replace(/[\s,，、;；]+/g, ' ').split(' '); // 将多个分隔符都转化为空格分隔符并分割字符串
    hobbyies = uniqArray(hobbyies);
    if (hobbyies.length < 1) { // 错误处理
        $(".error").innerHTML = "请输入至少一个爱好";
    } else if (hobbyies.length > 10) {
        $(".error").innerHTML = "爱好数量不能超过10个";
    } else {
        $(".error").innerHTML = ""; // 删除旧元素
        removeNode($(".result"));

        var result = document.createElement("div");
        result.className = "result";
        var h3 = document.createElement("h3");
        h3.innerHTML = "爱好:";
        result.appendChild(h3);
        for (var i in hobbyies) {
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            result.appendChild(checkbox);
            var data = document.createTextNode(hobbyies[i] + " ");
            result.appendChild(data);
        }
        $("body").appendChild(result); // 注意减少页面重绘：用js 拼好，最好一次性 append 或者 innerHTML
    }


}

$.click($(".btn3"), showHobby);

function reset() {
    $(".error").innerHTML = "";
    $(".text3").value = "";
    removeNode($(".result"));

}

function removeNode(node) {
    if (node) {
        node.parentNode.removeChild(node);
    }
}