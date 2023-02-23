import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsInstagram, BsArrowRightShort } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const carouselData = [
  {
    name: "Chainsaw Man",
    description: `Denji is robbed of a normal teenage life, left with nothing but his
    deadbeat father's overwhelming debt. His only companion is his pet,
    the chainsaw devil Pochita, with whom he slays devils for money that
    inevitably ends up in the yakuza's pockets. All Denji can do is
    dream of a good, simple life: one with delicious food and a
    beautiful girlfriend by his side...`,
    imageHref: "/images/makima.jpg",
  },
  {
    name: "Chainsaw Man",
    description: `Denji is robbed of a normal teenage life, left with nothing but his
    deadbeat father's overwhelming debt. His only companion is his pet,
    the chainsaw devil Pochita, with whom he slays devils for money that
    inevitably ends up in the yakuza's pockets. All Denji can do is
    dream of a good, simple life: one with delicious food and a
    beautiful girlfriend by his side...`,
    imageHref: "/images/makima.png",
  },
];

export const Banner = () => {
  const [bannerData, setCaraouselData] = useState(carouselData);
  const [bannerIndex, setIndex] = useState(0);
  console.log({ bannerData, bannerIndex });

  // setInterval(() => {
  //   if (bannerIndex < bannerData.length - 1) {
  //     setIndex(bannerIndex + 1);
  //   } else {
  //     setIndex(0);
  //   }
  // }, 2000);
  // useEffect(()=>{

  // },[bannerIndex])

  return (
    <>
      <div
        className="relative w-full h-[70vh] flex flex-col justify-center m-0 ease-in-out transform transition duration-500"
        style={{
          // backgroundImage: `url("/images/anime-girl.png")`,
          backgroundImage: `linear-gradient(rgb(0 0 0 / 79%),rgb(19 43 59 / 22%), rgb(0 0 0 / 84%)), url(${bannerData[bannerIndex].imageHref})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white z-[888] max-w-[900px] mt-12 pl-4 pr-14 py-24 md:px-12">
          <div className="text-[25px] md:text-[3rem] lg:text-[60px] font-semibold pb-[0.3rem]">
            {bannerData[bannerIndex].name}
          </div>
          <p className="text-sm md:text-base lg:text-lg lg:w-[60rem] leading-tight">
            {bannerData[bannerIndex].description}
          </p>
          <div className="flex flex-row mt-3 gap-4">
            <Link href="/about" legacyBehavior>
              <button className="capitalize shadow-md bg-deco-red rounded-full flex flex-row justify-center items-center easeLinear transform hover:scale-105 transition duration-500 py-2 px-3">
                <span className="text-white text-[23px] mr-1">
                  <MdOutlineSlowMotionVideo />
                </span>
                <span className="text-sm md:text-lg">Watch Now</span>
              </button>
            </Link>
            <Link href="/about" legacyBehavior>
              <button className="capitalize shadow-md border-2 bg-gray-900 border-deco-red rounded-full flex flex-row justify-center items-center easeLinear transform hover:scale-105 transition duration-500 py-2 px-3">
                <span className="text-sm md:text-lg">View</span>
                <span className="text-white text-lg ml-1">
                  <BsArrowRightShort />
                </span>
              </button>
            </Link>
            {/* <Link href="/about" legacyBehavior>
              <button className="capitalize rounded-full easeLinear transform hover:scale-105 transition duration-500 border-2 bg-gray-900 border-deco-red px-3 py-2">
                Details
              </button>
            </Link> */}
          </div>
        </div>
        <div className="z-[888] absolute right-5 flex flex-col gap-2 text-3xl">
          <Link href="/" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.3] transition ease-in cursor-pointer"
            >
              <FaFacebookMessenger style={{ color: "#448AFF" }} />
            </a>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <a className="hover:scale-[1.3] transition ease-in cursor-pointer">
              <HiOutlineMail style={{ color: "#EA4335" }} />
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/awareness_hall/"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.3] transition ease-in cursor-pointer"
            >
              <BsInstagram style={{ color: "#DE6666" }} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
