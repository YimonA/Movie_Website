import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContextCustom } from "../context/stateContext";
import TVFilter from "./TVFilter";
import TV from "./TV";

const PopularTV = () => {
  const { filtered, popularTV } = useContextCustom();

  return (
    <div className=" container mx-auto bg-black ">
      <TVFilter type={popularTV} />
      <p className=" text-xl font-semibold text-[#ff0] px-20 py-10 mb-4">
     Popular TV 
      </p>
      {filtered?.length === 0 ? (
        <div className="text-2xl text-[#ff0] font-semibold  text-center">
          No result found.
        </div>
      ) : (
        <motion.div
          layout
          className=" flex flex-wrap justify-center gap-10 pt-3 pb-24"
        >
          <AnimatePresence>
            {filtered?.map((tv) => {
              return <TV key={tv.id} {...tv} />;
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default PopularTV;
