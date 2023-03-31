import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/stateContext";
import "./DetailProgress.css";

const DetailTV = () => {
  const {
    state: { detailTV },
    genreTV,
  } = useContextCustom();
  const [detailTVV, setDetailTVV] = useState(detailTV[0]);
  const [gen, setGen] = useState();

  useEffect(() => {
    filterG();
  }, []);

  const filterG = () => {
    detailTVV.genre_ids.map((di) => {
      const filter = genreTV?.filter((gm) => gm.id == di);
      console.log(filter[0].name);
      setGen(filter[0].name);
    });
  };

  return (
    <div className=" container sm:h-full mx-auto p-4 md:p-8 bg-black">
      <h1 className="text-3xl text-black">detail</h1>
          <p className=" text-2xl md:pl-8 text-[#ff0] font-bold mb-5">
            {detailTVV.title}          </p>
      <div className="flex flex-wrap md:flex-row justify-around">
        <div className=" mb-4 md:w-[35%]">
          <img
            className=" rounded border-4 border-[#ff0] h-[350px] w-full object-cover"
            loading="lazy"
            src={"https://image.tmdb.org/t/p/w300" + detailTVV.backdrop_path}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between w-full max-h-[600px] md:w-[50%]">
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Movie Name: {detailTVV.name}
          </p>
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Release Date: {detailTVV.first_air_date}
          </p>
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">Genres: {gen}</p>
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Language: English
          </p>

          <div>
            <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
              User Score: {(detailTVV.vote_average * 10).toFixed(2)}%
            </p>
            <progress
              className="progress progress-success w-56 myProgress"
              value={(detailTVV.vote_average * 10).toFixed(2)}
              max="100"
            ></progress>
          </div>
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Overview: {detailTVV.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailTV;
