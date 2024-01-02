import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, DirectionalLight } from 'https://cdn.jsdelivr.net/npm/three@0.136.0/build/three.module.js';

const createScene = () => {
  // Create scene, camera, and renderer here
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('sceneContainer').appendChild(renderer.domElement);

  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00, border: 0x000000 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);

  camera.position.z = 5;

  // Add your 3D objects here

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Update scene objects
    renderer.render(scene, camera);
  }

  animate();
};

globalThis.createScene = createScene;