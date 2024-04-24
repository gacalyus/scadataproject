import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



export const fetchPlantStatus = createAsyncThunk("fetchPlantStatus", async (url) => {
    const response = await axios.get(url);
    return response.data;
})
