import { Component } from "./component";
import * as THREE from "three";
import { createHTMLElement as e } from './helper';

export class LandingPage extends Component {
  
  override createElement(): HTMLElement {
    return e('div', {
      class: 'landing-canvas-wrapper',
      children: [
        e('div', {
          class: 'landing-canvas-text',
          children: [
            e('div', {
              class: 'landing-canvas-title',
              innerText: 'Ashley Cheung'
            }),
            e('div', {
              class: 'landing-canvas-subtitle',
              innerText: 'Software and Mechatronics Engineer'
            }),
            e('button', {
              class: 'landing-canvas-btn',
              innerText: 'View my projects',
              children: [
                e('a', {
                  class: 'landing-canvas-btn-link',
                  href: '#projects'
                })
              ]
            })
          ]
        }),
        e('canvas', {
          width: window.innerWidth,
          height: window.innerHeight,
          class: "landing-canvas"
        })  
      ]
    })
  }
  
  override attach(root: HTMLElement): void {
    super.attach(root);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGL1Renderer({
      alpha: true,
      canvas: document.getElementsByClassName('landing-canvas')![0]
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    
    // Make geometry
    const geometry = new THREE.IcosahedronGeometry(1.75,0);
    const material = new THREE.MeshStandardMaterial( { color: 0x46C2C9} );
    const shape = new THREE.Mesh( geometry, material );
    scene.add( shape );
    
    // Add light
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5,5,5);
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, light);    
    camera.position.z = 5;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame( animate );
      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }
}

