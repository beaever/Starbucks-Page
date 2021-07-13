'use strict';

const searchEl = document.querySelector('.search');
 //searchEl 변수 안 .search 안에서 input 요소를 찾는다.
const searchInputEl = searchEl.querySelector('input');
const badgeEl = document.querySelector('header .badges');

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
