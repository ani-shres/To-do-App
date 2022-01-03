import React, { forwardRef } from "react";
import {
  PlusIcon,
  CheckCircleIcon,
  TrashIcon,
  PencilAltIcon,
  CheckIcon,
  XIcon,
} from "@heroicons/react/solid";
import "./Todo.css";
import "./item.css";
import { useState } from "react/cjs/react.development";

const Item = forwardRef(({ items, setItems, item }) => {
  const [edit, setEdit] = useState(false);
  const [updateInput, setUpdateInput] = useState(item.input);

  const convertToInput = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  //delete Item
  const deleteTodo = (e, key) => {
    e.preventDefault();
    let newItems = items.filter((todo) => todo.key !== key);
    setItems(newItems);
  };

  //handle complete
  const completeHandle = (e, key) => {
    e.preventDefault();

    setItems(
      items.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //   handle update
  const updateTodo = (e, key) => {
    e.preventDefault();

    setItems(
      items.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            input: updateInput,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {edit ? (
        <>
          <form>
            <input
              type="text"
              className="todo__edit--input"
              value={updateInput}
              onChange={(e) => setUpdateInput(e.target.value)}
            />

            <div className="edit__todo__item">
              <CheckIcon
                className="todo__item__icons--type green"
                onClick={(e) => {
                  convertToInput();
                  updateTodo(e, item.key);
                }}
              />

              <XIcon
                className="todo__item__icons--type red"
                onClick={convertToInput}
              />
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="todo__item__icons">
            <CheckCircleIcon
              className="todo__item__icons--type green"
              onClick={(e) => completeHandle(e, item.key)}
            />
            <PencilAltIcon
              className="todo__item__icons--type blue"
              onClick={convertToInput}
            />
            <TrashIcon
              key={item.key}
              className="todo__item__icons--type red"
              onClick={(e) => deleteTodo(e, item.key)}
            />
          </div>
        </>
      )}
    </div>
  );
});

export default Item;
