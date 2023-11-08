import { useState, useEffect, useRef} from "react";

const SURVEYS = [
    { id: "s0", name : "스타리아"},
    { id: "s1", name : "아반떼 하이브리드"},
    { id: "s2", name : "코나"},
    { id: "s3", name : "캐스퍼"},
];

function saveDoc(id){
    localStorage.setItem("survey", id);
}

export default function Survey(){
    const [ selectedId, setSelectedId ] = useState(localStorage.getItem("survey"));
    
    function handleChange(id) {
        saveDoc(id)
        setSelectedId(id)
    }

    const surveyList = SURVEYS.map((survey, index) => (
        <li key={survey.id} className="pb-2 ">
            <input
                type="radio"
                id={survey.id}
                className="peer hidden"
                checked={survey.id === selectedId}
                onChange={() => handleChange(survey.id)}
            />
            <label
            for={survey.id}
            className="border border-black text-black block rounded p-2 
            peer-checked:text-white peer-checked:bg-red-300"
            >
                {index + 1}. {survey.name}
            </label>
        </li>
    ))

    return (
        <>
        <h3 className="text-black font-semibold py-4">
            다음 중 어떤 차를 구매하시겠습니까?
        </h3>
        <ol className="pb-4">
            {surveyList}
        </ol>
        </>
    )

}