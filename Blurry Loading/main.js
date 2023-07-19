const loadtext = document.querySelector('.loading-txt')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load ++

    if(load > 99){
        clearInterval(int)
    }

    loadtext.innerText = `${load}%`
    let opacity = scale(load, 0, 100, 1, 0)
    // console.log(opacity)
    loadtext.style.opacity = opacity

    let blur = scale(load, 0, 100, 30, 0)   
    //console.log(blur)
    bg.style.filter = `blur(${blur}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}