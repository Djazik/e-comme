import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({}),
});

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params
      }),
      providesTags: ["User"]
    }),
    postSignIn: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    })
  }),
})

export const {
    useGetUserQuery,
    usePostSignInMutation
} = userApi;
