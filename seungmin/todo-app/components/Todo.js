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

    // 수정폼 제출 처리
    function handleSubmit(e) {};

    // 수정 취소 처리
    function handleCancle() {};

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