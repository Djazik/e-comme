import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT } from "../../constants";

const productServices = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    tagTypes: ["product"],
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products?limit=8`,
      invalidatesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
   
  }),
});

export const { useGetProductsQuery ,useGetProductByIdQuery} = productServices;
export default productServices;
