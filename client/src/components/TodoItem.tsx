import EditTodo from "./EditTodo";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

interface TodoProps {
  id: number;
  description: string;
  completed: boolean;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number, description: string) => void;
  key: number;
}

interface CompletedTodoProps {
  id: number;
  description: string;
  deleteTodo: (id: number) => void;
  key: number;
}

export default function TodoItem({
  description,
  id,
  completed,
  key,
  deleteTodo,
  completeTodo,
}: TodoProps) {
  return (
    <li
      key={key}
      className="group flex items-center justify-center justify-between rounded-lg px-3 hover:cursor-pointer hover:bg-[#282828]"
    >
      <div className="flex w-full items-center justify-between py-2">
        <div className="mr-2" onClick={() => completeTodo(id, description)}>
          <CheckCircleIcon className="h-[24px] w-[24px] text-secondary-white hover:text-emerald-500" />
        </div>
        <div className="relative w-full py-1.5 text-sm text-primary-white">
          <EditTodo
            id={id}
            todoDescription={description}
            completed={completed}
          />
          {description}
        </div>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => deleteTodo(id)}
            className="flex flex-row items-center space-x-1 rounded-md bg-[#1E1F21] p-1.5 text-xs text-[#a0a0a0] text-gray-200 opacity-0 group-hover:opacity-100"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  );
}

export function CompletedTodoItem({
  description,
  id,
  deleteTodo,
}: CompletedTodoProps) {
  return (
    <li className="group flex items-center justify-center justify-between rounded-lg px-3 hover:cursor-pointer hover:bg-[#282828]">
      <div className="flex w-full items-center justify-center justify-between py-2">
        <div className="relative w-full py-1.5 text-sm text-primary-white">
          {description}
        </div>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => deleteTodo(id)}
            className="flex flex-row items-center space-x-1 rounded-md bg-[#1E1F21] p-1.5 text-xs text-[#a0a0a0] text-gray-200 opacity-0 group-hover:opacity-100"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </li>
  );
}
