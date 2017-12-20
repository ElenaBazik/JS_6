'use strict'

  var counter = 0;
document.querySelector('#block').addEventListener('click', function(e) {
    counter += 100;
    block.style.marginTop = counter + 'px';
});
