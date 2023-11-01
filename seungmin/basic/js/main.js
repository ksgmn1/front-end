
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
  
/*
  9. 객체 (Object)
  데이터와 함수의 집합

  1 속성에 접근하는 방법
  2 객체 수정
*/

// 속성에 접근하는 방법

// 고양이 (객체)
// var cat = { 
//   // 속성 (property)
//   name : "치즈", // key : value
//   home : null,
//   sound : function(){ // 메서드 (속성값이 함수)
//     return "야옹"
//   }
// }

// console.log(cat.name); // > 치즈
// console.log(cat["name"]); // > 치즈
// console.log(cat.color); // > undefined (존재하지않는 속성에 접근 시도)
// console.log(cat.home); // > null
// console.log(cat.sound()); // > 야옹


// 객체 수정하기

//  var cat = { 
//     name : "치즈",
//     home : null,
//     sound : function(){ 
//       return "야옹"
//     }
//   }

//   // 속성 추가
//   cat.age = 2;
//   console.log(cat); // > ..., age: 2

//   // 속성 업데이트
//   cat.home = "삼산동";
//   console.log(cat);

//   // 속성 삭제
//   delete cat.home;
//   console.log(cat);


// Q. 아일랜드 맥주가 재입고되었다.

// var irishBeer = {
//   name : "기네스",
//   origin : "아일랜드",
//   available : false // 판매상태
// }
// irishBeer.available = true;
// console.log(irishBeer);

// Q. 각 맥주의 이름을 대문자로 출력해보세요

// var beers = [
//   {name : "guiness", origin : "Ireland"},
//   {name : "heineken", origin : "Netherlands"},
//   {name : "budwiser", origin : "USA"},
// ];

// for(var i = 0; i < beers.length; i++){
//   console.log(beers[i].name.toUpperCase());
// }

/*
  10. 클래스 (Class)
  객체 생성을 위한 툴

  1 클래스와 인스턴스
  2 생성자
  3 함수 멤버
  4 static 속성과 메서드
  5 자바스크립트에 내장된 클래스
  6 리터럴 표기법
*/


/*
  인스턴스
  클래스로부터 생성된 객체
*/

// class Beer{
//   name;
//   origin;
//   available;
// }

// // Beer 클래스의 인스턴스
// var irishBeer = new Beer();
// irishBeer.name = "기네스"
// irishBeer.origin = "아일랜드"
// irishBeer.available = false;

// // Beer 클래스의 인스턴스
// var dutchBeer = new Beer();
// dutchBeer.name = "하이네켄"
// dutchBeer.origin = "네덜란드"
// dutchBeer.available = true;

// console.log(irishBeer instanceof Beer); // > true
// console.log(dutchBeer instanceof Beer); // > true


/*
  생성자 (contructor)

  인스턴스의 속성 설정을 처리한다.
*/

// class Beer{
//   name;
//   origin;
//   available;

//   constructor(name, origin, available){
//     // this : 인스턴스
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }
// }

// var irishBeer = new Beer("기네스","아일랜드",false);
// console.log(irishBeer);


/*
  클래스의 함수 멤버
*/

// class Beer{
//   // ... (다른 멤버들) 
  
//   // 함수 멤버
//   drink(){
//     return "시원하다";
//   }
// }

// var beer = new Beer();

// // 인스턴스의 메서드
// console.log(beer.drink());


/*
  static 속성과 메서드

  클래스와 관련된 유용한 기능을 제공한다
  인스턴스 생성을 할 필요가 없다.
*/

// class Beer{
//   // ... (다른 멤버들)

//   static history = "기원전 300년";

//   static brewing() {
//     return "밀, 홉, 효모, 물 등";
//   }
// }

// // 클래스 자체가 호출한다.
// console.log(Beer.history);
// console.log(Beer.brewing());


// 자바스크립트에 내장된 클래스의 static 속성

// var pi = Math.PI;

// console.log(pi); // > 3.14~


// Beer클래스의 완성본

//  class Beer{
//   // 클래스의 멤버
//   name;
//   origin;
//   available;

//   // 생성자
//   constructor(name, origin, available){
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }

//   // 클래스의 함수 멤버
//   drink(){
//     return "시원하다!";
//   }
  
