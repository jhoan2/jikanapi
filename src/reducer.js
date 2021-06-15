import { SET_LOADING, HANDLE_PAGE, HANDLE_SEARCH, SET_ANIME } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };
    case HANDLE_PAGE:
      return { ...state, page: action.payload };
    case SET_ANIME:
      return {
        ...state,
        isLoading: false,
        animeList: action.payload.animeList,
        lastPage: action.payload.lastPage,
      };
    default:
      throw new Error(`no matching ${action.type}`);
  }
};

export default reducer;
