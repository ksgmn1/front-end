import { useState, useEffect, } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";

// 씨드 데이터 생성하는 함수
function seedData() {
  const seed = [
    { id: "todo-0", name : "운동하기", completed : true },
    { id: "todo-1", name : "댄스연습", completed : false },
    { id: "todo-2", name : "밥먹기", completed : false },
  ]

  saveDoc(seed);
}

// 로컬 스토리지 동기화
function saveDoc(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 앱 첫 사용인 경우 샘플데이터 생성
if (!localStorage.getItem("tasks")){
  seedData();
}


export default function App() {
  // 할일 저장
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // 키 스테이트 추적
  console.log(tasks);

  // 할일 추가
  function addTask(name) {
    // 새 할일 객체 생성
    console.log("새 할일의 이름 : ", name);

    const newTask = {
      id : `todo-${Date.now()}`,
      name, // name : name -> name
      completed : false
    }

    // 새 할일이 추가된 할일목록
    const updatedTasks = [...tasks, newTask];

    // 로컬스토리지  동기화
    saveDoc(updatedTasks);

    // tasks 업데이트
    setTasks(updatedTasks);
  };

  // 할일 삭제
  function deleteTask(id) {
    console.log("삭제할 할일의 id: ", id);

    // 전달받은 id와 일치하는 id를 가진 할 일을 제외한 할일목록
    const remainingTasks = tasks.filter(task => task.id !== id);

    // 로컬 스토리지 동기화
    saveDoc(remainingTasks);

    // task 업데이트
    setTasks(remainingTasks);
  };

  // 할일 완료상태 변경
  function toggleTaskCompleted(id) {
    console.log("완료상태를 변경할 할일의 id : ", id);

    const updatedTasks = tasks.map(task => {
      // 전달받은 id와 일치하는 할일의 completed를 업데이트한다.
      if(task.id === id) {
        return { ...task, completed: !task.completed};
      }
      // 나머지 할일들은 그대로 둔다
      return task;
    })

    // 로컬 스토리지 동기화
    saveDoc(updatedTasks);

    // tasks 업데이트
    setTasks(updatedTasks);
  }

  // 할일 수정
  function editTask(id, newName) {

  };

  // 타이틀 업데이트 (effect)
  useEffect(() => {
    document.title = "할 일 목록앱"
  }, [] );

  // 할일목록 (리스트 렌더링)
  const taskList = tasks.map(task => (  // 소괄호 주의
    // 컴포넌트 재사용
    <Todo
      key = {task.id}
      id = {task.id}
      name = {task.name}
      completed = {task.completed}
      deleteTask = {deleteTask}
      toggleTaskCompleted ={toggleTaskCompleted}
      editTask = {editTask}
      />
  ))

  return (
    <div className = "max-w-sm mt-9 mx-auto px-4">
      <h1 className="text-2xl font-semibold text-center my-4">
        할일 목록 앱 &#128526; &#127928;
      </h1>

      <Form addTask = {addTask} />

      <h2 className="font-semibold mb-4">
        총 {taskList.length}개 있습니다
      </h2>
      
      <ul>
        {taskList}
      </ul>
    </div>
  )
};