//   // static 속성
//   static history = "기원전 300년"
//   // static 메서드
//   static brewing() {
//     return "밀, 홉, 효모, 물 등";
//   }
// }


/* 
  자바스크립트에 내장된 클래스

  1 문자처리 : String
  2 숫자 및 날짜 : Number, Math, Date
  3 인덱스가 있는 컬렉션 : Array
  4 에러 : SyntaxError, ReferenceError, TypeError 등
  5 기타 : Promise, JSON, Object
*/

/*
  리터럴 (literal) 표기법

  값만 작성한다
*/

// String 클래스의 인스턴스
// var foo = new String("bar");
// var foo = "bar"; // 리터럴 표기법

// // Number 클래스의 인스턴스
// var year = new Number(2023);
// var year = 2023; // 리터럴 표기법

// // 리터럴표기법이 불가능한 클래스
// var date = new Date();

// // String클래스의 인스턴스
// var foo = "bar";

// 인스턴스 = 객체

// 문자열 = 객체?
// 문자열 : 연속된 문자
// 객체 { key : value }

// 일반적으로 말하는 객체 vs 큰 개념의 객체
// 일반적으로 말하는 객체 { key : value } 의 형태
// 큰 개념의 객체 : 모든 값

/*
  Q. 다음을 만족하는 <Car>클래스를 선언해보세요.

  1 클래스 멤버
    1) name (이름)
    2) brand (브랜드, 제조사)
    3) color (색상)

  2 생성자 있음

  3 함수 멤버 : sound
    자동차 소리를 낸다.

  4 static 메서드 : getAge
  구매년도를 입력하면 자동차의 연식을 알려준다.
*/

// class Car{
//   name;
//   brand;
//   color;

//   constructor(name, brand, color){
//     this.name = name;
//     this.brand = brand;
//     this.color = color;
//   }
//   sound(){
//     return "부릉"
//   }
//   static getAge(year){
//     return 2023-year;
//   }
// }

// var genesis = new Car("제네시스", "현대", "빨강")
// console.log(genesis);
// console.log(genesis.sound());

// // Static 메서드 호출
// console.log(Car.getAge(2003));

// // 현재 년도 구하기
// console.log(new Date().getFullYear()) // > 2023

/*
  Q. 다음을 만족하는 <Cat>클래스를 선언해보세요.
  1 클래스 멤버
    name(이름)
    home(집)  
  2 함수 멤버 : sound
  static 메서드 : isAdult
  개월수를 입력하면 성체고양인지 아닌지 알려준다
  (성체 고양이 기준 : 12개월이상)
*/

// class Cat{
//   name;
//   home;
//   constructor(name, home){
//     this.name = name;
//     this.home = home;
//   }
//   sound(meow){
//     return meow;
//   }
//   static isAdult(month){
//     if(month < 12){
//       console.log("성체고양이가 아닙니다.");
//     }else{
//     console.log("성체고양이 입니다.");
//   }
// }
// }
// var mycat = new Cat("나비", "용산");
// var mycat2 = new Cat("치즈", "인천");
// console.log(mycat.sound("야옹"));
// console.log(mycat2.sound("으엥"));
// console.log(Cat.isAdult(12));

/*
  11. 에러와 에러처리

  1 에러 개념
  2 에러의 구조
  3 에러 처리
  4 에러의 종류
  5 커스텀 에러
*/


/*
  에러 개념

  에러는 프로그램의 실행을 중단시킨다
  에러는 반드시 처리되어야 한다
*/

// console.log(foo);
// > Uncaught ReferenceError ReferenceError: foo is not defined
// Uncaught (잡히지 않은, 처리되지 않은)


/*
  에러의 구조
  
  1 name
  2 message
  3 stack
*/

// console.log(foo);
// name : ReferenceError
// message : foo is not defined
// stack : 에러에 대한 상세내용


/*
  에러 처리 방법

  try / catch 문법
*/

// try{ // 코드를 작성하는 부분

//   // ...
 
//   // 에러는 발생하지만 프로그램은 중단되지 않는다.
//   console.log(foo);
// }catch(error){ // 에러를 처리하는 부분
//   console.log(error);
// }

