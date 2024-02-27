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
    editCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (arg) => [
        'Categories',
        {
          type: 'SingleCategory',
          id: arg.id,
        },
      ],
    }),
  }),
})

export const {
  useGetAuthorsQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
} = categoriesAPI
