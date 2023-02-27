import Image from "next/image";
import Link from "next/link";

export const MoviePortrait = () => {
  return (
    <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg shadow-black bg-white dark:bg-darkTheme-700">
      <Image
        width={200}
        height={300}
        src="/data/portrait12.jpg"
        alt="grass.png"
        className="h-auto w-full"
      />
      <div className="py-3 flex flex-col gap-2 ">
        <div className="text-xs md:text-sm">
          <span className="inline-block text-gray-200 rounded-full px-2 md:px-3 py-1 font-semibold bg-darkTheme-600 mr-2 mb-2">
            Active
          </span>
          <span className="inline-block text-gray-200 rounded-full px-2 md:px-3 py-1 font-semibold bg-darkTheme-600 mr-2 mb-2">
            Movie
          </span>
        </div>
        <div className="font-bold text-xl">Weathering With You</div>
      </div>
    </div>
  );
};

export const MovieLandscape = () => {
  return (
    <div className="max-w-sm h-[150px] flex flex-row rounded overflow-hidden shadow-lg shadow-black bg-white dark:bg-darkTheme-700">
      <Image
        width={100}
        height={150}
        src="/data/portrait12.jpg"
        alt="grass.png"
        className="h-full w-auto"
      />
      <div className="px-3 py-2 flex flex-col justify-between">
        <div className="text-xs">
          <span className="inline-block text-gray-200 rounded-full px-2 py-1 font-semibold bg-darkTheme-600 mr-2 mb-2">
            Active
          </span>
          <span className="inline-block text-gray-200 rounded-full px-2 py-1 font-semibold bg-darkTheme-600 mr-2 mb-2">
            Movie
          </span>
        </div>
        <div className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-400">
          Noteworthy technology acquisitions 2021
        </div>
        <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
          19141 Views
        </p>
      </div>
    </div>
  );
};

export const RecommendMovieCard = ({}) => {
  return (
    <div
      className="relative flex items-end justify-start w-full rounded h-60 md:h-72 text-left bg-center bg-cover dark:bg-gray-500"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/241x320")`,
        // background: "/data/portrait14.jpg",
      }}
    >
      <Link href="/">
        <div className="ease-in-out transform transition duration-500 hover:opacity-90 hover:bg-black absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-slate-800 to-slate-800"></div>
      </Link>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        <span className="text-sm rounded px-2 p-1 top-0 bg-deco-red z-10 text-white">
          9/10
        </span>
        <div className="flex flex-col justify-start text-center dark:text-gray-100">
          <span className="text-3xl font-semibold leading-none tracking-wide">
            01
          </span>
          <span className="leading-none uppercase">Aug</span>
        </div>
      </div>
      <h2 className="z-10 p-5">
        <p className="font-medium text-md hover:underline dark:text-gray-100">
          Naruto the Movie
        </p>
      </h2>
    </div>
  );
};

export const RowMovieCard = (movie: any) => {
  return (
    <div
      key={movie?.Name}
      className="relative w-[250px] h-[350px]  cursor-pointer m-5 hover:scale-110 ease-in-out transform transition duration-1000 snap-center flex-shrink-0 flex items-center justify-center"
      style={{
        backgroundImage: `url(${movie?.images?.portrait})`,
      }}
    >
      <Link href="/">
        <div className="ease-in-out transform transition duration-500 hover:opacity-90 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-darkTheme-800 to-darkTheme-800"></div>
      </Link>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
        <span className="text-sm rounded px-2 p-1 top-0 bg-deco-red z-10 text-white">
          {`${movie.Rating} / 5`}
        </span>
        <div className="flex flex-col justify-start text-center dark:text-gray-100">
          <span className="text-3xl font-semibold leading-none tracking-wide">
            {movie.Rank}
          </span>
          {/* <span className="leading-none uppercase">rank</span> */}
        </div>
      </div>
      <h2 className="absolute bottom-0 left-0 z-10 p-5">
        <p className="font-medium text-md hover:underline dark:text-gray-100">
          {movie.Name}
        </p>
      </h2>
    </div>
  );
};

import React from "react";

export const RowMovieCard2 = () => {
  return (
    <div className="cursor-pointer m-5 hover:scale-110 ease-in-out transform transition duration-1000 snap-center flex-shrink-0 h-[300px] flex items-center justify-center text-8xl">
      <Image
        width={250}
        height={100}
        src="/data/portrait14.jpg"
        alt="/data/portrait14.jpg"
      />
    </div>
  );
};
