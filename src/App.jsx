import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import Loader from './components/Loader.jsx';
import Scene from './components/Scene.jsx';
import ZHeading from './components/ZHeading.jsx';

export default function App() {
  //When the page is loading, hidden = false which means that the loader is visible
  const [hidden, setHidden] = useState(false);


  // call the useEffect hook to run side effects as a result of actions.
  // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
  // As a side effect of the page rendering, 
  useEffect(() => {
    // define a function called hide() that sets hidden = true after 1 second
    const hide = () => setTimeout(() => setHidden(true), 1500)
    
    // if the page finishes loading 
    if (document.readyState === 'complete') {
      // call the hide() function to set hidden = true to hide the loader
      // if the page is complete, then the "load" event fires 
       hide();
    } else {
      // if the page is still loading,
      // adds an event listener that checks for when the "load" event fires. 
      // the load event will fire when the whole page has loaded.

      // once the load event fires, the hide() function gets called to set hidden = true
      // meaning the loader is hidden
      window.addEventListener('load', hide);
      
      // a component unmounting means that it is being removed from DOM or screen.
      // that means that the component is no longer being used and is being removed from the page.
      // for example, if the user navigates to a different page, the component will unmount.
      // when the component unmounts, remove the event listener to avoid memory leaks
      // this return statement is for the App component. 
        return () => {window.removeEventListener('load', hide)
          clearTimeout(hide);
        };
    }
  }, []);

  useLayoutEffect(() => {
    const tween = gsap.timeline({delay: 5});
    tween
      .from('#angel', { duration: 1, opacity: 0, rotateZ: 10, delay: 0.5 })
      .from('.item-g', { duration: 1, opacity: 0 });

    return () => tween.revert();
  }, []);

  return (
    <>
      <Loader hidden={hidden} />
      <Scene />
      <ZHeading id="angel" className="item-a">
        angel
      </ZHeading>
      <ZHeading id="angel" className="item-b">
        elliott
      </ZHeading>
      <ZHeading id="angel" className="item-c">
        ulloa
      </ZHeading>
      <div className="item-c" />
      <div className="item-d" />
      <div className="item-f grid-item" />
      <div className="item-g grid-item">
        <p>
          contact me:{' '}
          <a className="email" href="mailto:angel@angelulloa.com">
            angel@angelulloa.com
          </a>
          <br />
          linkedin:{' '}
          <a
            className="email"
            href="https://www.linkedin.com/in/aeulloa"
            target="_blank"
            rel="noreferrer"
          >
            @aeulloa
          </a>
          <br />
          github:{' '}
          <a
            className="email"
            href="http://www.github.com/angelelliott"
            target="_blank"
            rel="noreferrer"
          >
            @angelelliott
          </a>
        </p>
      </div>
      <div className="item-h grid-item" />
      <ZHeading id="ulloa" className="item-i">
      </ZHeading>
    </>
  );
}
