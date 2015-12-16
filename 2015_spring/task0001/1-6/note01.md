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

	```css
	h1 {text-transform:uppercase}
	h2 {text-transform:capitalize}
	p {text-transform:lowercase}
	```

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

	```css
	h1 {text-align:center}
	h2 {text-align:left}
	h3 {text-align:right}
	```

## word-spacing
- 定义：`word-spacing`属性增加或减少单词间的空白（即字间隔）。该属性定义元素中字之间插入多少空白符。针对这个属性，“字” 定义为由空白符包围的一个字符串。如果指定为长度值，会调整字之间的通常间隔；所以，`normal` 就等同于设置为 0。允许指定**负长度值**，这会让字之间挤得更紧。
- 注释：CSS 把`字（word）`定义为任何非空白符字符组成的串，并由某种空白字符包围。这个定义没有实际的语义，它只是假设一个文档包含由一个或多个空白字符包围的字。支持 CSS 的用户代理不一定能确定一个给定语言中哪些是合法的字，而哪些不是。尽管这个定义没有多大价值，不过它意味着采用象形文字的语言或非罗马书写体往往无法指定字间隔。
- 提示：利用这个属性，可能会创建字间隔太宽的文档，所以，使用 `word-spacing`时要小心。
- 可能的值：

	|值 | 描述
	|------|------------
	|normal | 默认。定义单词间的标准空间。
	|length | 定义单词间的固定空间。
	|inherit | 规定应该从父元素继承`word-spacing`属性的值。

- 实例：规定段落中的字间距是 25 像素：
	
	```css
	p {
	  word-spacing:25px;
	}
	```

## white-space
- 定义：`white-space`属性声明建立布局过程中如何处理元素内的空白。
- 浏览器支持：所有浏览器都支持 white-space 属性。IE不支持属性值`inherit`。
- 可能的值：

	|值 | 描述
	|------|------------
	|normal | 默认。空白会被浏览器忽略。
	|pre | 空白会被浏览器保留。其行为方式类似HTML中的`<pre>`标签。
	|nowrap | 文本不会换行，文本会再同一行上继续，知道遇到`<br>`标签为止。
	|pre-wrap | 保留空白符序列，但是正常的进行换行。
	|pre-line | 合并空白符序列，但是保留换行符。
	|inherit | 规定应该从父元素继承`white-space`属性的值。

- 实例：规定段落中的文本不进行换行

	```css
	p {
	  white-space: nowrap
	}
	```

## color
- 定义：`color`属性规定文本的颜色。这个属性设置了一个元素的前景色（在 HTML 表现中，就是元素文本的颜色）；光栅图像不受 `color` 影响。这个颜色还会应用到元素的所有边框，除非被 `border-color` 或另外某个边框颜色属性覆盖。
- 提示：使用合理的背景颜色和文本颜色搭配，这样可以提高文本的可读性。
- 浏览器支持：所有浏览器都支持 `color` 属性。IE不支持属性值 `inherit`。
- 可能的值：

	|值 | 描述
	|------|------------
	|*color_name* | 规定颜色值为颜色名称的颜色（比如 red）。
	|*hex_number* | 规定颜色值为十六进制值的颜色（比如 #ff0000）。
	|*rgb_number* | 规定颜色值为 rgb 代码的颜色（比如 rgb(255,0,0)）。
	|inherit |  	规定应该从父元素继承颜色。

- 实例：为不同元素设置文本颜色

	```css
	body {
	  color:red;
	}
	h1 {
	  color:#00ff00;
	}
	p {
	  color:rgb(0,0,255);
	}
	```

## line-height
- 定义：line-height 属性设置行间的距离（行高）。不允许使用负值。
- 说明：该属性会影响行框的布局。在应用到一个块级元素时，它定义了该元素中基线之间的最小距离而不是最大距离。`line-height` 与 `font-size` 的计算值之差（在 CSS 中称为`行间距`）分为两半，分别加到一个文本行内容的顶部和底部。可以包含这些内容的最小框就是行框。原始数字值指定了一个缩放因子，后代元素会继承这个缩放因子而不是计算值。
- 浏览器支持：所有浏览器都支持 `line-height` 属性。IE不支持属性值 `inherit`。
- 可能的值：

	|值 | 描述
	|------|------------
	|normal | 默认。设置合理的行间距。
	|*number* | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距。
	|*length* | 设置固定的行间距。
	|*%* | 基于当前字体尺寸的百分比行间距。
	|inherit | 规定应该从父元素继承`line-height`属性的值	

