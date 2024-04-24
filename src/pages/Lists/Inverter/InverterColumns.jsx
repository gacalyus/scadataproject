import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../features/dashboard/dashboardsilice';
import HeatMapIcon from "../../../assets/images/HeatMapIcon.svg"
import { fromPlanttoPanelLocalStrg } from '../../../customfunction/fromPlanttoPanelLocalStrg';



export function makeColumns({ navigate, dispatch, t }) {

    return [
        { field: 'inverterId', headerName: 'ID', flex: 1 },
        { field: 'plantName', headerName: 'Plant Name', flex: 2 },
        {
            field: 'inverterName', headerName: 'Inverter Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/inverterDetail/' + params.id);
                            dispatch(flowFromPlanttoString({ name: params.value, type: "inventer" }));
                            fromPlanttoPanelLocalStrg({ id: params.row.inverterId, type: "inverterId" });
                        }}
                    >
                        {params.value ?? "-"}
                    </Button>
                )
            }
        },
        {
            field: 'inverterStatus', headerName: 'Status', flex: 2,
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
                    </Box >
                )
            }
        },
        {
            field: 'heathMap', headerName: 'HeathMap', flex: 2,
            renderCell: (params) => {
                return (
                    <img src={HeatMapIcon} alt="" />
                )
            }
        },
        { field: 'inverterGroup', headerName: 'Inverter Group', flex: 2 },
        { field: 'stringQty', headerName: 'String qty.', flex: 2 },
        { field: 'brandModel', headerName: 'Brand/Model', flex: 2 },
        { field: 'capacity', headerName: 'Capacity', flex: 2 },
        { field: 'efficiency', headerName: 'Efficiency', flex: 2, },
        { field: 'instantGeneration', headerName: 'Instant Generation', flex: 2, },
        { field: 'totalYield', headerName: 'Total Yield', flex: 2, },
        { field: 'producedEnergy', headerName: 'Produced Energy', flex: 2, }
    ];
}