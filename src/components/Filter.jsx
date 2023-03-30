import React, { useEffect } from "react";
import { useContextCustom } from "../context/stateContext";

const Filter = ({ type }) => {
  const { popular, genreMovie, setFiltered, activeGenre, setActiveGenre } =
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
    const filterMovie = type.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    console.log(filterMovie);
    setFiltered(filterMovie);
  }, [activeGenre]);
  return (
    <div className=" container mx-auto">
      
        <div className=" md:hidden dropdown dropdown-bottom flex justify-center my-3">
          <label tabIndex={0} className="btn m-1 border-2 border-[#adff2f] w-[95%] bg-black">
            <p className=" mx-auto font-semibold text-[#adff2f] ">Genres</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow rounded-box w-52 bg-black text-[#adff2f]"
          >
            <li>
              <a onClick={all}>All</a>
            </li>
            {genreMovie?.map((genre) => {
          return (
        
            <li>
              <a onClick={() => setActiveGenre(genre.id)}
>{genre.name}</a>
            </li>
          )})}
          </ul>
        </div>
      
      <div className=" pt-10 hidden md:flex flex-wrap py-6 gap-5 justify-center bg-black px-6">
        <button
          onClick={all}
          className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black"
        >
          All
        </button>
        {genreMovie?.map((genre) => {
          return (
            <button
              key={genre.id}
              onClick={() => setActiveGenre(genre.id)}
              className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black"
            >
              {genre.name}
            </button>
          );
        })}

        {/*
      <button onClick={()=>setActiveGenre(28)} className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">Action</button>
      <button onClick={()=>setActiveGenre(35)} className="btn btn-active rounded-2xl font-semibold text-[#adff2f] border-4 border-[#adff2f] hover:bg-gray-300 hover:text-black">Comedy</button>
  */}
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
#adff2f

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
