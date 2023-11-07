import { useState, useEffect, useRef } from "react";

export default function Todo( {
    id,
    name,
    completed,
    deleteTask,
    toggleTaskCompleted,
    editTask
}) { 

    // 편집 상태
    const [isEditing, setIsEditing] = useState(false);
    // 할일의 새 이름
    const [newName, setNewName] = useState(name);
    // 실제 input을 저장할 변수
    const inputRef = useRef(null);

    // 수정폼 제출 처리
    function handleSubmit(e) {
        e.preventDefault();
        editTask(id, newName);
        // 수정 완료후 뷰템플릿으로 전환
        setIsEditing(false);
    };

    // 수정 취소 처리
    function handleCancle() {
        setIsEditing(false);
        // 수정 취소했을 때 원래 할일의 이름으로 되돌린다. 
        setNewName(name);
    };

    useEffect(() => {
        if(isEditing) { // 편집 모드일 때
            inputRef.current.focus();
        }
    })

// 뷰 템플릿
const viewTemplete = (
    <>
        <div className="flex mb-2">
            <label>
                <input
                    type="checkbox"
                    className="peer hidden"
                    checked={completed}
                    onChange={() => toggleTaskCompleted(id)}
                    />
                    <span className="text-xl peer-checked:line-through"> 
                       {name}
                     </span>
            </label>
        </div>
        <div className="flex flex-nowrap gap-1">
            <button
                className="border-2 font-semibold px-2 py-1 w-full mb-2"
                onClick={() => setIsEditing(true)}
            >
                수정
            </button>
            <button
                className="px-2 py-1 w-full mb-2 bg-red-500 text-white font-semibold"
                onClick={() => deleteTask(id)}
            >
                삭제
                </button>
        </div>
    </>
)

// 편집 템플릿
const editingTemplete = (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="border px-2 py-1 w-full mb-2"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            ref={inputRef}
            />
            <div className="flex flex-nowrap gap-1">
                <button
                    type="button"
                    className="border-2 font-semibold w-1/2 p-1 border"
                    onClick={handleCancle}
                >
                    취소
                </button>
                <button
                    type="submit"
                    className="w-1/2 p-1 disabled:opacity-50 bg-blue-500 text-white font-semibold"
                    // 이름을 수정하지 않았거나 새이름을 입력하지 않은 경우 버튼 비활성화
                    disabled={name === newName || !newName}
               >
                    저장
                </button>
            </div>
    </form>
)

return (
    <li className="mb-4">
        {isEditing ? editingTemplete : viewTemplete}
    </li>
)
};