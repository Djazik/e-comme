import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT } from "../../constants";
import Cookies from "js-cookie";

const loginServices = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
    tagTypes: ["login"],
  }),
  endpoints: (builder) => ({
    getLogin: builder.query({
      query: () => {
        return `/auth/login`;
      },
    }),
    addLogin: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      providesTags: ["login"],
    }),
  }),
});

export const { useGetLoginQuery, useAddLoginMutation } = loginServices;

export default loginServices;
