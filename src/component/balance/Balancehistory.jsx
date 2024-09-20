
function BalancehistorySection({mainbalance}) {
  return (
    <>
      <div className="relative px-3 container mx-auto my-6">

        <div className="relative overflow-x-auto border border-stone-300 rounded-md  dark:border-slate-700">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  descriptions
                </th>
                <th scope="col" className="px-6 py-3">
                  totalCost
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
            {
              mainbalance.map((res)=>(
                <tr key={Math.random()} className={` ${res.amount > 0 ? "bg-emerald-50 dark:bg-slate-950":"bg-red-50 dark:bg-gray-900"} border-b  dark:border-gray-700 `}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {res.id}
                </th>
                <td className="px-6 py-4">{res.text}</td>
                <td className="px-6 py-4">{res.amount}</td>
                <td className="px-6 py-4">{res.dt.toLocaleString()}</td>
              </tr>
              ))
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BalancehistorySection;
