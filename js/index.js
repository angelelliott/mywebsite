import { ScrambleTextPlugin } from "/node_modules/gsap/ScrambleTextPlugin.js";
import { Draggable } from "/node_modules/gsap/Draggable.js";

gsap.registerPlugin(ScrambleTextPlugin, Draggable);

const Title = document.querySelector("#angel")

let tl = gsap.timeline();

tl
  .to(Title, { duration: 1, scrambleText:{chars: '˖⊹₊⟡',  text: '꒰ა ANGEL ໒꒱'}}, "+=1")
  .to(Title, {rotation: -360, duration: 2, ease: "elastic"} , "+=0.8" )
  .to('.buttons', {duration: 2, opacity:1});

Draggable.create(Title, {type: "rotation",});