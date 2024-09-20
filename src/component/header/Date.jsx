import { useState } from "react";

function DateSection() {
  const [daytiem, setdaty] = useState("");
  const [daydate, setdatebox] = useState("");
  function timedatebox() {
    setInterval(() => {
      const x = new Date();
      setdaty(x.toLocaleTimeString());
    }, 1000);
  }
  function timedatebox2() {
    setInterval(() => {
      const x = new Date();
      setdatebox(x.toLocaleDateString());
    }, 1000);
  }
  timedatebox();
  timedatebox2();

  return (
    <>
      <div className="container mx-auto px-3 mt-20 relative">
        
     <div className="absolute !top-[-90%] left-[41%] w-52 h-52 rounded-full bg-fuchsia-100 blur-[180px]  opacity-90 "></div>
      <div className="absolute !top-[-90%] left-[41%] w-52 h-52 rounded-full bg-violet-100 blur-[180px]"></div>


        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text dark:from-sky-200 from-gray-900 dark:to-stone-600 to-fuchsia-500 bg-gradient-to-r ">{daytiem}</h1>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text dark:from-sky-200 from-gray-900 dark:to-stone-800 to-fuchsia-500 bg-gradient-to-r ">{daydate}</h1>
        </div>
      </div>
    </>
  );
}

export default DateSection;
