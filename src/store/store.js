import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userAPI from "./services/UserService.js";
import modalSlice from "./slices/modalSlice/modalSlice.js";

const rootReducer = combineReducers({
  modal: modalSlice,
  [userAPI.reducerPath]: userAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
