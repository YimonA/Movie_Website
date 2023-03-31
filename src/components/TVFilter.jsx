import React, { useEffect } from "react";
import { useContextCustom } from "../context/stateContext";

const Filter = ({ type }) => {
  const { genreTV, setFiltered, activeGenre, setActiveGenre } =
    useContextCustom();
  console.log(type);

  const all = () => {
    setActiveGenre(0);
    setFiltered(type);
  };
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(type);
      return;
    }
    const filterMovie = type.filter((tv) =>
      tv.genre_ids.includes(activeGenre)
    );
    console.log(filterMovie);
    setFiltered(filterMovie);//filterMovie also mean filterTV
  }, [activeGenre]);
  return (
    <div className=" container mx-auto">
      <div className=" md:hidden dropdown dropdown-bottom flex justify-center py-3">
        <label
          tabIndex={0}
          className="btn m-1 border-2 border-[#ff0] w-[95%] bg-black"
        >
          <p className=" mx-auto font-semibold text-[#ff0] ">Genres</p>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-black text-[#ff0]"
        >
          <li>
            <a onClick={all}>All</a>
          </li>
          {genreTV?.map((genre) => {
            return (
              <li>
                <a onClick={() => setActiveGenre(genre.id)}>{genre.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className=" pt-10 hidden md:flex flex-wrap py-6 gap-5 justify-center bg-black px-6 w-[80%] mx-auto">
        <button
          onClick={all}
          className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black"
        >
          All
        </button>
        {genreTV?.map((genre) => {
          return (
            <button
              key={genre.id}
              onClick={() => setActiveGenre(genre.id)}
              className="btn btn-active rounded-2xl font-semibold text-[#ff0] border-4 border-[#ff0] hover:bg-gray-300 hover:text-black"
            >
              {genre.name}
            </button>
          );
        })}


      </div>
    </div>
  );
};

export default Filter;
/*
BsInfoCircle
TbMovie

#13141f
#3e4044
#ff0

"https://api.themoviedb.org/3/tv/popular?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1" -tv popular


"https://api.themoviedb.org/3/movie/now_playing?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1" now playing movie


"https://api.themoviedb.org/3/movie/upcoming?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1
" - upcoming movie


"https://api.themoviedb.org/3/genre/tv/list?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US" get genre tv



"https://api.themoviedb.org/3/configuration/languages?api_key=9be0d61d68cfa0c9f726d094e6d8d40f" get languages

"https://api.themoviedb.org/3/configuration/countries?api_key=9be0d61d68cfa0c9f726d094e6d8d40f
" - get country

"https://api.themoviedb.org/3/person/popular?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1" -people popular

"https://api.themoviedb.org/3/movie/top_rated?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1" - top rated movie

"https://api.themoviedb.org/3/movie/popular?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1
" - popular movie

"https://api.themoviedb.org/3/watch/providers/movie?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US" -provider movie name/img

"https://api.themoviedb.org/3/watch/providers/tv?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US" - tv provider

"https://api.themoviedb.org/3/tv/top_rated?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1
" - tv top rated

"https://api.themoviedb.org/3/trending/all/day?api_key=9be0d61d68cfa0c9f726d094e6d8d40f" - trending
*/
