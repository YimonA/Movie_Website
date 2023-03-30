import React from "react";
import { motion } from "framer-motion";
import "./Movie.css";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";

const Movie = (props) => {
  //const{title}=props;

  const {
    id,
    genre_ids,
    title,
    backdrop_path,
    overview,
    popularity,
    release_date,
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
        <p className=" text-base text-[#adff2f] font-semibold">{title}</p>
        <img
          className=" rounded border-8 border-[#adff2f] h-[200px] w-[300px] hover:scale-110 lg:hover:scale-125 duration-700"
          loading="lazy"
          src={"https://image.tmdb.org/t/p/w300" + backdrop_path}
          alt=""
        />
        <div className="myIcon absolute top-[45%] left-[45%] ">
          <Link to={"/detail"}>
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_DETAIL", payLoad: props })
              }
              className="w-12 h-12 rounded-full flex justify-center items-center font-semibold bg-[#adff2f]"
            >
              <BsInfoCircle className=" text-3xl text-black" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
