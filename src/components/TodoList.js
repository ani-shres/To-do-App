import React, { forwardRef } from "react";
import "./TodoList.css";

import Item from "./Item";
import FlipMove from "react-flip-move";

const TodoList = forwardRef(({ items, setItems, ref }) => {
  const customLeaveAnimation = {
    from: { transform: "scale(1, 1)" },
    to: { transform: "scale(0.5, 1) translateY(-20px)" },
  };
  return (
    <div >
      <h4> List of Todos</h4>
      <FlipMove
        enterAnimation="accordionVertical"
       
      >

        {items.map((item) => {
          return (
            <div className="todo" >
              <p 
                key={item.key}
                className={`todo__item ${item.completed ? "completed" : ""}`}
              >
                {item.input}
              </p>
              <Item items={items} setItems={setItems} item={item}  />
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
});

export default TodoList;
