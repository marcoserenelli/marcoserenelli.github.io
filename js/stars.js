import * as THREE from 'three';

let sphereList = [];

function createStars(scene) {
    const numberOfStars = screen.width * screen.height / 500;
    console.log(numberOfStars);
    for (let i = 0; i < numberOfStars; i++) {
        var geometry = new THREE.SphereGeometry(0.5, 16, 32)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * screen.width,
            (Math.random() - 0.5) * screen.width,
            (Math.random() - 1) * screen.height
        );
        sphereList.push(sphere);
        scene.add(sphere);
    }
}

export { createStars };