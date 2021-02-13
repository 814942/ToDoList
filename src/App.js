import React, { useState, useEffect } from "react";
import "./App.css";
// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  //useEffect nos permite correr una funcion cada vez que un estado cambia

  useEffect(() => {
    handlerFiltered();
    saveLocalTodos();
  }, [todos, status]);

  // function event
  const handlerFiltered = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
      default:
        setFiltered(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lista de Tareas</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filtered={filtered} />
    </div>
  );
}

export default App;
