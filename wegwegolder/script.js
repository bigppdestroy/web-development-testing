const picSLIDE = document.querySelector('.picture-container');
const itemInfo = document.querySelector('.iteminfo');
const slidesLength = picSLIDE.querySelectorAll('div').length;
const sliderHeight = picSLIDE.clientWidth;
const UpBut = document.querySelector('.up-arrow');
const DownBut = document.querySelector('.down-arrow');
picSLIDE.style.transform = `translateY(0vh)`;
itemInfo.style.transform =  `translateY(0vh)`;

UpBut.addEventListener('click',() => changeslide('up'))
DownBut.addEventListener('click',() => changeslide('down'))
activeSlideIndex = 0

console.log(sliderHeight);
function changeslide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }

    }
    if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    itemInfo.style.transform = `translateY(+${activeSlideIndex*100}vh)`
    picSLIDE.style.transform = `translateY(-${activeSlideIndex*100}vh)`

}