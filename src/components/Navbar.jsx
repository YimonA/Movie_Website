import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import UpComingM from "./UpComingM";
import NowPlayingM from "./NowPlayingM";
import TopRatedM from "./TopRatedM";
import PopularM from "./PopularM";
import "./Navbar.css";

const Navbar = ({ type }) => {
  return (
    <div className=" container mx-auto sticky top-0 z-10">
      <div className="navbar bg-[#13141f] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#adff2f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-[#adff2f] bg-[#13141f] "
            >
              <li tabIndex={0}>
                <a className="justify-between">
                  <p className="font-semibold text-xl">Movies</p>

                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-[#13141f]">
                  <li className="phoneGenre">
                    <NavLink to={"/popular"} element={<PopularM />}>
                      <p className="font-semibold text-xl">Popular Movies</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/upcomingmovie"} element={<UpComingM />}>
                      <p className="font-semibold text-xl">UpComing Movies</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/nowplayingmovie"} element={<NowPlayingM />}>
                      <p className="font-semibold text-xl">
                        Now Playing Movies
                      </p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/topratedmovie"} element={<TopRatedM />}>
                      <p className="font-semibold text-xl">Top Rated Movies</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/*}
              <li>
                <NavLink to={"/nowplayingmovie"} element={<NowPlayingM />}>
                  TV
                </NavLink>
              </li>
  */}
            </ul>
          </div>
          <Link to={"/"}>
            <TbMovie className="active:text-black active:bg-[#adff2f] text-3xl text-[#adff2f] " />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#adff2f]">
            <li tabIndex={0}>
              <a>
                <p className="font-semibold text-xl ">Movies</p>

                <svg
                  className="fill-current text-[#adff2f]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#13141f]">
                <li>
                  <NavLink to={"/popular"} element={<PopularM />}>
                    <p className="font-semibold text-xl ">Popular Movies</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/upcomingmovie"} element={<UpComingM />}>
                    <p className="font-semibold text-xl ">UpComing Movies</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/nowplayingmovie"} element={<NowPlayingM />}>
                    <p className="font-semibold text-xl ">Now Playing Movies</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/topratedmovie"} element={<TopRatedM />}>
                    <p className="font-semibold text-xl ">Top Rated Movies</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            {/*}
            <li>
              <NavLink to={"/nowplayingmovie"} element={<NowPlayingM />}>
                TV
              </NavLink>
            </li>
*/}
          </ul>
        </div>
        <div className="navbar-end">
          {/*}
          <input
            type="text"
            placeholder="search"
            className="input input-border"
          />
*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