/*
  에러의 종류

  1 SyntaxError
  2 ReferenceError
  3 TypeError
*/


// SyntaxError (문법에러)
// try{

//   //...
//   console.log(2023)); // > Uncaught
// }catch(error){
// console.log(error);
// }

/*
  ReferenceError (참조에러)

  존재하지 않는 변수를 참조할 때 발생한다.
   */

  // try{
  //   console.log(foo);
  // }catch(error){
  //   console.log(error);
  // }


/*
  TypeError(타입 에러)

  인자가 유효한 타입이 아닐 때 발생한다.
*/

// try{
//   //setInterval(callback, ms)
//   setInterval(null, 1000);
// }catch(error){
//   console.log(error);{
//   // > TypeError : the "callback" argument must be of
//   // type function. Recevied null
//   }
// }


/*
  커스텀 에러

  필요할 경우 에러를 발생시킨다.
*/

// try{
//   var age = 15;

//   console.log("학생:", "아저씨 기네스 한병 주세요");
//   if(age < 18){
//     // catch 블록으로 에러를 던진다(throw)
//     throw "미성년자는 술을 살 수 없습니다";
//   }
//     // 아래 코드는 실행되지 않는다.
//   console.log("CU직원", "네 여기있습니다");
// } catch(error){
//   console.log(error);
// }


/*
  12. 비동기 작업

  블로킹(blocking)을 방지하기 위해 사용된다
  예) 서버에 데이터를 요청할 때

  1 동기 작업
  2 비동기 작업
*/


/*
  동기 작업 (synchronus operation)

  코드가 순서대로 실행된다.
*/


// function f() {
//   console.log("작업 1");
// }

// f();
// console.log("작업 2");
// 대부분의 작업은 동기작업이다.

/*
  비동기 작업(asynchronous operation)
  빠른 작업부터 실행된다.
*/


// 서버에 데이터를 요청하는 예시

// 서버에 데이터를 요청하는 함수
// 서버가 응당하는데 1초가 걸린다고 가정

// function fetchData(callback){
//   setTimeout(function(){
//     callback(null, "데이터")
//   }, 1000);
//   }
  
//   fetchData(function(err, data){
//     if(err){
//       throw err;
//     }

//     console.log("서버에서 받은 데이터 : ", data);
//   })

//   console.log("다음 작업");

/*
  JSON (JavaScript Object Notation)
  자바스크립트 객체 표기법

  자바스크립트 객체를 저장하거나 전송하기 위한 텍스트 포멧

  1 객체와 JSON
  2 JSON.stringify
  3 JSON.parse
*/

// 객체와 JSON

// 객체 o
// var o = {foo: "bar"};
// // 객체 o의 JSON 포멧
// var json = '{ "foo" : "bar"}';
// console.log(o)  // > {foo: 'bar'}
// console.log(typeof o); // > object
// console.log(typeof json); // > string


/*
  JSON.stringify()

  객체를 JSON포멧으로 변환한다.
*/

// var o = {foo : "bar"};
// var json = JSON.stringify(o);

// console.log(json);  // > '{"foo" : "bar"}'

/*
  JSON.parse()
  
  JSON포맷을 객체로 변환한다
*/

// var json = '{ "foo" : "bar"}';
// var o = JSON.parse(json);

// console.log(o);


/*
  자바스크립트 ES6 (2015년)

  새로운 문법이 많이 추가된 버전

  1 let, const
  2 새로운 메서드들
  3 화살표 함수
  4 구조분해할당
  5 스프레드 연산자
  6 프로미스

*/

/*
  let, const

  1 let
  2 const
  3 블록 범위
*/

/*
  1 let
  변수 선언 예약어
  var과 사용법이 거의 같다

  var과 차이점은 let은 한번만 사용가능 (재선언 불가)
  두번 선언시 디버그콘솔 옆 문제칸에 문제 발생
*/

// let foo = "bar"
// let foo = "baz"

/*
  2 const
  constant(상수)
*/

// 다음의 형태로만 사용할 수 있다
// const foo = "bar";

/*
  3 블록 범위 (block scope)
  let, const는 블록범위를 갖는다

  전역변수와는 다른 블록범위
*/

