import React from "react";
import Link from "next/link";
import Image from "next/image";

const menuLink = [
  {
    label: "Explore",
    slug: "#3f34f",
    child: [
      { label: "Home", slug: "/" },
      { label: "Blog", slug: "/blog" },
      { label: "Contact Us", slug: "/contact" },
      { label: "About Us", slug: "/about" },
      { label: "Work with Us", slug: "/opening" },
      { label: "Term & Condition", slug: "/tmc" },
    ],
  },
  {
    label: "Category",
    slug: "#r34tr34",
    child: [
      { label: "Popular", slug: "/popul1ar" },
      { label: "Romance", slug: "/popula2r" },
      { label: "Sport", slug: "/popular3" },
      { label: "Action", slug: "/popula4r" },
    ],
  },
  {
    label: "Trending",
    slug: "#34",
    child: [
      { label: "Naruto", slug: "/populadsr" },
      { label: "One Piece", slug: "/populsfwar" },
      { label: "Summer Rendering", slug: "/p2opular" },
      { label: "Attack On Titan", slug: "/popvular" },
    ],
  },
  {
    label: "What's New",
    slug: "#34r3",
    child: [
      { label: "Porpular", slug: "/populadr", newPage: true },
      { label: "Popuelar", slug: "/populdar", newPage: true },
      { label: "Poprular", slug: "/po342pular" },
      { label: "Popul4ar", slug: "/34popular" },
    ],
  },
];

const MenuLinks = ({
  label,
  slug,
  child,
}: {
  label: string;
  slug: string;
  child: any | undefined;
}) => {
  return (
    <div key={slug} className="lg:w-1/4 md:w-1/2 w-full px-4 ">
      <h2 className="title-font font-large text-gray-100 tracking-widest text-base md:text-lg mb-1 uppercase">
        {label}
      </h2>
      <nav className="list-none mb-10">
        {child.map((subChild: any, index: number) => (
          <div key={`${subChild.label}-${index}`}>
            <Link href={subChild.slug} legacyBehavior>
              {subChild?.newPageOpen ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-gray-50  cursor-pointer hover:text-red-200"
                >
                  {subChild?.labl}
                </a>
              ) : (
                <a className="text-sm md:text-base text-gray-50  cursor-pointer hover:text-teal-200">
                  {subChild?.label}
                </a>
              )}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

const Footer = () => {

  return (
    <footer>
      <div className=" bg-lightTheme-800 dark:bg-darkTheme-900 text-white">
        <div className="max-w-[1300px] px-5 py-16 mx-auto flex lg:flex-row  flex-nowrap flex-col items-start md:items-center  md:flex-col md:flex-nowrap laptop:items-center desktop:w-3/4 ">
          <div className="w-64 flex-shrink-0 flex-col md:mx-0 mx-auto text-center md:text-left">
            {/* <a className="flex flex-col title-font font-medium items-center md:justify-start justify-center text-gray-100">
              <Link href="/" legacyBehavior>
                <p className="ml-3 text-xl cursor-pointer">
                  ANIME<span className="text-[#E64238]">TV</span>
                </p>
              </Link>
            </a> */}
            <div className="flex align-middle items-center justify-center text-white font-bold text-2xl">
              <Image
                width={120}
                height={40}
                src="/animetv.png"
                alt="logo"
                priority
                className="lg:w-[180px] lg:h-[60]"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap flex-row md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {menuLink.map((item: any) => (
              <MenuLinks
                label={item.label}
                slug={item.slug}
                child={item.child}
                key={item.label}
              />
            ))}
          </div>
        </div>
        <div className="md:hidden w-full h-[400px] block p-0 m-0 right-0">
          <div className="w-full h-full flex justify-end items-end">
            <Image
              width={400}
              height={351}
              alt="/images/spirited.png"
              src="/images/spirited.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-lightTheme-900 dark:bg-darkTheme-900 text-gray-400 py-4 px-5 flex flex-wrap justify-center align-middle">
        <p className="md:text-base text-sm lg:text-xl text-center cursor-pointer md:text-left">
          Copyright © 2022 animeTV
          <a className="ml-2 font-normal">by Manish Yadav</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
