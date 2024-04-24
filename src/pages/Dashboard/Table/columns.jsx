import LinearProgressWithLabel from '../KPIs/LinearProgressWithLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';



export function makeColumns({ navigate, dispatch }) {

    return [
        { field: 'plantId', headerName: 'ID', flex: 1 },
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
        { field: 'plantStatus', headerName: 'Status', flex: 2 },
        { field: 'plantInvestor', headerName: 'Investor', flex: 2 },
        { field: 'plantDistributor', headerName: 'Distribution Company', flex: 2 },
        { field: 'plantCapacity', headerName: 'Capacity (kW)', flex: 2 },
        { field: 'specificYield', headerName: 'Specific Yield (kWh)', flex: 2 },
        {
            field: 'totalYield', headerName: 'Total Yield (MWh)', flex: 2,
        },
        {
            field: 'performanceRatio', headerName: 'Performance Ratio (%)', flex: 2,
            renderCell: (params) => {
                return (
                    <Box sx={{ width: '100%', display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: '80%', marginRight: "0.3rem" }}> <LinearProgress variant='determinate' value={90} /> </Box>
                        90%
                    </Box>
                )
            }
        },
        {
            field: 'producedEnergy', headerName: 'Produced Energy (kWh)', flex: 2,

        },
    ];
}