import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import officeReducer from './office/office.reducer'
import dialogReducer from './dialog/dialog.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['office',] //add office here
};

const rootReducer = combineReducers({
  office: officeReducer,
  dialog: dialogReducer,
});

export default persistReducer(persistConfig, rootReducer);
