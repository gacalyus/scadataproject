import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: null,
    loading: false,
    error: ''
}

//iki parametre alır. Biri ismi , diğeri işlemi yapacak olan fonk.
export const fetchUSer = createAsyncThunk("fetchUSer", async (url) => {

    const response = await axios.get(url);

    return response.data;
})
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUSer.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchUSer.fulfilled, (state, action) => { 
            state.data = action.payload;
            state.loading = false;
        })
        //hata durumu kontrolü
        builder.addCase(fetchUSer.rejected, (state, action) => { 
            state.loading = false;
            state.error = "Hata oluştu!"
        })
    }
})

// Action creators are generated for each case reducer function

export default userSlice.reducer


