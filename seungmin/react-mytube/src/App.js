import { useState, useEffect, } from "react";
import Search from "./component/Search";
import Sidebar from "./component/Sidebar";
import Survey from "./component/Survey";

export default function App() {

  // 필터변수
const [filter, setFilter ] = useState("전체");

const [searchOpen, setSearchOpen ] = useState(false);
const [sidebarOpen, setSidebarOpen ] = useState(false);

const mainImgs = [
  { id : "i1" , src: "/img/i1.webp", name:"보더콜리와 함께", category:"동물" },
  { id : "i2", src:"/img/i2.webp", name : "쫀덕이입니다", category:"동물"},
  { id : "i3", src:"/img/i3.webp", name:"어쩌고저쩌고", category:"음악" },
  { id : "i4", src:"/img/i4.webp", name:"이러쿵저러쿵", category:"여행"},
];

// 필터 조건 관리
const FILTER_MAP = {
  전체 : () => true,
  동물 : ({category}) => category === "동물",
  음악 : ({category}) => category === "음악",
  여행 : ({category}) => category === "여행",
}

// 필터이름 - 전체, 동물, 음악, 여행
const FILTER_NAME = Object.keys(FILTER_MAP);

// 필터 버튼(리스트 렌더링)
const filterButtons = FILTER_NAME.map(name => (
  <button
    key={name}
    className="p-1 px-4 rounded-lg text-black bg-stone-200 disabled:bg-black disabled:text-white"
    onClick={() => setFilter(name)}
    disabled={name === filter}
    >
      {name}
    </button>
))

// 메인목록 (리스트 렌더링)
const mainImgList = mainImgs.filter(FILTER_MAP[filter])
.map(mainImg => (
  <li key={mainImg.id} className="mb-8 ">
    <div className="overflow-hidden">
    <img  className="w-full rounded-lg hover:rounded-none hover:scale-110 duration-300 box-border"
    src={mainImg.src}/>
    </div>
    <h3 className="text-black font-semibold text-md my-2">
      {mainImg.name}
    </h3>
  </li>
))

  return (
    <div className="bg-red-200">
    <header className="fixed z-10 top-0 w-full bg-red-300 text-white px-4">
      <div className="flex justify-between items-center">

        <div className="flex text-2xl">
          <button className="pr-4" onClick={() => setSidebarOpen(true)}>
               &#9776;
            </button>

          <div className="flex items-center gap-2">
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
            <span>MyTube</span>
          </div>
        </div>

        <div>
          <button className="p-4 flex items-center "
             onClick={() => setSearchOpen(true)}>
            <svg className="fill-white" 
              xmlns="http://www.w3.org/2000/svg" height="1em" 
              viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
         </button>
        </div>

      </div>
      
      <div className="py-2 flex gap-2 ">
        {filterButtons}
      </div>

    </header>

    <Search
      open={searchOpen}
      setOpen={setSearchOpen}
    />

    <Sidebar
      open={sidebarOpen}
      setOpen={setSidebarOpen}
    />

    <main className="pt-32 px-4 w-4/5 mx-auto">

      <ul>
        {mainImgList}
      </ul>

    <Survey/>
    </main>




    </div>
  )
};