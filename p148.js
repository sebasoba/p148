<html>
<head>
<script src="https://aframe.io/releases/0.6.0/aframe.min.js"> </script> 
</head>
<body>

<a-scene>

    <a-a-assets>
        <a-asset-item id="bench" src="assets/bench/scene.gltf"></a-asset-item>
        <a-asset-item id="street" src="assets/street/scene.gltf"></a-asset-item>
        <a-asset-item id="lamp" src="assets/lamp/scene.gltf"></a-asset-item>
        <a-asset-item id="cat" src="assets/cat/scene.gltf"></a-asset-item>
        <a-asset-item id="girl" src="assets/girl/scene.gltf"></a-asset-item>
    </a-a-assets>

    <a-entity
        scale="0.003 0.003 0.003"
        gltf-model="#girl"
        position="0 0 0"
        shadow="cast:true;"
    ></a-entity>

    <a-entity
        light="type: point; castShadow: true; color: red; intensity: 2.35"
        position="0 0 0"
    ></a-entity>
    <a-entity light="type: ambient;"></a-entity>
<a-plane
    id="wall-poster-right"
    src="https://ipinimg.com/originals/22/cd/76/22cd76da45c34cffee67dbca77062b5.png"
    position="0 0 0"
    rotation="0 0 0"
    width="4"
    height="6"
></a-plane>

<a-cube
    color="#000"
    height="1"
    width="1"
    position="0 1 0"

></a-cube>




</a-scene>
</body>
</html>