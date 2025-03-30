const image = document.getElementById('avatar');

image.addEventListener('click', function () {
  if (image.src.match('material/Untitled(40).png')) {
    image.src = 'material/Untitled(41).png';
  } else if (image.src.match('material/Untitled(41).png')) {
    image.src = 'material/Untitled(43).png';
  } else if (image.src.match('material/Untitled(43).png')) {
    image.src = 'material/Untitled(44).png';
  } else if (image.src.match('material/Untitled(44).png')) {
    image.src = 'material/Untitled(45).png';
  } else {
    image.src = 'material/Untitled(40).png';
  }
});