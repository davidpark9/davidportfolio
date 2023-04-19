
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollMagic from "scrollmagic";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { TweenMax, TweenLite } from 'gsap/gsap-core';

function Iphone() {
    console.log(gsap);
    return (
<>  <div class = "intro">
        <h1>Finlink Application, 2021</h1>
          <video src="FINLINK2.mp4"></video>
        </div>
        <section id="videosection">
        </section>   </>
    )
}

// //THIS PAGE IS SPECIFICALLY USED TO MANIPULATE AND CONTROL THE SCROLL MAGIC FUNCTIONALITY OF THE VIDEO ("INTRO");


// const intro = document.querySelector('.intro');
// const video = intro.querySelector('video');
// const text = intro.querySelector('h1');
// //end SECTION
// const section = document.querySelector('#videosection');
// const end = section.querySelector('h1');

// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();


// //SCENES
// let scene = new ScrollMagic.Scene({
//   duration: 15000,
//   triggerElement: intro,
//   triggerHook: 0
// })
// .addIndicators()
// .setPin(intro)
// .addTo(controller);

// //TEXT ANIMATION
// const textAnim = TweenMax.fromTo(text, 8, {opacity: 1}, {opacity: 0});

// //SCENE 2
// let scene2 = new ScrollMagic.Scene({ 
//     duration: 3000,
//     triggerElement: intro,
//     triggerHook: 0
// })
// .setTween(textAnim)
// .addTo(controller);




// //Video Animation

// let accelamount = .2;
// let scrollpos = 2;
// let delay = 0;
// scene.on('update', e => {
//     scrollpos =e.scrollPos / 1000;
//     // console.log(e);

// })

// setInterval(() => {
//     delay += (scrollpos - delay) * accelamount;
//     console.log(scrollpos, delay);
//     video.currentTime = delay;
// }, 33.3);



export default Iphone;
