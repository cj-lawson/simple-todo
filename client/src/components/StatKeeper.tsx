import useDateTime from "../hooks/useDateTime";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function StatKeeper() {
  const date = useDateTime();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {date}
      <div className="flex h-full flex-row items-center justify-center space-x-2 rounded-full bg-[#252628] px-8 py-4 text-[#A2A0A2]">
        <CheckIcon className="h-[24px] w-[24px]" />
        <h1>9 tasks completed</h1>
      </div>
    </div>
  );
}
