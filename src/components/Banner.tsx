import React, { useState } from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CommonButton } from "@/components/CommonButton";

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
  const [bannerIndex, setIndex] = useState(1);
  // console.log({ bannerData, bannerIndex });

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
        className="relative w-full h-[90vh] flex flex-col justify-center m-0 ease-in-out transform transition duration-500"
        style={{
          backgroundImage: `url(${bannerData[bannerIndex].imageHref})`,
          // backgroundImage: `linear-gradient(rgb(0 0 0 / 79%),rgb(19 43 59 / 22%), rgb(0 0 0 / 84%)), url(${bannerData[bannerIndex].imageHref})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute w-full h-auto overflow-hidden top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <video autoPlay loop muted className="h-auto w-screen">
            <source
              src="https://cdn.pixabay.com/vimeo/662525884/anime-103434.mp4?rendition=source&expiry=1678018172&hash=5890a30998502aa12c7eb3f589ae876efa76127c"
              type="video/mp4"
            />
          </video>
        </div> */}
        <div className=" absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent dark:via-transparent from-darkTheme-800 to-lightTheme-100 dark:from-darkTheme-800 dark:to-darkTheme-800"></div>
        <div className="text-white z-[888] max-w-[900px] mt-12 pl-4 pr-14 py-24 md:px-12">
          <div className="text-[25px] md:text-[3rem] lg:text-[60px] font-semibold pb-[0.3rem]">
            {bannerData[bannerIndex].name}
          </div>
          <p className="text-sm md:text-base lg:text-lg lg:w-[60rem] leading-tight">
            {bannerData[bannerIndex].description}
          </p>
          <div className="flex flex-row mt-3 gap-4">
            <Link href="/about" legacyBehavior>
              <CommonButton
                btnLabel="Watch Now"
                btnIcon="material-symbols:slow-motion-video-rounded"
                customClass="rounded-full"
              />
            </Link>
            <Link href="/about" legacyBehavior>
              <CommonButton
                btnLabel="View"
                btnIcon="ic:baseline-arrow-forward"
                customClass="rounded-full border-2 border-deco-red"
                bgBlack
                iconRight
              />
            </Link>
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
