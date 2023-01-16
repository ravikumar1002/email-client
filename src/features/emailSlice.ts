import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store"
import { IEmailsDto } from "../dto/emailsDTO"
import { getAllEmailThunk, getEmailThunk } from "../thunk/emailsThunk";

interface IInitialState {
    emails: [];
    totalEmails: number;
    emailData: {};
    emailsStatus: string;
    emailStatus: string;
}

const initialState: IInitialState = {
    emails: [],
    emailData: {},
    totalEmails: 0,
    emailsStatus: "idle",
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
                state.emailsStatus = "pending";
            })
            .addCase(getAllEmailThunk.fulfilled, (state, action) => {
                state.emailsStatus = "fulfilled";
                state.emails = action.payload?.list;
                state.totalEmails = action.payload?.total;
            })
            .addCase(getAllEmailThunk.rejected, (state, action) => {
                state.emailsStatus = "rejected";
            })
            .addCase(getEmailThunk.pending, (state, action) => {
                state.emailStatus = "pending";
            })
            .addCase(getEmailThunk.fulfilled, (state, action) => {
                state.emailStatus = "fulfilled";
                state.emailData = action.payload
            })
            .addCase(getEmailThunk.rejected, (state, action) => {
                state.emailStatus = "rejected";
            })
    }
})


export const emailReducer = emailSlice.reducer


