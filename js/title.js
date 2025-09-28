const Title = document.querySelector("#angel")

let tl = gsap.timeline();

tl
  .from(Title, { scale: 0, opacity: 0, x: -300, y: -300, duration: 2, ease: Power1.easeIn })  
  .to(Title, { duration: 1.5, text: 'ᝰANGEL.', ease: "none"},)
  .from('.buttons', {duration: 1, opacity:0});

// Draggable.create(Title, {type: "rotation",});