var ztxt = new Ztextify(".angel", {
   depth: "3rem",
   layers: 10,
   fade: false,
   direction: "forwards",
   event: "pointer",
   eventRotation: "10deg"
});


// And this is a Timeline, containing three sequenced tweens
let tl = gsap.timeline();

tl
  .from("#angel", {duration: 1, opacity: 0, rotateZ:-10}).delay(4.6)
  .from("#elliott", {duration: 1, opacity:0, rotateZ:10})
  .from("#ulloa", {duration: 1, opacity:0, rotateZ:-10})
  .from(".item-g", {duration: 1, opacity:0});