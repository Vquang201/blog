import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Your Name',
        age: 'Your Age',
        about: 'Information about you',
        avaURL: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
        theme: 'yellow',
        data: JSON.parse(localStorage.getItem('data')),



    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avaURL = action.payload.avaURL
            state.theme = action.payload.theme
            // action.payload.name => name là mình sẽ truyền vào ở component khác
        },
        updateData: (state, action) => {
            state.data = action.payload.data
        }
    }
})

export const { update, updateData } = userSlice.actions
export default userSlice.reducer