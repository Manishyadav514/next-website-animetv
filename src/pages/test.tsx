import {
  RecommendMovieCard,
  MovieLandscape,
  MoviePortrait,
  RowMovieCard,
  RowMovieCard2,
} from "@/components/Card";
import React from "react";

const test = () => {
  return (
    <div className="pt-60 w-full h-full flex flex-col p-5 gap-20 justify-center items-center ">
      <RecommendMovieCard />
      <MoviePortrait />
      <MovieLandscape />
      <RowMovieCard />
      <RowMovieCard2 />
    </div>
  );
};

export default test;
