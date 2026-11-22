import { useRef }from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import {ScrambleTextPlugin} from 'gsap/ScrambleTextPlugin';

// the function Loader accepts the state of the "hidden" variable as a prop.
export default function Loader({ hidden }) {

  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(useGSAP);

  // useRef is a React hook that allows you to create a reference to a DOM element or a React component.
  // This new reference allows a value to persist across re-renders.
  // Here we create a continer reference, 
  // which we will attach to the div that contains the text we want to animate.
  const container = useRef();

  useGSAP(() => {
    gsap.from(".text", {
      duration: 0.5, 
      delay: 0.75,
      ease: "elastic",
      scrambleText: {
        text: "a no cavities affair",
        chars: "a no cavities affair"}

  });


  }, {scope: container});

  return (
    <div className={`loader${hidden ? ' loader-hidden' : ''}`} id="loader">
      <div>
        <img src="/images/gato.webp" alt="loader-pic" className="cat" />
      <div ref={container}><h1 className="text">a no cavities affair</h1></div>
      </div>
    </div>
  );
}
