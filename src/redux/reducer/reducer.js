import { ADD_TO_SAVED_NEWS, REMOVE_SAVED_NEWS, UPDATE_NEWS_ITEM } from '../ActionTypes';

const initialState = {
  savedNews: [],
};

const savedNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SAVED_NEWS:
      return {
        ...state,
        savedNews: [...state.savedNews, action.payload],
      };
    case REMOVE_SAVED_NEWS:
      const newSavedNews = state.savedNews.filter((newsItem) => newsItem.url !== action.payload.url);
      return {
        ...state,
        savedNews: newSavedNews,
      };
      
      case UPDATE_NEWS_ITEM :
        return {
          ...state,
          savedNews: state.savedNews.map((newsItem) => {
            if (newsItem.url === action.payload.url) {
              return { ...newsItem, isSaved: action.payload.isSaved };
            }
            return newsItem;
          }),
        };

    default:
      return state;
  }
};

export const updateNewsItem = (newsItem) => {
  return (dispatch, getState) => {
    const savedNews = getState().savedNews.savedNews;
    const newsIndex = savedNews.findIndex((item) => item.url === newsItem.url);
    if (newsIndex >= 0) {
      dispatch({ type: REMOVE_SAVED_NEWS, payload: newsItem });
    } else {
      dispatch({ type: ADD_TO_SAVED_NEWS, payload: newsItem });
    }
  };
};

export default savedNewsReducer;
