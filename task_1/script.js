'use strict'

document.getElementById("field").addEventListener("mousemove",function(){
	event.X = event.clientX;
	event.Y = event.clientY;
	field.innerHTML = `Координаты X - ${event.X}
					   Координаты Y - ${event.Y}`
});
