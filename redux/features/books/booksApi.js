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
    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetBooksQuery, useGetSingleBookQuery, useAddBookMutation } =
  booksAPI
