let slideIndex = 1;
const prevBtn = document.querySelector('.slider_prev'),
      nextBtn = document.querySelector('.slider_next'),
      slides = document.querySelectorAll('.slider_img');

function showSlide(n = 1){
    slides.forEach(it => {
        it.classList.add('hide');
        it.classList.remove('show');
});      
    slides[n-1].classList.remove('hide');
    slides[n-1].classList.add('show');
}
showSlide();
function changeSlide(n){
    slideIndex += n;
    if(slideIndex>6){
        slideIndex = 1;
    }
    if(slideIndex<1){
        slideIndex = 6;
    }
    showSlide(slideIndex);
}
nextBtn.addEventListener('click', function(){
    changeSlide(-1);
});
prevBtn.addEventListener('click', function(){
    changeSlide(1);
});