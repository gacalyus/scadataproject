
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DashBoardDate from '../../Dashboard/Date/DashBoardDate';
import Grid from '@mui/material/Unstable_Grid2';
import ExportIcon from "../../../assets/images/ExportIcon.svg"
import PlantListDataTable from '../../Lists/Plant/PlantListDataTable';
import { Button, Divider } from '@mui/material';
import FilterIcon from "../../../assets/images/FilterIcon.svg"
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import plusIcon from "../../../assets/images/plusIcon.svg"
import axios from 'axios'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const options = ['', 'Option 1', 'Option 2'];

const PlantList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');


    //filter popper states
    const [anchorEl, setAnchorEl] = React.useState(null);
    const filterPopperOpen = Boolean(anchorEl);
    const openFilterButtonId = filterPopperOpen ? 'simple-popper' : undefined;
    //filter popper states

    const dashboardPlantListRowsPreset = [{ "plantId": 0, "plantName": "-", "plantStatus": 1, "plantInvestor": "-", "plantDistributor": "NaN", "plantCapacity": 0, "specificYield": "0", "totalYield": "0", "performanceRatio": "0", "producedEnergy": 0 },];
    //plant list data
    const [plantListData, setPlantListData] = useState(dashboardPlantListRowsPreset);
    const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImVyZW5Ac2Vydmlzc29mdC5uZXQiLCJjb21wYW55SWQiOiIxOGNkZTdhYi1lM2E0LTRiMzAtODMwYi0wNDg5NmJkNTNmMzciLCJ1c2VySWQiOiI4ZTJjZmZhOC1mMTljLTQ1ZWUtOTk0OS0yZDFjMjg3NmJkNTUiLCJmdWxsTmFtZSI6IkVyZW4gQVNJxJ5MSSIsImV4cCI6MTcwNTQ0NDcyMiwiaXNzIjoiaHR0cHM6Ly93d3cuc2Vydmlzc29mdC5uZXQiLCJhdWQiOiJTZXJ2aXNTb2Z0In0.WgoyeDbyp7tl7-f1bF9aM28wc53VEow71Z5V9YLwyWw";


    useEffect(() => {

        axios.get("https://etta-api.servissoft.net/smartplain/dashboard/plantsList", { headers: { "Authorization": `Bearer ${tokenStr}` } })
            .then((response) => {
                setPlantListData(response.data);
            });


    }, [plantListData])

    console.log("plantLİst", plantListData);
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
                            Test
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
                        <Grid item xs={12} lg={9} container sx={{ marginBottom: "30px" }} spacing={3} display="flex" alignItems="center">
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
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                <img src={ExportIcon} alt="" /> *.Pdf
                            </Button >
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button aria-describedby={openFilterButtonId} onClick={handleFilterButtonClick} className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={FilterIcon} alt="" /> {t('filter')}
                            </Button>
                        </Grid>
                        <Grid item xs={1} lg={1} sx={{ width: 48, height: 48 }} display="flex" alignItems="baseline" justifyContent="center" >
                            <Button variant="contained" sx={{ width: 24, height: 48, fontSize: 24, backgroundColor: "#11A6E6" }}>
                                +
                            </Button>
                        </Grid>
                        <Grid item xs={12} lg={12} width="100%"  >
                            <PlantListDataTable rows={plantListData} />
                        </Grid>
                    </Grid>

                </div>
            </Grid>
        </>
    );
};

export default PlantList;
