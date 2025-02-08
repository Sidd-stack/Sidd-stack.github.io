// create variables to store the path to your image files
const img1 = "./img/ruchi1.png";

const img2 = "./img/ruchi2.png";

const img3 = "./img/ruchi3.png";

const img4 = "./img/ruchi4.png";

const img5 = "./img/ruchi5.png";




// define your images here
const images = [ img1,img2, img3, img4, img5];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("valentines-container").innerHTML = image;

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});