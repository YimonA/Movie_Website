import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UpComingM from "./components/UpComingM";
import NowPlayingM from "./components/NowPlayingM";
import TopRatedM from "./components/TopRatedM";
import PopularM from "./components/PopularM";
import Detail from "./components/Detail";
import H from "./components/H";

import Artists from "./components/Artists";
import Contact from "./components/Contact";
import ArtistDetail from "./components/ArtistDetail";
import Footer from "./components/Footer";
import TopRatedTV from "./components/TopRatedTV";
import PopularTV from "./components/PopularTV";
import DetailTV from "./components/DetailTV";

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

        <Route path="/detailtv" element={<DetailTV />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/artistdetail" element={<ArtistDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/populartv" element={<PopularTV />}></Route>
        <Route path="/topratedtv" element={<TopRatedTV />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
//https://api.themoviedb.org/3/genre/movie/list?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US
