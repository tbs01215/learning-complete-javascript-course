// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");
// console.log(10 + 7 + 13 - 5);

// // 10. Values and Variables
// // 10. Values and Variables
// // 10. Values and Variables

// console.log("Geneyoung");
// console.log(23);

// let firstName = "Chaelin";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // 선언한 이후 어느 시점에도 바뀌지 않을 값이라고 확신하는 경우 전부 대문자로 쓰기도 한다고
// let PI = 3.1415;

// // this is better
// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";
// // than this

// let job1 = "programmer";
// let job2 = "teacher";
// console.log(myFirstJob);

// // 12. Data Types
// // 12. Data Types
// // 12. Data Types

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Dahye");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// // undifined는 변수는 있지만 값이 주어지지 않은 상태라고 한다
// // 아래 cl이 실행된걸 보면 둘 다 undifined 인데 저 year의 형이 undefined이자, 그 값 또한 undifined 인 것이다. 적고나니깐 이 디테일은 그렇게 중요하진 않다고 한다.
// let year;
// console.log(year);
// console.log(typeof year);

// // 자바스크립트의 버그, 이건 obeject라고 나오는데 말도안되는 버그이고 legacy reasons때문에 수정되지 않을 것이라고 한다. null이라고 나와야 맞다.
// console.log(typeof null);

// // 13. let, const and var
// // 13. let, const and var
// // 13. let, const and var

// let age = 26;
// age = 27;

// const birthYear = 1994;
// // 아래는 안됨
// // birthYear = 1988
// // 기본적으로 앞으로 const를 쓸거고 let은 특정한 경우에 쓸 것이다.

// // 14. Basic Operators
// // 14. Basic Operators
// // 14. Basic Operators

// const now = 2021;

// const ageJinyoung = now - 1994;
// const ageSohye = now - 1999;

// console.log(ageJinyoung, ageSohye);
// console.log(ageJinyoung * 2, ageSohye / 10, 2 ** 3);

// const firstName = "Jinyoung";
// const lastName = "Kim";

// console.log(firstName + "" + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // 15. Operator Precedence
// // 15. Operator Precedence
// // 15. Operator Precedence

// // 연산자 우선순위는 그냥 수학이라서 넘어감

// // 17. Strings and Template Literals
// // 17. Strings and Template Literals
// // 17. Strings and Template Literals

// const firstName = "Jinyoung";
// const job = "ninja";
// const birthYear = 1994;
// const thisYear = 2021;

// // 백틱은 파이썬의 f-string과 ''' '''의 기능을 동시에 수행한다. jonas는 모든 string 을 백틱으로 작성하는 사람도 있다고 하고 그게 편할 수 있다는데 공감한다.
// const jinyoung = `I'm ${firstName}, a ${
//   thisYear - birthYear
// } years old ${job}!`;
// console.log(jinyoung);

// console.log(`String
// multiple
// lines`);

// // 18. Taking Decisions: if / else Statements
// // 18. Taking Decisions: if / else Statements
// // 18. Taking Decisions: if / else Statements

// const age = 21;
// if (age >= 18) {
//   console.log("Yeri can start driving license🚕");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Yeri is too young. Wait another ${yearsLeft} years :)`);
// }

// // 코드블럭 안에서 정의한 건 코드블럭 밖에서 갖다 쓸 수 엄서용(지금 왜 밖에다 century를 정의하는건지 영문을 모르겠어 하는 귀여운 학생이 있을까봐 jonas는 여기선 if / else 이해에만 초점을 맞추라고 함)

// const birthYear = 1997;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// 20.Type Conversion and Coercion
// 20.Type Conversion and Coercion
// 20.Type Conversion and Coercion

// type conversion
const inputYear = "1994";
console.log(Number(inputYear), inputYear); // 1994 "1994"
console.log(Number(inputYear) + 18); // 2012

console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23);
// type coercion
// 이건 당연하죠? 23이 string으로 자동 변환됩니다.
console.log("I am " + 25 + " years old");
// number 과 string 사이의 + 연산자는 number를 string으로 바꿔줍니다.

// + 와 다르게 다른 연산자는 string을 number로 바꿔주네요.
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // true

// 처음 보면 욕이 나와야 정상인 js 수수께끼
let n = "1" + 1;
n = n - 1;
console.log(n); // 10
// 사실 위에서 배운게 그대로지만 우리 뇌는 그걸 인정할 수 없다.. 씌부럴 ㅋㅋㅋㅋ
console.log("10" - "4" - "3" - 2 + "5"); // holy shit.. 계속 number이었다가 + "5"를 만나자 직전의 계산 결과를 string으로 바꿨네 엌ㅋㅋㅋㅋㅋ
// 자동 변환이 예상치 못한 버그를 일으킬 수 있단 사실을 기억해두라고..
