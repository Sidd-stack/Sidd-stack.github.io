// create variables to store the path to your image files
const img1 = "./img/lego-1.jpg";

const img2 = "./img/lego-2.jpg";

const img3 = "./img/lego-3.jpg";

const img4 = "./img/lego-4.png";

const img5 = "./img/lego-5.png";

const img6 = "./img/bg.jpg";


// define your images here
const images = [ img1,img2, img3, img4, img5, img6];

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