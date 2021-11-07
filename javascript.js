// Declaration //
let index = false
let stopAnim


// Function on page load //
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


// Cursor movement //
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


// Coming back center //
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


// Click for links //
// Computer
document.querySelector("#SvgLogo-1_1").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-2_1").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-3_1").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-4_1").onclick = function () {
    window.open('#')
}

document.querySelector("#MokWebsite_1").onclick = function () { 
    window.open('https://mokappa.github.io/AboutMe/')
}
// Phone
document.querySelector("#SvgLogo-1").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-2").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-3").onclick = function () {
    window.open('#')
}

document.querySelector("#SvgLogo-4").onclick = function () {
    window.open('#')
}

document.querySelector("#MokWebsite").onclick = function () { 
    window.open('https://mokappa.github.io/AboutMe/')
}


// Phone Images onclick //
if( window.innerWidth < 1280 ) {
    // Scrolls between divs
    // From top to bototm
    document.querySelector('.arrowPhoneBackground').onclick = function () {
        document.querySelector('body').style.overflow = 'scroll'

        setTimeout(function () {
            document.querySelector('.heroAfterContent').scrollIntoView()
        }, 100)

        setTimeout(function () {
            document.querySelector('body').style.overflow = 'hidden'
        }, 200)
    }
    // From bottom to top
    document.querySelector('.arrowPhoneBackgroundhAC').onclick = function () {
        document.querySelector('body').style.overflow = 'scroll'

        setTimeout(function () {
            document.querySelector('.heroCanvas').scrollIntoView()
        }, 100)

        setTimeout(function () {
            document.querySelector('body').style.overflow = 'hidden'
        }, 200)
    }


    let indicator = false;

    // Appear text onclick //
    // Image Projects
    document.querySelector('#imgProjects').onclick = function () {
        if(indicator === false) {
            ImgProjectsOnClick()
            indicator = true
        }
    }
    // Image Jobs
    document.querySelector('#imgJobs').onclick = function () {
        if(indicator === false) {
            ImgJobsOnClick()
            indicator = true
        }

    }
    // Image Locations
    document.querySelector('#imgLocations').onclick = function () {
        if(indicator === false) {
            ImgLocationOnClick()
            indicator = true
        }
    }
    // Image About Me
    document.querySelector('#imgAbMe').onclick = function () {
        if(indicator === false) {
            ImgAbMeOnClick()
            indicator = true
        }
    }
    //Close Button
    document.querySelector('.closeArea').onclick = function () {
        document.querySelector('.textAppearPhone').style.width = '5%'
        document.querySelector('.closeArea').style.opacity = '0'
        document.querySelector('.textWrapArea').style.opacity = '0'

        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'none'
            document.querySelector('.textWrapArea').style.display = 'none'
        }, 300)

        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.height = '0'
            document.querySelector('.textAppearPhone').style.width = '0'
        }, 600)

        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.height = '0'
        }, 600)

        setTimeout(function () {
            indicator = false;
        }, 1000)
    }


    // onclick Functions //
    function ImgProjectsOnClick() {
        document.querySelector('.textAppearPhone').style.height = '100vh'
        document.querySelector('.textAppearPhone').style.width = '5%'
        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.width = '100%'
        }, 600)

        // Text + Close Button Appear
        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'block'
            document.querySelector('.textWrapArea').style.display = 'block'
        }, 600)

        setTimeout(function () {
            document.querySelector('.closeArea').style.opacity = '1'
            document.querySelector('.textWrapArea').style.opacity = '1'
        }, 1100)

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `<strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.<br><br><strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.`
        }, 1000)


        
    }

    function ImgJobsOnClick() {
        document.querySelector('.textAppearPhone').style.height = '100vh'
        document.querySelector('.textAppearPhone').style.width = '5%'
        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.width = '100%'
        }, 600)

        // Text + Close Button Appear
        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'block'
            document.querySelector('.textWrapArea').style.display = 'block'
        }, 600)

        setTimeout(function () {
            document.querySelector('.closeArea').style.opacity = '1'
            document.querySelector('.textWrapArea').style.opacity = '1'
        }, 1100)

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `<strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.<br><br><strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.`
        }, 1000)

        
    }

    function ImgLocationOnClick() {
        document.querySelector('.textAppearPhone').style.height = '100vh'
        document.querySelector('.textAppearPhone').style.width = '5%'
        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.width = '100%'
        }, 600)

        // Text + Close Button Appear
        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'block'
            document.querySelector('.textWrapArea').style.display = 'block'
        }, 600)

        setTimeout(function () {
            document.querySelector('.closeArea').style.opacity = '1'
            document.querySelector('.textWrapArea').style.opacity = '1'
        }, 1100)

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `Born and raised in <strong style="color: #c9c9c9">Insert text here.</strong> Currently living in <strong  style="color: #c9c9c9">Insert text here.</strong>`
        }, 1000)
        
    }

    function ImgAbMeOnClick() {
        document.querySelector('.textAppearPhone').style.height = '100vh'
        document.querySelector('.textAppearPhone').style.width = '5%'
        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.width = '100%'
        }, 600)

        // Text + Close Button Appear
        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'block'
            document.querySelector('.textWrapArea').style.display = 'block'
        }, 600)

        setTimeout(function () {
            document.querySelector('.closeArea').style.opacity = '1'
            document.querySelector('.textWrapArea').style.opacity = '1'
        }, 1100)

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `My name is <strong style="color: #c9c9c9">Insert text here.</strong> Insert text here. Insert text here. Insert text here`
        }, 1000)
    }
}