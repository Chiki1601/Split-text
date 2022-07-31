let split
let animation = gsap.timeline({repeat: -1,
                              repeatDelay: 2})

function init(){
  gsap.set(".wrapper", {autoAlpha:1})
  split = new SplitText("h1", {type:"chars"})
  animation.from(split.chars,{opacity:0,
                              ease: "back(4)",
                              rotation: -80,
                              scale: .6,
                              stagger: 0.2})
}

window.addEventListener("load", init)