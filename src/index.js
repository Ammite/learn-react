import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function deleteTask(task) {
  todoList = todoList.filter((item) => item !== task);
  root.render(<MainView />);
}

function Task(attrs){
  return (
    <div className="task">
      <li key="{attrs.task}">{attrs.task}</li>
      <button className='deleteButton' onClick={() => deleteTask(attrs.task)}>Удалить</button>
    </div>
  );
}

function ToDoList() {
  return (
    <div id="list">
      <h3>Всего задач: {todoList.length}</h3>
      <ul>
        {
          todoList.map((task) => <Task task={task} />)
        }
      </ul>
    </div>
  );
}

function MainView() {
  return (
    <div id="mainView">
      <h1>ToDo List</h1>
      <div id="inputArea">
        {inputArea}
        {buttonAdd}
      </div>
      <ToDoList />
    </div>
  );
}


let todoList = [];
const appDiv = document.getElementById("root");
const root = ReactDOM.createRoot(appDiv);

const addTask = () => {
  const task = document.querySelector("input").value;
  console.log("Added: " + task);
  todoList.push(task);
  root.render(<MainView />);
};

const buttonAdd = <button onClick={addTask}>Добавить</button>;
const inputArea = <input placeholder="Введите задачу" />;

root.render(<MainView />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
