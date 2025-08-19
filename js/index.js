import { Draggable } from "/node_modules/gsap/Draggable.js";
import { TextPlugin } from "/node_modules/gsap/TextPlugin.js";

gsap.registerPlugin(, Draggable, TextPlugin);

const Title = document.querySelector("#angel")

let tl = gsap.timeline();

tl
  .to(Title, { duration: 0.5, text: '꒰ა ANGEL ໒꒱', ease: "none"}, "+=1")
  .to(Title, {rotation: -360, duration: 1, ease: "elastic"}  )
  .to('.buttons', {duration: 1, opacity:1});

Draggable.create(Title, {type: "rotation",});