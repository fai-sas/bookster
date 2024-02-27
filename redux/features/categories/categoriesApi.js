const { apiSlice } = require('../api/apiSlice')

export const categoriesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),
    getSingleCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: (arg) => [
        {
          type: 'SingleCategory',
          id: arg,
        },
      ],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: '/categories',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useGetAuthorsQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
} = categoriesAPI