// { // 블록
//   var varInBlock = true;
//   let letInBlock = true;
//   const constInBlock = true;
// }

// console.log(varInBlock); // 접근 가능
// console.log(letInBlock); // 접근불가
// console.log(constInBlock); // 접근불가


/*
  ES6 새로운 메서드

  1 Array.map
  2 Array.filter (ES5)
  3 Object.keys
*/

/*
  Array.map
  배열에 특정한 작업을 수행한다
  새로운 배열을 리턴한다
*/

// 각 아이템에 10을 곱한 배열이 필요한 상황
// let arr = [10, 20, 30];

// // item : 배열의 각 아이템
// // index : 각 아이템의 인덱스
// // self : 원본 배열
// var updatedArr = arr.map(function (item, index, self){
//   return item * 10;
// })

// console.log(updatedArr);  // > 100, 200, 300

/*
  Array.filter

  필터링 작업을 한다
  새로운 배열을 리턴한다
*/

// 성인만 추출해야 하는 경우
// var ages = [13, 20, 34, 40];

// // age : 배열의 각 아이템
// // index : 아이템의 인덱스
// // self : 원본 배열
// var adults = ages.filter(function (age, index, self){
//   if(age >= 18){ // 조건문
//     return age;
//   }
// })

// console.log(adults);  // > 20, 34, 40


/*
  Object.keys

  객체의 키를 문자열 배열로 리턴한다
*/

// var cat = {
//   name : "치즈",
//   home : null,
//   sound : function(){
//     return "야옹"
//   }
// }

// var keys = Object.keys(cat);

// console.log(keys); // > name, home, sound


// Q. 맥주의 각 이름이 대문자인 배열을 es6 메소드로 구해보기.

// let beers = ["guinness", "heineken", "budwiser"];

// console.log(beers);

// // index, self는 생략
// var Beers = beers.map(function (name){
//   return name.toUpperCase();
// })

// console.log(Beers); // > GUINNESS, HEINEKEN, BUDWISER


/*
  화살표 함수 (arrow function)

  익명함수를 간단하게 표현한다
*/

// 익명함수
// var f = function () {
//   console.log("foo");
// }

// f() // > foo

// 화살표함수
// var f  = () => {
//   console.log("foo");
// }

// f();

// 화살표 뒤에 값을 리턴한다. ( 더 축약버전)
// var f = () => console.log("foo");

// f(); // > foo

// 매게변수가 하나인 경우 소괄호 생략 가능
//  var f = data => console.log(data);

//  f("foo"); // > foo


/*
  구조분해할당 (Destructing)

  1 배열 구조분해할당
  2 객체 구조분해할당
  3 매개변수 구조분해할당
*/

/*
  1 배열 구조분해할당
  배열의 각 아이템을 간단한 문법으로 변수에 할당할 수 있다.
*/

// var beers = ["Guinness", "Heineken", "Budwiser"];

// 기존의 방법
// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// 구조분해할당
// var[irishBeer, dutchBeer, americanBeer] = beers;


/*
  객체 구조분해할당
  간단한 문법으로 객체의 속성에 접근할 수 있다.
*/

// var irishBeer = {
//   name: "기네스",
//   origin : "아일랜드",
//   available : false
// }

// 기존의 방법
// console.log(irishBeer.name);
// console.log(irishBeer.origin);
// console.log(irishBeer.available);

// 구조분해할당
// var { name, origin, available } = irishBeer;
// console.log(name, origin, available); // > 기네스 아일랜드 false


/*
  매개변수 구조분해할당
  간단한 문법으로 매개변수에 접근할 수 있다  
*/

// let irishBeer = {
//   name: "기네스",
//   origin : "아일랜드",
//   available : false
// }

// 기존의 방법
// function f(beer){
//   console.log(beer.name); // 기네스
//   console.log(beer.origin); // 아일랜드
//   console.log(beer.available); // false
// }

// f(irishBeer);


// 구조분해할당
// function f({name, origin, available}){
//   console.log(name,origin,available);
// }

// f(irishBeer); // > 기네스 아일랜드 false


// Q. 1 구조분해할당으로 각 맥주를 변수에 할당해보세요

// let asianBeers = ["클라우드", "아사히"];

