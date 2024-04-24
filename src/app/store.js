import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/usersilice'
import dashboardReducer from '../features/dashboard/dashboardsilice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        dashboard:dashboardReducer,
    },
})