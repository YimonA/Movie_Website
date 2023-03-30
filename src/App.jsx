import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UpComingM from "./components/UpComingM";
import NowPlayingM from "./components/NowPlayingM";
import TopRatedM from "./components/TopRatedM";
import PopularM from "./components/PopularM";
import Detail from "./components/Detail";
import H from "./components/H";

const App = () => {
  return (
    <div className=" container mx-auto h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<H />}></Route>
        <Route path="/popular" element={<PopularM />}></Route>
        <Route path="/upcomingmovie" element={<UpComingM />}></Route>
        <Route path="/nowplayingmovie" element={<NowPlayingM />}></Route>
        <Route path="/topratedmovie" element={<TopRatedM />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
//https://api.themoviedb.org/3/genre/movie/list?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US
