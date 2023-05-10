const panoramaImage = new PANOLENS.ImagePanorama("public/img/house360.jpeg");
const panoramaImage1 = new PANOLENS.ImagePanorama("public/img/bedroom.jpeg");

const imageContainer = document.querySelector(".image-container");
var inforPosition =[
  new THREE.Vector3(-2136.06,16.30,890.14),
  new THREE.Vector3(-3136.06,296.30,-4290.14),
];
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});
panoramaImage.link(panoramaImage1,inforPosition[0]);
panoramaImage1.link(panoramaImage,inforPosition[1]);
viewer.add(panoramaImage,panoramaImage1);