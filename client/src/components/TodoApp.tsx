import { createContext, useContext, useState } from "react";
import StatKeeper from "./StatKeeper";
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

const TodoApp = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="mb-12">
        <StatKeeper />
      </div>
      <InputTodo />
      <ListTodos />
    </div>
  );
};

export default TodoApp;
