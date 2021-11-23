function pageLoaded() {
  let arrayOfImg = [
    'static/images/1.jpg',
    'static/images/2.jpg',
    'static/images/3.jpg',
  ];
  const mainImg = document.querySelector('.main_image');
  const dots = document.querySelectorAll('.dot');
  const nextButton = document.querySelector('.right_arrow');
  const prevButton = document.querySelector('.left_arrow');
  const dot1 = document.querySelector('.dot-1');
  const dot2 = document.querySelector('.dot-2');
  const dot3 = document.querySelector('.dot-3');
  const links = document.querySelectorAll('.link');
  const link1 = document.querySelector('.link1');
  const link2 = document.querySelector('.link2');
  const link3 = document.querySelector('.link3');
  const spans = document.querySelectorAll('.span__project');
  const span1 = document.querySelector('.span1');
  const span2 = document.querySelector('.span2');
  const span3 = document.querySelector('.span3');
  const span4 = document.querySelector('.span4');
  const arraySpan1 = [
    'Rostov-on-Don<br />LCD admiral',
    'Sochi<br />Thieves',
    'Rostov-on-Don<br />Patriotic',
  ];
  const arraySpan2 = ['3.5 months', '4 months', '3 months'];
  const arraySpan3 = ['81 m2', '105 m2', '93 m2'];
  const arraySpan4 = ['Upon request'];
  let slideIndex = 1;

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  function plusSlide(n) {
    showSlides((slideIndex += n));
  }
  function showSlides(n) {
    if (n > arrayOfImg.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = arrayOfImg.length;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active_link');
    }
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.add('hidden');
    }
    mainImg.src = arrayOfImg[slideIndex - 1];
    dots[slideIndex - 1].classList.add('active');
    links[slideIndex - 1].classList.add('active_link');
    span1.innerHTML = arraySpan1[slideIndex - 1];
    span1.classList.remove('hidden');
    span2.innerHTML = arraySpan2[slideIndex - 1];
    span2.classList.remove('hidden');
    span3.innerHTML = arraySpan3[slideIndex - 1];
    span3.classList.remove('hidden');
    span4.innerHTML = arraySpan4[0];
    span4.classList.remove('hidden');
  }
  nextButton.addEventListener('click', () => plusSlide(1));
  prevButton.addEventListener('click', () => plusSlide(-1));
  dot1.addEventListener('click', () => currentSlide(1));
  dot2.addEventListener('click', () => currentSlide(2));
  dot3.addEventListener('click', () => currentSlide(3));
  link1.addEventListener('click', () => currentSlide(1));
  link2.addEventListener('click', () => currentSlide(2));
  link3.addEventListener('click', () => currentSlide(3));
}
document.addEventListener('DOMContentLoaded', pageLoaded);
