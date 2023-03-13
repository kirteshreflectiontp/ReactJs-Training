import React, { Component } from 'react';
import starPng from './assests/star.png';
import right from './assests/blue/bkg1_right.jpg';
import left from './assests/blue/bkg1_left.jpg';
import top from './assests/blue/bkg1_top.jpg';
import bottom from './assests/blue/bkg1_bot.jpg';
import front from './assests/blue/bkg1_front.jpg';
import back from './assests/blue/bkg1_back.jpg';

import * as THREE from 'three';

class ThreeScene extends Component {
  
    state = {
        mouseX: 0,
        mouseY: 0,
    }
  
    componentDidMount() {

        this.sceneSetup();
        //ADD CUBE
        this.starGeo = new THREE.Geometry()
        for (let i = 0; i < 6000; i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            this.starGeo.vertices.push(star);
            star.velocity = 0;
            star.acceleration = 0.001;

        }
        let sprite = new THREE.TextureLoader().load(starPng);
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 1,
            map: sprite,
            blending: THREE.AdditiveBlending,
            transparent: true

        });


        this.stars = new THREE.Points(this.starGeo, starMaterial);
        this.scene.add(this.stars);


        this.start()
    }
    componentWillUnmount() {
        this.stop()
        window.removeEventListener('resize', this.handleWindowResize)
        this.mount.removeChild(this.renderer.domElement)
    }
    sceneSetup = () => {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            60,
            width / height,
            5,
            1000
        )
        this.camera.position.z = 5;
        this.camera.position.x = 1;
        this.camera.position.y = 1;
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
            this.scene.background = texture;

        }

        this.camera.rotation.x = Math.PI / 2;
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)
        window.addEventListener('resize', this.handleWindowResize);
        document.addEventListener('mousemove', this.onDocumentMouseMove, false);
        document.addEventListener('touchstart', this.onDocumentTouchStart, { passive: false });
        document.addEventListener('touchmove', this.onDocumentTouchMove, { passive: false });


    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    animate = () => {
        // if (state) {
        //     render();

        // }
        this.camAnimate();


        this.starGeo.vertices.forEach(p => {
            p.velocity += p.acceleration
            p.y -= p.velocity;

            if (p.y < -200) {
                p.y = 200;
                p.velocity = 0;
            }
        });
        this.starGeo.verticesNeedUpdate = true;
        this.stars.rotation.y += 0.002;
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    camAnimate = () => {

        var time = Date.now() * 0.00005;



        this.camera.position.x += (this.state.mouseX - this.camera.position.x) * 0.002;
        this.camera.position.y += (-this.state.mouseY - this.camera.position.y) * 0.002;

        for (let i = 0; i < this.scene.children.length; i++) {

            var object = this.scene.children[i];
            if (object instanceof THREE.PointCloud) {

                object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
            }
        }



        this.camera.lookAt(this.scene.position);
        this.renderScene();
    }
    onDocumentMouseMove = (e) => {
        let tempX = e.clientX - (this.mount.clientWidth / 2);
        let tempY = e.clientY - (this.mount.clientHeight / 2);
        this.setState({ mouseX: tempX })
        this.setState({ mouseY: tempY })


    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div
                style={{ width: ' 100vw', height: '100vh', position: "absolute" }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}
export default ThreeScene