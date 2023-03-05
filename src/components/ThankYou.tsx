import React from "react";
import Image from "next/image";

interface ThankYouProps {
  labelPrimary: string;
  labelSub: string;
  labelSecondry: string;
  imagedata: { src: string; width: number; height: number };
}

export const ThankYou = ({
  labelPrimary,
  labelSub,
  labelSecondry,
  imagedata,
}: ThankYouProps) => {
  return (
    <div className=" w-full lg:p-16 p-8 text-aquaLight1 bg-aquaDark2 bg- flex lg:flex-row lg:gap-16 gap-4 flex-col justify-center items-center align-middle text-center">
      <div className="">
        <h1 className="font-bold  lg:text-5xl text-4xl leading-12">
          {labelPrimary}
          <span className="text-aquaBright4"> {labelSub}</span>
        </h1>
        <p className="my-5 md:my-10  font-light text-xl md:text-3xl minlg:text-4xl md:leading-16 ">
          {labelSecondry}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={imagedata.width}
          height={imagedata.height}
          src={imagedata.src}
          alt={imagedata.src}
        />
      </div>
    </div>
  );
};
