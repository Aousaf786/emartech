import { api } from "./api-root";
import { authApi } from "./authService";

export const servicesReducers = {
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const servicesMiddlewares = [authApi.middleware, api.middleware];
