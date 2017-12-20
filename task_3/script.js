'use strict'

var block3 = document.getElementById('block');
var div = document.createElement('div');

(function getBlocks(){
	for (var i = 1; i<300; i++){
		var divs = div.cloneNode(true);
		divs.className = 'block';
		block3.appendChild(divs);

			divs.onmouseenter = function(){
			this.style.borderRadius = '20px';
			}
	}
})();
