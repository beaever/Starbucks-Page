# Starbucks-Page
Starbucks Page Clone Coding

# BEM (Block Element Modifier)
1) 요소__일부분 Underscore(Lodash) 기호로 요소의 일부분을 표시
```
<div class="container">
  <div class="container__name"></div>
    <div class="item">
      <div class="item__name"></div>
    </div>
</div>
```
2) 요소--상태 Hyphen(Dash) 기호로 요소의 상태를 표시
```
<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```
Class Name 만으로 HTML 구조를 확인하지 않아도 어느 구조에 있는지 확인 가능하는 효과

# lodash
다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리
scroll 함수를 사용했을때 console.log(scrollY)를 선언하게되면 많은 값이 찍히게 된다.
작은 프로젝트에서는 상관이 없겠지만, 큰 프로젝트 경우 브라우저가 무거워 질 수 도 있기 때문 이러한 문제를 보안하기 위해 사용 하는 라이브러리 이다.

https://cdnjs.com/libraries/lodash.js
  _.throttle(함수, 시간) 


# gsap 
JavaScript animation library
자바스크립트 애니메이션 라이브러리 이다.

https://cdnjs.com/libraries/gsap
  gsap.to(요소, 지속시간, 옵션);