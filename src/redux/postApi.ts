import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (limit: number = 250) => `photos?_limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
