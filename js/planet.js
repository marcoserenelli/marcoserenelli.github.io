import * as THREE from 'three';

function generatePlanets(scene){
    const earth = createPlanet(16, 32, 0, 0, 0);

    scene.add(earth);
}

// Create planet
function createPlanet(radius, segments, x, y, z){
    const geometry = new THREE.SphereGeometry(radius, segments, segments);
    const material = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('assets/images/earth.jpg')});
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    return sphere;
}

export { generatePlanets };