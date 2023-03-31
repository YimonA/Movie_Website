import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/stateContext";
import "./DetailProgress.css";

const Detail = () => {
  const {
    state: { detailArtist },
  } = useContextCustom();
  const [detailArt, setDetailArt] = useState(detailArtist[0]);
  useEffect(() => {
    console.log(detailArt.known_for);
  }, []);
  
  return (
    <div className=" container mx-auto p-4 md:p-8 bg-black sm:h-full">
      <h1 className="text-3xl text-black">detail</h1>
      <p className=" text-2xl md:pl-8 text-[#ff0] font-bold mb-5">
        {detailArt.name}
      </p>
      <div className="flex flex-wrap md:flex-row justify-around">
        <div className=" mb-4 md:w-[35%]">
          <img
            className=" rounded border-4 border-[#ff0] h-[350px] w-full object-cover"
            loading="lazy"
            src={"https://image.tmdb.org/t/p/w300" + detailArt.profile_path}
            alt=""
          />
        </div>
        <div className="flex flex-col w-full md:w-[50%] h-full justify-between">
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Movie Name: {detailArt.name}
          </p>
          <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
            Professional Career: {detailArt.known_for_department}
          </p>
          {/*         */}

          <div className=" flex flex-row justify-start items-start gap-5">
            <div>
              <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                Famous Movie:{" "}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              {detailArt.known_for.map((m) => (
                <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                  {m.title}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:hidden justify-start items-start">
              {detailArt.known_for.map((m) => (
                <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                  {m.release_date}{" "}
                </p>
              ))}
            </div>
          </div>

          <div className=" flex flex-row justify-start items-start gap-5">
            <div>
              <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                Famous TV:{" "}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              {detailArt.known_for.map((m) => (
                <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                  {m.name}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:hidden justify-start items-start">
              {detailArt.known_for.map((m) => (
                <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
                  {m.first_air_date}{" "}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className=" text-sm md:text-lg text-[#ff0] font-semibold">
              Popularity: {parseFloat(detailArt.popularity).toFixed(2)}
            </p>
            <progress
              className="progress progress-success w-56 myProgress"
              value={parseFloat(detailArt.popularity).toFixed(2)}
              max="250"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
