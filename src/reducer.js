import {
  SET_LOADING,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  SET_ANIME,
  REMOVE_ANIME,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return;
    }
    case HANDLE_SEARCH: {
      return { ...state, query: action.payload };
    }
    case HANDLE_PAGE: {
      return;
    }
    case SET_ANIME: {
      return {
        ...state,
        animeList: action.payload.animeList,
      };
    }
    case REMOVE_ANIME: {
      return;
    }
    default:
      throw new Error(`no matching ${action.type}`);
  }
};

export default reducer;
