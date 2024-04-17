import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import TodoItem from "./TodoItem";
import { CompletedTodoItem } from "./TodoItem";
import useTodoStore from "../../../store/useTodoStore";

interface Todo {
  todo_id: number;
  description: string;
  completed: boolean;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const ListTodos = ({ todoList }: any) => {
  const [todos, setTodos] = useState<Todo[]>(todoList);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [incompleteTodos, setIncompleteTodos] = useState<Todo[]>([]);

  console.log(todos);

  //Zustand store
  const {
    setCompleteTodoCount,
    setIncompleteTodoCount,
    completeTodoCount,
    incompleteTodoCount,
  } = useTodoStore();

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const completeTodo = async (id: number, description: string) => {
    try {
      const completeTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, completed: true }),
      });

      if (completeTodo.ok) {
        // getTodos();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed);
    const incomplete = todos.filter((todo) => !todo.completed);

    setCompletedTodos(completed);
    setIncompleteTodos(incomplete);
    setCompleteTodoCount(completed.length);
    setIncompleteTodoCount(incomplete.length);
  }, [todos]);

  // console.log(todos);

  return (
    <div className="pb-20">
      <Tab.Group>
        <Tab.List className="mx-3 mb-4 flex flex-row justify-between border-b border-[#282828] pb-3 pt-4 text-sm text-secondary-white">
          <Tab
            className={({ selected }) =>
              classNames(
                "flex items-center text-sm font-medium",
                "focus:outline-none ",
                selected ? "text-white" : "text-[#a0a0a0] hover:text-white"
              )
            }
          >
            Open tasks{" "}
            <div className="ml-2 flex h-5 w-5 shrink-0 grow-0 items-center justify-center rounded-full bg-[#252628] text-xs text-[#A2A0A2]">
              {incompleteTodoCount}
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "text-sm font-medium",
                "focus:outline-none ",
                selected ? "text-white" : "text-[#a0a0a0] hover:text-white"
              )
            }
          >
            Completed
          </Tab>
        </Tab.List>

        <Tab.Panel className="incomplete-todos">
          <ul className="space-y-2">
            {incompleteTodos.map((todo) => (
              <TodoItem
                key={todo.todo_id}
                description={todo.description}
                id={todo.todo_id}
                completed={todo.completed}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </Tab.Panel>
        <Tab.Panel className="completed-todos">
          <ul className="space-y-2">
            {completedTodos.map((todo) => (
              <CompletedTodoItem
                key={todo.todo_id}
                description={todo.description}
                id={todo.todo_id}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
};

export default ListTodos;
