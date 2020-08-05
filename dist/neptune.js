// Generated by Haxe 4.1.3
(function ($global) { "use strict";
var HelloWorld = function() {
	this.name = "Neptune";
	var text = this.name;
	this.nep_name = window.document.createTextNode(text);
};
HelloWorld.prototype = {
	cool: function() {
		var _gthis = this;
		var x = 0;
		var nep_x = window.document.createTextNode(x);
		var set_x = function(new_x) {
			x = new_x;
			neptune_platform_html_HtmlPlatform.updateTextNode(nep_x,x);
		};
		var y = 0;
		var nep_y = window.document.createTextNode(y);
		var set_y = function(new_y) {
			y = new_y;
			neptune_platform_html_HtmlPlatform.updateTextNode(nep_y,y);
		};
		var q = 203;
		var click = function() {
			set_x(x + 1 + q);
			set_y(y - 2);
			_gthis.set_name("Sage");
		};
		var elem = window.document.createElement("button");
		neptune_platform_html_HtmlPlatform.addChildren(elem,[window.document.createTextNode("Update XY")]);
		elem.onclick = click;
		var elem1 = window.document.createElement("div");
		var tmp = window.document.createTextNode(" ");
		var elem2 = window.document.createElement("h1");
		neptune_platform_html_HtmlPlatform.addChildren(elem2,[window.document.createTextNode("x: "),nep_x]);
		var tmp1 = window.document.createTextNode(" ");
		var elem3 = window.document.createElement("h2");
		neptune_platform_html_HtmlPlatform.addChildren(elem3,[window.document.createTextNode("y: "),nep_y]);
		var tmp2 = window.document.createTextNode(" ");
		var elem4 = window.document.createElement("h3");
		neptune_platform_html_HtmlPlatform.addChildren(elem4,[window.document.createTextNode("name: "),this.nep_name]);
		neptune_platform_html_HtmlPlatform.addChildren(elem1,[tmp,elem2,tmp1,elem3,tmp2,elem4,window.document.createTextNode(" "),elem,window.document.createTextNode(" ")]);
		neptune_platform_html_HtmlPlatform.addAttr(elem1,"class","taco");
		return elem1;
	}
	,set_name: function(val) {
		this.name = val;
		neptune_platform_html_HtmlPlatform.updateTextNode(this.nep_name,val);
		return this.name;
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
