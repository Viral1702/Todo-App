import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, addTodo, updateTodo } from "../features/todo/todoSlice"; // Correct import

const Todos = () => {
  // Add to part
  const [update, setUpdate] = useState("submit");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input }));
    setInput("");
    setUpdate("Submit");
  };

  // Todos Part
  const todos = useSelector((state) => state.todos);

  const updateTodo = (id, text) => {
    setInput(text);
    setUpdate("Update");
    dispatch(removeTodo(id));
  };

  return (
    <>
      <form onSubmit={handelSubmit} className="mt-5">
        <input
          type="text"
          placeholder="Add Your Todo Here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-2/6"
        />
        <button
          type="submit"
          className="bg-blue-400 text-white ml-2 px-1 rounded-md"
        >
          {update}
        </button>
      </form>

      {/* TODO List */}
      {todos.map((myTodo) => (
        <div key={myTodo.id}>
          <li className="pt-3">
            {myTodo.text}
            <button
              className="ml-3 bg-blue-400 rounded-md px-2"
              onClick={(e) => updateTodo(myTodo.id, myTodo.text)}
            >
              U
            </button>

            <button
              className="ml-3 bg-red-400 rounded-md px-2"
              onClick={() => dispatch(removeTodo(myTodo.id))}
            >
              X
            </button>
          </li>
        </div>
      ))}
    </>
  );
};

export default Todos;
