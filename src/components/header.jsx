import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/actions";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguageAction] = useLocalStorage("language", "tr");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(document.documentElement);
  function clickHandler(event) {
    const { value, name } = event.target;

    if (name === "toggle") {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    } else {
      const newLang = language === "tr" ? "en" : "tr";
      setLanguageAction(newLang);
      dispatch(setLanguage(newLang));
    }
  }

  return (
    <div className="m-auto pt-5 w-4/6 mb-24">
      <div className="flex gap-3 m-auto justify-end ">
        <div className="flex gap-3 justify-center align-middle items-center mb-[31px]">
          <div className="relative inline-block w-11 h-5 justify-center align-middle ">
            <input
              id="switch-component-purple"
              type="checkbox"
              name="toggle"
              checked={theme === "light"}
              onChange={clickHandler}
              className={`peer appearance-none w-11 h-5 rounded-full cursor-pointer transition-colors duration-300 ${
                theme === "dark" ? "bg-[#4731D3]" : "bg-[#3A3A3A]"
              }`}
            />

            <label
              htmlFor="switch-component-purple"
              className={`
    absolute 
    w-4 h-4 
    rounded-full 
    cursor-pointer 
    transition-all duration-300
    top-1/2 left-[23px]
    -translate-y-1/2
    peer-checked:translate-x-[-18px]
    ${
      theme === "light"
        ? "bg-transparent shadow-[inset_4px_0_0_2px_#FDE047]"
        : "bg-[#FFE86E] shadow-sm"
    }
  `}
            />
          </div>
          <label
            htmlFor="switch-component-purple"
            className="text-[#777777] dark:text-[#D9D9D9]"
          >
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </label>
          <span className="dark:text-[#777777]">|</span>
          <div className="pl-3 text-[#777777]">
            {language === "tr" ? (
              <>
                <span className="dark:text-[#D9D9D9]">TO </span>

                <span
                  className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7]"
                  onClick={clickHandler}
                >
                  ENGLISH
                </span>
              </>
            ) : (
              <>
                {" "}
                <span
                  className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7]"
                  onClick={clickHandler}
                >
                  TÜRKÇE
                </span>
                <span className="dark:text-[#D9D9D9]">'YE GEÇ </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex text-center">
          <p className="bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full px-7 py-5 rotate-30 text-[#7B61FF] dark:text-[#8F88FF] font-bold text-2xl">
            A
          </p>
        </div>

        <div className="flex py-5 gap-5.5">
          {data.navItems.map((item) => {
            return (
              <Link
                to={item.href}
                smooth={true}
                easing="easeInOutCubic"
                className=" cursor-pointer"
                offset={-300}
              >
                <button
                  id={item.id}
                  className="px-8 py-3 text-[#777777] text-lg cursor-pointer"
                >
                  {item.label}
                </button>
              </Link>
            );
          })}

          <a
            id="3"
            href={data.navCta.href}
            className=" text-[#3730A3] border-1 px-10 py-3 rounded-md text-lg dark:bg-[#FFFFFF]"
          >
            {data.navCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
