
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEmailDto, IEmailsDto } from "../dto/emailsDTO";
import { getDataAsJSON } from "../service/GetAsJson";

export const getAllEmailThunk = createAsyncThunk(
    "/email/getAllEmail", async (pageNo: number, { rejectWithValue }) => {
        try {
            const response = await getDataAsJSON(`?page=${pageNo}`)
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
            const response = await getDataAsJSON(`?id=${id}`)
            return response
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error, errorCode, errorMessage);
            return rejectWithValue(error);
        }
    }
);