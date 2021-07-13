'use strict';
// FOCUS EVENT
const searchEl = document.querySelector('.search');
 //searchEl 변수 안 .search 안에서 input 요소를 찾는다.
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// SCROLL EVENT (lodash, gsap)
// _.throttle(함수, 시간), gsap.to(요소, 지속시간, 옵션); 
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle( ()=> {
  console.log(scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      dispaly: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      dispaly: 'block'
    });
  }
}, 300));


// FADE IN
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 1번째 객체 0.7s , 2번째 1.4s , 3번째 2.1s, 4번째 2.7s
    opacity: 1
  });
})