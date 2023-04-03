import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { WebGL } from './webgl.js';

import { createStars } from './stars.js';
import { generatePlanets } from './planet.js';
import { Colors } from './colors.js';

let camera, controls, scene, renderer;
//Check for WEBGL support
if (WebGL.isWebGLAvailable()){
    init();
    animate();
} else{
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}

// Initialize the scene
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
    camera.position.z = 100;
    
    initializeRenderer();    
    initializeControls();
    
    createStars(scene);
    generatePlanets(scene);
    
    renderer.render( scene, camera );
}

// Animate the scene
function animate(){
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

function initializeRenderer(){
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(Colors.SPACE);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
}

// Initialize the controls
function initializeControls(){
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
	controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 30;
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
