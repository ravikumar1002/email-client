
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllEmailThunk = createAsyncThunk(
    "/email/getAllEmail", async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://flipkart-email-mock.now.sh/")
                .then((response) => response.json())
            console.log(response)
            return response
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error, errorCode, errorMessage);
            return rejectWithValue(error);
        }
    }
);


export const getEmailThunk = createAsyncThunk(
    "/email/getEmail", async (id: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
                .then((response) => response.json())
            console.log(response)
            return response
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error, errorCode, errorMessage);
            return rejectWithValue(error);
        }
    }
);