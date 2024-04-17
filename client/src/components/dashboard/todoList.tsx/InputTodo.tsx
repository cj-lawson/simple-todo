import { useState } from "react";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const InputTodo = ({ setTodosChange }: any) => {
  const [description, setDescription] = useState<string>("");

  const onFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { description };
      const response = await fetch("http://localhost:5000/dashboard/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      setTodosChange(true);
      setDescription("");
      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-full px-3">
      <form
        action=""
        onSubmit={onFormSubmit}
        className="items-centered flex space-x-6"
      >
        <div className="group relative w-full rounded-lg border border-gray-light bg-[#1c1c1c] px-4 ring-1 ring-inset ring-[#292929]">
          <input
            autoFocus
            type="text"
            placeholder="Type to create a task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full bg-transparent py-1.5 py-2.5 pl-4 text-gray-200 shadow-sm placeholder:text-xs placeholder:text-placeholder-gray hover:cursor-pointer focus:placeholder-opacity-0 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 md:placeholder:text-base"
          />
          <span
            className={
              description === ""
                ? "absolute inset-y-0 right-2 my-auto flex h-7 w-7 items-center rounded-md bg-gray-light transition delay-100 ease-in-out"
                : "absolute inset-y-0 right-2 my-auto flex h-7 w-7 items-center rounded-md bg-primary-white transition delay-100 ease-in-out"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="mx-auto my-auto h-4 w-4 text-primary-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
