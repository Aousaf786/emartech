// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/constants";

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `JWT ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Users"],
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
