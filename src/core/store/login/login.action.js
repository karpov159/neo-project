import { createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../../helpers/http.hook";
import { BASE_URL } from "../../../helpers/constants";
import getHeaders from "../../../helpers/getHeaders";

export const auth = createAsyncThunk(
    'auth/userAuthorization',
    async (body) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/auth/login`, 
            'POST', 
            JSON.stringify(body),
            getHeaders()
        )
            
        return await res;
    }
)