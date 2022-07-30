// Select all slides
const prevSlider = document.getElementById("prevSlider"); // gets image carousel sliders

const nextSlider = document.getElementById("nextSlider");

const dotOne = document.getElementById("dotOne"); // gets dot buttons
const dotTwo = document.getElementById("dotTwo");
const dotThree = document.getElementById("dotThree");
const dotFour = document.getElementById("dotFour");
const dotFive = document.getElementById("dotFive");
const dotSix = document.getElementById("dotSix");


prevSlider.addEventListener("click", function (){
  showSlides(slideIndex += -1);
});

nextSlider.addEventListener("click", function (){
  showSlides(slideIndex += 1);
});

dotOne.addEventListener("click", function (){
  showSlides(slideIndex = 1);
});

dotTwo.addEventListener("click", function (){
  showSlides(slideIndex = 2);
});

dotThree.addEventListener("click", function (){
  showSlides(slideIndex = 3);
});

dotFour.addEventListener("click", function (){
  showSlides(slideIndex = 4);
});

dotFive.addEventListener("click", function (){
  showSlides(slideIndex = 5);
});

dotSix.addEventListener("click", function (){
  showSlides(slideIndex = 6);
});

let slideIndex = 1; // initalised variable for slide index

showSlides(slideIndex);

function showSlides(n) {

  let i;
  
  let slides = document.querySelectorAll(".mySlides"); // grabs each slide and stores in variable
  
  let dots = document.querySelectorAll(".dot"); // grabs each dot and stores in variable

  if (n > slides.length) { // if slideshow reaches end of number of slides, it starts again
    
    slideIndex = 1
  
  }
  
  if (n < 1) {
    slideIndex = slides.length
  } // iterates through every slide
  
  for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

