// get all keys
const keys = document.querySelectorAll(".key")
const input = document.querySelector("input#writeText")
const keysText = document.querySelectorAll(".key").values
function playNote(event) {

    let audioKeyCode = getKeyCode(event);

    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    addPlayingClass(key)
}

function addPlayingClass(key) {
    const contents = [
        "delete",
        "enter",
        "enter return",
        "shift",
        "tab",
        "command",
        "alt option",
        "caps lock",
        "control",
        "center"
    ]
    if (contents.find((item) => item === key.textContent)) {
        return key.classList.add('especial')
    }
    key.classList.add('playing')
}
function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}


function removePlayingClass(event) {
    event.target.classList.remove("playing")
    event.target.classList.remove("especial")
}


function registerEvents() {
    // click with mouse
    keys.forEach(function (key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // keyboard type
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)