import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { BackSide, SRGBColorSpace, TextureLoader } from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

function PhotoSphere() {
  const mesh = useRef(null);
  const texture = useLoader(TextureLoader, '/images/IMG_1566.png');
  texture.colorSpace = SRGBColorSpace;

  useFrame(({ clock }) => {
    mesh.current.rotation.y = (clock.elapsedTime * 1000) / 2000;
  });

  return (
    <mesh ref={mesh} rotation={[0, 1.5, 0]}>
      <sphereGeometry args={[10, 64, 32]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

function CameraRig() {
  const camera = useThree((state) => state.camera);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime * 1000;

    if (time < 3000) {
      camera.position.z = 100;
    }
    if (time > 3000) {
      camera.position.z -= time / 800;
    }
    if (camera.position.z < 2) {
      camera.position.z = 2;
    }
  });

  return null;
}

function Controls() {
  const { camera, gl } = useThree();
  const controls = useRef(null);

  useEffect(() => {
    const next = new TrackballControls(camera, gl.domElement);
    next.target.set(0, 0, 0);
    next.noPan = true;
    next.noZoom = true;
    next.rotateSpeed = 10;
    next.zoomSpeed = 30;
    next.enableDamping = true;
    next.dynamicDampingFactor = 0.2;
    next.maxDistance = 800;
    next.minDistance = 2;
    next.handleResize();
    controls.current = next;

    return () => {
      next.dispose();
      controls.current = null;
    };
  }, [camera, gl]);

  useFrame(() => {
    controls.current?.update();
  });

  return null;
}

export default function Scene() {
  return (
    <Canvas
      id="c"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 800] }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <PhotoSphere />
      <CameraRig />
      <Controls />
    </Canvas>
  );
}
