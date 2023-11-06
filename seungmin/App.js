import { createContext, useContext, useState, useEffect } from "react";
import{ HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export default function App() {
  return <Snippet />
}

/*
  리액트 이론

  1 리액트 기초
  2 JSX
  3 컴포넌트
  4 이벤트 처리
  5 뷰 업데이트
  6 리액트 라우터
  7 데이터 요청
*/


/*
  리액트 기초

  1 개념
  UI를 개발하기 위한 자바스크립트 라이브러리
  가장 인기있는 라이브러리

  2 특징
   1) 컴포넌트 기반
    * 컴포넌트 : UI를 구성하는 독립적이고 재사용가능한 부품

   2) 선언적 문법
    명령형 문법의 반대 개념
    HTML, CSS vs 프로그래밍 언어

   3) SPA (Single Page Application) 구조
   자바스크립트를 사용하여 뷰를 업데이트한다.
   속도가 빠르고 화면 전환이 부드럽다
*/

/*
  JSX (JavaScript eXtension)

  자바스크립트 확장 문법
  가상 트리를 만들기 위해 사용된다
  선언적 문법

  1 가상트리와 실제트리
  2 기본 문법
  3 Fragment
  4 JSX에서 변수 출력하기
  5 조건부 렌더링
  6 리스트 렌더링
*/

/*
  가상트리와 실제 트리
  리액트가 가상트리를 실제 트리로 변환 후 문서에 주입한다

  1 가상트리(Virtual tree)
    자바스크립트 템플릿의 트리

  2 실제 트리(Real tree)
    HTML 문서의 트리
*/

// function Snippet() {
//   return <h1>Hello React</h1>
// }

/*
  기본 사용법
*/

// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input 
//             type = "serach"
//             id = "search"
//             name = "q"
//             className = "class1 class2 "
//             style={{ outline : "none"}}
//             placeholder = "구글 검색"
//             autoComplete = "off"
//       />
//     </form>
//   )
// }


/*
  Fragment
  가상트리를 감싸는 빈 태그
*/

// function Snippet() {
//   // 가상트리는 하나의 태그로 감싸져야 한다.   
//   // <div></div> 없어졌을 때 오류발생 고로 Fragment(빈 태그) <></>로 감싼다.
//   return (
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


/*
  JSX에서 변수 출력하기
  출력할 때는 { } 중괄호 사용
*/

// function Snippet() {
//   const cat = {
//     name : "치즈",
//     age : 2,
//     home : null,
//     sound : function () {
//       return "야옹";
//     }
//   }

//   /* dt : 정의 dd : 정의에 대한 설명 */
//   return (
//     <dl>   
//       <dt>{cat.name}</dt>
//       <dd>나이 : {cat.age}</dd>
//       <dd>집 : {cat.home}</dd>
//       <dd>울음소리 : {cat.sound()}</dd>
//     </dl>
//   )
// }


/*
  조건부 렌더링

  1 && (논리연산자 그리고)
    표현식1 && 표현식2

    표현식1이 참일 경우 표현식2를 출력한다
    표현식1이 거짓일 경우 출력하지 않는다

  2 || (논리연산자 또는)
    표현식1 || 표현식2

    표현식1이 참일경우 표현식1을 출력한다
    표현식1이 거짓일 경우 표현식2를 출력한다

  3 ? (삼항연산자)
    조건 ? 표현식1 : 표현식2

    조건이 참일경우 표현식1을 출력한다
    조건이 거짓일경우 표현식2를 출력한다
 */

// function Snippet() {

//   return (
//     <>
//       <h2>Conditinal rendering</h2>
      
//       <h3>&& (AND)</h3>
//       <ol>
//         <li>{true && "표현식 2"}</li>
//         <li>{false && "표현식 2"}</li>
//       </ol>

//       <h3>|| (OR)</h3>
//       <ol>
//         <li>{"표현식 1" || "표현식 2"}</li>
//         <li>{"" || "표현식 2"}</li>
//       </ol>

//       <h3>? (삼항연산자)</h3>
//       <ol>
//         <li>{true ? "표현식 1" : "표현식 2"}</li>
//         <li>{false ? "표현식 1" : "표현식 2"}</li>
//       </ol>
//       </>
//   )
// }

/*
  리스트 렌더링
*/

// function Snippet() {
//   const beers = [
//     { name : "하이네켄", origin : "네덜란드"},
//   { name : "기네스", origin : "아일랜드"},
//   { name : "버드와이저", origin : "미국"},
//   ]

  // const beerList = beers.map(beer => (
  //   // key : 리액트 비교 알고리즘 상 필요한 값 "재조정"
  //   // key는 고유값, 즉 id처럼 생각
  //   <li key = {beer.name}>{beer.name}, {beer.origin}</li>
  // ))

//   return (
//     <>
//     <h3>세계 맥주</h3>
//     <ul>
//       {beerList}  
//     </ul>
//     </>
//   )
// }


/*
   Q. beers 변수를 활용하여 화면에 보이는 테이블을 만들어보세요
  (리스트 렌더링 활용)
*/

// function Snippet() {
//   const beers = [
//     { name : "Guinness", origin : "Ireland", available : false },
//     { name : "Heineken", origin : "Netherlands", available : true},
//     { name : "Budwiser", origin : "USA", available : true},
//   ]

//   const beerRows = beers.map(beer => (
//     <tr key = {beer.name}>
//       <td> {beer.name}</td>
//       <td> {beer.origin}</td>
//       <td>{beer.available ? "Yes" : "No"}</td>
//       </tr>
//   ))

//   return (
//     <>
//     <h1>Beers</h1>
//     <table border = "1">

//       <thead>
//         <tr>
//           <th>이름</th>
//           <th>원산지</th>
//           <th>판매중</th>
//         </tr>
//       </thead>

//       <tbody>
//         {beerRows}
//       </tbody>

//     </table>
//     </>
//   )
// }


/*
  컴포넌트 (Component)
  UI를 구성하는 독립적이고 재사용 가능한 부품
  컴포넌트 이름은 대문자로 시작해야한다

  1 컴포넌트 합성
  2 props
  3 childeren props
  4 useContext Hook
*/


/*
  컴포넌트 합성 (Composition)
  컴포넌트를 조합한다
*/

// function Content() {
//   return (
//     <section>
//       <h2>고양이는 액체일까?</h2>
//       <img
//         src = "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
//         alt = ""
//         width = "100%"
//         />
//     </section>
//   )
// }

// function Comments() {
//   return (
//     <section>
//       <h2>댓글</h2>
//       <ul>
//         <li>유치하게</li>
//         <li>2빠</li>
//         <li>1빠</li>
//       </ul>
//     </section>
//   )
// }

// function Suggested() {
//   return (
//     <section>
//       <h2>추천 영상</h2>
//       <ul>
//         <li>고양이는 정말 폭력적일까?</li>
//         <li>고양이는 정말로 ~~~</li>
//         <li>냥냥펀치는 얼마나 아플까?</li>
//       </ul>
//     </section>
//   )
// }

// //main component
// function Snippet() {
//   return (
//     <>
//     <header>
//       <h1>Youtube</h1>
//     </header>

//     <main>
//       <Content/>
//       <Comments/>
//     </main>

//     <aside>
//       <Suggested/>
//     </aside>
//     </>
//   )
// }

/*
  props

  컴포넌트에 전달되는 데이터
*/

// function Beer({ beer } ){

//   // props : beer

//   return (
//     <dl>
//       <dt>{beer.name}</dt>
//       <dd>원산지 : {beer.origin}</dd>
//       <dd>판매중 : {beer.available ? "예 " : "아니오"}</dd>
//     </dl>
//   )
// }

// function Snippet() {
//   // 지역 범위
//   const irishBeer = {
//     name : "Guinness",
//     origin : "Ireland",
//     available : false
//   };

//   return (
//     <>
//     <h2>Beer</h2>
//     <Beer beer={irishBeer} />
//     </>
//   )
// }


/*
  컴포넌트 합성 & props
  Q. 아래의 데이터와 컴포넌트로 화면에 보이는 뷰를 완성해보세요

  1 데이터
  video, comments, suggetedVideos

  2 컴포넌트
    1) Snippet (메인 컴포넌트)
    2) Content
    3) Comments
    4) Suggested

    * 참고 : 데이터는 Snippet내의 지역번수입니다.
*/

// function Content({ video }) {  // props : video
// return (
//   <section>
//     <h2>{video.title}</h2>
//       <img src={video.source}/>
//   </section>
// )
// }

// function Comments({ comments }) {  // props : comments

//   const commentList = comments.map(comment => (
//     <li key={comment.id}>{comment.content}</li>
//   ))

// return (
//   <section>
//     <h2>댓글</h2>
//     <ul>
//       {commentList}
//     </ul>
//   </section>
// )
// }

// function Suggested({ suggestedVideos }) { // props : suggestedVideos

//   const suggestedVideosList = suggestedVideos.map(video => (
//     <li key={video.id}>{video.title}</li>
//   ))
// return (
//   <section>
//     <h2>추천 영상</h2>
//     <ul>
//       {suggestedVideosList}
//     </ul>
//   </section>
// )
// }

// //main component
// function Snippet() {

//   const video = {
//     id : "v0",
//     title : "고양이는 액체일까?",
//     source : "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800",
//   }

//   const comments = [
//     { id: "c2", content : "유체하게 등수는" },
//     { id: "c1", content : "2빠" },
//     { id: "c0", content : "1빠" },  
//   ]

  
//   const suggestedVideos = [
//   { id: "s2", title : "고양이는 정말 폭력적일까?"},
//   { id: "s1", title : "고양이는 정말로~"},
//   { id: "s0", title : "냥냥펀치는 아프다"},
//   ]

// return (
//   <>
//   <header>
//     <h1>Youtube</h1>
//   </header>

//   <main>
//     <Content video={video}/>
//     <Comments comments={comments}/>
//   </main>

//   <aside>
//     <Suggested suggestedVideos={suggestedVideos}/>
//   </aside>
//   </>
// )
// }


/*
  children props

  컴포넌트 트리를 작성할 수 있다
*/

// function Layout({ children }) {

//     // children : Article 컴포넌트 (자식 컴포넌트)

//   return (
//     <>
//     <h1>Instagram</h1>
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>Posts</li>
//         <li>Profile</li>
//       </ul>
//     </nav>

//     <main>
//       {children}
//     </main>
//     </>
//   )
// }

// function Article() {
//   return(
//     <section>
//       <img
//       src="https://storage.enuri.info/pic_upload/knowbox/mobile_img/202104/2021042320243371839.png"
//       alt=""
//       width = "100%"
//       />
//       <p>
//         <b>snoop_dogg</b> 주인 나감ㅋ
//       </p>

//       <small>1일 전</small>
//     </section>
//   )
// }

// function Snippet() {
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }


