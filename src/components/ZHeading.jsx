import { useEffect, useRef } from 'react';

const LAYERS = 10;
const DEPTH_REM = 3;
const TILT_DEG = 10;

const subscribers = new Set();
let listening = false;

function onPointer(event) {
  const point = event.touches ? event.touches[0] : event;
  const nx = 2 * (point.clientX / window.innerWidth - 0.5);
  const ny = 2 * (point.clientY / window.innerHeight - 0.5);
  subscribers.forEach((update) => update(nx, ny));
}

function subscribe(update) {
  subscribers.add(update);
  if (!listening) {
    window.addEventListener('mousemove', onPointer);
    window.addEventListener('touchmove', onPointer, { passive: true });
    listening = true;
  }

  return () => {
    subscribers.delete(update);
    if (subscribers.size === 0 && listening) {
      window.removeEventListener('mousemove', onPointer);
      window.removeEventListener('touchmove', onPointer);
      listening = false;
    }
  };
}

export default function ZHeading({ id, className, children }) {
  const layersRef = useRef(null);

  useEffect(() => {
    return subscribe((nx, ny) => {
      const layers = layersRef.current;
      if (!layers) return;
      layers.style.transform = `rotateX(${-ny * TILT_DEG}deg) rotateY(${nx * TILT_DEG}deg)`;
    });
  }, []);

  const faces = Array.from({ length: LAYERS }, (_, index) => {
    const progress = index / LAYERS;
    const z = -progress * DEPTH_REM + DEPTH_REM;
    return (
      <span
        key={index}
        className="z-layer"
        aria-hidden={index > 0 ? 'true' : undefined}
        style={{ transform: `translateZ(${z}rem)` }}
      >
        {children}
      </span>
    );
  });

  return (
    <h1 id={id} className={`z-heading prevent-select ${className}`}>
      <span className="z-text">
        <span className="z-layers" ref={layersRef}>
          {faces}
        </span>
      </span>
    </h1>
  );
}
