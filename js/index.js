import { App } from "./components.js"


let todoList = []

const appDiv = document.getElementById("app")
const root = ReactDOM.createRoot(appDiv)
const inputArea = <input placeholder="Введите задачу"></input>

const addTask = () => {
    const task = document.querySelector("input").value
    root.render(<li>{task}</li>)
}
const buttonAdd = <button onClick={addTask}>Добавить</button>

root.render(<h1>ToDo List</h1>)

root.render(<App />)
root.render(buttonAdd)

// ReactDOM.render()