'use strict';

const DomElement = function(selector = '.ololo', height= '50px', width = '250px', bg = 'tomato', fontSize = '14px'){
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
		newEl.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}`;
		newEl.style.fontSize = this.fontSize;
		newEl.innerHTML = '<b>Новый элемент</b>';

	}else if(this.selector.indexOf('#') === 0){
		let newEl = document.createElement('p');
		document.body.appendChild(newEl);		
		newEl.id = (this.selector).slice(1);
		newEl.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}`;
		newEl.style.fontSize = this.fontSize;
		newEl.innerHTML = '<b>Новый элемент</b>';
	}
};

let el1 = new DomElement();

el1.foo();
