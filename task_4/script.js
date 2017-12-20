'use strict'

var backgroundImage = document.querySelector('.field');
var gallery = document.querySelector('.gallery');

	gallery.addEventListener('click', function (e) {
	var src = e.target.getAttribute('src');

	if(e.target.tagName == 'IMG') {
	backgroundImage.style.backgroundImage = 'url(' + src + ')';
	}
});
