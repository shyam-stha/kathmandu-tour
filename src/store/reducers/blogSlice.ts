import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BlogStateType = {
    dropzoneFile: any
}

const initialState: BlogStateType = {
    dropzoneFile: null,
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        imageUploaded: (state, action: PayloadAction<BlogStateType>) => {
            state.dropzoneFile = action.payload
        },
    },
})

export const { imageUploaded } = blogSlice.actions
export default blogSlice.reducer
