import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function generatePlanets(scene){
    const loader = new GLTFLoader();

    const onLoad = (result, position) => {
        const model = result.scene.children[0];
        model.position.copy(position);
        model.scale.set(20, 20, 20);
        var light = new THREE.DirectionalLight(0xffffff, 5)
        scene.add(light);
        scene.add(model);
    }
        
    // Earth
    const planetPosition = new THREE.Vector3(0, 0, 2.5);
    loader.load("../assets/planets/earth.glb", (gltf) => onLoad(gltf, planetPosition));
}

export { generatePlanets };