//THIS PAGE IS SPECIFICALLY USED TO MANIPULATE AND CONTROL THE SCROLL MAGIC FUNCTIONALITY OF THE VIDEO ("INTRO");


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//end SECTION
const section = document.querySelector('#videosection');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


//SCENES
let scene = new ScrollMagic.Scene({
  duration: 12000,
  triggerElement: intro,
  triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//TEXT ANIMATION
const textAnim = TweenMax.fromTo(text, 8, {opacity: 1}, {opacity: 0});

//SCENE 2
let scene2 = new ScrollMagic.Scene({ 
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);




//Video Animation

let accelamount = .2;
let scrollpos = 3;
let delay = 0;
scene.on('update', e => {
    scrollpos =e.scrollPos / 1000;
    // console.log(e);

})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    video.currentTime = delay;
}, 33.3);