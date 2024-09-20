

function TotalCostsection({diposit,cost}) {
  return (
    <>
      <div className="px-3 container mx-auto relative">
      <div className="absolute top-[10%] left-[41%] w-52 h-52 rounded-full bg-fuchsia-100 blur-[180px]  opacity-90 "></div>
      <div className="absolute top-[10%] left-[41%] w-52 h-52 rounded-full bg-violet-400 blur-[180px] opacity-90  "></div>
      <div className="absolute top-[10%] left-[41%] w-52 h-52 rounded-full bg-violet-400 blur-[180px]   "></div>
        <div className="flex items-center justify-evenly gap-x-12 z-10">
          <div className=" bg-transparent border w-1/3  rounded-md  mx-auto mt-8 border-stone-300 shadow-sm dark:border-slate-700  py-5 p-3 text-center ">
            <h1 className="text-xl text-gray-400">Total Deposit</h1>
            <p className="text-emerald-300/90 text-lg font-medium mt-2">${diposit}</p>
          </div>
          <div className=" bg-transparent border rounded-md mx-auto mt-8 border-stone-300 dark:border-slate-700 w-1/3 py-5 p-3 text-center ">
            <h1 className="text-xl text-gray-400">Expenses</h1>
            <p className="text-red-300/90 text-lg font-medium mt-2">${cost}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCostsection;
