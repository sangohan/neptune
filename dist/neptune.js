// Generated by Haxe 4.1.3
(function ($global) { "use strict";
var HelloWorld = function() {
};
HelloWorld.prototype = {
	cool: function() {
		var x = 0;
		var var_0 = window.document.createTextNode(x);
		var var_2 = window.document.createTextNode(x);
		var set_x = function(new_x) {
			x = new_x;
			neptune_platform_html_HtmlPlatform.runUpdates([function() {
				neptune_platform_html_HtmlPlatform.updateTextNode(var_0,x);
			},function() {
				neptune_platform_html_HtmlPlatform.updateTextNode(var_2,x);
			}]);
		};
		var y = 0;
		var var_1 = window.document.createTextNode(y);
		var var_3 = window.document.createTextNode(y);
		var var_4 = window.document.createTextNode(y);
		var set_y = function(new_y) {
			y = new_y;
			neptune_platform_html_HtmlPlatform.runUpdates([function() {
				neptune_platform_html_HtmlPlatform.updateTextNode(var_1,y);
			},function() {
				neptune_platform_html_HtmlPlatform.updateTextNode(var_3,y);
			},function() {
				neptune_platform_html_HtmlPlatform.updateTextNode(var_4,y);
			}]);
		};
		var q = 203;
		var click = function() {
			set_x(x + 1 + q);
			set_y(y - 2);
		};
		var elem = window.document.createElement("button");
		neptune_platform_html_HtmlPlatform.addChildren(elem,[window.document.createTextNode("Update XY "),var_0,window.document.createTextNode(" "),var_1]);
		elem.onclick = click;
		var elem1 = window.document.createElement("div");
		var tmp = window.document.createTextNode(" ");
		var elem2 = window.document.createElement("h1");
		neptune_platform_html_HtmlPlatform.addChildren(elem2,[window.document.createTextNode("x: "),var_2]);
		var tmp1 = window.document.createTextNode(" ");
		var elem3 = window.document.createElement("h2");
		neptune_platform_html_HtmlPlatform.addChildren(elem3,[window.document.createTextNode("y: "),var_3]);
		var tmp2 = window.document.createTextNode(" ");
		var elem4 = window.document.createElement("h3");
		neptune_platform_html_HtmlPlatform.addChildren(elem4,[window.document.createTextNode("y: "),var_4]);
		neptune_platform_html_HtmlPlatform.addChildren(elem1,[tmp,elem2,tmp1,elem3,tmp2,elem4,window.document.createTextNode(" "),elem,window.document.createTextNode(" ")]);
		neptune_platform_html_HtmlPlatform.addAttr(elem1,"class","taco");
		return elem1;
	}
};
var Main = function() { };
Main.main = function() {
	var template = new HelloWorld().cool();
	window.document.body.appendChild(template);
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var neptune_platform_html_HtmlPlatform = function() { };
neptune_platform_html_HtmlPlatform.updateTextNode = function(node,value) {
	node.textContent = value;
	return node;
};
neptune_platform_html_HtmlPlatform.runUpdates = function(updates) {
	var _g = 0;
	while(_g < updates.length) updates[_g++]();
};
neptune_platform_html_HtmlPlatform.addChildren = function(element,children) {
	var _g = 0;
	while(_g < children.length) element.appendChild(children[_g++]);
	return element;
};
neptune_platform_html_HtmlPlatform.addAttr = function(element,name,value) {
	element.setAttribute(name,value);
	return element;
};
Main.main();
})({});
