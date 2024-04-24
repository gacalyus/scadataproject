import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { makeColumns } from './columns';
import { useDispatch } from 'react-redux';





const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: "1px solid #E9EEF0",
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));



const rows = [
    {
        id: 17,
        stringName: 'String 1',
        Status: 'Active',
        TrackerQty: 12,
        TrackerStatus: 'Active',
        HeatMap: 'HeatMap',
        Investor: 'Smart Solar',
        PanelQty: 8,
        BrandModel: 'brand',
        Capacity: '1.905 kW',
        StringCurrentCapacity: 'xxx',
        SpecificYield: '6.22 kWh',
        TotalYield: '17.40 MWh',
    },
    {
        id: 18,
        stringName: 'Str 1',
        Status: 'Active',
        TrackerQty: 12,
        TrackerStatus: 'Active',
        HeatMap: 'HeatMap',
        Investor: 'Smart Plain',
        PanelQty: 8,
        BrandModel: 'brand',
        Capacity: '3.689 kW',
        StringCurrentCapacity: 'xxx',
        SpecificYield: '6.22 kWh',
        TotalYield: '77.01 MWh',
    },

];

export default function DataTable() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const columns = makeColumns({ navigate, dispatch })
    return (
        <div style={{ width: '100%' }}>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                // initialState={{
                //     pagination: {
                //         paginationModel: { page: 0, pageSize: 5 },
                //     },
                // }}
                // pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}