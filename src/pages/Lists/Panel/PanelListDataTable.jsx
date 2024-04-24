import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { makeColumns } from '../../Lists/Panel/PanelListColumns';
import { useDispatch } from 'react-redux';



const StyledDataGrid = styled(DataGrid)(({ theme }) => ({

    border: "1px solid #E9EEF0",
    borderRadius: "8px",
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
        "id": 1,
        "plantName": "GAP GES 1",
        "inverterName": "Inverter 1",
        "stringName": "String 1",
        "panelName": "Panel 1",
        "status": 1,
        "distributionCompany": "XXX",
        "brandModel": "XXX",
        "investor": "Smart Solar",
        "voltage": 10,
        "dc": 10,
        "capacityKwh": "1.905 kW",
        "producedEnergy": 1
    },
    {
        "id": 2,
        "plantName": "GAP GES 2",
        "inverterName": "Inverter 2",
        "stringName": "String 3",
        "panelName": "Panel 4",
        "status": 1,
        "distributionCompany": "XXX",
        "brandModel": "XXX",
        "investor": "Smart Solar",
        "voltage": 30,
        "dc": 20,
        "capacityKwh": "2.905 kW",
        "producedEnergy": 1
    },
];

export default function PanelListDataTable() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const columns = makeColumns({ navigate, dispatch })

    return (
        <div style={{ width: '100%' }} sx={{ overflowX: 'scroll' }}        >
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