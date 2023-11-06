import { useState, useEffect, useRef } from "react";

export default function Form( {addTask} ) {
    // 할 일의 이름
    const [ name, setName ] = useState("");
    // 실제 input 엘리먼트를 저장할 변수
    const inputRef = useRef(null);
    
    // 폼 제출 처리
    function handleSubmit(e) { 
        e.preventDefault();
        addTask(name);
        // 폼 제출 후 입력란 비우기
        setName("");
    }

    /*
        useRef Hook

        HTMl문서의 실제 엘리먼트에 접근할 수 있다
        current변수에 엘리먼트를 저장한다.
    */

    // 비동기적으로 실제 엘리먼트에 접근할 수 있다.
    useEffect(() => {
        inputRef.current.focus();
    }, [] )

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <input
            type = "text"
            className="border-2 px-2 py-1 w-full outline-none mb-2"
            value = {name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            ref={inputRef}
            />
            <button
            type = "submit"
            className="p-1 w-full disabled:opacity-50 bg-blue-500 text-white font-semibold"
            disabled={!name.trim()}>
                추가하기
            </button>
        </form>
    )
};