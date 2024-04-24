
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import InverterDataTable from '../../Lists/Inverter/InverterDataTable';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider } from '@mui/material';
import ExportIcon from "../../../assets/images/ExportIcon.svg"
import FilterIcon from "../../../assets/images/FilterIcon.svg"
import HeatMapIcon from "../../../assets/images/HeatMapIcon.svg"
import axios from 'axios'

const options = ['', 'Option 1', 'Option 2'];

const InverterList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()


    const inventerListPresetData = [{
        inverterId: 0, plantName: "-", inventerName: "-", status: 1, heathMap: "heathMap",
        inverterGroup: "-", stringQty: 0, brandModel: "-", capacity: 0, efficiency: 0, instantGeneration: 0, totalYield: 0, producedEnergy: 0
    }];

    const [inventerListData, setInventerListData] = useState(inventerListPresetData);
    const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImVyZW5Ac2Vydmlzc29mdC5uZXQiLCJjb21wYW55SWQiOiIxOGNkZTdhYi1lM2E0LTRiMzAtODMwYi0wNDg5NmJkNTNmMzciLCJ1c2VySWQiOiI4ZTJjZmZhOC1mMTljLTQ1ZWUtOTk0OS0yZDFjMjg3NmJkNTUiLCJmdWxsTmFtZSI6IkVyZW4gQVNJxJ5MSSIsImV4cCI6MTcwNTQ0NDcyMiwiaXNzIjoiaHR0cHM6Ly93d3cuc2Vydmlzc29mdC5uZXQiLCJhdWQiOiJTZXJ2aXNTb2Z0In0.WgoyeDbyp7tl7-f1bF9aM28wc53VEow71Z5V9YLwyWw";


    useEffect(() => {

        axios.get("https://etta-api.servissoft.net/smartplain//lists/allInvertersList", { headers: { "Authorization": `Bearer ${tokenStr}` } })
            .then((response) => {
                setInventerListData(response.data);
            });


    }, [inventerListData])

    return (
        <>
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
                        <Grid item xs={12} lg={7} container sx={{ marginBottom: "30px" }} spacing={3} display="flex" alignItems="center">
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
                        <Grid item xs={12} lg={2} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={HeatMapIcon} alt="" /> Heathmap
                            </Button >
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                <img src={ExportIcon} alt="" /> *.Pdf
                            </Button >
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={FilterIcon} alt="" /> {t('filter')}
                            </Button>
                        </Grid>
                        <Grid item xs={1} lg={1} sx={{ width: 48, height: 48 }} display="flex" alignItems="baseline" justifyContent="center" >
                            <Button  variant="contained" sx={{ width: 24, height: 48, fontSize: 24, backgroundColor: "#11A6E6" }}>
                                +
                            </Button>
                        </Grid>


                        <Grid item xs={12} lg={12} width="100%"  >
                            <InverterDataTable rows={inventerListData} />
                        </Grid>
                    </Grid>

                </div>
            </Grid>

        </>
    );
};

export default InverterList;
