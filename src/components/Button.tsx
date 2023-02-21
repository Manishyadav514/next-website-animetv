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
        className="cursor-pointer relative w-[50px] h-[26px] bg-black flex rounded-[50px] justify-between items-center p-[5px] scale-[1.5]"
        onClick={() => handleModeChange()}
      >
        <IconContext.Provider value={{ color: "#FFC0CB" }}>
          <BsMoonFill />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "yellow" }}>
          <BsSunFill />
        </IconContext.Provider>
        <div
          className={`absolute w-[20px] h-[20px] left-[2px] bg-white rounded-full ease-in-out transform transition duration-500 ${
            theme === "dark" && "translate-x-[26px]  "
          }`}
        ></div>
      </button>
    </div>
  );
};
