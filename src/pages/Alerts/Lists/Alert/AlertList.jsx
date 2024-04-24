
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import ExportIcon from "../../../../assets/images/ExportIcon.svg"
import { Button, Divider } from '@mui/material';
import FilterIcon from "../../../../assets/images/FilterIcon.svg"
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import plusIcon from "../../../../assets/images/plusIcon.svg"
import axios from 'axios'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AlertListDataTable from './AlertListDataTable';

const options = ['', 'Option 1', 'Option 2'];

const AlertList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    //filter popper states
    const [anchorEl, setAnchorEl] = React.useState(null);
    const filterPopperOpen = Boolean(anchorEl);
    const openFilterButtonId = filterPopperOpen ? 'simple-popper' : undefined;
    //filter popper states

    const alertListRowsRowsPreset = [{
        "alertId": 1, "alertStatus": 1, "plantName": "-", "deviceType": "-", "deviceName": "-", "alarmType": "-",
        "alarmName": "Test", "alarmSeverity": "Success", "distributionCompany": "XXX", "investor": "XXX", "localTime": "14.11.2023 19:20", "generationTime": "14.11.2023 19:21"
    }, {
        "alertId": 2, "alertStatus": 2, "plantName": "-", "deviceType": "-", "deviceName": "-", "alarmType": "-",
        "alarmName": "Test", "alarmSeverity": "Critical", "distributionCompany": "XXX", "investor": "XXX", "localTime": "14.11.2023 19:20", "generationTime": "14.11.2023 19:21"
    }, {
        "alertId": 3, "alertStatus": 2, "plantName": "-", "deviceType": "-", "deviceName": "-", "alarmType": "-",
        "alarmName": "Test", "alarmSeverity": "Major", "distributionCompany": "XXX", "investor": "XXX", "localTime": "14.11.2023 19:20", "generationTime": "14.11.2023 19:21"
    }, {
        "alertId": 4, "alertStatus": 1, "plantName": "-", "deviceType": "-", "deviceName": "-", "alarmType": "-",
        "alarmName": "Test", "alarmSeverity": "Minör", "distributionCompany": "XXX", "investor": "XXX", "localTime": "14.11.2023 19:20", "generationTime": "14.11.2023 19:21"
    }, {
        "alertId": 5, "alertStatus": 1, "plantName": "-", "deviceType": "-", "deviceName": "-", "alarmType": "-",
        "alarmName": "Test", "alarmSeverity": "Warning", "distributionCompany": "XXX", "investor": "XXX", "localTime": "14.11.2023 19:20", "generationTime": "14.11.2023 19:21"
    }];
    //plant list data


    const handleFilterButtonClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };


    return (
        <>

            <Popper id={openFilterButtonId} open={filterPopperOpen} placement={'left'} anchorEl={anchorEl}>
                <Box sx={{ width: 312 }}>
                    <Paper elevation={3} borderRadius="16px">
                        <Grid container xs={12} lg={12} flexDirection={"column"}>
                            <Grid item xs={12} lg={12} p={3}>
                                <span>
                                    Filter Options
                                </span>
                                <span style={{ float: "right" }}>
                                    <img src={plusIcon} alt=" " />
                                </span>
                            </Grid>

                        </Grid>
                        <Divider />
                        <Grid container xs={12} lg={12}>
                            TEst
                        </Grid>
                    </Paper>
                </Box>
            </Popper >

            <Grid item xs={12} lg={12} display="flex" justifyContent='center' marginTop="30px">
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        padding: "24px",
                        borderRadius: "16px",
                        flexDirection: "column",
                        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                    }}  >
                    <Grid container xs={12} lg={12} width="100%"  >
                        <Grid item xs={12} lg={5} container sx={{ marginBottom: "30px" }} spacing={3} display="flex" alignItems="center">
                            <Grid item xs={12} sx={{ width: 320 }}>
                                <Paper
                                    component="form"
                                    sx={{ maxHeight: "30px", p: '9px 12px', display: 'flex', backgroundColor: "#F6F6FB", boxShadow: 'none', fontSize: '12px' }}
                                >

                                    <InputBase
                                        sx={{ flex: 1 }}
                                        placeholder={t('search')}
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                        size="small"
                                    />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5} display="flex" justifyContent="flex-end" gap="8px">
                            <Button
                                style={{
                                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                                    textTransform: 'none',
                                    display: "flex",
                                    height: "48px",
                                    padding: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    color: "#282B2E",
                                    fontWeight: 500
                                }}  >   {t('all')}   
                            </Button>
                            <Button
                                disabled
                                style={{
                                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                                    textTransform: 'none',
                                    display: "flex",
                                    height: "48px",
                                    padding: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    color: "#91A1A9",
                                    fontWeight: 500
                                }}  >   {t('open')}
                            </Button>
                            <Button
                                disabled
                                style={{
                                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                                    textTransform: 'none',
                                    display: "flex",
                                    height: "48px",
                                    padding: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    color: "#91A1A9",
                                    fontWeight: 500
                                }}  >      {t('closed')}
                            </Button>
                            <Button
                                disabled
                                style={{
                                    backgroundColor: "rgba(145, 158, 171, 0.08)",
                                    textTransform: 'none',
                                    display: "flex",
                                    height: "48px",
                                    padding: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    color: "#91A1A9",
                                    fontWeight: 500
                                }}  >
                                {t('has_worky')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={ExportIcon} alt="" /> *.Pdf
                            </Button >
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button aria-describedby={openFilterButtonId} onClick={handleFilterButtonClick} className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={FilterIcon} alt="" /> {t('filter')}
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={12} width="100%"  >
                            <AlertListDataTable rows={alertListRowsRowsPreset} />
                        </Grid>
                    </Grid>

                </div >
            </Grid >
        </>
    );
};

export default AlertList;
