// Phone Images onclick
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

    let indicator = false

    // Appear text onclick
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

    // Close Button
    document.querySelector('.closeArea').onclick = function () {
        document.querySelector('.closeArea').style.opacity = '0'
        document.querySelector('.textWrapArea').style.opacity = '0'

        setTimeout(function () {
            document.querySelector('.textAppearPhone').style.width = '0'
        }, 200)

        setTimeout(function () {
            document.querySelector('.closeArea').style.display = 'none'
            document.querySelector('.textWrapArea').style.display = 'none'
        }, 300)

        setTimeout(function () {
            indicator = false;
        }, 1000)
    }


    // onclick Functions
    function ImgProjectsOnClick() {
        appearDivFromLeft()

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `<strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.<br><br><strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.`
        }, 1000)
    }

    function ImgJobsOnClick() {
        appearDivFromLeft()

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `<strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.<br><br><strong style="color: #c9c9c9">YYYY-YYYY:</strong> Insert text here. Insert text here. Insert text here. Insert text here.`
        }, 1000)
    }

    function ImgLocationOnClick() {
        appearDivFromLeft()

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `Born and raised in <strong style="color: #c9c9c9">Insert text here.</strong> Currently living in <strong  style="color: #c9c9c9">Insert text here.</strong>`
        }, 1000)
    }

    function ImgAbMeOnClick() {
        appearDivFromLeft()

        setTimeout(function () {
            document.querySelector('#AppearPhonePtag').innerHTML = `My name is <strong style="color: #c9c9c9">Insert text here.</strong> Insert text here. Insert text here. Insert text here`
        }, 1000)
    }
}

// Div with Text sliding from left
function appearDivFromLeft() {
    document.querySelector('.textAppearPhone').style.width = '100%'

    // Text + Close Button Appear
    setTimeout(function () {
        document.querySelector('.closeArea').style.display = 'block'
        document.querySelector('.textWrapArea').style.display = 'block'
    }, 600)

    setTimeout(function () {
        document.querySelector('.closeArea').style.opacity = '1'
        document.querySelector('.textWrapArea').style.opacity = '1'
    }, 1100)
}