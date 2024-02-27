import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    // baseUrl: 'https://bookster-alpha.vercel.app/api',
  }),
  tagTypes: ['Authors', 'SingleAuthor', 'Categories', 'SingleCategory'],
  endpoints: (builder) => ({}),
})
