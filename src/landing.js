
// Renders the three js background
function makeThreeJs() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xF5F8FA );
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const domElem = document.getElementById('landing-threejs');
  
  const renderer = new THREE.WebGLRenderer({
    canvas: domElem,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
  renderer.render(scene, camera);
  
  // Make geometry
  const geometry = new THREE.IcosahedronGeometry(3,0);
  const material = new THREE.MeshStandardMaterial( { color: 0x46C2C9} );
  const shape = new THREE.Mesh( geometry, material );
  scene.add( shape );

  // Add light
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5,5,5);
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, light);
  
  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame( animate );

    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    renderer.render( scene, camera );
  };

  animate();
}

window.addEventListener('load', makeThreeJs);
