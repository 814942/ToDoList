import React from "react";

const Form = ({ setInputText, inputText, setTodos, todos, setStatus }) => {
  //Esta es mi funcion JS que levantara el estado

  const handlerInputText = (e) => {
    setInputText(e.target.value);
  };

  const handlerSubmitTodo = (e) => {
    e.preventDefault(); // no me refresques la pagina papa
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.round(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  const handlerStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        className="todo-input"
        type="text"
        onChange={handlerInputText}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={handlerSubmitTodo}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select className="filter-todo" name="todos" onChange={handlerStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
