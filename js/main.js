import * as THREE from '../node_modules/three/build/three.module.js';
import { createStars, updateStars } from './stars.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#262a34");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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
    updateStars(scene);
    renderer.render( scene, camera );
}, true));