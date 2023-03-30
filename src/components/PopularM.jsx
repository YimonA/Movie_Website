import React from "react";
import Movie from "./Movie";
import { AnimatePresence, motion } from "framer-motion";
import { useContextCustom } from "../context/stateContext";
import Filter from "./Filter";

const PopularM = () => {
  const { filtered, popular } = useContextCustom();

  return (
    <div className=" container mx-auto bg-black">
      <Filter type={popular} />
      <p className=" text-xl font-semibold text-[#adff2f] px-20 py-10 mb-4">Popular Movies</p>
      {filtered?.length === 0 ? (
        <div className="text-2xl text-[#adff2f] font-semibold text-center">
          No result found.
        </div>
      ) : (
        <motion.div
          layout
          className=" flex flex-wrap justify-center gap-10 pt-3 pb-10"
        >
          <AnimatePresence>
            {filtered?.map((movie) => {
              return <Movie key={movie.id} {...movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default PopularM;
