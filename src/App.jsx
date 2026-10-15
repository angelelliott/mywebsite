import { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import Loader from './components/Loader.jsx';
import Scene from './components/Scene.jsx';
import ZHeading from './components/ZHeading.jsx';

export default function App() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  useLayoutEffect(() => {
    const tween = gsap.timeline({ delay: 2.8 });
    tween
      .from('#angel', { duration: 1, opacity: 0, rotateZ: -10 })
      .from('#elliott', { duration: 1, opacity: 0, rotateZ: 10 })
      .from('#ulloa', { duration: 1, opacity: 0, rotateZ: -10 })
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
      <div className="item-c" />
      <div className="item-d" />
      <ZHeading id="elliott" className="item-e">
        elliott
      </ZHeading>
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
        ulloa
      </ZHeading>
    </>
  );
}
