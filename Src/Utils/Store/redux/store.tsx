import {combineReducers, configureStore} from '@reduxjs/toolkit';
import auth from './Stores';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

export const rootReducer = combineReducers({
  Authentication: auth,
});

export const preistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(preistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);
