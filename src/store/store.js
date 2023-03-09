import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userAPI from "./services/UserService.js";
import modalSlice from "./slices/modalSlice/modalSlice.js";
import userSlice from "./slices/userSlice/userSlice.js";

const rootReducer = combineReducers({
  user: userSlice,
  modal: modalSlice,
  [userAPI.reducerPath]: userAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
