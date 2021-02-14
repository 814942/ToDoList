import React from "react";

const Todo = ({ text, todo, setTodos, todos }) => {
  //events
  const handlerDelete = () => {
    // cuando hagamos click disparamos la funcion handlerDelete, esta filtrara los elementos que no coincidan en su id
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handlerComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={handlerComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handlerDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