- 实例：设置以百分比计的行高

	```css
	p.small {line-height:90%}
	p.big {line-height:200%}
	```

## font
- 定义：`font`简写属性在一个声明中设置所有字体属性。此属性也有`line-height`，可设置行间距。
- 说明：这个简写属性用于一次设置元素字体的两个或更多方面。使用 icon 等关键字可以适当地设置元素的字体，使之与用户计算机环境中的某个方面一致。注意，如果没有使用这些关键词，至少要指定字体大小和字体系列。可以按顺序设置如下属性：
	- font-style
	- font-variant
	- font-weight
	- font-size/line-height
	- font-family
	
	可以不设置其中的某个值，比如 font:100% verdana; 也是允许的。未设置的属性会使用其默认值。
- 浏览器支持：所有浏览器都支持 `font` 属性。IE不支持属性值 `inherit`。
- 可能的值：

	|值 | 描述
	|------|------------
	|*font-style* | 规定字体样式。参阅：[fonte-style](#font-style)中可能的值。
	|*font-variant* | 规定字体异体。参阅：[font-variant](#font-variant)中可能的值。
	|*font-weight* | 规定字体粗细。参阅：[font-weight](#font-weight)中可能的值。
	|*font-size/line-height* | 规定字体尺寸和行高。参阅：[font-size](#font-size)和[line-height](#line-height)中可能的值。
	|*font-family* | 规定字体系列。参阅[font-family](#font-family)中可能的值。
	|caption | 定义被标题控制（比如按钮、下拉表等）使用的字体。
	|icon | 定义被图标标记使用的字体。
	|menu | 定义被下拉列表使用的字体。
	|message-box | 定义被对话框使用的字体。
	|small-caption | caption字体的小型版本。
	|status-bar | 定义被窗口状态栏使用的字体。

- 实例：在一个声明中设置所有字体属性

	```css
	p.ex1
	  {
	  font:italic arial,sans-serif;
	  }
	
	p.ex2
	  {
	  font:italic bold 12px/20px arial,sans-serif;
	  }
	```

## font-family
- 定义：`font-family`规定元素的字体系列。
- 说明：font-family 可以把多个字体名称作为一个“回退”系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。也就是说，font-family 属性的值是用于某个元素的字体族名称或/及类族名称的一个优先表。浏览器会使用它可识别的第一个值。<br>有两种类型的字体系列名称：
	- 指定的系列名称，比如：`times`、`courier`、`arial`。
	- 通常字体系列名称：比如：`serif`、`sans-serif`、`cursive`、`fantasy`、`monospace`。
	

	**提示**:使用逗号分割每个值，并始终提供一个类族名称作为最后的选择。
- 注意：使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。
- 可能的值：

	|值 | 描述
	|------|------------
	|*family-name<br>generic-familt* | 由于某个元素的字体族名称或/及类族名称的一个优先表。<br>默认值：取决于浏览器。
	|inherit | 规定应该从父元素继承字体系列。

- 实例：为段落设置字体

	```css
	p
	  {
	  font-family:"Times New Roman",Georgia,Serif;
	  }
	```


## font-size
- 定义：`font-size`属性可设置字体的尺寸。
- 说明：该属性设置元素的字体大小。注意，实际上它设置的是字体中字符框的高度；实际的字符字形可能比这些框高或矮（通常会矮）。<br>
各关键字对应的字体必须比一个最小关键字相应字体要高，并且要小于下一个最大关键字对应的字体。
- 可能的值：

	|值 | 描述
	|------|------------
	|xx-small<br>x-small<br>small<br>medium<br>large<br>x-large<br>xx-large|把字体的尺寸设置为不同的尺寸，从xx-small到xx-large。<br>默认值：medium。
	|smaller | 把font-size设置为比父元素更小的尺寸。
	|larger | 把font-size设置为比父元素更大的尺寸。
	|length | 把font-size设置为一个固定值。
	|*%* | 把font-size设置为一个基于父元素百分比的值。
	|inherit | 规定应该从父元素继承字体尺寸。

- 实例：设置不同的	HTML元素的尺寸

	```css
	h1 {font-size:250%;}
	h2 {font-size:200%;}
	p {font-size:100%}
	```


## font-weight
- 定义：font-weight 属性设置文本的粗细。

## font-face

