import { createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../../helpers/http.hook";
import { BASE_URL } from "../../../helpers/constants";
import getHeaders from "../../../helpers/getHeaders";


export const registration = createAsyncThunk(
    'registration/userRegistration',
    async (body) => {
        const {request} = useHttp();
        const res = await request(
            `${BASE_URL}/auth/registration`, 
            'POST', 
            JSON.stringify(body), 
            getHeaders()
            )
            
        return await res;
    }
)