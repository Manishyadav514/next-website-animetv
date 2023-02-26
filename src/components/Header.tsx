// const routesLink = []

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaWindowClose, FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { ThemeSlider } from "./ThemeChager";
import { CommonButton } from "@/common/CommonButton";

export const menuLink = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "Genre",
    slug: "#genre",
    child: [
      { label: "action", slug: "/search?q=action" },
      { label: "romace", slug: "/search?q=action" },
      { label: "comedy", slug: "/search?q=action" },
      { label: "horror", slug: "/search?q=action" },
      { label: "slice of life", slug: "/search?q=slice&of&life" },
    ],
  },
  {
    label: "Blog",
    slug: "/blog",
  },
  {
    label: "Contact Us",
    slug: "/contact-us",
  },
];

export const Header2 = () => {
  // for mweb
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // slide header hide
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollYPostition] = useState(0);
  const onScroll = useCallback(
    (event: any) => {
      const { pageYOffset, scrollY } = window;
      setScrollYPostition(scrollY);
      // console.log({
      //   pageYOffset,
      //   scrollY,
      //   scrollPosition,
      // });
    },
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [onScroll]);

  // const MenuList = () => (
  //   <div className="flex flex-col gap-2 text-white lg:flex-row lg:justify-end lg:mr-4 justify-center items-center">
  //     {/* <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
  //       <Link href="#radarChart">Home</Link>
  //     </div> */}
  //     <span className="p-2 hover:bg-[#E64238] rounded cursor-pointer">
  //       <Link href="/">Home</Link>
  //     </span>
  //     <span className="p-2 hover:bg-[#E64238] rounded cursor-pointer">
  //       <Link href="/category">Category</Link>
  //     </span>
  //     <span className="p-2 hover:bg-[#E64238] rounded cursor-pointer">
  //       <Link href="/blog">Blog</Link>
  //     </span>
  //     <span
  //       className={`px-3 py-2 rounded cursor-pointer items-center justify-center hover:bg-gray-900 bg-[#E64238] text-white relative
  //     before:absolute before:bottom-[2px] before:left-0 before:w-0 hover:before:w-3 before:h-1 before:bg-[cyan] before:content-['']  hover:before:translate-x-0 hover:before:transition hover:before:ease-in-out hover:before:delay-500`}
  //     >
  //       <Link href="#doughnutChart">Contact</Link>
  //     </span>
  //   </div>
  // );

  return (
    <header>
      <div className="w-full bg-transparent absolute dark:bg-darkTheme-700 flex justify-center">
        <div
          className="p-2 lg:px-[50px] text-sm md:text-base lg:text-lg overflow-hidden max-w-[1000px] sticky z-[999] top-0 left-0 w-full flex justify-between items-center"
          id="navbar"
          ref={headerRef}
        >
          <div className="flex align-middle items-center justify-center text-white font-bold text-2xl cursor-pointer">
            <Link href="/" legacyBehavior>
              <Image
                width={140}
                height={70}
                src="/images/animetv.png"
                alt="logo"
                priority
                className="lg:w-[180px] mr-2 h-auto"
              />
            </Link>

            {/* <p className="text-deco-red"></p> */}
          </div>
          <div className={`hidden lg:block gap-2`}>
            {menuLink.map((item: any) => (
              // <>{item.label}</>
              //   <span
              //     key={item.label}
              //     className={`px-3 py-2 rounded cursor-pointer items-center justify-center hover:bg-gray-900 bg-[#E64238] text-white relative
              // before:absolute before:bottom-[2px] before:left-0 before:w-0 hover:before:w-3 before:h-1 before:bg-[cyan] before:content-['']  hover:before:translate-x-0 hover:before:transition hover:before:ease-in-out hover:before:delay-500`}
              //   >
              //     <Link href={item.slug}>{item.label}</Link>
              //   </span>
              <span
                key={item.label}
                className="p-2 mx-1 text-white hover:bg-[#E64238] rounded cursor-pointer"
              >
                <Link href={item.slug} legacyBehavior>
                  <span>
                    {item.label}{" "}
                    {item?.child?.length > 0 && (
                      <span className="text-xl">&#8250;</span>
                    )}{" "}
                  </span>
                </Link>
                {/* {item?.child?.length > 0 && <FaCaretDown />} */}
              </span>
            ))}
            {/* <MenuList /> */}
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="cursor-pointer px-1 md:px-3 text-white text-[1.5rem] md:text-[2rem]">
              <Link href="/search" legacyBehavior>
                <BsSearch />
              </Link>
            </div>
            <ThemeSlider />
            <div className="cursor-pointer px-1 md:px-3 text-white text-[1.5rem] md:text-[2rem]">
              <Link href="/auth" legacyBehavior>
                <FaUserCircle />
              </Link>
            </div>
            <div
              className="rounded p-1 md:p-2 cursor-pointer flex flex-row bg-[#222222] text-white items-center lg:hidden"
              onClick={toggle}
            >
              <div className="mr-1 hidden md:block lg:inline-flex lg:w-auto w-full rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                Menu
              </div>
              <div className="text-[1.3rem]">
                <FaBars />
              </div>
            </div>
            {/* <CommonButton
              btnIcon="uis:bars"
              btnLabel="Menu"
              customClass="bg-darkTheme-800 hover:scale-100"
              iconRight
              handleClick={toggle}
            /> */}
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isOpen
            ? `fixed w-full h-full ease-linear transform transition duration-500 z-[999] left-0 top-0 bg-[#2184a7] opacity-[1]`
            : `fixed w-full h-full ease-linear transform transition duration-500 z-[999] left-0 top-0 -translate-x-full opacity-[1] bg-[#0d0d0d]`
        }`}
      >
        <div
          className="absolute top-5 right-6 bg-transparent text-[2rem] cursor-pointer outline-none"
          onClick={toggle}
        >
          <FaWindowClose />
        </div>
        <div
          className="h-full flex flex-col gap-5 mt-32 items-center text-[1.5rem] text-white"
          onClick={toggle}
        >
          {menuLink.map((item: any) => (
            // <>{item.label}</>
            //   <span
            //     key={item.label}
            //     className={`px-3 py-2 rounded cursor-pointer items-center justify-center hover:bg-gray-900 bg-[#E64238] text-white relative
            // before:absolute before:bottom-[2px] before:left-0 before:w-0 hover:before:w-3 before:h-1 before:bg-[cyan] before:content-['']  hover:before:translate-x-0 hover:before:transition hover:before:ease-in-out hover:before:delay-500`}
            //   >
            //     <Link href={item.slug}>{item.label}</Link>
            //   </span>
            <span
              key={item.label}
              className="p-2 mx-1 text-white hover:bg-[#E64238] rounded cursor-pointer"
            >
              <Link href={item.slug}>{item.label}</Link>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};
