import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { useState, useEffect, useRef } from "react";
import useTodoStore from "../store/useTodoStore";
import { CSVLink } from "react-csv";
import Navbar from "../components/Navbar";

const AccountSettings = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const { userName } = useTodoStore();

  const csvLink = useRef<any>(null);

  const deleteAccount = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/dashboard/account`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });

      localStorage.removeItem("token");
      setToken("");
      navigate("/home", { replace: true });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getUserData = async (e: any) => {
    e.preventDefault();
    try {
      console.log("download button pushed");
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwt_Token: localStorage.token },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const parseData = await res.json();

      setUserData(parseData);
      console.log(parseData);
    } catch (err: any) {
      console.error(err.message);
    }

    if (csvLink.current) {
      csvLink.current.link.click();
    }
  };

  return (
    <div className="flex w-full flex-col justify-center bg-[#1c1c1c]">
      <div className="mb-12 mt-2 flex w-full justify-center">
        <div className="w-5/6 md:mx-8 md:w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center pt-10 text-primary-white">
        <div className="container flex w-5/6 max-w-[590px] flex-col space-y-12 md:w-3/5">
          <div className="border-b border-[#3e3e3e] pb-6">
            <h2 className="text-lg font-medium">Account settings</h2>
            <p className="text-sm text-[#a0a0a0]">
              Update your username, download your data or delete your account
            </p>
          </div>
          <div className="space-y-8">
            <div className="mt-4 space-x-2">
              {/* udpate username */}
              <form className="flex h-full flex-row items-end justify-between space-y-4 border-b border-[#3e3e3e] pb-6">
                <div className="w-full">
                  <h3 className="text-md font-medium text-[#ededed]">
                    Update username
                  </h3>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="New username"
                      // value={email}
                      // onChange={(e) => onChange(e)}
                      className="block w-full rounded-md border-0 bg-transparent px-4 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-xs placeholder:text-placeholder-gray hover:cursor-pointer focus:placeholder-opacity-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="ml-[5%]">
                  <button
                    type="submit"
                    className="flex w-full text-nowrap rounded-md border border-[#3e3e3e] bg-[#2e2e2e] px-3 py-1.5  text-sm font-semibold leading-6 text-primary-white shadow-sm hover:brightness-125"
                  >
                    Update username
                  </button>
                </div>
              </form>
            </div>

            {/* download csv */}
            <div className="mt-4 space-x-2">
              <form className="flex h-full flex-row items-end justify-between space-y-4 border-b border-[#3e3e3e] pb-6">
                <div className="w-full">
                  <div className="mt-2">
                    <h3 className="text-md font-medium text-[#ededed]">
                      Download your data
                    </h3>
                    <p className="text-sm text-[#a0a0a0]">
                      Download a csv file of all of your data
                    </p>
                  </div>
                </div>

                <div className="ml-[5%]">
                  <button
                    type="submit"
                    onClick={(e) => getUserData(e)}
                    className="flex w-full text-nowrap rounded-md border border-[#3e3e3e] bg-[#2e2e2e] px-3 py-1.5 align-bottom text-sm font-semibold leading-6 text-primary-white shadow-sm hover:brightness-125"
                  >
                    Download data
                  </button>
                  <CSVLink
                    data={userData}
                    filename="todoList.csv"
                    className="h-full w-full"
                    ref={csvLink}
                    target="_blank"
                  ></CSVLink>
                </div>
              </form>
            </div>

            {/* delete account */}
            <div className="mt-4 space-x-2">
              <form className="flex h-full flex-row items-end justify-between space-y-4 border-b border-[#3e3e3e] pb-6">
                <div className="w-full">
                  <div className="mt-2">
                    <h3 className="text-md font-medium text-[#ededed]">
                      Delete account
                    </h3>
                    <p className="text-sm text-[#a0a0a0]">
                      There's no going back. Recommended to download your data
                      first.
                    </p>
                  </div>
                </div>

                <div className="ml-[5%]">
                  <button
                    type="submit"
                    className="flex w-full text-nowrap rounded-md border border-[#3e3e3e] bg-[#2e2e2e] px-3 py-1.5 align-bottom text-sm font-semibold leading-6 text-red-400 shadow-sm hover:brightness-125"
                  >
                    Delete account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
