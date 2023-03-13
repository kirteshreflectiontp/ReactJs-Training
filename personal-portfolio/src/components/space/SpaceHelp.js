import * as THREE from 'js/three.module.js';
import right from './assests/blue/bkg1_right.png';
import left from './assests/blue/bkg1_left.png';
import top from './assests/blue/bkg1_top.png';
import bottom from './assests/blue/bkg1_bot.png';
import front from './assests/blue/bkg1_front.png';
import back from './assests/blue/bkg1_back.png';
import starPng from './assests/star.png';
import redStarPng from './assests/redStar.png';

let scene, camera, renderer;

var windowHalfX, windowHalfY, mouseX = 0, mouseY = 0, starGeo, stars, redStars;
var state = true;
init();

function init() {
    const canvas = document.querySelector('#c');

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 5, 1000);
    camera.position.z = 5;
    camera.position.x = 0;
    camera.position.y = 0;
    //camera.position.z = 1000;
    camera.rotation.x = Math.PI / 2;
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0x000000, 1);
    {
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([

            right,
            left,
            top,
            bottom,
            front,
            back,
        ]);
        scene.background = texture;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);



    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        starGeo.vertices.push(star);
        star.velocity = 0;
        star.acceleration = 0.001;
    }
    let sprite = new THREE.TextureLoader().load(starPng);
    let redSprite = new THREE.TextureLoader().load(redStarPng);

    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        map: sprite,
        blending: THREE.AdditiveBlending,
        transparent: true

    });
    let redStarMaterial = new THREE.PointsMaterial({
        size: 0.7,
        map: redSprite,
        blending: THREE.AdditiveBlending,
        transparent: true

    });
    stars = new THREE.Points(starGeo, starMaterial);
    redStars = new THREE.Points(starGeo, redStarMaterial);

    scene.add(stars);
    scene.add(redStars);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    animate();

}
function animate() {
    if (state) {
        render();

    }
    // render();

    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}

function render() {
    var time = Date.now() * 0.00005;

    camera.position.x += (mouseX - camera.position.x) * 0.001;
    camera.position.y += (-mouseY - camera.position.y) * 0.001;
    for (let i = 0; i < scene.children.length; i++) {

        var object = scene.children[i];

        if (object instanceof THREE.PointCloud) {

            object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
    }



    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}
function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;

}
function onDocumentTouchStart(e) {

    if (e.touches.length === 1) {

        e.preventDefault();
        mouseX = e.touches[0].pageX - windowHalfX;
        mouseY = e.touches[0].pageY - windowHalfY;
    }
}
function onDocumentTouchMove(e) {

    if (e.touches.length === 1) {

        e.preventDefault();
        mouseX = e.touches[0].pageX - windowHalfX;
        mouseY = e.touches[0].pageY - windowHalfY;
    }
}


function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
