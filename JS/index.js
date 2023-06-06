window.onload = function () {
    let slideIndex = 1;
    showSlide(slideIndex);
  
    let prev = document.getElementById("prev");
    prev.addEventListener("click", divideSlides, false);
  
    let next = document.getElementById("next");
    next.addEventListener("click", plusSlides, false);
  
    const selectdot = document.querySelectorAll(".dot");
    for (let i = 0; i < selectdot.length; i++) {
      selectdot[i].addEventListener("click", function (e) {
        showSlide((slideIndex = i + 1));
      });
    }
  
    function plusSlides() {
      showSlide((slideIndex += 1));
    }
  
    function divideSlides() {
      showSlide((slideIndex -= 1));
    }
  
    function showSlide(num) {
      let slides = document.getElementsByClassName("slide__item");
      let dots = document.getElementsByClassName("dot");
      if (num > slides.length) {
        slideIndex = 1;
      }
  
      if (num < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    setInterval(function () {
        plusSlides();
    }, 3500);
};
      