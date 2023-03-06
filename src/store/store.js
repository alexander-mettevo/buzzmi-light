import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userAPI from "./services/UserService.js";

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
