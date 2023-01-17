import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '../features/appSlice'
import { emailReducer } from '../features/emailSlice'

export const store = configureStore({
    reducer: {
        emailsList: emailReducer,
        appData: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch