import { useState, useEffect, } from "react";
import Search from "./component/Search";
import Sidebar from "./component/Sidebar";

export default function App() {

const [search, setSearch] = useState("");


const [searchActive, setSearchActive ] = useState(false);
const [sidebarActive, setSidebarActive ] = useState(false);




  return (
    <>
    <header className="fixed top-0 w-full bg-black text-white px-4">
      <div className="flex justify-between items-center">

        <div className="flex text-2xl">
          <button className="pr-4" onClick={() => setSidebarActive(true)}>
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
          <button className="py-4 flex items-center"
             onClick={() => setSearchActive(true)}>
          <svg className="fill-white " 
              xmlns="http://www.w3.org/2000/svg" height="1em" 
              viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
         </button>
        </div>

      </div>
      <div className="py-2 flex gap-2">
        <button className="p-1 px-4 border rounded-lg">전체</button>
        <button className="p-1 px-4 border rounded-lg">음악</button>
        <button className="p-1 px-4 border rounded-lg">여행</button>
        <button className="p-1 px-4 border rounded-lg">자동차</button>
      </div>
    </header>

    <Search
      active={searchActive}
      setActive={setSearchActive}
    />

    <Sidebar
      active={sidebarActive}
      setActive={setSidebarActive}
    />

    <main>
      <ul>

      </ul>
    </main>




    </>
  )
};