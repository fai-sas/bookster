const { apiSlice } = require('../api/apiSlice')

export const authorsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/authors',
    }),
    addAuthor: builder.mutation({
      query: (data) => ({
        url: '/authors',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetAuthorsQuery, useAddAuthorMutation } = authorsAPI
