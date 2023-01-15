import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store"
import { IEmailsDto } from "../dto/emailsDTO"
import { getAllEmailThunk } from "../thunk/emailsThunk";

interface IInitialState {
    emails: {};
    totalEmails: number;
    emailStatus: string;
}

const initialState: IInitialState = {
    emails: [],
    totalEmails: 0,
    emailStatus: "idle",
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllEmailThunk.pending, (state, action) => {
                state.emailStatus = "pending";
            })
            .addCase(getAllEmailThunk.fulfilled, (state, action) => {
                state.emailStatus = "fulfilled";
                state.emails = action.payload?.list;
                state.totalEmails= action.payload?.total;
            })
            .addCase(getAllEmailThunk.rejected, (state, action) => {
                state.emailStatus = "rejected";
            })
    }
})


export const emailReducer = emailSlice.reducer


