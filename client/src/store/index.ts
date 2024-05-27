import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";
import { servicesReducers, servicesMiddlewares } from "../services";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ...servicesReducers,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
