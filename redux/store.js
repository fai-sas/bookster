import { configureStore } from '@reduxjs/toolkit'
import authorsSliceReducer from './features/authors/authorsSlice'
import { apiSlice } from '@/redux/features/api/apiSlice'

export const store = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      authors: authorsSliceReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools extension
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
}