// var[cloud, asahi] = asianBeers;
// console.log(cloud);
// console.log(asahi);


// Q 2. 구조분해할당으로 객체의 각 속성에 접근 후 출력해보세요

// var car = {name : "아반떼", color : "화이트"};

// var{name, color} = car;
// console.log(name, color);


/*
  스프레드 연산자(Spread Operator)

  1. 배열과 스프레드 연산자
 2. 객체와 스프레드 연산자
*/

/*
  배열과 스프레드 연산자

  배열의 아이템을 간단하게 복사할 수 있다,
  ...복사할 배열
*/

// var beers = ["기네스", "하이네켄"];
// var americanBeer = "버드와이저";

// var updatedBeers = [...beers, americanBeer];

// console.log(updatedBeers); // > 기네스, 하이네켄, 버드와이저


/*
  객체와 스프레드 연산자

  객체의 속성을 간단하게 복사할 수 있다
  ...복사할 객체
*/

// var irishBeer = {
//   name : "기네스",
//   origin : "아일랜드",
//   available : false
// }

// var updatedIrishBeer = {...irishBeer, available:true};

// console.log(updatedIrishBeer);


// Q. 1 스프레드 연산자를 활용하여 이사아 카 배열을 만들어보세요

// var koreanCars = ["현대", "기아"];
// var japaneseCars = ["토요타", "혼다"];

// var asianCars = [...koreanCars, ...japaneseCars];

// console.log(asianCars);

// Q. 2 스프레드 연산자를 활용하여 치즈의 집을 삼산동으로 업데이트 해보세요

// var cat = {
//   name : "치즈",
//   home : null,
//   sound : function (){
//     return "야옹";
//   }
// }

// var updatedcat = {...cat, home: "삼산동"};
// console.log(updatedcat);


/*
  프로미스 (Promise)
  비동기 작업의 성공 및 실패 여부와 결과값을 나타낸다.
  비동기 작업의 가독성을 높이기 위한 문법

  1 프로미스의 구조
  2 실제 사용 예시
  3 async / await
*/

/*
  프로미스의 구조

  1 resolve, reject 함수
    1) resolve
    작업이 성공했을 때 호출된다
    2) reject
    작업이 실패했을 때 호출된다
  
  2 프로미스의 상태 (status)
    1) fullfilled
    작업의 성공을 나타낸다
    2) rejected
    작업의 실패를 나타낸다
    3) prending
    대기 상태를 나타낸다

  3 프로미스의 메서드
    1) then
    성공했을 때 데이터를 처리한다
    2) catch
    실패했을 때 에러를 처리한다
    3) finally
    성공 실패여부와 관계없이 항상 실행되는 작업을 처리한다
*/

// const promise = new Promise((res, rej) => {
//   // res (resolve)
//   // rej (reject)
//   res({ foo : "bar" }); // 비동기 작업의 성공
// })

// promise
//   .then((value) => ( // 성공했을 때 데이터를 처리
//     console.log(value) // res 인자
//   ))
//   .catch((error) => { // 실패했을 때 에러 처리
//     console.error(error)
//   })


/*

  실제 사용 예시

  서버에 데이터를 요청할 때
*/

// 서버에 데이터를 요청하는 함수
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res("야옹");
//   })
//   return promise;
// }

// fetchData()
//   .then(data => {
//     console.log("서버로부터 전송받은 데이터 :", data);
//   })
//   .catch(error => {
//     console.error("에러 : ", error);
//   })

//   console.log("다음 작업")


/*

  async / await

  프로미스가 결과를 반환할 때까지 기다린다
  프로미스의 가독성을 향상시킨다
  try / catch 문법으로 에러를 처리한다.
*/

// 서버에 데이터를 요청하는 함수
// function fetchData() {
//   const promise = new Promise((res, rej) => {
//     res("야옹")
//   })

//   return promise;
// }

// async function f() {
//   try{
//     // await은 async 함수 내에서만 쓸 수 있다.  그리고 promise 앞에만 쓸 수 있다.
//     const data = await fetchData();

//     console.log("서버로부터 전송받은 데이터 : ", data);
//   }catch (error) {
//     console.error(error);
//   }
// }

// f();