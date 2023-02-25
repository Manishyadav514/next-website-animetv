import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const RowSlider = (props: {
  fetchUrl: unknown;
  title: string;
  isLargeRow?: any;
}) => {
  const [movies, setMovies] = useState([]);

  // axios option
  const options = {
    method: "GET",
    url: "https://gogoanime2.p.rapidapi.com/popular",
    headers: {
      "X-RapidAPI-Key": "a3a5d95a38msh139e8560e4356cep19e1d6jsnf041fdbf514c",
      "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
    },
  };

  // to fetch the url using axios
  useEffect(() => {
    async function fetchData() {
      await axios
        .request(options)
        .then(function (response: any) {
          console.log(response.data);
          setMovies(response.data);
        })
        .catch(function (error: any) {
          console.error(error);
        });
      // const request = await axios.get(props.fetchUrl);
      // console.log(request);
      // setMovies(request.data.results);
      // return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-8 p-4 md:p-12 bg-lightTheme-400 dark:bg-darkTheme-700">
        <div className="mb-8">
          <div className="flex justify-start items-center font-semibold text-2xl leading-5 capitalize pl-5 relative after:content[''] after:absolute after:w-1 after:h-8 after:left-0 after:first-line:top-0 after:mr-3 after:bg-deco-red ">
            TRENDING {movies.length}
          </div>
        </div>
        <div className="w-screen ">
          <div className="w-full min-h-[250px] snap-x mx-auto snap-mandatory flex overflow-x-scroll scrollbar-hide overflow-y-hidden">
            {movies.map((movie: any) => (
              <div
                key={movie?.animeId}
                className="cursor-pointer m-5 hover:scale-110 ease-in-out transform transition duration-1000 snap-center flex-shrink-0 h-[300px] flex items-center justify-center text-8xl"
              >
                <Link href={movie.animeUrl} legacyBehavior>
                  <Image
                    width={250}
                    height={100}
                    src={movie.animeImg}
                    alt={movie.animeTitle}
                  />
                </Link>
              </div>
              // <MovieCard key={movie?.animeId} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
      .scrollbar-hide::-webkit-scrollbar {
      display: none;
      }
      /* For IE, Edge and Firefox */
      .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      }
      `}</style>
    </>
  );
};

export default RowSlider;

export const MovieCard = ({}) => {
  return (
    <div
      className="relative flex items-end justify-start w-60 h-96 text-left bg-center bg-cover dark:bg-gray-500"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/241x320")`,
      }}
    >
      <Link href="/">
        <div className="ease-in-out transform transition duration-500 hover:opacity-90 hover:bg-black absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-slate-800 dark:to-slate-800"></div>
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

export const RecommendationWidget = () => {
  return (
    <div className="w-full max-w-2xl p-4 md:p-8 text-gray-100">
      {/* <div className="absolute lg:block hidden -ml-4 w-[3px] h-full bg-deco-red"></div> */}
      <div className="lg:border-l-2 lg:pl-12  lg:border-deco-red">
        <div className="mb-8">
          <div className="text-black dark:text-white flex justify-start items-center font-semibold text-2xl leading-5 capitalize pl-5 relative after:content[''] after:absolute after:w-1 after:h-8 after:left-0 after:first-line:top-0 after:mr-3 after:bg-deco-red ">
            Recommendation
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-8">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};
