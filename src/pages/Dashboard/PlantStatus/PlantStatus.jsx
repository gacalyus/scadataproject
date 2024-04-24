import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Unstable_Grid2';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Avatar from '@mui/material/Avatar';
import './PlantStatus.css';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
    indicator: {
        display: 'none', // MUI v5'de göstergeyi kaldırmak için
    },

}));

export default function PlantStatus() {

    const classes = useStyles();
    const { t } = useTranslation();

    const shapeStyles = { bgcolor: 'primary.main', width: 20, height: 20 };
    const shapeCircleStyles = { borderRadius: '50%' };
    const circle = (
        <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
    );

    return (
        <Box sx={{ width: '100%', }}>
            <Grid container spacing={1} style={{ margin: 0, width: '100%', }} >
                <Grid item xs={12} lg={12} >
                    <span className='plantStatusCompTitle'>{t("plant-status")}</span>

                </Grid>
                <Grid item xs={12} marginY="2rem" lg={12} display="flex" justifyContent="center" alignItems="center" >
                    <span className='plantStatusTotal'>18</span>
                </Grid>
                <Grid item xs={12} lg={12} container marginTop="1rem" >
                    <Grid item xs={12} lg={4} display="flex" >
                        <div className='plantStatusInfo'>
                            <span >10</span>
                            <Box display="flex" flexDirection="row" alignItems="center" >
                                <span>{t("active")}</span>
                                <Avatar sx={{ marginLeft: "5px", bgcolor: "#00BC13", width: "15px", height: "15px", display: "flex" }} > </Avatar>
                            </Box>
                        </div>

                    </Grid>
                    <Grid item xs={12} lg={4} display="flex" >
                        <div className='plantStatusInfo'>
                            <span >5</span>
                            <Box display="flex" flexDirection="row" alignItems="center" >
                                <span>{t("faulty")}</span>
                                <Avatar sx={{ marginLeft: "5px", bgcolor: "#D20000;", width: "15px", height: "15px", display: "flex" }} > </Avatar>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4} display="flex" >
                        <div className='plantStatusInfo'>
                            <span >3</span>
                            <Box display="flex" flexDirection="row" alignItems="center" >
                                <span>{t("ofline")}</span>
                                <Avatar sx={{ marginLeft: "5px", bgcolor: "#818898", width: "15px", height: "15px", display: "flex" }} > </Avatar>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}
