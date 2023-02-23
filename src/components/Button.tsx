import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useTheme } from "next-themes";
import { Console } from "console";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const handleModeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const Icon = () => {
    if (theme == "dark") {
      return (
        <IconContext.Provider value={{ color: "#FFC0CB" }}>
          <BsMoonFill />
        </IconContext.Provider>
      );
    } else {
      return (
        <IconContext.Provider value={{ color: "yellow" }}>
          <BsSunFill />
        </IconContext.Provider>
      );
    }
  };

  return (
    <div className="flex justify-end p-5">
      <button
        className="w-18 px-4 py-2 font-bold text-white bg-black rounded-full"
        onClick={() => handleModeChange()}
      >
        <Icon />
      </button>
    </div>
  );
};

export const ThemeSlider = () => {
  const { theme, setTheme } = useTheme();
  const handleModeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button
        className="cursor-pointer relative w-[40px] h-[20px]  md:w-[50px] md:h-[26px] bg-lightTheme-600 dark:bg-darkTheme-600 flex rounded-[50px] justify-between items-center p-[5px] scale-[1.5]"
        onClick={() => handleModeChange()}
      >
        <IconContext.Provider value={{ color: "#FFC0CB" }}>
          <BsMoonFill className="w-3 h-3 md:w-4 md:h-4 text-[#FFC0CB] " />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "yellow" }}>
          <BsSunFill className="w-3 h-3 md:w-4 md:h-4" />
        </IconContext.Provider>
        <div
          className={`absolute w-[15px] h-[15px] md:w-[20px] md:h-[20px] left-[2px] bg-white rounded-full ease-in-out transform transition duration-500 ${
            theme === "dark" && "translate-x-[19px] md:translate-x-[26px]"
          }`}
        ></div>
      </button>
    </div>
  );
};
