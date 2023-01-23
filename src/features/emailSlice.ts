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
        favorite: string[];
    };
    emailData: {
        id: string;
        body: string;
    };
    emailsStatus: string;
    emailStatus: string;
}

const initialState: IInitialState = {
    emails: [],
    filterEmails: [],
    emailSort: {
        read: [],
        favorite: [],
    },
    emailData: {
        id: "",
        body: "",
    },
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
        },
        addEmailInFavorite: (state, action: PayloadAction<string>) => {
            state.emailSort.favorite = [...state.emailSort.favorite, action.payload]
            localStorage.setItem("favorite", JSON.stringify(state.emailSort.favorite))
        },
        filterUnreadEmail: (state) => {
            state.filterEmails = state.emails.filter((email) => {
                return !state.emailSort.read.includes(email.id)
            })
        },
        filterReadEmail: (state) => {
            state.filterEmails = state.emails.filter((email) => {
                return state.emailSort.read.includes(email.id)
            })
        },
        filterFavorite: (state) => {
            state.filterEmails = state.emails.filter((email) => {
                return state.emailSort.favorite.includes(email.id)
            })
        },
        allEmails: (state) => {
            state.filterEmails = state.emails
        },
        removeFromFavorite: (state, action: PayloadAction<string>) => {
            const favoriteArr = state.emailSort.favorite.filter((id) => id === action.payload ? false : true)
            state.emailSort.favorite = favoriteArr
            localStorage.setItem("favorite", JSON.stringify(state.emailSort.favorite))
        },
        saveLocalStorageData: (state, action: PayloadAction<{ read: string[], favorite: string[] }>) => {
            state.emailSort.read = action.payload.read ? action.payload.read : []
            state.emailSort.favorite = action.payload.favorite ?action.payload.favorite   :  []
        },
        closeDetailEmail: (state) => {
            state.emailData.id = ""
            state.emailData.body = ""
        },
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

export const { addEmailInRead, addEmailInFavorite, filterUnreadEmail, filterReadEmail, filterFavorite, removeFromFavorite, closeDetailEmail, saveLocalStorageData, allEmails } = emailSlice.actions

export const emailReducer = emailSlice.reducer


