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
      <div
        className="hero h-[600px] py-10 "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-[#ff0]">
              Movies World
            </h1>
            <p className="mb-5 text-[#ff0]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-[#ff0] text-black hover:bg-gray-400 hover:text-[#ff0]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#ff0] px-10 md:px-20 mb-4">
        Popular Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {popular.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/popular"} element={<PopularM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#ff0] px-10 md:px-20 mb-4">
        Up Coming Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {coming.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/upcomingmovie"} element={<UpComingM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#ff0] p-10 md:px-20 mb-4">
        Now Playing Movies
      </p>
      <div className=" flex flex-wrap gap-8 p-6 justify-center">
        {playing.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/nowplayingmovie"} element={<NowPlayingM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
      <p className=" text-xl font-semibold text-[#ff0] px-10 md:px-20 mb-4">
        Top Rated Movies
      </p>
      <div className=" flex flex-wrap gap-8 justify-center p-6">
        {topRated.slice(0, 5).map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}

        <div className=" container mx-auto flex justify-center py-4 mb-4">
          <Link to={"/topratedmovie"} element={<TopRatedM />}>
            <button className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black">
              All Movies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default H;
