import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import { useState, useEffect } from "react";

// components
import TodoApp from "../dashboard/todoList.tsx/TodoApp";
import Navbar from "../Navbar";

interface Todo {
  user_name: string;
  todo_id: number;
  description: string;
  completed: boolean;
}

const Dashboard = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const [todosChange, setTodosChange] = useState(false);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/dashboard/", {
          method: "GET",
          headers: { jwt_Token: localStorage.token },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const parseData = await res.json();

        setAllTodos(parseData);
        setName(parseData[0]?.user_name || ""); // Set name from first todo user_name
      } catch (err: any) {
        console.error(err.message);
      } finally {
        // setLoading(false);
      }
    };

    getProfile();
    setTodosChange(false);
  }, [todosChange]);

  return (
    <div className="flex w-full flex-col justify-center bg-[#1c1c1c]">
      <div className="mb-12 mt-2 flex w-full justify-center">
        <div className="w-5/6 md:mx-8 md:w-full">
          <Navbar name={name} />
        </div>
      </div>
      <div className="flex justify-center pt-10 text-primary-white">
        <div className="container flex w-5/6 max-w-[590px] flex-col space-y-12 md:w-3/5">
          {/* Main content */}
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
          <>
            <TodoApp todoList={allTodos} setTodosChange={setTodosChange} />
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
