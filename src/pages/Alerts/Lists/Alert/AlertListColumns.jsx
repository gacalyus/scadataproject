import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Button } from '@mui/material';
import { flowFromPlanttoString } from '../../../../features/dashboard/dashboardsilice';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CheckCircle } from '@mui/icons-material';
import critical from '../../../../assets/images/AlertList/critical.svg';
import major from '../../../../assets/images/AlertList/major.svg';
import minör from '../../../../assets/images/AlertList/minör.svg';
import success from '../../../../assets/images/AlertList/success.svg';
import warning from '../../../../assets/images/AlertList/warning.svg';


// const AlarmSeverity = ({ value }) => {

//     const backgroundColorReturn = () => {
//         switch (value) {
//             case "Success":
//                 return "rgba(100, 217, 147, 0.16)";
//             case "Critical":
//                 return "rgba(251, 119, 119, 0.16)";
//             case "Major":
//                 return "rgba(255, 157, 85, 0.16)";
//             case "Minör":
//                 return "rgba(242, 187, 48, 0.16)";
//             case "Warning":
//                 return "rgba(79, 175, 245, 0.16)";
//             default:
//                 return "red";
//         }
//     }
//     const textColorReturn = () => {
//         switch (value) {
//             case "Success":
//                 return "#64D993";
//             case "Critical":
//                 return "#FB7777";
//             case "Major":
//                 return "#FF9D55";
//             case "Minör":
//                 return "#F2BB30";
//             case "Warning":
//                 return "#4FAFF5";
//             default:
//                 return "red";
//         }
//     }

//     const IconReturn = () => {
//         switch (value) {
//             case "Success":
//                 return success;
//             case "Critical":
//                 return critical
//             case "Major":
//                 return major;
//             case "Minör":
//                 return minör;
//             case "Warning":
//                 return warning;
//             default:
//                 return critical
//         }
//     }
//     return (
//         <Box style={{
//             backgroundColor: backgroundColorReturn(),
//             display: "flex",
//             padding: "6px 12px",
//             alignItems: "center",
//             color: textColorReturn(),
//             borderRadius: "6px",
//             fontSize: "12px",
//             textTransform: 'none',
//         }}>
//             <img src={IconReturn()} style={{ marginRight: "10px" }} alt="" />
//             {value}
//         </Box>
//     )
// }
const AlarmSeverity = ({ value }) => {
    const variables = {
        Success: {
            backgroundColor: "rgba(100, 217, 147, 0.16)",
            textColor: "#64D993",
            icon: success
        },
        Critical: {
            backgroundColor: "rgba(251, 119, 119, 0.16)",
            textColor: "#FB7777",
            icon: critical
        },
        Major: {
            backgroundColor: "rgba(255, 157, 85, 0.16)",
            textColor: "#FF9D55",
            icon: major
        },
        Minör: {
            backgroundColor: "rgba(242, 187, 48, 0.16)",
            textColor: "#F2BB30",
            icon: minör
        },
        Warning: {
            backgroundColor: "rgba(79, 175, 245, 0.16)",
            textColor: "#4FAFF5",
            icon: warning
        },
        default: {
            backgroundColor: "grey",
            textColor: "grey",
            icon: critical
        },
    };
    const { backgroundColor, textColor, icon } = variables[value] || variables.default;

    return (
        <Box style={{
            backgroundColor,
            display: "flex",
            padding: "6px 12px",
            alignItems: "center",
            color: textColor,
            borderRadius: "6px",
            fontSize: "12px",
            textTransform: 'none',
        }}>
            <img src={icon} style={{ marginRight: "10px" }} alt="" />
            {value}
        </Box>
    );
};
export function makeColumns({ navigate, dispatch, t }) {

    return [
        { field: 'alertId', headerName: `${t('TABLE_ID')}`, flex: 1 },
        {
            field: 'alertStatus', headerName: 'Status', flex: 2,
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
                        {params.value == 1 ? t('open') : t('closed')}
                    </Box >
                )
            }
        },
        {
            field: 'plantName', headerName: 'Plant Name', flex: 2,
            renderCell: (params) => {
                return (
                    <Button
                        onClick={() => {
                            navigate('/plant/' + params.id);
                            dispatch(flowFromPlanttoString({ name: params.value, type: "plant" }));
                        }}
                    >
                        {params.value}
                    </Button>
                )
            }
        },

        { field: 'deviceType', headerName: 'DeviceType', flex: 2 },
        { field: 'deviceName', headerName: 'Device Name', flex: 2 },
        { field: 'alarmType', headerName: 'Alarm Type', flex: 2 },
        { field: 'alarmName', headerName: 'Alarm Name', flex: 2 },
        {
            field: 'alarmSeverity', headerName: 'Alarm Severity', flex: 3,
            renderCell: (params) => <AlarmSeverity value={params.value} />
        },
        { field: 'distributionCompany', headerName: 'Distribution Company', flex: 2 },
        { field: 'investor', headerName: 'Investor', flex: 2 },
        { field: 'localTime', headerName: 'Local Time', flex: 2 },
        { field: 'generationTime', headerName: 'Generation Time', flex: 2 }

    ];
}