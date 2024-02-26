const { apiSlice } = require('../api/apiSlice')

export const authorsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/authors',
    }),
    getSingleAuthor: builder.query({
      query: (id) => `/authors/${id}`,
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

export const {
  useGetAuthorsQuery,
  useGetSingleAuthorQuery,
  useAddAuthorMutation,
} = authorsAPI
