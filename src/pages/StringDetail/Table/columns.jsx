import LinearProgressWithLabel from '../KPIs/LinearProgressWithLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';


export function makeColumns({ navigate, dispatch }) {

    return [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'panelName', headerName: 'Panel Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        variant='text'
                        style={{ textTransform: 'none' }}
                        onClick={() => {
                            navigate('/panelDetail')
                            dispatch(flowFromPlanttoString({ name: params.value, type: "panel" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'Status', headerName: 'Status', flex: 2,
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
                        {params.value}
                    </Box >
                )
            }
        },
        { field: 'DistributionCompany', headerName: 'Distribution Company', flex: 2 },
        { field: 'BrandModel', headerName: 'Brand / Model', flex: 2 },
        { field: 'Investor', headerName: 'Investor', flex: 2 },
        { field: 'Voltage', headerName: 'Voltage', flex: 2 },
        { field: 'DC', headerName: 'DC', flex: 2 },
        { field: 'Capacity', headerName: 'Capacity (kW)', flex: 2 },
        { field: 'ProducedEnergy', headerName: 'Produced Energy (kWh)', flex: 2 },
        { field: 'ForecastedEnergyProduction', headerName: 'Forecasted Energy Production (kWh)', flex: 2 },
        { field: 'ExpectedEnergyProduction', headerName: 'Expected Energy Production (kWh)', flex: 2 },

    ];
}