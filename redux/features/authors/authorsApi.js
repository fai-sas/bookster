const { apiSlice } = require('../api/apiSlice')

export const authorsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/authors',
      providesTags: ['Authors'],
    }),
    getSingleAuthor: builder.query({
      query: (id) => `/authors/${id}`,
      providesTags: (arg) => [
        {
          type: 'SingleAuthor',
          id: arg,
        },
      ],
    }),
    addAuthor: builder.mutation({
      query: (data) => ({
        url: '/authors',
        method: 'POST',
        body: data,
      }),
    }),
    editAuthor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/authors/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (arg) => [
        'Authors',
        {
          type: 'SingleAuthor',
          id: arg.id,
        },
      ],
    }),
  }),
})

export const {
  useGetAuthorsQuery,
  useGetSingleAuthorQuery,
  useAddAuthorMutation,
  useEditAuthorMutation,
} = authorsAPI