/*
  useContext Hook

  * hook : 리액트에서 제공하는 특별한 함수
  사용하기 위해서 상위에
  import { createContext, useContext } from "react";   작성

  상위 컴포넌트가 전달한 props에 접근할 수 있다
*/

// Provider 컴포넌트
// const AuthContext = createContext();

// // 유저 데이터 관리
// function AuthProvider( { children } ) {

//   // 하위 컴포넌트에서 value 객체에 접근해야 할 때
//   const value = { username : "bunny" };

//   return (
//     <AuthContext.Provider value = {value}>
//     {children}
//     </AuthContext.Provider>
//   )
// }

// function Layout({ children}) {

//   const auth = useContext(AuthContext);

// return (
//   <>
//   <h1>Instagram</h1>
//   <nav>
//     <ul>
//       <li>Home</li>
//       <li>Posts</li>
//       <li>Profile</li>
//     </ul>
//   </nav>

//   <p>안녕하세요, {auth.username}님!</p>

//   <main>
//     {children}
//   </main>
//   </>
// )
// }

// function Article() {
// return(
//   <section>
//     <img
//     src="https://storage.enuri.info/pic_upload/knowbox/mobile_img/202104/2021042320243371839.png"
//     alt=""
//     width = "100%"
//     />
//     <p>
//       <b>snoop_dogg</b> 주인 나감ㅋ
//     </p>

