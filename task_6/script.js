'use strict'

var trigger = document.querySelector('.switch');
trigger.addEventListener('click', rightTrigger);
trigger.style.marginLeft = '3px';

function rightTrigger() {
	var position = parseInt(trigger.style.marginLeft);
	if (position < 200) {
		trigger.style.marginLeft = (position + 100) + 'px';
	} else {
		trigger.style.marginLeft ='3px';
	}
}
