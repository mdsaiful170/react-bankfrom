import { useState } from "react";

function FromScction() {
  const [fromdata, setFrom] = useState({
    name: "",
    fname: "",
    mname: "",
    email: "",
    num: "",
    dob: "",
    subject: "",
    address: "",
    msg: "",
  });
  const [newfromdata, newsetFrom] = useState([]);
  const [counter, setCounter] = useState(1);

  const inputHandel = (e) => {
    const { name, value } = e.target;
    setFrom((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SubmitHandel = (e) => {
    e.preventDefault();
    if (fromdata.name === "") {
      alert("plase field the input");
    } else {
      setCounter(counter + 1);
      const currenttime = new Date();
      newsetFrom((prevData) => [
        ...prevData,
        { ...fromdata, id: counter, dt: currenttime },
      ]);
      setFrom({
        name: "",
        fname: "",
        mname: "",
        email: "",
        num: "",
        dob: "",
        subject: "",
        address: "",
        msg: "",
      });
    }
  };

  return (
    <>
      <div className="relative container mx-auto mt-12">
        <div className="absolute left-0 !top-[-20%] w-80  opacity-25 rounded-full h-80 bg-sky-400  blur-[170px] -z-10"></div>
        <div className="absolute right-0 !top-[-20%] w-80  opacity-30 dark:opacity-30 rounded-full h-80 bg-emerald-400  blur-[180px] -z-10 mix-blend-exclusion dark:mix-blend-luminosity"></div>
        <div className="px-3 z-10">
          <h1 className="text-center text-neutral-700 font-extrabold text-3xl lg:text-4xl tracking-[.1rem] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-red-100 dark:to-sky-400">Service From</h1>
          <form
            onSubmit={SubmitHandel}
            className="grid grid-cols-1 mt-5 lg:grid-cols-3 px-3 border border-stone-300  dark:border-slate-700 shadow-md p-3 rounded-md  gap-5 dark:shadow-none  "
          >
            <div className="">
              <label className="text-lg font-normal text-gray-400">Name:</label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="text"
                name="name"
                value={fromdata.name}
                id=""
                required
              />
            </div>
            <div className="">
              <label className="text-lg font-normal text-gray-400">
                FatherName:
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="text"
                name="fname"
                value={fromdata.fname}
                id=""
                required
              />
            </div>
            <div className="">
              <label className="text-lg font-normal text-gray-400">
                MotherName:
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="text"
                name="mname"
                value={fromdata.mname}
                id=""
                required
              />
            </div>

            <div className="">
              <label className="text-lg font-normal text-gray-400">
                Email:
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="email"
                name="email"
                value={fromdata.email}
                id=""
                required
              />
            </div>
            <div className="">
              <label className="text-lg font-normal text-gray-400">
                Number:
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="number"
                name="num"
                value={fromdata.num}
                id=""
                required
              />
            </div>
            <div className="">
              <label className="text-lg font-normal text-gray-400">DOB:</label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="date"
                name="dob"
                value={fromdata.dob}
                id=""
                required
              />
            </div>
            <div className="">
              <label className="text-lg font-normal text-gray-400">
                Subject
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="text"
                name="subject"
                value={fromdata.subject}
                id=""
                required
              />
            </div>

            <div className="">
              <label className="text-lg font-normal text-gray-400">
                Addres
              </label>
              <br />
              <input
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35    focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                onChange={inputHandel}
                type="text"
                name="address"
                value={fromdata.address}
                id=""
                required
              />
            </div>
            <div className="col-span-2">
              <label className="text-lg font-normal text-gray-400">
                Message
              </label>
              <br />
              <textarea
                name="msg"
                className="text-base font-medium normal-case border px-3 border-stone-300 dark:border-slate-50/35  resize-none  focus:border-red-400 valid:border-emerald-400 focus:valid:border-emerald-400 focus:invalid:border-red-400 rounded-md bg-transparent  outline-none w-full  focus:outline-none py-1"
                value={fromdata.msg}
                id=""
                required
                onChange={inputHandel}
              ></textarea>
            </div>
            <div className=" place-content-center ">
              <input
                type="submit"
                value="Submit Now"
                className="mt-5 cursor-pointer hover:bg-sky-600 
                  border border-stone-300 dark:border-slate-700 transition-all duration-200 hover:text-stone-100 w-1/2 h-10 text-lg font-bold rounded-full  "
              />
            </div>
          </form>

          <div className="mt-5">
            <div className="relative overflow-auto shadow-sm  rounded-md border border-stone-300 dark:border-slate-700">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-900 dark:text-gray-400">
                  <tr className="w-auto">
                    <th scope="col" className="px-6 py-3">
                      id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      FatherName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      MotherName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Dob
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Addres
                    </th>

                    <th scope="col" className="px-6 py-3">
                      message
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DateTime
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-auto ">
                  {newfromdata.map((res) => (
                    <tr
                      key={Math.random()}
                      className="w-auto odd:bg-white odd:dark:bg-gray-900 !max-h-[8rem] !overflow-auto  even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {res.id}
                      </th>
                      <td className="px-6 py-4  ">{res.name}</td>
                      <td className="px-6 py-4  ">{res.fname}</td>
                      <td className="px-6 py-4  ">{res.mname}</td>
                      <td className="px-6 py-4  ">{res.email}</td>
                      <td className="px-6 py-4  ">{res.num}</td>
                      <td className="px-6 py-4  ">{res.dob}</td>
                      <td className="px-6 py-4  ">{res.subject}</td>
                      <td className="px-6 py-4  ">{res.address}</td>
                      <td className="px-6 py-4  ">{res.msg}</td>
                      <td className="px-6 py-4  ">{res.dt.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromScction;
