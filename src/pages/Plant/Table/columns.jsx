import LinearProgressWithLabel from '../KPIs/LinearProgressWithLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { InverterInfo, flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export function makeColumns({ navigate, dispatch }) {

    return [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'plantName', headerName: 'Plant Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        variant='text'
                        style={{ textTransform: 'none' }}
                        onClick={() => {
                            navigate('/inverterDetail')
                            dispatch(flowFromPlanttoString({ name: params.value, type: "inventer" }));
                        }}
                    >
                        {params.value}<NavigateNextIcon />
                    </Button>
                )
            }
        },
        { field: 'Status', headerName: 'Status', flex: 2 },
        { field: 'Investor', headerName: 'Investor', flex: 2 },
        { field: 'Distribution', headerName: 'Distribution Company', flex: 2 },
        { field: 'Capacity', headerName: 'Capacity (kW)', flex: 2 },
        { field: 'SpecificYield', headerName: 'Specific Yield (kWh)', flex: 2 },
        {
            field: 'TotalYield', headerName: 'Total Yield (MWh)', flex: 2,

        },
        {
            field: 'PerformanceRatio', headerName: 'Performance Ratio (%)', flex: 2,
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
            field: 'ProducedEnergy', headerName: 'Produced Energy (kWh)', flex: 2,

        },
    ];
}