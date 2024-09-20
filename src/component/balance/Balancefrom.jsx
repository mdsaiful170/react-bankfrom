import { useState } from "react";

function BalancefromsSection({ balance }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState(1);

  

  function FromsubmiHandel(e) {
    e.preventDefault();

    if (text === "" || amount == "") {
      alert("please filed the input");
    } else {
      setId(id + 1);
      const date = new Date();
      balance({ text, id: id, dt: date, amount: +amount });
      setText("")
      setAmount("")
      const input = document.querySelector(`#box`)
      input.focus()
    }
  }

  return (
    <>
      <div className="container mx-auto px-3 relative" >


        <form
          action=""
          className="  px-3 border border-stone-300  dark:border-slate-700 shadow-md p-3 rounded-md  gap-5 dark:shadow-none  max-w-xl mx-auto mt-10"
          onSubmit={FromsubmiHandel}
        >
          <h1 className="capitalize text-center text-xl font-semibold text-slate-400 font-mono tracking-wide mb-2">
            deposit Form
          </h1>
          <div className="">
            <label className="text-lg font-normal text-gray-400">Description:</label>
            <br />
            <input
              className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
              onChange={(e)=>setText(e.target.value)}
              type="text"
              name="text"
              value={text}
              id="box"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-normal text-gray-400">Diposit:</label>
            <br />
            <input
              className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
              onChange={(e)=>setAmount(e.target.value)}
              type="number"
              name="amount"
              value={amount}
              id="box"
              required
            />
          </div>
          <input
            type="submit"
            value="Add"
            className="px-6  cursor-pointer mx-auto block mt-5  w-1/3 rounded-full border border-stone-300 dark:border-slate-700 hover:bg-sky-700 transition-all duration-200 hover:text-stone-200 py-1 text-lg font-medium"
          />
        </form>
      </div>
    </>
  );
}

export default BalancefromsSection;
