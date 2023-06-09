// this project is inspired by the project that Traversy Media did of a scrolling picture thing but modified by going
// left to right / right to left, rather how he did by going up and down and down to up, and most of this javascript under
// is his javascript that he made to make it function so huge credits to Traversy Media

// for the audio function, credit to one minute coder on youtube
let activeSlideIndex = 0
const bgSLIDE = document.querySelector('.background-slide')
const slidesLength = bgSLIDE.querySelectorAll('div').length
const picSLIDE = document.querySelector('.picture-slide')
const sliderContainer = document.querySelector('.picture-container')
const RightButton = document.querySelector('.right-arrow')
const LeftButton = document.querySelector('.left-arrow')
const AudioButton = document.querySelector('.headphone')
const StopButton = document.querySelector('.stop')

bgSLIDE.style.left = `-${(slidesLength - 4) * 100}vw`
picSLIDE.style.left = `-${(slidesLength - 4) * 100}vw`
console.log(slidesLength)
RightButton.addEventListener('click', () => changeSlide('right'))
LeftButton.addEventListener('click', () => changeSlide('left'))
let audio2 = new Audio(`airport.mp3`)
AudioButton.addEventListener('click', () => {
    audio2.play()
    audio2.loop = true

})//playSound("airport.mp3",'play'))
StopButton.addEventListener('click', () => {
    audio2.pause()
    audio2.currentTime = 0 
})//playSound("airport.mp3",'noplay'))
   



function playSound(audioName,playability){
    let audio = new Audio(audioName)
    audio.play()
    


    /*if(audioName === "airport.mp3"){
        if(audiodeter === 0){
            audio.play();
            audiodeter++;
        }
        else if(audiodeter === 1){
            audio.pause();
            audio.currentTime = 0;
            audiodeter--;
            console.log(audiodeter);
        }
    }
    else{
        audio.play()
    }*/
}

 


const changeSlide = (direction) => {
    playSound("pop.mp3")
    const sliderHeight = sliderContainer.clientWidth
    if(direction === 'right'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }
    if(direction === 'left'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    
    bgSLIDE.style.transform = `translateX(-${activeSlideIndex * sliderHeight}px)`
    picSLIDE.style.transform = `translateX(+${activeSlideIndex * sliderHeight}px)`
}





