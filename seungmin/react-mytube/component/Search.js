import { useState, useEffect, useRef} from "react";

export default  function Search({ active, setActive }) {

    const inputRef = useRef(null);

    useEffect(() => {
        if (active){
        inputRef.current.focus();
        }
    })

    function handleClose() {
        setActive(false);
    }

    return(
        <div className="h-full w-full bg-black fixed hidden "
            style={{ display : active && "block" }}
        >
            <div className="flex itmes-center mt-4 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose}
                class="fill-white w-4"  viewBox="0 0 448 512" 
                ><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            <input
            type="text"
            className="w-full px-4 py-1 ml-2 bg-zinc-800 text-white rounded-full outline-none"
            autoComplete="off" placeholder="Search MyTube"
            ref={inputRef}
            />
        </div>

        <ul>

        </ul>
    </div>


    )
};