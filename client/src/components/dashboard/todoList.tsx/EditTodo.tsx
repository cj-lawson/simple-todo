import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  id: number;
  todoDescription: string;
  completed: boolean;
}

export default function EditTodo({ id, todoDescription, completed }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState(todoDescription);

  const updateDescription = async (e: any) => {
    e.preventDefault();
    try {
      const body = { description, completed };
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="absolute z-0 -my-2 h-full w-full rounded-md bg-[#343434] p-1.5 text-xs text-[#a0a0a0] opacity-0 "
      ></button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-5/6 transform overflow-hidden rounded-lg bg-[#1E1E1E] px-4 pb-4 pt-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div className="flex w-full justify-end">
                    <XMarkIcon
                      onClick={closeModal}
                      className="h-6 w-6 cursor-pointer text-white"
                    />
                  </div>
                  <div>
                    <div className="mt-3 text-left sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="mb-3 text-base font-medium leading-6 text-white"
                      >
                        Edit your task
                      </Dialog.Title>
                      <form
                        action=""
                        className="flex items-center space-x-6"
                        onSubmit={(e) => updateDescription(e)}
                      >
                        <input
                          autoFocus
                          type="text"
                          className="block w-full rounded-lg border-0 bg-[#292929] py-1.5 py-3 pl-4 text-gray-200 shadow-sm ring-1 ring-inset ring-[#292929] placeholder:text-zinc-500 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Enter a task"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
