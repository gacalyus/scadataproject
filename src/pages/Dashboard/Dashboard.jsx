
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Divider, TextField } from '@mui/material';
import axios from 'axios'
import proggresIcon from "../../assets/images/Weather/Frame.svg"
import DashBoardTab from './Tab/DashBoardTab';
import Critical from "../../assets/images/ActiveAlarms/critical.svg"
import Major from "../../assets/images/ActiveAlarms/major.svg"
import Minör from "../../assets/images/ActiveAlarms/minör.svg"
import Warning from "../../assets/images/ActiveAlarms/warning.svg"
import infoIcon from "../../assets/images/Dashboard/infoIcon.svg"
import orangeInfoIcon from "../../assets/images/Dashboard/orangeInfoIcon.svg"
import redInfoIcon from "../../assets/images/Dashboard/redInfoIcon.svg"
import LineInfo from './LineInfo';
import Line from '../../components/Charts/Line/Line';
import { fetchPlantStatus } from '../../features/dashboard/dashboardsilice';
import FilterIcon from "../../assets/images/FilterIcon.svg"
import ExportIcon from "../../assets/images/ExportIcon.svg"
import imported from "../../assets/images/imported.svg"
import produced from "../../assets/images/produced.svg"
import netExported from "../../assets/images/netExported.svg"
import online from "../../assets/images/PlantStatus/online.svg"
import offline from "../../assets/images/PlantStatus/offline.svg"
import faulty from "../../assets/images/PlantStatus/faulty.svg";
import settingIcon from "../../assets/images/PlantKPI/settingIcon.svg"
import icon1 from "../../assets/images/PlantKPI/icon1.svg"
import icon2 from "../../assets/images/PlantKPI/icon2.svg"
import icon3 from "../../assets/images/PlantKPI/icon3.svg"
import icon4 from "../../assets/images/PlantKPI/icon4.svg"
import icon5 from "../../assets/images/PlantKPI/icon5.svg"
import PlantListDataTable from '../Lists/Plant/PlantListDataTable';
import ApexDonut from './ApexDonut/ApexDonut';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import KPIsComp from './KPIs/KPIsComp';
import CustomizedSlider from './KPIs/CustomizedSlider';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import calenderIcon from "../../assets/images/CalenderIcon.svg";
import InputAdornment from '@mui/material/InputAdornment';
import DateModal from '../../components/DateModal/DateModal';
import { date } from "../../customfunction/date";
import Tooltip from '@mui/material/Tooltip';
import "./Dashboard.css"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
    fontFamily: "Poppins",
}));

