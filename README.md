# Starbucks-Page
Starbucks Page Clone Coding

## 위 사이트를 클론 코딩 한 이유
직접 사이트 카피 작업을 하면서 저의 문제점을 명확하게 느꼈었습니다.
1. 정리되지 않은 선택자명 지정
2. flex의 이해
3. 코드의 간소화
등등 의 문제로 인해 클론코딩을 진행하면서 조금더 간편하고 조금더 직관적인 CSS 작성과 HTML 설계를 해보고자 하여 클론코딩을 하게 되었고, 더 나아가 javascript의 친밀도를 높이기 위해 조금더 재미있게 javascript를 공부해보고자 하는 취지로 시작하게 되었습니다.
## 클론코딩이 끝이 난 후
클론코딩을 끝낸 후 추가적으로 공부하여 위 사이트에 기능을 추가할 예정 입니다.
-------------------------------------------------------------------------

## BEM (Block Element Modifier)
1) 요소__일부분 Underscore(Lodash) 기호로 요소의 일부분을 표시
```HTML
<div class="container">
  <div class="container__name"></div>
    <div class="item">
      <div class="item__name"></div>
    </div>
</div>
```
2) 요소--상태 Hyphen(Dash) 기호로 요소의 상태를 표시
```HTML
<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```
Class Name 만으로 HTML 구조를 확인하지 않아도 어느 구조에 있는지 확인 가능하는 효과

## lodash
다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리
scroll 함수를 사용했을때 console.log(scrollY)를 선언하게되면 많은 값이 찍히게 된다.
작은 프로젝트에서는 상관이 없겠지만, 큰 프로젝트 경우 브라우저가 무거워 질 수 도 있기 때문 이러한 문제를 보안하기 위해 사용 하는 라이브러리 이다.
_.throttle(함수, 시간) /
https://cdnjs.com/libraries/lodash.js


## gsap 
JavaScript animation library
자바스크립트 애니메이션 라이브러리 이다.
gsap.to(요소, 지속시간, 옵션); /
https://cdnjs.com/libraries/gsap