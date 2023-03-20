import * as THREE from 'three';
import { Colors } from './colors.js' 

function createStars(scene) {
    const numberOfStars = screen.width * screen.height / 400;
    console.log(numberOfStars);
    for (let i = 0; i < numberOfStars; i++) {
        /*
        var geometry = new THREE.SphereGeometry(0.5, 16, 32)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material);
        */
        var sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), new THREE.MeshBasicMaterial({ color: Colors.STAR }));
        sphere.position.set(
            THREE.MathUtils.randFloatSpread(1300),
            THREE.MathUtils.randFloatSpread(1300),
            THREE.MathUtils.randFloatSpread(1300),
        );
       scene.add(sphere);
    }
}

export { createStars };
