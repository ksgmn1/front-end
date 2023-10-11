
/*
  자바스크립트 이론

  1. 데이터 타입
  2. 기본 데이터 타입의 메서드
  3. 연산자
  4. 조건문
  5. 반복문
  6. 변수
  7. 함수
  8. 배열
  9. 객체
  10. 클래스
  11. 에러
  12. 비동기 작업
  13. JSON 
*/

/* 
  1. 데이터 타입

  1 String
  2 Number
  3 Boolean
  4 Null
  5 Undefined

*/

/*
  String (문자열)

  1 값 : 연속된 문자

*/

// 따옴표 안에 문자를 작성한다.
// var foo = "bar";

// console.log(foo);
// // > bar
// console.log(typeof foo);
// // > string 

// // 각각의 문자에 접근하기

// console.log(foo[0]); // b
// console.log(foo[1]); // a
// console.log(foo[2]); // r

// //문자의 갯수 파악하기
// console.log(foo.length); // 3

/*
  Number

  1 값의 종류
    1) 정수
    2) 분수
    3) NaN
    4) +Infinity
    5) -Infinity

*/

// // 정수
// var year = 2023;

// console.log(year); // > 2023
// console.log(typeof year); // > number

// // 분수
// var pi = 3.14;

// console.log(pi); // > 3.14
// console.log(typeof pi); // > number

// // NaN (Not a Number)
// var nan = 2 - "foo";

// console.log(nan);
// console.log(typeof nan);

// Number타입이 표현할 수 있는 가장 큰 값
// var max_value = Number.MAX_VALUE;
// console.log(max_value);

// // Number타입이 표현할 수 있는 가장 작은 값
// var min_value = -Number.MAX_VALUE;
// console.log(min_value);

// // 양의 무한대 (+ Infinity)
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity);

// // 음의 무한대 (- Infinity)
// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity);

/*
  Boolean
  1 값
  true of false (참 또는 거짓)
*/
// var bool = true;

// console.log(bool)  // > true
// console.log(typeof bool) // > boolean

// 비교연산은 Boolean값을 리턴한다.
// console.log(1 > 0); // > true

/*
  Null
  "없음"을 나타내는 데이터 타입

  1 값
  null
*/

// var foo = null;

// console.log(foo); // > null
// console.log(typeof foo); // > object

/*
  Undefined
  정의되지 않은 변수가 가지는 데이터 타입

  1 값
  undefined
*/

// var foo;

// console.log(foo); // > undefined
// console.log(typeof foo); // > undefined

/*
  2. 기본 데이터 타입의 메서드
  - 데이터에 특정한 작업을 수행한다.

  1 String 메서드
  2 Number 메서드
*/

/*
  String 메서드

  1 toUpperCase
  2 indexOf
  3 trim
  4 substring
*/


// toUpperCase
// var foo = "bar";

// // 문자열의 모든 문자를 대문자로 변환한다.
// console.log(foo.toUpperCase()); // > BAR


// indexOf (검색할 문자열)
// var foo = "bar";

// // 검색한 문자의 인덱스를 리턴한다.
// console.log(foo.indexOf("r")); // > 2
// console.log(foo.indexOf("k")); // > -1(문자가 없을 경우)


// trim
// var foo = "  bar  ";

// // 문자열의 앞뒤 공백을 제거한다
// console.log(foo.trim()); // > bar


// substring(startIndex, endIndex)

// var foo = "abcde";

// // 특정 문자열을 추출한다.  (2, 4) -> index2,3추출
// console.log(foo.substring(2, 4)); // > cd


/*
  Number의 메서드

  1 toPrecision
  2 isString
*/

// toPrecision
// var pi = Math.PI;

// console.log(pi); // > 3.141592653589793

// // 정밀도를 조정하는 메서드
// // toPrecision(표현할 숫자의 갯수)
// var precisePi = pi.toPrecision(25)

// console.log(precisePi);


// toString

// var year = 2023;

// // 넘버 타입을 문자열 타입으로 변환한다.
// console.log(year.toString()); // > "2023"

/* 
  3. 연산자

  1 수리연산자
  2 대입 연산자
  3 비교 연산자
  4 논리 연산자
  5 타입 연산자
*/

/*
  수리 연산자  

  1 4칙 연산자
  +, - *, /
  2 증가 연산자
  ++
  3 감소 연산자
  --
  4 지수 연산자
  **
  5 계수 연산자
  %
*/

// 4칙 연산
// var add = 1 + 1
// var subtract = 2 - 1
// var divide = 1 / 2
// var multiply = 1 * 2

// console.log("1 + 1 =", add);  // > 2
// console.log("2 - 1 =", subtract); // > 1
// console.log("1 / 2 =", divide); // > 0.5
// console.log("1 * 2 =", multiply); // > 2


// 문자열과 + 
// var s = "hello" + " world"; // 띄어쓰기까지 적용됨
// console.log(s); // > hello world

// 문자열과 숫자를 더하는 경우
// var s = "hello" + 2024
// console.log(s); // > hello2024
// console.log(typeof s); // > String


