
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import PanelListDataTable from '../../Lists/Panel/PanelListDataTable';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Divider } from '@mui/material';
import ExportIcon from "../../../assets/images/ExportIcon.svg"
import FilterIcon from "../../../assets/images/FilterIcon.svg"
import HeatMapIcon from "../../../assets/images/HeatMapIcon.svg"

const options = ['', 'Option 1', 'Option 2'];

const PanelList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()




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
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={ExportIcon} alt="" /> *.Pdf
                            </Button >
                        </Grid>
                        <Grid item xs={12} lg={1} display="flex" alignItems="baseline" justifyContent="end"  >
                            <Button className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >
                                <img src={FilterIcon} alt="" /> {t('filter')}
                            </Button>
                        </Grid>
                        <Grid item xs={1} lg={1} sx={{ width: 48, height: 48 }} display="flex" alignItems="baseline" justifyContent="center" >
                            <Button variant="contained" sx={{ width: 24, height: 24, fontSize: 24 }}>
                                +
                            </Button>
                        </Grid>


                        <Grid item xs={12} lg={12} width="100%"  >
                            <PanelListDataTable />
                        </Grid>
                    </Grid>

                </div>
            </Grid>
        </>
    );
};

export default PanelList;
