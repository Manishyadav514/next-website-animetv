import { CommonIcon } from "./CommonIcon";
import clsx from "clsx";

interface commonButtonProps {
  btnLabel: string;
  btnIcon?: any;
  btnType?: any;
  bgBlack?: boolean;
  isDisabled?: boolean;
  iconRight?: boolean;
  textButton?: boolean;
  customClass?: any;
  handleClick?: any;
}
export const CommonButton = ({
  btnLabel,
  btnIcon,
  btnType = "button",
  bgBlack = false,
  isDisabled = false,
  iconRight = false,
  customClass,
  handleClick,
  textButton,
}: commonButtonProps) => {
  if (textButton) {
    return (
      <button
        type={btnType}
        className="flex flex-row gap-1 items-center text-sm text-gray-500 dark:text-gray-400"
        onClick={handleClick}
      >
        {btnIcon && <CommonIcon icon={btnIcon} width={24} height={24} />}
        {btnLabel}
      </button>
    );
  } else {
    return (
      <button
        type={btnType}
        className={clsx(`${customClass} capitalize shadow-md flex flex-row gap-1 justify-center items-center py-2 px-3 text-white font-normal tracking-normal text-sm
      ${bgBlack ? "bg-black" : "bg-deco-red"}
      ${iconRight && "flex-row-reverse"}
      ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "easeLinear transform hover:scale-105 transition duration-500"
      } 
      `)}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {btnIcon && <CommonIcon icon={btnIcon} width={24} height={24} />}
        <span>{btnLabel}</span>
      </button>
    );
  }
};

export const TextButton = () => {
  return <div>TextButton</div>;
};
