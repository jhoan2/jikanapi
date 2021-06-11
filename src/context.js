import React, { useContext, useReducer, useEffect } from "react";
import { HANDLE_SEARCH, SET_ANIME, SET_LOADING } from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://api.jikan.moe/v3/search/anime?q=";

const initialState = {
  isLoading: true,
  animeList: [],
  query: "Naruto",
  page: 0,
  nbPages: 0,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAnimes = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      const animes = data;

      dispatch({ type: SET_ANIME, payload: { animeList: animes.results } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  useEffect(() => {
    fetchAnimes(`${API_ENDPOINT}/naruto`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
