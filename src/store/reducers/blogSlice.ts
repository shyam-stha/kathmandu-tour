import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBlogDetail } from '../../utils/interfaces/IBlog'

type BlogStateType = {
    blogDetail: {}
}

const initialState: BlogStateType = {
    blogDetail: {}
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
       editBlog : (state, action: PayloadAction<IBlogDetail>) =>{
            state.blogDetail = action.payload
       }
    },
})

export const { editBlog } = blogSlice.actions
export default blogSlice.reducer
