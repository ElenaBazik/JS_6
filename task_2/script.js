'use strict'

function openFolder() {
  folder.classList.toggle('folder1');
}
let folder = document.querySelector('.folder');
folder.addEventListener('dblclick', openFolder);
