import useDateTime from "../hooks/useDateTime";
import { CheckIcon } from "@heroicons/react/24/outline";
import useTodoStore from "../store/useTodoStore";

export default function StatKeeper() {
  const { completeTodoCount, incompleteTodoCount } = useTodoStore();

  const date = useDateTime();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {date}
      <div className="flex h-full flex-row items-center divide-x divide-solid divide-[#A2A0A2] rounded-full bg-[#252628] px-8 py-4 text-[#A2A0A2]">
        {/* <div className="px-2.5 text-xs sm:text-base md:px-6">
          <h1>{incompleteTodoCount} open tasks</h1>
        </div> */}
        <div className="flex items-center space-x-2 px-2.5 text-xs sm:text-base md:px-6">
          <CheckIcon className="h-4 w-4" />
          <h1>{completeTodoCount} tasks completed</h1>
        </div>
      </div>
    </div>
  );
}
