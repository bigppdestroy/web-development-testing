
let load = 0
let int = setInterval(blureffect, 30)
function blureffect() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    document.querySelector('.loading-text').innerHTML = `${load}%`
    document.querySelector('.loading-text').style.opacity = scale(load, 0, 100, 10, 0)
    document.querySelector('.background').style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`



}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// credit for scale function: 
    //https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// credit for blur effect project Traversey Media
