import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/stateContext";
import "./DetailProgress.css";

const Detail = () => {
  const {
    state: { detail },
    genreMovie,
  } = useContextCustom();
  const [detailMovie, setDetailMovie] = useState(detail[0]);
  //const [id, setID] = useState();
  const [gen, setGen] = useState();

  useEffect(() => {
    //setID(detailMovie.genre_ids[0]);
    filterG();
  }, []);

  const filterG = () => {
    detailMovie.genre_ids.map((di) => {
      const filter = genreMovie?.filter((gm) => gm.id == di);
      console.log(filter[0].name);
      setGen(filter[0].name);
    });
  };
  /*
  const filterM = () => {
    const filter = genreMovie?.filter((gm) => gm.id == id);
    //dispatch({ type: "GET_GENRES", payLoad: filter });
    console.log(filter);
    setGen(filter);
  };
*/

  return (
    <div className=" container mx-auto p-4 md:p-8 bg-black">
      <h1 className="text-3xl text-black">detail</h1>
          <p className=" text-2xl md:pl-8 text-[#adff2f] font-bold mb-5">
            {detailMovie.title}
          </p>
      <div className="flex flex-wrap md:flex-row justify-around">
        <div className=" mb-4 md:w-[35%]">
          <img
            className=" rounded border-4 border-[#adff2f] h-[350px] w-full object-cover"
            loading="lazy"
            src={"https://image.tmdb.org/t/p/w300" + detailMovie.backdrop_path}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-[50%]">
          <p className=" text-sm text-[#adff2f] font-semibold">
            Movie Name: {detailMovie.title}
          </p>
          <p className=" text-sm text-[#adff2f] font-semibold">
            Release Date: {detailMovie.release_date}
          </p>
          <p className=" text-sm text-[#adff2f] font-semibold">Genres: {gen}</p>
          <p className=" text-sm text-[#adff2f] font-semibold">
            Language: english
          </p>

          <div>
            <p className=" text-sm text-[#adff2f] font-semibold">
              User Score: {(detailMovie.vote_average * 10).toFixed(2)}%
            </p>
            <progress
              className="progress progress-success w-56 myProgress"
              value={(detailMovie.vote_average * 10).toFixed(2)}
              max="100"
            ></progress>
          </div>
          <p className=" text-sm text-[#adff2f] font-semibold">
            Overview: {detailMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
