import React from "react";
import { motion } from "framer-motion";
import "./Movie.css";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";

const TV = (props) => {
  const {
    id,
    genre_ids,
    name,
    backdrop_path,
    overview,
    popularity,
    first_air_date,
    vote_average,
    vote_count,
  } = props;

  const { dispatch } = useContextCustom();
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 1, scale: 0 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="myParent relative duration-700">
        <p className=" text-base text-[#ff0] font-semibold">{name}</p>

        <img
          className=" rounded border-8 border-[#ff0] h-[200px] w-[300px] hover:scale-110 lg:hover:scale-125 duration-700"
          loading="lazy"
          src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
          alt=""
        />
        <div className="myIcon absolute top-[45%] left-[45%] ">
          <Link to={"/detailtv"}>
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_DETAIL_TV", payLoad: props })
              }
              className="w-12 h-12 rounded-full flex justify-center items-center font-semibold bg-[#ff0]"
            >
              <BsInfoCircle className=" text-3xl text-black" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TV;
