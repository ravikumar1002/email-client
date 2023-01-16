import { createSlice } from "@reduxjs/toolkit"
import { IEmailDto } from "../dto/emailsDTO"
import { getAllEmailThunk, getEmailThunk } from "../thunk/emailsThunk";
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
    emails: IEmailDto[];
    filterEmails: IEmailDto[];
    totalEmails: number;
    emailSort: {
        read: string[];
        unread: string[];
        favorite: string[];
    };
    emailData: {};
    emailsStatus: string;
    emailStatus: string;
}

const initialState: IInitialState = {
    emails: [],
    filterEmails: [],
    emailSort: {
        read: [],
        unread: [],
        favorite: [],
    },
    emailData: {},
    totalEmails: 0,
    emailsStatus: "idle",
    emailStatus: "idle",
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        addEmailInRead: (state, action: PayloadAction<string>) => {
            state.emailSort.read = [...state.emailSort.read, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllEmailThunk.pending, (state, action) => {
                state.emailsStatus = "pending";
            })
            .addCase(getAllEmailThunk.fulfilled, (state, action) => {
                state.emailsStatus = "fulfilled";
                state.emails = action.payload?.list;
                state.filterEmails = action.payload?.list;
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

export const { addEmailInRead } = emailSlice.actions

export const emailReducer = emailSlice.reducer


