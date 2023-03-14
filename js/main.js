import * as THREE from 'three';
import { createStars } from './stars.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#262a34");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*
//Orbit Controls
const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
    // any other animations
    controls.update()
 }
 animate();
*/
createStars(scene);
renderer.render( scene, camera );


// Resize to make responsive, but only after user stops resizing
function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,100,event);
    };
}

window.addEventListener('resize', debounce(function(e) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.render( scene, camera );
}, true));