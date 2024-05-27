// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IAuth,
  IForgotPassword,
  ILoginUser,
  IRegisterUser,
} from "@/types/model";
import { API_URL } from "@/constants";

// Utils

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      // const preferredLang: Language =
      //   (localStorage.getItem("preferred-language") as Language) ||
      //   DEFAULT_LANGUAGE;
      // Set user preferred language for translation
      // if (preferredLang) {
      //   headers.set("Accept-Language", encodePreferredLanguage(preferredLang));
      // }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<IAuth, ILoginUser>({
      query(body) {
        console.log("body", body);
        return {
          url: "/auth/signin",
          method: "POST",
          body: {
            ...body,
            // email: body.email.toLowerCase(),
          },
        };
      },
    }),
    registerUser: builder.mutation<unknown, IRegisterUser>({
      query(body) {
        return {
          url: "/auth/signup",
          method: "POST",
          body: {
            ...body,
            email: body.email.toLowerCase(),
          },
        };
      },
    }),
    forgotPassword: builder.mutation<unknown, IForgotPassword>({
      query(body) {
        return {
          url: "/auth/forgotPassword",
          method: "POST",
          body: {
            email: body.email.toLowerCase(),
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation,
} = authApi;
