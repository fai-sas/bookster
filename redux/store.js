import { configureStore } from '@reduxjs/toolkit'
import authorsSliceReducer from './features/authors/authorsSlice'
import { apiSlice } from '@/redux/features/api/apiSlice'

export const store = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      authors: authorsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
}
