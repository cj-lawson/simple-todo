import { createContext, useContext, useState } from "react";
import StatKeeper from "./StatKeeper";
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

const TodoApp = () => {
  return (
    <>
      <div className="flex flex-col space-y-5 rounded-lg border border-[#313635] border-opacity-80 bg-[#1c1c1c] px-3 drop-shadow-glow">
        <div className="mb-4">{/* <StatKeeper /> */}</div>
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
};

export default TodoApp;
