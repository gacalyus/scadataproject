import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: null,
    loading: false,
    error: '',
    plantstatus: null,
    plantstatusloading: false,
    plantstatuserror: null,
    InverterInfo: null,
    flowPlanttoString: {
        PlantName: null,
        InventerName: null,
        StringName: null,
        PanelName: null
    }
}

//iki parametre alır. Biri ismi , diğeri işlemi yapacak olan fonk.
export const fetchPlantStatus = createAsyncThunk("fetchPlantStatus", async (url) => {

    const response = await axios.get(url);

    return response.data;
})
export const InverterInfo = createAsyncThunk("InverterInfo", (info) => {
    return info;
})
export const flowFromPlanttoString = createAsyncThunk("flowFromPlanttoString", (unitName) => {

    return unitName;
})
export const userSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlantStatus.pending, (state, action) => {
            state.plantstatusloading = true;
            state.plantstatuserror = "";
        });
        builder.addCase(fetchPlantStatus.fulfilled, (state, action) => {
            state.plantstatus = action.payload;
            state.plantstatusloading = false;
        })
        builder.addCase(InverterInfo.fulfilled, (state, action) => {
            state.InverterInfo = action.payload;
        })
        builder.addCase(flowFromPlanttoString.fulfilled, (state, action) => {

            switch (action.payload.type) {
                case "plant":
                    state.flowPlanttoString.PlantName = action.payload.name
                    break;
                case "inventer":
                    state.flowPlanttoString.InventerName = action.payload.name
                    break;
                case "string":
                    state.flowPlanttoString.StringName = action.payload.name
                    break;
                case "panel":
                    state.flowPlanttoString.PanelName = action.payload.name
                    break;
                default:
                    break;
            }

        })
        //hata durumu kontrolü
        builder.addCase(fetchPlantStatus.rejected, (state, action) => {
            state.plantstatusloading = false;
            state.plantstatuserror = "Hata oluştu!";
        })
    }
})

// Action creators are generated for each case reducer function

export default userSlice.reducer