import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



export const fetchUSer = createAsyncThunk("fetchUSer", async (url) => {

    const response = await axios.get(url);

    return response.data;
})
