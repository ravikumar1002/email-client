import { configureStore } from '@reduxjs/toolkit'
import { emailReducer } from '../features/emailSlice'

export const store = configureStore({
    reducer: {
        emailsList: emailReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch