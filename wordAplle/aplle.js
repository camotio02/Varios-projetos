const keyCode = document.querySelectorAll(`.key[data-key="18"]`)
const key = document.querySelectorAll(`.key`)
let input = document.querySelector('input#writerText');
const doSomething =()=> {
    input.addEventListener("keydown")
}