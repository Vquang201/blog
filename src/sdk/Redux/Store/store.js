import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice/userSlice'
// userReducer có thể tên bất kỳ miễn from.. đúng userSlice

export default configureStore({
    reducer: {
        user: userReducer,
    }
})