//     <small>1일 전</small>
//   </section>
// )
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }


/*
   이벤트 처리
*/

// function Snippet () {

//   function handleClick() {
//     alert("lol");
//   }

//   // onEventName = { eventHandler }
//   return <button onClick = {handleClick}> button </button>
// }


/*
  뷰 업데이트

    1 useState Hook
    2 동적 스타일링
*/

/*
  useState Hook

  const [state, setState] = useState(initialValue)

  1 state : 컴포넌트 내의 변수
  2 setState(newState) : state를 업데이트하는 함수
  3 initialValue : state의 초기값
*/

// function Snippet() {
//   const [count, setCount ] = useState(0);
  
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick= {handleClick}> + </button>
//     </>
//   )
// }


// 구독하기 버튼
// function Snippet() {
//   const [ sub, setSub ] = useState(false);

//   function handleClick() {
//     setSub(!sub);
//   }

//   return(
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={ handleClick }>{sub ? "구독중" : "구독하기"}</button>
//     </>
//   )
// }

// 좋아요 버튼
// function Snippet() {
//   const [liked, setLiked ] = useState(false);

//   return(
//     <>
//     <h1>좋아요 버튼</h1>
//     <svg style={{ width : "2rem", fill : liked && "#00f"}} 
//       onClick={() => setLiked(!liked)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//       <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
//     </svg>
//       </>
//   )
// }


/*
  리액트 라우터

    1 기본 라우터
    2 인증이 적용된 라우터
*/


/*
  기본 라우터
*/

