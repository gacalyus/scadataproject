import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';
import HeatMapIcon from "../../../assets/images/HeatMapIcon.svg"



export function makeColumns({ navigate, dispatch }) {

    return [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'plantName', headerName: 'Plant Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant');
                            dispatch(flowFromPlanttoString({ name: params.value, type: "plant" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'inverterName', headerName: 'Inverter Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant');
                            dispatch(flowFromPlanttoString({ name: params.value, type: "plant" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'stringName', headerName: 'String Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant');
                            dispatch(flowFromPlanttoString({ name: params.value, type: "plant" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'panelName', headerName: 'Panel Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant');
                            dispatch(flowFromPlanttoString({ name: params.value, type: "plant" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'status', headerName: 'Status', flex: 2,
            renderCell: (params) => {
                return (
                    <Box
                        sx={{
                            borderRadius: '5px', backgroundColor: 'rgba(100, 217, 147, 0.16)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '4px 8px',
                            gap: '4px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#64D993'
                        }}
                    >
                        {params.value == 1 ? "Aktif" : "Pasif"}
                    </Box >
                )
            }
        },
        { field: 'distributionCompany', headerName: 'Distribution Company', flex: 2 },
        { field: 'brandModel', headerName: 'Brand/Model', flex: 1 },
        { field: 'investor', headerName: 'Investor', flex: 1 },
        { field: 'voltage', headerName: 'Voltage', flex: 1 },
        
        { field: 'dc', headerName: 'DC', flex: 1 },
        { field: 'capacityKwh', headerName: 'Capacity (kw)', flex: 1 },
        { field: 'producedEnergy', headerName: 'Produced Energy (kWh)', flex: 1 }
    ];
}