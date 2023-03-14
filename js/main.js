import * as THREE from 'three';
import { createStars } from './stars.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, controls, scene, renderer;
init();
animate();

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
    camera.position.z = 100;
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#262a34");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    initializeControls();
    
    createStars(scene);
    renderer.render( scene, camera );
}

function animate(){
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

function initializeControls(){
    //Orbit Controls
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
	controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;
}

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
