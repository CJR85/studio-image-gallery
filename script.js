const btn = document.getElementsByClassName('btn'),
  gallery = document.getElementById('gallery');

const images = new Array(
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg'
);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    gallery.src = images[i];
  };
}
