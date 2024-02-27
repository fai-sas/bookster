const { apiSlice } = require('../api/apiSlice')

export const categoriesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => '/categories',
      providesTags: ['Categories'],
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

export const { useGetAuthorsQuery, useAddCategoryMutation } = categoriesAPI
