// import { Draggable } from "/node_modules/gsap/Draggable.js";
// import { TextPlugin } from "/node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(Draggable, TextPlugin);

const Title = document.querySelector("#angel")

let tl = gsap.timeline();

tl
  .from(Title, { scale: 0, opacity: 0, x: -300, y: -300, duration: 2, ease: Power1.easeIn })  
  .to(Title, { duration: 1.5, text: '⋆ANGEL⋆', ease: "none"},)
  // .to(Title, {duration: 1, scale:0 , ease: Power1.easeIn})
  .from('.buttons', {duration: 1, opacity:0});

// Draggable.create(Title, {type: "rotation",});