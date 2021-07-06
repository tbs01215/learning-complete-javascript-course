'use strict';

// 70. PROJECT #1: Guess My Number!
// 70. PROJECT #1: Guess My Number!
// 70. PROJECT #1: Guess My Number!

console.log(document.querySelector('.message').textContent);
// document는 object다.
// querySelector method를 통해 '.message' element를 가져오고 textContent property를 가져오는 것이다.

// 71. What's the DOM and DOM Manipulation
// 71. What's the DOM and DOM Manipulation
// 71. What's the DOM and DOM Manipulation

// document object model.
// DOM이 자바스크립트로 html를 컨트롤 할 수 있게 해준다.
// 간혹 DOM 자체를 js라고 혼동할 수 있는데 js와 interact 할 수 있는 web api일 뿐입니다.

// 72. Selecting and Manipulating Elements
// 72. Selecting and Manipulating Elements
// 72. Selecting and Manipulating Elements

// 73. Handling Click Events
// 73. Handling Click Events
// 73. Handling Click Events

// eventListener와 event에 대해 배울 예정
// events에는 마우스클릭, 창조절 키입력 같은 것들이 포함된다.
// addEventListener method에 대해 배워보자.
// 예전에 function이 value라고 설명한 적이 있는데, 여기서 딱 그렇게 쓰인 것이다. function은 다른 method의 argument로 쓰일 수 있다.
// function is also just a value.
// addEventListener의 모양은 다음과 같다.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correnct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😛 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'crimson';

      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😛 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'crimson';

      document.querySelector('.score').textContent = 0;
    }
  }
});
// 첫 argument로 주어진 event가 발생할 때 두번쨰 argument의 function(event handler)이 실행된다.

// 74. Implementing the Game Logic
// 74. Implementing the Game Logic
// 74. Implementing the Game Logic

// tip. DOM에서만 value를 그때그때 읽거나 변경하는 방식도 가능하지만, 같은 일이라도 굳이 코드 내에서 그 value 다루는 방식을 추천한다. 이런 자잘한 습관이 모여서 좋은 코더가 된다. data를 우리 코드안에서 다루자.

// 75. Manipulating CSS Styles
// 75. Manipulating CSS Styles
// 75. Manipulating CSS Styles

// DOM은 CSS도 담고있다
// .css와 .js에서의 property 이용법 차이
// background-color->backgroundColor
// : #60b347 -> ="#60b347"
// document.querySelector("body").style.backgroundColor = '#60b347'
