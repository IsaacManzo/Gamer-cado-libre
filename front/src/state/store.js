import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import cartReducer from "./cart";
import searchReducer from "./search";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      cart: cartReducer,
      user: userReducer,
      search:searchReducer,
      },
  });

export default store;
