import { configureStore } from '@reduxjs/toolkit'
import BlogReducer from './reducers/blogSlice'

export const store = configureStore({
    reducer: {
        blog: BlogReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
