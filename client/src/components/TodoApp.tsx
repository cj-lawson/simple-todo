import { createContext, useContext, useState } from "react";
import StatKeeper from "./StatKeeper";
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

const TodoApp = () => {
  return (
    <>
      {/* <div className="mb-8">
        <StatKeeper />
      </div> */}

      <div className="bg-grdient-to-r relative flex flex-col space-y-5 rounded-lg border border-[#313635] border-opacity-80 bg-[#232323] px-2.5">
        <div className="mb-4"></div>
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
};

export default TodoApp;
