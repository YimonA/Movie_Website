import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [coming, setComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  //const [languageMovie, setLanguageMovie] = useState([]);
  //const [people, setPeople] = useState([]);


  useEffect(() => {
    fetchPopular();
    fetchComing();
    fetchPlaying();
    fetchTrending();
    fetchTopRated();
    fetchGenreMovie();
    //fetchLanguageMovie();
    //fetchPeople();
  }, []);
  
  const fetchPeople = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1`

    );
    const { results } = await api.json();
    setPeople(results);
  console.log("people",results);
  };

  const fetchLanguageMovie = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/configuration/languages?api_key=9be0d61d68cfa0c9f726d094e6d8d40f`

    );
    const data = await api.json();
    setLanguageMovie(data);
  console.log(data);
  };

  const fetchGenreMovie = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US`
    );
    const { genres } = await api.json();
    setGenreMovie(genres);
  console.log(genres);
  };

  const fetchPlaying = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPlaying(results);
    //setFiltered(results);
    //console.log(results);
  };

  const fetchTopRated = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1`
    );
    const { results } = await api.json();
    setTopRated(results);
    //setFiltered(results);
    //console.log(results);
  };

  const fetchTrending = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=9be0d61d68cfa0c9f726d094e6d8d40f`
    );
    const { results } = await api.json();
    setTrending(results);
    //setFiltered(results);
    //console.log(results);
  };

  const fetchComing = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1
        `
    );
    const { results } = await api.json();
    setComing(results);
    //setFiltered(results);
    //console.log(results);
  };

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9be0d61d68cfa0c9f726d094e6d8d40f&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopular(results);
    setFiltered(results);
    console.log(results);
  };
  const initialState = {
    popular: [],
    filtered: [],
    detail: [],
    genres:[]
  };
  /*

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payLoad: productList });
    const filter = productList?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payLoad: filter });
  }, [productList, search]);
*/
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    filtered,
    setFiltered,
    popular,
    genreMovie,
    activeGenre,
    setActiveGenre,
    coming,
    trending,
    topRated,
    playing,
    state,
    dispatch,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
