'use strict'
const head = document.querySelector('.js_head');
const face = document.querySelector('.js_face')

function handleCLick () {
    face.innerHTML = ';)'
}
head.addEventListener('click', handleCLick)