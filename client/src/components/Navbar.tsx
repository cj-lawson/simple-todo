import { Fragment } from "react";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { Menu, Transition } from "@headlessui/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ name }: any) {
  const [name_, setName] = useState(name);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const logout = async (e: any) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setToken("");
      navigate("/home", { replace: true });
    } catch (err: any) {
      console.error(err.message);
    }
  };

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

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="">
          <a href="/">
            <svg
              width="94"
              height="93"
              viewBox="0 0 94 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M57.4692 18C57.4692 8.05888 65.5281 0 75.4692 0C85.4104 0 93.4692 8.05888 93.4692 18C93.4692 27.9411 85.4104 36 75.4692 36C65.5281 36 57.4692 27.9411 57.4692 18Z"
                fill="#EDEDED"
              />
              <path
                d="M76.5587 43.9771V56.9305C76.5587 62.6694 76.5555 66.729 76.2921 69.9005C76.0327 73.0242 75.5417 74.9265 74.7664 76.419C73.2561 79.3265 70.8855 81.6971 67.9781 83.2074C66.4856 83.9826 64.5833 84.4736 61.4596 84.733C58.288 84.9964 54.2285 84.9996 48.4896 84.9996H36.5383C30.7995 84.9996 26.7399 84.9964 23.5683 84.733C20.4446 84.4736 18.5423 83.9826 17.0498 83.2074C14.1424 81.6971 11.7718 79.3265 10.2615 76.419C9.4862 74.9265 8.99525 73.0242 8.73584 69.9005C8.47246 66.729 8.46924 62.6694 8.46924 56.9305V44.9793C8.46924 39.2404 8.47246 35.1808 8.73584 32.0092C8.99525 28.8855 9.4862 26.9832 10.2615 25.4907C11.7718 22.5833 14.1424 20.2127 17.0498 18.7024C18.5423 17.9271 20.4446 17.4362 23.5683 17.1768C26.7399 16.9134 30.7994 16.9102 36.5383 16.9102H49.4916C49.6072 14.1061 50.1669 11.4166 51.1022 8.91016L36.3604 8.91016C30.8395 8.91012 26.4477 8.9101 22.9062 9.2042C19.2789 9.50544 16.1867 10.1358 13.362 11.6031C8.99345 13.8724 5.43147 17.4344 3.16217 21.803C1.69486 24.6276 1.06452 27.7198 0.763286 31.3471C0.46918 34.8886 0.469207 39.2804 0.469239 44.8013V57.1084C0.469207 62.6294 0.46918 67.0211 0.763286 70.5626C1.06452 74.19 1.69486 77.2821 3.16217 80.1068C5.43147 84.4754 8.99345 88.0374 13.362 90.3067C16.1867 91.774 19.2789 92.4043 22.9062 92.7055C26.4477 92.9996 30.8393 92.9996 36.3602 92.9996H48.6674C54.1882 92.9996 58.5803 92.9996 62.1217 92.7055C65.749 92.4043 68.8412 91.774 71.6659 90.3067C76.0345 88.0374 79.5965 84.4754 81.8657 80.1068C83.3331 77.2821 83.9634 74.19 84.2646 70.5626C84.5587 67.0212 84.5587 62.6295 84.5587 57.1087V42.3665C82.0523 43.3018 79.3628 43.8615 76.5587 43.9771Z"
                fill="#EDEDED"
              />
            </svg>
          </a>
        </span>
      </div>
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="relative mt-2 flex items-center space-x-2 rounded-full px-2 py-1 hover:bg-[#282828]">
              <div className="relative inline-flex h-4 w-4 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
              <span className="text-sm text-[#707070]">{name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 text-[#707070]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-1.5 w-40 origin-top-right rounded-md border border-[#313635] bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-[#282828] text-white" : "text-white",
                        "group flex items-center px-4 py-1 text-sm"
                      )}
                    >
                      <PencilSquareIcon
                        className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Help
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={(e) => logout(e)}
                      href="#"
                      className={classNames(
                        active ? "bg-[#282828] text-white" : "text-white",
                        "group flex items-center px-4 py-1 text-sm"
                      )}
                    >
                      <TrashIcon
                        className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Log Out
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={(e) => deleteAccount(e)}
                      href="#"
                      className={classNames(
                        active ? "bg-[#282828] text-white" : "text-white",
                        "group flex items-center px-4 py-1 text-sm"
                      )}
                    >
                      <TrashIcon
                        className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Delete Account
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