// 홈
// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 보기
// function Post() {
//   /* 
//     useParams Hook  (params = parameters (매개변수) )

//     요청 URL의 인자에 접근할 수 있다.
//   */
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 소개
// function About() {
//   return <h1>About</h1>
// }

// // 404페이지
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }


// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/post/:postId" element={<Post />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }


/*
  인증이 적용된 라우터
*/

// Provider  컴포넌트
// const AuthContext = createContext();

// // 유저관리
// function AuthProvider( { children } ) {
//   const [user, setUser ] = useState(null);

//   const value = { user, setUser };

//   return (
//     <AuthContext.Provider value = {value}>
//       { children }
//     </AuthContext.Provider>
//   )
// }

// // 상태 메시지 관리
// function AuthStatus() {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     // 환영메시지
//     <p>
//     Hi, {user}! {" "}
//     <button onClick={() => setUser(null)}>Log out</button>
//     </p>
//   ) : (
//     // 로그아웃 상태 표시
//     <p>Not logged in</p>
//   )
// }

// // 인증 검사
// function AuthRequired (  { children } ) {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);
//   const [ username, setUsername ] = useState("");

//   // 로그인 폼 제출 처리
//   function handleSubmit(e) {
//     e.preventDefault();

//     //user 업데이트
//     setUser(username);
//   }

//   // 로그아웃상태인 경우 로그인 폼 반환
//   if ( !user ) {
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input 
//           type="text"
//           name="username"
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           />
//           <button type="submit">Login</button>
//       </form>
//     )
//   }

//   // 로그인 중인경우 자식 컴포넌트 반환
//   return children;
// }


// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 보기
// function Post() {
//   /* 
//     useParams Hook  (params = parameters (매개변수) )

//     요청 URL의 인자에 접근할 수 있다.
//   */
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 소개
// function About() {
//   return <h1>About</h1>
// }

// // 404페이지
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }


// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <AuthProvider>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       <AuthStatus />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/posts" element={<Posts /> } />
//         <Route path="/post/:postId" element={
//             <AuthRequired>
//               <Post />
//         </AuthRequired>
//         } />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }


/*
  데이터 요청

    1 useEffect Hook
    2 데이터 가져오기 예시
*/


/*
  useEffect

  앱에 여러가지 효과(effect)를 준다

  사용방법
    1 useEffect(effect)
    렌더링 될때마다 effect를 실행한다

    2 useEffect(effect, [])
    최초 렌더링 시에만 effect를 실행한다

    3 useEffect(effect, [deps])
    최초 렌더링시, 그리고 deps(dependencies)가 업데이트 될 때
    effect를 실행한다.
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("렌더링 시간 : ", new Date().toLocaleTimeString());
//   }, [] );
//   // 빈 배열 ( [] )지우면 콘솔에 add버튼 누를때마다 시간 출력


// return (
//   <>
//    <p>{count} </p>
//    <button onClick={ () => setCount(count + 1)}>Add</button>
//   </>
// )
// }


/*
  데이터 가져오기 예시
*/

// 데이터를 요청하는 함수
function getProfile() {
  const DATA =  {
    username : "snoop_dog",
    image : "https://png.pngtree.com/png-clipart/20190904/original/pngtree-cartoon-kitten-png-image_4475351.jpg",
    bio : "정신이 좀 드는가"
  }

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000)
    })

    return promise;
  }

  function Snippet() {
    // 에러관리
    const [error, setError] = useState(null);
    // 대기상태
    const [isLoaded, setIsLoaded] = useState(false);
    // 프로필 데이터
    const [profile, setProfile] = useState(null);

    // 비동기적으로 작동한다
    useEffect(() => {
      getProfile() // 프로필 데이터 요청
        .then(data => { // 데이터 처리
          setProfile(data) // 프로필을 응답객체로 업데이트
        })
        .catch(error => { // 에러 처리
          setError(error)
        })
        .finally(() => setIsLoaded(true)) // 마지막 실행
    }, [])

    // state가 업데이트되면 컴포넌트는 다시 호출된다.

    if(error) {
      return <p>failed to fetch profile</p>
    }

    if(!isLoaded){ // 대기상태 표시
      return <p>fetching profile</p>
    }
    // isLoaded 초기값이 false기 때문에 여기 if문에서 걸려서 아래return으로 안가고 위 useEffect()로 간다.

    return (
      <>
        <h1>Profile</h1>
        <img
        src={profile.image}
        alt={profile.username}
        style = {{width : "100px", height : "100px", objectFit : "cover",
        border : "1px solid #ddd", borderRadius : "50%"
       }}
       />
       <h3>{profile.username}</h3>
       <p>{profile.bio}</p>
      </>
    )
  }





