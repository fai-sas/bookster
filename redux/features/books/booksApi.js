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
      invalidatesTags: ['Books'],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (arg) => [
        ['Books'],
        {
          type: 'SingleBook',
          id: arg.id,
        },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
})

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = booksAPI
