import LinearProgressWithLabel from '../KPIs/LinearProgressWithLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice'; 


export function makeColumns({ navigate ,dispatch}) {
    
    return [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'stringName', headerName: 'String Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        variant='text'
                        style={{ textTransform: 'none' }}
                        onClick={() => {
                            navigate('/stringDetail')
                            dispatch(flowFromPlanttoString({ name: params.value, type: "string" }));
                        }}
                    >
                        {params.value} <NavigateNextIcon />
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
        { field: 'TrackerQty', headerName: 'Tracker qty.', flex: 2 },
        {
            field: 'TrackerStatus', headerName: 'Tracker Status', flex: 2,
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
        { field: 'HeatMap', headerName: 'Heatmap', flex: 2 },
        { field: 'Investor', headerName: 'Investor', flex: 2 },
        { field: 'PanelQty', headerName: 'Panel qty.', flex: 2, },

        { field: 'BrandModel', headerName: 'Brand /Model', flex: 2 },
        { field: 'Capacity', headerName: 'Capacity (kW)', flex: 2 },
        { field: 'StringCurrentCapacity', headerName: 'String Current Capacity', flex: 2 },
        { field: 'SpecificYield', headerName: 'Specific Yield (kWh)', flex: 2 },
        { field: 'TotalYield', headerName: 'Total Yield (MWh)', flex: 2, },
    ];
}