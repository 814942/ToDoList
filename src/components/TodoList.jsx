import React from "react";
//import components
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            //id={todo.id}
            text={todo.text}
            //done={todo.completed}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
