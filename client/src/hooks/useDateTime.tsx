import { useState, useEffect } from "react";

export default function useDateTime() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1 * 60 * 60 * 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex justify-center">
      <p>
        {new Intl.DateTimeFormat("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(date)}
      </p>
    </div>
  );
}
