import { createStore, combineReducers } from 'redux';
import savedNewsReducer from '../reducer/reducer';
import savedSchemesReducer from '../reducer/SchemeReducer';
import { ThemeReducer } from '../reducer/ThemeReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncLocalStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncLocalStorage,
    whitelist: ['savedNews', 'savedSchemes', 'theme']
};

const rootReducer = combineReducers({
    savedNews: savedNewsReducer,
    savedSchemes: savedSchemesReducer,
    theme: ThemeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