// 증가/감소 연산자
// var i = 1;
// i++; // 1을 증가시킨다.

// console.log(i); // > 2


// 지수 연산자
// var exp = 2 ** 7
// console.log(exp); // > 128


// 계수(나머지) 연산자\
// var mod = 5 % 2;
// console.log(mod); // > 1


/*
  대입 연산자

  1 변수 대입 연산자
  =
  2 더하기 대입 연산자
  +=
  3 빼기 대입 연산자
  -=
  4 곱하기 대입 연산자
  *=
  5 나누기 대입 연산자
  /=
  6 지수 대입 연산자
  **=
  7 계수 대입 연산자
  %=
*/

// 변수 대입 연산자
// var foo = "bar"

// 더하기 대입 연산자
// var n = 1;
// n += 1;
// console.log(n); // > 2

/*
  비교 연산자

  1 동등 연산자
  ==
  2 비동등 연산자
  !=
  3 엄격 동등 연산자
  ===
  4 엄격 비동등 연산자
  !==
  5 gt 연산자
  >
  6 gte 연산자
  >=
  7 lt 연산자
  <
  8 lte 연산자
  <=
*/

// 동등 연산
// console.log(1 == 2); // > false
// console.log("foo" == "bar"); // > false
// console.log(2023 == "2023"); // > true
// console.log(null == undefined); // > true


// 엄격 동등 연산 (추천)
// console.log(1 === 2); // > false
// console.log("foo" === "bar"); // > false
// console.log(2023 === "2023"); // > false
// console.log(null === undefined); // > false

// 비동등 연산자
// console.log(1 != 2); // > true
// console.log("foo" != "bar"); // > true
// console.log(2023 != "2023"); // > false
// console.log(null != undefined); // > false

// 엄격 비동등 연산자(추천)
// console.log(1 !== 2); // > true
// console.log("foo" !== "bar"); // > true
// console.log(2023 !== "2023"); // > true
// console.log(null !== undefined); // > true


/*
  논리 연산자

  1 && (AND)
  2 || (OR)
  3 ! (NOT)
*/

/*
  && (AND)
  표현식 1 && 표현식 2

  표현식이 모두 참일 경우 참을 리턴한다.
*/

// console.log(1 > 0 && 1 < 2); // > true

/*
  || (OR)
  표현식1 || 표현식2

  표현식 중 한개 이상이 참일 경우 참을 리턴한다.
*/

// console.log(1 > 0 || 1 > 2); // > true

/*
  ! (NOT)
  !표현식
*/

// console.log(!(1 > 0)); // > false

//Boolean타입이 아닌 데이터 타입을 부정할 경우
// console.log("null 부정 : ", !null); // > true
// console.log("undefined 부정 : ", !undefined); // > true
// console.log("숫자 0 부정 : ", !0); // > true
// console.log("0이 아닌 숫자 부정 : ", !2); // > false
// console.log("0이아닌 숫자 부정 : ", !-2); // > false
// console.log("빈 문자열 부정 : ", !""); // > true
// console.log("문자열 부정 : ", !"foo"); // > false


/*
  타입 연산자
  변수의 타입을 리턴한다.
*/

// var foo = "bar";

// console.log(typeof foo); // > string


/*
  4. 조건문

  1 if 조건문
  2 switch 조건문
  3 ? (삼향연산자) 조건문
*/

/*
  if 조건문

  1 if
  2 if/else
  3 if/else if/else
*/

// if

// var year = 2023;

// if(year === 2023){
//   console.log("올 해");    
// } else {
//   console.log("올해가 아닙니다.");
// }
// > 올 해


// if/else if/else
// var year = 2023;

// if(year === 2022){
//   console.log("작년");
// }else if(year === 2023){
//   console.log("올해");
// }else if(year === 2024){
//   console.log("내년");
// }else{
//   console.log("가까운 년도가 아닙니다.")
// }

// var year = 2023;

// switch (year) {
//   case 2022:
//     console.log("작년");
//     break;

//   case 2023:
//     console.log("올해")
//     break;
  
//   case 2024:
//     console.log("내년");

//   default:
//     console.log("가까운 년도가 아닙니다.");
// }

/*
  ? (삼항연산자) 조건문

  조건 ? 값1 : 값2

  조건이 참일 경우 값1을 리턴한다.
  조건이 거짓일 경우 값2를 리턴한다.
*/

// var year = 2023;
// var r = year === 2023 ? "올해" : "올해가 아닙니다.";

// console.log(r);

/* Q. 조건문

  나이 변수를 활용하여 나이가 성인이면 "성인입니다."
  성인이 아니면 "성인이 아닙니다"를 출력하는 조건문을 만들어보세요.
  
  1 if/else 조건문이용
  2 삼항연산자 조건문 이용 
  */

  // var age = 18;
  // var age2 = age === 18 ? "성인입니다." : "성인이 아닙니다";
  // if(age >= 18){
  //   console.log("성인입니다.");
  // }else{
  //   console.log("성인이 아닙니다.");
  // }

  // console.log(age2);
  
