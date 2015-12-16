# 标记笔记

## text-indent

- 定义 : `text-indent`属性规定文本块中首行文本的缩进。
- 注释 : 允许使用负值。如果使用负值，那么首行会被缩进到左边。
- 实例 : 将段落的第一行缩进50像素。

	```css
	  p {
	    text-indent:50px;
	  }
	```

## text-transform

- 定义 : `text-transform`属性控制文本（ 英文）的大小写。
- 说明 : 这个属性会改变元素中的字母大小写，而不论源文档中文本的大小写。如果值为 `capitalize`，则要对某些字母大写，但是并没有明确定义如何确定哪些字母要大写，这取决于用户代理如何识别出各个“词”。
- 可能的值：

	|值|描述
	|------|---------------
	|none | 默认。定义带有小写字母和大写字母的标准文本。
	|capitalize | 文本中的每个单词以大写字母开头。
	|uppercase | 定义仅有大写字母。
	|lowercase | 定义仅有小写字母。
	|inherit | 规定应该从父元素继承`text-transform`属性的值。
- 实例：转换不同元素中的文本
<<<<<<< HEAD

	```css
	h1 {text-transform:uppercase}
	h2 {text-transform:capitalize}
	p {text-transform:lowercase}
	```
=======
```css
h1 {text-transform:uppercase}
h2 {text-transform:capitalize}
p {text-transform:lowercase}
```
>>>>>>> 7aafd96f742f516bf412188e0a2797c8c4bb08bf

## text-decoration
- 定义 : `text-decoration` 属性规定添加到文本的修饰。
- 注释 : 修饰的颜色由`color`属性设置。
- 说明 : 这个属性允许对文本设置某种效果，如下划线。如果后代元素没有自己的装饰，祖先元素上设置的装饰会**延伸**到后代元素中。不要求用户代理支持`blink`
- 浏览器支持 : 所有主流浏览器都支持 text-decoration 属性。IE不支持属性值`inherit`。IE、Chrome、Safari不支持`blink`属性值
- 可能的值 : 

	|值|描述
	|------|-----------
	|none|默认。定义标准的文本。
	|underline|定义文本下的一条线（上划线）。
	|overline|定义文本上的一条线（下划线）。
	|line-through|定义穿过文本的一条线（删除线）。
	|blink|定义闪烁的文本。
	|inherit|规定应该从父元素继承`text-decoration`属性的值。

- 实例：设置h1、h2、h3、h4元素的文本修饰
<<<<<<< HEAD

=======
>>>>>>> 7aafd96f742f516bf412188e0a2797c8c4bb08bf
	```css
	h1 {text-decoration:overline}
	h2 {text-decoration:line-through}
	h3 {text-decoration:underline}
	h4 {text-decoration:blink}
	```

## text-align
- 定义和用法：`text-align`属性规定元素中的文本的水平对齐方式。该属性通过指定行框与哪个点对齐，从而设置块级元素内文本的水平对齐方式。通过允许用户代理调整行内容中字母和字之间的间隔，可以支持值`justify`；不同用户代理可能会得到不同的结果。
- 浏览器支持：所有浏览器都支持`text-align`属性。IE8不支持属性值`inherit`。
- 可能的值

	|值|描述
	|------|------------
	|left | 把文本排列到左边。默认值：由浏览器决定。
	|right | 把文本排列到右边。
	|center | 把文本排列到中间。
	|justify | 实现两端对齐文本效果。
	|inherit | 规定应该从父元素继承`text-align`属性的值。 

- 实例：设置h1、h2、h3元素的文本对齐方式
<<<<<<< HEAD

=======
>>>>>>> 7aafd96f742f516bf412188e0a2797c8c4bb08bf
	```css
	h1 {text-align:center}
	h2 {text-align:left}
	h3 {text-align:right}
	```


## word-spacing
## white-space
## color
## line-height
## font
## font-family
## font-size
## font-weight
## font-face

