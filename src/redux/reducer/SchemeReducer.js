import { ADD_TO_SAVED_SCHEMES, REMOVE_SAVED_SCHEMES, UPDATE_SCHEME_ITEM } from '../ActionTypes';

const initialState = {
  savedSchemes: [],
};

const savedSchemesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SAVED_SCHEMES:
      return {
        ...state,
        savedSchemes: [...state.savedSchemes, action.payload],
      };
    case REMOVE_SAVED_SCHEMES:
      const newSavedSchemes = state.savedSchemes.filter((scheme) => scheme.id !== action.payload.id);
      return {
        ...state,
        savedSchemes: newSavedSchemes,
      };
      
      case UPDATE_SCHEME_ITEM :
        return {
          ...state,
          savedSchemes: state.savedSchemes.map((scheme) => {
            if (scheme.id === action.payload.id) {
              return { ...scheme, saved: action.payload.saved };
            }
            return scheme;
          }),
        };

    default:
      return state;
  }
};

export const updateSchemesItem = (scheme) => {
  return (dispatch, getState) => {
    const savedSchemes = getState().savedSchemes.savedSchemes;
    const schemeIndex = savedSchemes.findIndex((item) => item.id === scheme.id);
    if (schemeIndex >= 0) {
      dispatch({ type: REMOVE_SAVED_SCHEMES, payload: scheme });
    } else {
      dispatch({ type: ADD_TO_SAVED_SCHEMES, payload: scheme });
    }
  };
};

export default savedSchemesReducer;
