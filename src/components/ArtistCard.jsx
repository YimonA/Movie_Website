import React from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";

const ArtistCard = (props) => {
  const { id, name, known_for_department, known_for, profile_path } = props;
  const { dispatch } = useContextCustom();
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl w-[250px] border-2 rounded-sm border-[#ff0]">
        <figure>
          <img
            className=" rounded h-[350px] w-[250px] object-fit"
            loading="lazy"
            src={"https://image.tmdb.org/t/p/w300" + profile_path}
          />
        </figure>
        <div className="card-body bg-black">
          <h2 className="card-title text-[#ff0]">{name}</h2>
          <div className="card-actions justify-end">
            <Link to={"/artistdetail"}>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_DETAIL_ARTIST", payLoad:props })
                }
                className="
                btn btn-primary bg-[#ff0] text-black hover:bg-gray-400 hover:text-[#ff0]"         >
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