const ItemDisabled = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
    fontFamily: "Poppins",
    height: "74%",
    backgroundColor: "#8993A329",
}));
const DashboardPage = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [plantstatus, setPlantstatus] = useState(null); 
    const [activeAlarms, setActiveAlarms] = useState(null);
    const [plantRoi, setPlantRoi] = useState(null);
    const [plantRoiInfo, setPlantRoiInfo] = useState(null);
    const [plantSummary, setPlantSummary] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

 
    useEffect(() => {
        setPlantSummary({
            "lastUpdate": "2024-01-07T19:52:58.648Z",
            "imported": 0,
            "importedUnit": " MWh",
            "consumed": null,
            "consumedUnit": " MWh",
            "produced": "7.67",
            "producedUnit": " MWh",
            "exported": 0,
            "exportedUnit": " MWh",
            "netExported": "7.67",
            "netExportedUnit": " MWh",
            "specificYield": "7.67",
            "specificYieldUnit": " MWh",
            "systemEnergyCapacity": "40.49"
        })
        setActiveAlarms({
            "total": 12,
            "critical": 13,
            "major": 14,
            "minor": 53,
            "warning": 82
        })
        setPlantstatus({
            "online": 12,
            "faulty": 11,
            "offline": 9,
            "total": 32,

        });
        setPlantRoi([
            {
                "year": 6,
                "saving": -30
            },
            {
                "year": 5,
                "saving": -25
            },
            {
                "year": 4,
                "saving": -20
            },
            {
                "year": 3,
                "saving": -15
            },
            {
                "year": 2,
                "saving": -10
            },
            {
                "year": 1,
                "saving": -5
            },
            {
                "year": 0,
                "saving": 0
            },
            {
                "year": 1,
                "saving": 10
            },
            {
                "year": 2,
                "saving": 20
            },
            {
                "year": 3,
                "saving": 30
            },
            {
                "year": 4,
                "saving": 40
            },
            {
                "year": 5,
                "saving": 50
            },
            {
                "year": 6,
                "saving": 60
            },
            {
                "year": 7,
                "saving": 70
            }
        ]);
        setPlantRoiInfo({
            "youSave": 9.31,
            "annualBillSavings": 1941,
            "payBackIn": 4.5
        })
    }, [])


    //plant list data
    const dashboardPlantListRowsPreset = [
        {
            "plantId": "BT188432404",
            "plantName": "GAPGES 432",
            "plantStatus": 1,
            "plantInvestor": "GAPRIK ELEKTRİK ÜRETİM SAN. VE TİC. A.Ş.",
            "plantDistributor": "Tera EDAŞ",
            "plantInverterQty": 16,
            "plantCapacity": "1158.15 kWp",
            "instantGeneration'": "NaN kWh",
            "totalYield": "10245.43 MWh",
            "performanceRatio": "104.27",
            "producedEnergy": "3720.46 kWh",
            "predictionStatus": 1
        },
        {
            "plantId": "BT18732132",
            "plantName": "GAPGES 332",
            "plantStatus": 1,
            "plantInvestor": "GAPRIK ELEKTRİK ÜRETİM SAN. VE TİC. A.Ş.",
            "plantDistributor": "Tera EDAŞ",
            "plantInverterQty": 16,
            "plantCapacity": "1165.08 kWp",
            "instantGeneration'": "NaN kWh",
            "totalYield": "9819.51 MWh",
            "performanceRatio": "108.15",
            "producedEnergy": "3854.81 kWh",
            "predictionStatus": 1
        },
    ]
    const [plantListData, setPlantListData] = useState(dashboardPlantListRowsPreset);



    const plantSummaryAwait = useMemo(() => plantSummary, [plantSummary])

    const PlantRoiInfoAwait = useMemo(() => plantRoiInfo, [plantRoiInfo])
    const plantKpisAwait = {
        "aiForecastDaily": {
            "value": "3,586",
            "unit": "kWh",
            "target": "0",
            "ratio": "∞"
        },
        "revenueToday": {
            "value": "477",
            "unit": "$",
            "target": "0",
            "ratio": "∞"
        },
        "aiForecastWeekly": {
            "value": "5,951.11",
            "unit": "MWh",
            "target": "20.5",
            "ratio": "29,027.21"
        },
        "aiForecastMonthly": {
            "value": "15.88",
            "unit": "MWh",
            "target": "87.87",
            "ratio": "18.07"
        },
        "avrEnergyProduction": {
            "value": "2,269",
            "unit": "kWh",
            "target": "2,929",
            "ratio": "77.46"
        },
        "performanceRatioTarget": {
            "value": "3,586",
            "unit": "kWh",
            "target": "2,929",
            "ratio": "122"
        }
    }
    const dashboardGet = useSelector((state) => state.dashboard)

    const [startDate, setStartDate] = useState(new Date());
    const [openDateModal, setOpenDateModal] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [dateLabel, setDateLabel] = useState("");
    useEffect(() => {
        const label = startDate.toLocaleDateString() + " - " + endDate.toLocaleDateString();
        setDateLabel(label);
    }, [startDate, endDate]);


    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#F8FAFB" }} padding="32px"  >
            <Grid container spacing={2} style={{ margin: 0, width: '100%', }} >
                <Grid marginLeft="0.2rem" item xs={12} lg={12} container display="flex" flexDirection="column"   >
                    <Grid item xs={12} lg={12} container display="flex" alignItems="center" >
                        <Grid item xs={12} lg={7} display="flex" alignItems="center" sx={{ paddingLeft: "0px" }}>
                            <span style={{ fontSize: "18px", fontWeight: 600, color: "#202328" }} >
                                {t('home')}
                            </span>
                        </Grid>
                        <Grid item xs={12} lg={5} display="flex" justifyContent="flex-end" alignItems="end" >
                            <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                <img src={ExportIcon} alt="" /> *.Pdf
                            </Button >
                            <>
                                <TextField
                                    className='dateTextField'
                                    onClick={() => setOpenDateModal(true)}
                                    value={dateLabel}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={calenderIcon} alt='' />
                                            </InputAdornment>
                                        ),
                                        sx: { maxHeight: "48px", fontSize: '14px', color: "#282B2E" }
                                    }}
                                    variant="outlined"
                                />
                                <DateModal
                                    show={openDateModal}
                                    setOpenDateModal={setOpenDateModal}
                                    setEndDate={setEndDate}
                                    setStartDate={setStartDate} />
                            </>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid marginLeft="0.2rem" item xs={12} lg={12} container display="flex" alignItems="center" >
                    <DashBoardTab />
                </Grid>
                <Grid item xs={12} lg={12} display="flex" alignItems="center" marginBottom="16px" marginTop="24px" gap="8px"
                    sx={{ marginLeft: "8px", padding: "0px" }}>
                    <span className='kpiCompTitle' style={{ color: "#282B2E" }}> {t('plantKPI')}</span>
                    <img src={settingIcon} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Item>
                        <KPIsComp
                            infoTooltip={t('info_aiforecast_daily')}
                            title={t("daily-energy-production")}
                            realizedValue={plantKpisAwait?.aiForecastDaily}
                            img={icon1}
                            titleIcon={infoIcon}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Item>
                        <KPIsComp
                            infoTooltip={t('info_aitforecast_weekly')}
                            title={t("AIForecast-Weekly")}
                            realizedValue={plantKpisAwait?.aiForecastWeekly}
                            img={icon2}
                            titleIcon={infoIcon}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Item>
                        <KPIsComp
                            infoTooltip={t('info_averageproduced_energy')}
                            title={t("average-d-production")}
                            realizedValue={plantKpisAwait?.avrEnergyProduction}
                            img={icon3}
                            titleIcon={orangeInfoIcon}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Item>
                        <KPIsComp
                            infoTooltip={t('info_revenue_today')}
                            title={t("revenueToday")}
                            realizedValue={plantKpisAwait?.revenueToday}
                            img={icon4}
                            titleIcon={infoIcon}
                            currency={"$"}
                        />
                    </Item>
                </Grid>


                <Grid item xs={12} lg={4}>
                    <Item>
                        <KPIsComp
                            infoTooltip={t('info_aiforecast_monthly')}
                            title={t("monthly-energy-production")}
                            realizedValue={plantKpisAwait?.aiForecastMonthly}
                            img={icon5}
                            titleIcon={infoIcon}
                        />
                    </Item>
                </Grid>
                <Grid item xs={12} lg={4}>
                    {plantKpisAwait?.aiForecastMonthly &&

                        <ItemDisabled>
                            <KPIsComp
                                infoTooltip={t('info_performance_ratio')}
                                title={t("performance-ratio")}
                                realizedValue={plantKpisAwait?.performanceRatioTarget}
                                img={icon5}
                                titleIcon={redInfoIcon}
                            />

                        </ItemDisabled>}

                </Grid>


                <Grid item xs={12} lg={8}>
                    <Item>
                        <Grid item xs={12} container sx={{ height: "600px", justifyContent: "space-between", gap: "0.9rem" }} >
                            <Grid item xs={12} >
                                <span style={{ fontSize: "18px", fontWeight: 600 }} >{t('returnInvestment')} </span>
                            </Grid>
                            <Grid item xs={12} sx={{ maxHeight: "400px" }} >
                                <Line lineData={plantRoi} />
                            </Grid>
                            <Grid item xs={12}  >
                                <LineInfo roiInfo={PlantRoiInfoAwait} />
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs={12} lg={4} container>
                    <Grid item xs={12} lg={12} >
                        <div className='circleComponent'>
                            <span style={{ marginBottom: "24px" }} className='CompTitle'> {t('plant-status')} </span>

                            <ApexDonut width="205" label={t('total-plant')} data={plantstatus}
                                colors={["#64D993", "#ff0000", "#808080"]} labelArray={[t('online'), t('faulty'), t('ofline')]} />
                            <Divider style={{ marginTop: "20px" }} />
                            <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px", alignItems: "center" }}>
                                <div className='flexCenter' > <img src={online} alt="" style={{ marginRight: "3px" }} />{plantstatus?.online}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('online')}</span>  </div>
                                <div className='flexCenter'><img src={faulty} alt="" style={{ marginRight: "3px" }} />{plantstatus?.faulty}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('faulty')}  </span></div>
                                <div className='flexCenter'><img src={offline} alt="" style={{ marginRight: "3px" }} /> {plantstatus?.offline} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('offline')}</span></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={12} >
                        <div className='circleComponent'>
                            <span style={{ marginBottom: "24px" }} className='CompTitle'> {t('active-alarms')} </span>

                            {activeAlarms && activeAlarms?.total == 0 ?
                                <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "150px" }} >
                                    <VerifiedOutlinedIcon sx={{ fontSize: 75, color: "#64D993" }} />
                                </div> :
                                <ApexDonut width="205" label={t('total-alarms')} data={activeAlarms} colors={["#FB7777", "#FF9D55", "#F2BB30", '#4FAFF5']} labelArray={[t('critical'), t('major'), t('minör'), t('warning')]} />
                            }
                            <Divider style={{ marginTop: "20px" }} />
                            <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px", alignItems: "center" }}>
                                <div className='flexCenter' style={{ marginRight: "6px" }} > <img src={Critical} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.critical} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('critical')} </span>  </div>
                                <div className='flexCenter' style={{ marginRight: "6px" }}><img src={Major} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.major} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('major')}</span></div>
                                <div className='flexCenter' style={{ marginRight: "6px" }}><img src={Minör} alt="" style={{ marginRight: "6px" }} /> {activeAlarms?.minor}  <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('minör')}</span></div>
                                <div style={{ marginRight: "0px" }} className='flexCenter'>  <img src={Warning} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.warning} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('warning')} </span></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={12} >
                    <div className='dashboardComponent'>
                        <Box sx={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between" }} >
                            <span className='CompTitle'> {t('allSystem')}  </span>
                            <span className='CompRightInfo'>{date()} </span>
                        </Box>
                        <div style={{ width: "100%", display: 'flex' }}>
                            <div style={{ width: "50%", height: "180px", display: "flex", justifyContent: "space-around", alignItems: "center" }} >
                                <Box display="flex" flexDirection="column">
                                    <div className='consumedBorder' style={{ marginLeft: 'auto' }}>
                                        <div > <img src={imported} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='consumedInfo'  >{plantSummaryAwait?.imported}
                                                <span className='consumedInfoDetail'>{plantSummaryAwait?.importedUnit}</span>
                                            </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }} > {t('imported')} </span>
                                        </div>
                                    </div>


                                    <div className='consumedBorder' style={{ marginLeft: 'auto' }}>
                                        <div > <img src={produced} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='consumedInfo' style={{ color: '#4FAFF5' }}>{plantSummaryAwait?.produced}
                                                <span style={{ color: '#4FAFF5' }} className='consumedInfoDetail'>{plantSummaryAwait?.producedUnit}</span>
                                            </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }}> {t('produced')} </span>
                                        </div>
                                    </div>
                                </Box>
                                <ApexDonut width="240" labelArray={[t('net-exported'), t('produced')]} label={t('consumed')} data={plantSummaryAwait
                                    && {
                                    netExported: Number(plantSummaryAwait?.netExported)
                                        ?? 50,
                                    produced: Number(plantSummaryAwait?.produced)
                                        ?? 50,
                                    total: plantSummaryAwait?.netExported + plantSummaryAwait?.produced
                                }}
                                    colors={['#060606', '#0065bd']} />

                                <Box >
                                    <Box display="flex" flexDirection="column" >
                                        <div className='consumedBorder'>
                                            <div > <img src={imported} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='consumedInfo'>{plantSummaryAwait?.exported}
                                                    <span className='consumedInfoDetail'>{plantSummaryAwait?.exportedUnit}</span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >OSOS </span>
                                            </div>
                                        </div>
                                        <div className='consumedBorder'>
                                            <div > <img src={netExported} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='consumedInfo' style={{ color: '#91A1A9' }}  >
                                                    {plantSummaryAwait?.netExported}
                                                    <span style={{ color: '#91A1A9' }} className='consumedInfoDetail'>{plantSummaryAwait?.netExportedUnit} </span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('net-exported')}  </span>
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                            </div>

                            <div className='systemEnergyCapacityBox'>
                                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                                    <span className='CompTitle'> {t('total-system-energy-capacity')} : <span style={{ color: "#D2D759" }} > %{plantSummaryAwait?.systemEnergyCapacity} </span> </span>
                                    <span>
                                        <Tooltip title={t('info_returnOnInvestment')}>
                                            <img src={infoIcon} alt="" />
                                        </Tooltip>
                                    </span>
                                </Box>
                                <Box width={"100%"} >
                                    <CustomizedSlider icon={proggresIcon} value={plantSummaryAwait?.systemEnergyCapacity} />
                                </Box>
                                <span style={{ opacity: 0.5, color: "black", fontSize: '12px' }} >{t('measures-your-independence-from')}</span>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} lg={12} display="flex" justifyContent='center' width="100%" >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            padding: "24px",
                            borderRadius: "16px",
                            flexDirection: "column",
                            border: "1px solid #E9EEF0",
                            gap: "24px",
                            backgroundColor: "#FFF"
                        }}  >
                        <Grid container xs={12} lg={12} >
                            <Grid item xs={12} lg={7} display="flex" alignItems='center'>
                                <span style={{ fontSize: "18px", fontWeight: 600 }}  >{t('integratedPlantList')} </span>
                            </Grid>

                            <Grid item xs={12} lg={5} display="flex" alignItems='center' justifyContent='space-between' spacing={2}>
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
                                <Button disabled={true} className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                    <img src={ExportIcon} alt="" />Export
                                </Button>
                                <Button disabled={true} className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >

                                    <img src={FilterIcon} alt="" /> {t('filter')}
                                </Button>
                            </Grid>


                            <Grid item xs={12} lg={12} marginTop="24px">
                                <PlantListDataTable rows={plantListData} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>


        </Box >



    );
};

export default DashboardPage;
