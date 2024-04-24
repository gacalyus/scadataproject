import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';
import { fromPlanttoPanelLocalStrg } from '../../../customfunction/fromPlanttoPanelLocalStrg';



export function makeColumns({ navigate, dispatch, t }) {

    return [
        { field: 'plantId', headerName: `${t('TABLE_ID')}`, flex: 1 },
        {
            field: 'plantName', headerName: 'Plant Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant/' + params.id);
                            dispatch(flowFromPlanttoString({ name: params.row.plantId, type: "plant" }));
                            fromPlanttoPanelLocalStrg({ id: params.row.plantId, type: "plantId" })
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },
        {
            field: 'plantStatus', headerName: 'Status', flex: 2,
            renderCell: (params) => {
                return (
                    <Box
                        sx={{
                            borderRadius: '5px',
                            backgroundColor: params.value == 1 ? 'rgba(100, 217, 147, 0.16)' : '#8993A329',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '4px 8px',
                            gap: '4px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: params.value == 1 ? '#64D993' : '#8993A3'

                        }}
                    >
                        {params.value == 1 ? t('online') : t('offline')}
                        {params.row.predictionStatus == 1 && " - AI"}
                    </Box >
                )
            }
        },
        { field: 'plantInvestor', headerName: 'Investor', flex: 2 },
        { field: 'plantDistributor', headerName: 'Distribution Company', flex: 2 },
        { field: 'plantCapacity', headerName: 'Capacity', flex: 2 },
        {
            field: 'totalYield', headerName: 'Total Yield', flex: 2,
        },
        {
            field: 'performanceRatio', headerName: 'Performance Ratio', flex: 2,
            renderCell: (params) => {
                return (
                    <Box sx={{ width: '100%', display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: '80%', marginRight: "0.3rem" }}> <LinearProgress variant='determinate' value={params.value === "NaN" ? 0 : params.value} /> </Box>
                        {params.value === "NaN" ? 0 : params.value} %
                    </Box>
                )
            }
        },
        {
            field: 'producedEnergy', headerName: 'Produced Energy', flex: 2,

        },
    ];
}