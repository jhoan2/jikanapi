import React, { useContext, useReducer, useEffect } from "react";
import { HANDLE_PAGE, HANDLE_SEARCH, SET_ANIME, SET_LOADING } from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://api.jikan.moe/v3/search/anime?q=";

const initialState = {
  isLoading: true,
  animeList: [],
  query: "Naruto",
  page: 1,
  lastPage: 0,
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

      dispatch({
        type: SET_ANIME,
        payload: {
          animeList: animes.results,
          lastPage: animes.last_page,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchAnimes(
      `${API_ENDPOINT}${state.query}&page=${state.page}&genre=12&genre_exclude=0`
    );
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, handleSearch, handlePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
