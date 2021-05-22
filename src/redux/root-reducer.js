import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/reducer';
import directoryReducer from './directory/reducer';
import userReducer from './user/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);