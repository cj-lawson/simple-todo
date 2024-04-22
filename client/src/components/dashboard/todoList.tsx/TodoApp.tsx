import { createContext, useContext, useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

const TodoApp = ({ todoList, setTodosChange }: any) => {
  const [todos, setTodos] = useState(todoList);

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);
  console.log(todos);
  return (
    <>
      <div className="bg-grdient-to-r relative flex flex-col space-y-5 rounded-lg border border-[#313635] border-opacity-80 bg-[#232323] px-2.5">
        <div className="mb-4"></div>
        <InputTodo setTodosChange={setTodosChange} />
        <ListTodos todoList={todoList} setTodoChange={setTodosChange} />
      </div>
    </>
  );
};

export default TodoApp;
