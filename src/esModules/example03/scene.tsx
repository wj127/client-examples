import React from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, DirectionalLight } from 'three';

console.log('Loaded!');

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);
const light = new DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);
camera.position.z = 5;

let animationFrameId: number;

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // Update scene objects
  renderer.render(scene, camera);
};

export const SceneComp = () => {
  const wrapperNode = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (wrapperNode.current) {
      renderer.setSize(wrapperNode.current.offsetWidth, window.innerHeight / 2);
      wrapperNode.current.appendChild(renderer.domElement);

      animate();
    }

    return () => {
      wrapperNode.current?.removeChild(renderer.domElement);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={wrapperNode} id="sceneContainer" />
  );
};

export default SceneComp;