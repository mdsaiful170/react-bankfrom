import { useEffect, useState } from "react";

function HeaderSection() {

  const [dark, setDark] = useState("🌚");

  useEffect(() => {
    const mode = localStorage.getItem("mode") || "light";
    if (mode === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  }, []);

  const DarkHandle = () => {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
      lightMode();
    } else {
      darkMode();
    }
  };

  const darkMode = () => {
    const html = document.querySelector("html");
    html.classList.add("dark");
    setDark("🌞");
    localStorage.setItem("mode", "dark");
  };

  const lightMode = () => {
    const html = document.querySelector("html");
    html.classList.remove("dark");
    setDark("🌚");
    localStorage.setItem("mode", "light");
  };




  return (
    <>
      <header className="px-3 py-3 fixed left-0 top-0 right-0   z-[120] bg-neutral-50 dark:bg-slate-900  dark:border-slate-800 shadow-sm  border-b border-stone-300">
        <div className="container mx-auto flex  items-center z-50">
          <div className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-neutral-400 font-bold align-text-top">
            <a href="#logo">OtemsicBarand</a>
          </div>

          <nav className="mx-auto hidden lg:block ">
            <ul className="flex items-center gap-5 lg:gap-8 list-none">
              <li className="inline-block *:text-gray-700 text-lg  font-medium ">
                <a href="#home"></a>Home
              </li>
              <li className="inline-block *:text-gray-700 text-lg  font-medium ">
                <a href="#about"></a>About
              </li>
              <li className="inline-block *:text-gray-700 text-lg  font-medium ">
                <a href="#service"></a>Service
              </li>
              <li className="inline-block *:text-gray-700 text-lg  font-medium ">
                <a href="#products"></a>Products
              </li>
              <li className="inline-block *:text-gray-700 text-lg  font-medium ">
                <a href="#contact"></a>Contact
              </li>
            </ul>
          </nav>
          <div className=" ms-auto gap-5  lg:ms-0 flex items-center">
            <div className="font-mono font-bold border border-r-slate-300 px-3 rounded-full text-lg ">
              <a href="" onClick={DarkHandle}>
                {dark}
              </a>
            </div>
            <button
              className="text-base font-medium bg-gray-900 dark:bg-stone-100 dark:text-gray-800 dark:hover:text-white text-slate-50 px-6 lg:text-lg  py-2 rounded-full hover:bg-indigo-500  "
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSection;
