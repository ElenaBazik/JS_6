(function(){
	'use strict'
	let container = document.getElementById('block');
	function addBlocks () {
		let fragment = document.createDocumentFragment();
		for (let i = 0; i < 405; i++) {
 			fragment.appendChild(document.createElement('div'));
 			fragment.children[i].className = 'block'
		}
		container.appendChild(fragment);
	}
	function addEvent () {
		container.addEventListener('mouseover', (ev)=>{
			if (ev.target.className == 'block') {
				ev.target.className += ' hovered'
			}
		})
	}
	function init () {
		addBlocks()
		addEvent()
	}
	document.addEventListener('DOMContentLoaded', init)
})();
