'use strict'

var field = document.getElementById('field');

field.onmousemove = function(event){
	event.X = event.clientX;
	event.Y = event.clientY;
	field.innerHTML = `Координаты X - ${event.X}
					   Координаты Y - ${event.Y}`
}
