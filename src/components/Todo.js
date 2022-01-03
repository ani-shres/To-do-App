import React, { useState } from "react";
import TodoList from "./TodoList";
import { PlusIcon } from "@heroicons/react/solid";
import "./Todo.css";
import Quote from "./Quote";
import useLocalStorage from "../hook/useLocalStorage";

function Todo() {
  const [items, setItems] = useLocalStorage("items", []);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    const newItem = {
      input: input,
      key: Date.now(),
      completed: false,
    };

    setItems([...items, newItem]);
    console.log(items);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>TO-DO List</h1>
      </header>
      <Quote />

      <form className=" App__form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          id="new-todo"
          onChange={handleChange}
          value={input}
          placeholder="Enter Your todo..."
        />

        <button className="form__button" type="submit" onClick={handleSubmit}>
          <PlusIcon className="form__button--plus" />
        </button>
      </form>
      <TodoList items={items} setItems={setItems} input={input} />
    </div>
  );
}

export default Todo;
