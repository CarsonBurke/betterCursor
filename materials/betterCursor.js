addStyles()

function addStyles() {
    let styles = `

    * {
        cursor: none !important;
    }
    .cursor {
        display: none;
    }
    .cursor {
        display: block;
        pointer-events: none;
        user-select: none;
        transform: translate(-50%, -50%);
        width: 30px;
        aspect-ratio: 1/1;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.1s;
        z-index: 1000;
    }
    .cursorDown {
        width: 20px;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

let cursor = document.getElementsByClassName("cursor")[0]

//

window.addEventListener("mousemove", followCursor)
window.addEventListener("wheel", followCursor)
window.addEventListener("mousedown", followCursor)
window.addEventListener("mouseup", followCursor)

function followCursor(e) {

    let top = cursor.scrollHeight * -0.5 + e.pageY + "px"
    let left = cursor.scrollWidth * -0.5 + e.pageX + "px"

    cursor.style.transform = "translate(" + left + ", " + top + ")"
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