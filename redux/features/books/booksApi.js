import { apiSlice } from '../api/apiSlice'

export const booksAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (arg) => [
        {
          type: 'SingleBook',
          id: arg,
        },
      ],
    }),
  }),
})

export const { useGetBooksQuery, useGetSingleBookQuery } = booksAPI
