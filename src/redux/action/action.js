import { ADD_TO_SAVED_NEWS, CHANGE_THEME, REMOVE_SAVED_NEWS, UPDATE_NEWS_ITEM, REMOVE_SAVED_SCHEMES , ADD_TO_SAVED_SCHEMES, UPDATE_SCHEMES_ITEM } from '../ActionTypes'

export const addToSavedNews = (newsItem) => {
  return {
    type: ADD_TO_SAVED_NEWS,
    payload: newsItem,
  };
};

export const removeSavedNews = (newsItem) => {
  return {
    type: REMOVE_SAVED_NEWS,
    payload: newsItem,
  };
}

export const updateNewsItem = (newsItem) => {
    return {
        type: UPDATE_NEWS_ITEM,
        payload: newsItem,
    };
    }

export const changeTheme = (type) => {
  return {
    type: CHANGE_THEME,
    payload: type,
  };
};

export const addToSavedSchemes = (scheme) => ({
  type: ADD_TO_SAVED_SCHEMES,
  payload: scheme,
});

export const removeSavedSchemes = (scheme) => ({
  type: REMOVE_SAVED_SCHEMES,
  payload: scheme,
});
  
export const updateSchemesItem = (scheme) => ({
  type: UPDATE_SCHEMES_ITEM,
  payload: scheme,
});
