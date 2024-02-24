const { apiSlice } = require('../api/apiSlice')

export const authorsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/posts',
    }),
  }),
})

export const { useGetAuthorsQuery } = authorsAPI
