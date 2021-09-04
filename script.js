'use strict';

const DomElement = function(selector, height, width, bg, fontSize){
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
};

DomElement.prototype.foo = function(){
	if(this.selector.indexOf('.') === 0){
		let newEl = document.createElement('div');
		document.body.appendChild(newEl);		
		newEl.className = (this.selector).slice(1);
		newEl.style.height = this.height;
		newEl.style.width = this.width;
		newEl.style.background = this.bg;
		newEl.style.fontSize = this.fontSize;
		newEl.innerHTML = '<b>Новый элемент</b>';

	}else if(this.selector.indexOf('#') === 0){
		let newEl = document.createElement('p');
		document.body.appendChild(newEl);		
		newEl.id = (this.selector).slice(1);
		newEl.style.height = this.height;
		newEl.style.width = this.width;
		newEl.style.background = this.bg;
		newEl.style.fontSize = this.fontSize;
		newEl.innerHTML = '<b>Новый элемент</b>';
	}
};

let el1 = new DomElement('#block', '50px', '100px', '#fff', '8px');

el1.foo();
console.log(el1);