import React from "react";
import Image from "next/image";
import { BiError } from "react-icons/bi";

interface NoDataProps {
  labelPrimary: string;
  labelSub: string;
  labelSecondry: string;
  imagedata: { src: string; width: number; height: number };
}

export const NoData = ({
  labelPrimary,
  labelSub,
  labelSecondry,
  imagedata,
}: NoDataProps) => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex lg:flex-row items-center flex-col p-2 gap-2">
          <div className="lg:mt-[8rem] mt-0 mb-8">
            <span className="bg-white dark:bg-darkTheme-800 rounded-xl p-9 border shadow-lg shadow-lightTheme-200 dark:shadow-darkTheme-700 border-lightTheme-200 dark:border-darkTheme-700  lg:text-2xl font-medium text-xl">
              Sorry! No data available.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={500}
              height={500}
              src={"/images/toronto.png"}
              alt={"asas"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
