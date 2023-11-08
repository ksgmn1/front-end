import { useState, useEffect, useRef} from "react";

const TITLES = [
    "autumn leaves not cole king",
    "all of me john legend",
    "a legend of ashitaka joe hisashi",
    "river flows in you yiruma",
    "midnight randevous casiopea",
    "i believe i can fly rkelly",
]

export default  function Search({ open, setOpen }) {

    const inputRef = useRef(null);
    const [searching, setSearching] = useState("");

    useEffect(() => {
        if (open){
        inputRef.current.focus();
        }
    })

    function handleClose() {
        setOpen(false);
        setSearching("");
    }

    const titleList = TITLES.filter(name => name.indexOf(searching.toLocaleLowerCase()) > -1)
    .map(name => (
        <li key={name} className="text-white py-1">
            {name}
        </li>
    ))

    return(
        <div className="h-full w-full bg-red-200 fixed hidden z-30"
            style={{ display : open && "block" }}
        >
            <div className="flex itmes-center mt-4 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose}
                class="fill-white w-4"  viewBox="0 0 448 512" 
                ><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            <input
            type="text"
            value={searching}
            onChange={(e) => setSearching(e.target.value)}
            className="w-full px-4 py-1 ml-2 bg-white text-gray-800 rounded-full outline-none"
            autoComplete="off" placeholder="Search MyTube"
            ref={inputRef}
            />
        </div>

        <ul className="p-4">
        {searching.trim() && titleList}
        </ul>
    </div>


    )
};