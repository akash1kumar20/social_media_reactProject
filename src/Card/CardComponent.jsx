import { useEffect, useState } from "react";
const CardComponent = (props) => {
  const [date, setNewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-[95%] max-h-[100vh] md:mx-[15%] mx-3 rounded-md bg-zinc-700 z-50 shadow-2xl drop-shadow-2xl text-white mt-2 py-4 overflow-y-auto">
      <div className="flex justify-between mx-4">
        <p>{date.toLocaleDateString()}</p>
        <p>{date.toLocaleTimeString()}</p>
      </div>
      {props.children}
    </div>
  );
};

export default CardComponent;
