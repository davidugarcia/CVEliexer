// Get the modal.
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myimg");
console.log(img);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {

    img[i].addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });

    // Otra manera.
    // img[i].onclick = function(){
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    //   }
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};

// Minimixar menu
const $menu = document.querySelectorAll('nav ul a[href^="#"]');
console.log ($menu)

$menu.forEach($menu => {
  $menu.addEventListener('click', function () {
    document.getElementById('check').checked = false;
    // console.log ($check);
  });
} )


