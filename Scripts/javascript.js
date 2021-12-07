// Declaration
let index = false
let stopAnim


// Function on page load
window.addEventListener('load', function () {
    let canvH = document.querySelector('.heroCanvas')

    if( window.innerWidth > 1280 ) {
        setTimeout(function () {
            canvH.addEventListener('mousemove', movingHero)
            canvH.addEventListener('mouseleave', comingCenter)
        }, 1000)
    }
    else {
        canvH.scrollTo(canvH.offsetWidth / 2 + 0.5, canvH.offsetHeight / 2)
    }
})


// Cursor movement
function movingHero(e) {
    let box = document.querySelector('.heroCanvas')
    let x = e.clientX - box.offsetWidth / 2
    let y = e.clientY - box.offsetHeight / 2

    box.style.setProperty('--x', x)
    box.style.setProperty('--y', y)
    //console.log('x = ' + x + ', y = ' + y )

    index = true
    //console.log(index)

    clearTimeout(stopAnim)
}


// Coming back center
function comingCenter() {
    let box = document.querySelector('.heroCanvas')
    index = false
    //console.log(index)

    stopAnim = setTimeout(function () {
        if( index == false ) {
            box.style.setProperty('--x', 0)
            box.style.setProperty('--y', 0)
        }
    }, 2000)
}


// Click for links
document.querySelector("#SvgLogo1").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo2").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo3").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo4").onclick = function () {
    window.open('#')
}

document.querySelector("#MokWebsite1").onclick = function () { 
    window.open('https://mokappa.github.io/AboutMe/')
}