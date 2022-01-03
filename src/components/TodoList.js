import React, { forwardRef } from "react";
import "./TodoList.css";

import Item from "./Item";
import FlipMove from "react-flip-move";

const TodoList = forwardRef(({ items, setItems, ref }) => {
  return (
    <div>
      <h2> List of Todos</h2>
      <FlipMove enterAnimation="accordionVertical">
        {items.map((item) => {
          return (
            <div className="todo">
              <p
                key={item.key}
                className={`todo__item ${item.completed ? "completed" : ""}`}
              >
                {item.input}
              </p>
              <Item items={items} setItems={setItems} item={item} />
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
});

export default TodoList;
