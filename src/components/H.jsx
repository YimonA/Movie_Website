import React from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";
import Movie from "./Movie";
import NowPlayingM from "./NowPlayingM";
import PopularM from "./PopularM";
import TopRatedM from "./TopRatedM";
import UpComingM from "./UpComingM";

const H = () => {
  const {  popular, coming, playing, topRated } = useContextCustom();

  return (
    <div className=" container mx-auto bg-black">
      {/*
      <p className=" text-xl font-semibold text-[#adff2f] px-10 md:px-20 mb-4">
        Trending
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {trending.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/trending"} element={<Trending />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      */}
      <p className=" text-xl font-semibold text-[#adff2f] px-10 md:px-20 mb-4">
        Popular Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {popular.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/popular"} element={<PopularM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#adff2f] px-10 md:px-20 mb-4">
        Up Coming Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {coming.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/upcomingmovie"} element={<UpComingM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#adff2f] p-10 md:px-20 mb-4">
        Now Playing Movies
      </p>
      <div className=" flex flex-wrap gap-8 p-6 justify-center">
        {playing.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/nowplayingmovie"} element={<NowPlayingM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#adff2f] px-10 md:px-20 mb-4">
        Top Rated Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {topRated.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/topratedmovie"} element={<TopRatedM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default H;
