addStyles()

function addStyles() {
    let styles = `

    * {
    cursor: none;
    }

    .cursor {
        pointer-events: none;
        transform: translate(-50%, -50%);
        width: 25px;
        aspect-ratio: 1/1;
        border: black 2px solid;
        border-radius: 100%;
        position: absolute;
        transition: width 0.2s, box-shadow 0.2s, border 0.2s;
        box-shadow: rgb(0,0,0,0.25) 0 2px 10px 0;
        z-index: 1000;
    }
    .cursorDown {
        width: 17.5px;
        box-shadow:  rgb(0,0,0,0.3) 0 1px 6px 0;
        border: 2px solid rgb(0,0,0,0.7)
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

//

let newCursor = document.createElement("div")

newCursor.classList.add("cursor")

document.body.appendChild(newCursor)

//

let cursor = document.getElementsByClassName("cursor")[0]

//

window.addEventListener("mousemove", followCursor)

function followCursor(e) {

    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
}

//

window.addEventListener("mousedown", cursorDown)

function cursorDown() {

    cursor.classList.add("cursorDown")
}

//

window.addEventListener("mouseup", cursorUp)

function cursorUp() {

    cursor.classList.remove("cursorDown")
}