const image = document.getElementById('avatar');

image.addEventListener('click', function () {
  if (image.src.match('js/material/Untitled(40).png')) {
    image.src = 'js/material/Untitled(41).png';
  } else if (image.src.match('js/material/Untitled(41).png')) {
    image.src = 'js/material/Untitled(43).png';
  } else if (image.src.match('js/material/Untitled(43).png')) {
    image.src = 'js/material/Untitled(44).png';
  } else if (image.src.match('js/material/Untitled(44).png')) {
    image.src = 'js/material/Untitled(45).png';
  } else {
    image.src = 'js/material/Untitled(40).png';
  }
});