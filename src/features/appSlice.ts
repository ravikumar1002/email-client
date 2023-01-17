import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialState {
    activeFilter: string | null;
}

const initialState: IInitialState = {
    activeFilter: null,
}

export const appSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        saveFilterType: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload
        },
    },
})

export const { saveFilterType } = appSlice.actions

export const appReducer = appSlice.reducer
