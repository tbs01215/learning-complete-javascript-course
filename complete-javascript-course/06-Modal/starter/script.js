'use strict';
// 지난 리팩토링처럼 일일이 쿼리셀렉터로 땡겨오는게 아니라 자주 쓰는건 미리 변수로 선언해두자

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // classList property는 두개의 method를 가졌어요(remove, add)
  modal.classList.remove('hidden');
  // 클래스 이름을 갖다 쓰는데 '.hidden' 이 아니다??
  // 애초에 class를 가져올 것이 전제이기에 클래스임을 구분하기 위한 dot이 필요가 없는 것.. (처음엔 오히려 헷갈려. 오히려 안좋아. 하지만 나중엔? 오히려 좋아.)
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener(
    'click',
    // 이 function은 event handler라고 한다.
    // 여태 event handler를 익명함수 통째로 박아 넣다가 처음으로 선언된 함수를 호출했다.
    //'함수()'가 아닌 '함수'를 갖다쓰는건 생소할 수 있다.
    // 함수()는 함수의 실행이다.
    // 그러니까 'click', openModal()을 입력하는건 그냥 함수를 실행해버리는거다
    // 이 경우는 함수를 실행하는 자체가 목표인데
    // 암튼 설계가 그렇게 됐다는 소리. 예전엔 뭔가 와닿지 않았는데 지금은 받아들여지는 부분
    openModal()
    // 뒤에 괄호를 붙이면 그냥 첨부터 모달이 열려있다.
    // 그리고 버튼을 눌러도 모달이 열리지 않는다.

    // 1. 코드 실행 직후 '함수'호출에 의해 모달이 열린 것
    // 2. 함수가 아닌 함수호출이 들어가있다. 즉 '함수호출'호출이 되고 이 함수호출호출은 모달을 여는 기능이 없다.
  );

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
