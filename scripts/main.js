import * as THREE from 'three';
import {TrackballControls} from 'three/addons/controls/TrackballControls.js';

const canvas = document.getElementById("c");
document.addEventListener("DOMContentLoaded", () => {
  canvas.style.opacity = 1;
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 800;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
// Use a transparent clear so page CSS/background can show through if desired
renderer.setClearColor(0x000000, 0);

const controls = new TrackballControls( camera, renderer.domElement );
controls.target.set(0,0,0);
controls.noPan=true;
controls.noZoom=true;
controls.rotateSpeed=10;
controls.zoomSpeed=30;
controls.enableDamping = true;
controls.dynamicDampingFactor=0.2;
controls.maxDistance =800;
controls.minDistance=2;

// its shape
const geometry = new THREE.SphereGeometry( 10, 64, 32);

const loader = new THREE.TextureLoader();
const texture = loader.load( '../images/IMG_1566.png' );
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshBasicMaterial( { map: texture  } );
material.side = THREE.BackSide;

const sphere = new THREE.Mesh( geometry, material );
scene.add(sphere);

sphere.rotateY(1.5);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  render()
}

const timer = new THREE.Timer()

function animate(time) {
  // this is how you tell the browser that you're going to do an animation 
  requestAnimationFrame(animate);

  timer.update(time);

  sphere.rotation.x = time / 2000;
  sphere.rotation.y = time / 1000;

  if (time < 4000) {
    camera.position.z = 40;
  }
  if (time > 4000) {
    camera.position.z -= time/3000; 
  }

  if (camera.position.z < 2){
    camera.position.z = 2;
  }

  controls.update();

  render();

}

function render() {

  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

animate();