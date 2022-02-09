// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myimg");
console.log(img);

// Get the modal.
var modal = document.getElementById("myModal");
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


const $menulinks = document.querySelectorAll('nav ul a[href^="#"]');
//console.log ($menulinks);

//Method Observer
var observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      const id = entry.target.getAttribute("id");
      //console.log(id);
      const $menulink = document.querySelector(`nav ul a[href="#${id}"]`);
  
      if(entry.isIntersecting){

        var a = document.querySelector("nav ul a");
        //console.log(a);
        document.querySelector("nav ul a.selected").classList.remove("selected");
        $menulink.classList.add("selected");
        //console.log ($menulink);

      }

    });

  },{ rootMargin: "-40% 0px -60% 0px" }
);

$menulinks.forEach($menulink => {

  // Minimixar menu
  $menulink.addEventListener('click', function () {
    document.getElementById('check').checked = false;
    // console.log ($check);
  });

  //Observer
  const hash = $menulink.getAttribute("href");
  const target = document.querySelector(hash);
  //console.log(target);
  if(target){
    observer.observe(target);
  }

})

