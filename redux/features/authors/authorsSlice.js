import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'author',
}

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
})

export const {} = authorsSlice.actions

export default authorsSlice.reducer
