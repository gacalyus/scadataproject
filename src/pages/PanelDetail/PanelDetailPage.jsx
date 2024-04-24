
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios'
import { Button, Divider } from '@mui/material';
import { date } from "../../customfunction/date";
import Critical from "../../assets/images/ActiveAlarms/critical.svg";
import Major from "../../assets/images/ActiveAlarms/major.svg";
import Minör from "../../assets/images/ActiveAlarms/minör.svg";
import Warning from "../../assets/images/ActiveAlarms/warning.svg";
import PlantImg from "../../assets/images/Loses/PlantImg.png";
import currentAVal from "../../assets/images/Loses/CurrentAVal.svg";
import voltageIcon from "../../assets/images/Loses/VoltageIcon.svg";
import plant from "../../assets/images/Loses/Plant.svg";
import calenderIcon from "../../assets/images/CalenderIcon.svg";
import boldCircle from "../../assets/images/Loses/BoldCircle.svg";
import online from "../../assets/images/PlantStatus/online.svg"
import location from "../../assets/images/Weather/location.svg"
import offline from "../../assets/images/PlantStatus/offline.svg"
import faulty from "../../assets/images/PlantStatus/faulty.svg"
import cloudLarge from "../../assets/images/Weather/cloudlarge.png"
import thunderstorm from "../../assets/images/Weather/thunderstorm.png"
import proggresIcon from "../../assets/images/Weather/Frame.svg"
import icon1 from "../../assets/images/PlantKPI/icon1.svg"
import icon2 from "../../assets/images/PlantKPI/icon2.svg"
import icon3 from "../../assets/images/PlantKPI/icon3.svg"
import icon4 from "../../assets/images/PlantKPI/icon4.svg"
import icon5 from "../../assets/images/PlantKPI/icon5.svg"
import sunny from "../../assets/images/Weather/sunny.png"
import infoIcon from "../../assets/images/Dashboard/infoIcon.svg";
import orangeInfoIcon from "../../assets/images/Dashboard/orangeInfoIcon.svg"
import redInfoIcon from "../../assets/images/Dashboard/redInfoIcon.svg"
import settingIcon from "../../assets/images/PlantKPI/settingIcon.svg"
import PlantDetailTabs from './Tab/PlantDetailTabs';
import ApexDonut from './ApexDonut/ApexDonut'
import { makeStyles } from '@mui/styles';
import KPIsComp from './KPIs/KPIsComp';
import "./PanelDetail.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ExportIcon from "../../assets/images/ExportIcon.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DateModal from '../../components/DateModal/DateModal';

const ItemPlantKPIs = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
    fontFamily: "Poppins",
}));
const ItemLoses = styled(Paper)(({ theme }) => ({
    background: "linear-gradient(94deg, #F1F9FF 0%, #DBF0FF 100.03%)",
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    flexDirection: "column",
    height: "83%",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
    fontFamily: "Poppins",
}));
const ItemWeather = styled(Paper)(({ theme }) => ({
    backgroundColor: "#F5F4F9",
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    fontSize: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
    fontFamily: "Poppins",
}));
const useStyles = makeStyles({
    root: {
        height: 10,
        borderRadius: 5
    },
    bar: ({ progress }) => ({
        borderRadius: 5,
        background: `linear-gradient(90deg, #6fcbb6 ${100 - progress}%, #9c64f4 100%)`
    })
});


const PanelDetailPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [plantstatus, setPlantstatus] = useState(null);
    const [plantKpis, setPlantKpis] = useState(null);
    const [activeAlarms, setActiveAlarms] = useState(null);
    const [fetching, setFetching] = useState(true);
    const classes = useStyles();
    const flowFromPlanttoString = JSON.parse(localStorage.getItem('flowFromPlanttoStringIds'));
    const variableMargin = '40%'


    const fetchFunc = (url, value) => {

        axios
            .get(url)
            .then((response) => {
                switch (value) {
                    case "plantKpis":
                        setPlantKpis(response.data);
                        break;
                    case "plantstatus":
                        setPlantstatus(response.data);
                        break;
                    case "activeAlarms":
                        setActiveAlarms(response.data);
                        break;
                    default:
                    // code block
                }

            }).catch((err) => console.log(err))
            .finally(() => setFetching(false));
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchFunc("https://v2.servissoft.net:5020/dashboard/plantstatus", "plantstatus");
        fetchFunc("https://v2.servissoft.net:5020/dashboard/activeAlarms", "activeAlarms");
        fetchFunc("https://v2.servissoft.net:5020/dashboard/plantKpis", "plantKpis");
    }, []);

    const getReduxInfo = useSelector((state) => state.dashboard)
    const plantKpisAwait = useMemo(() => plantKpis, [plantKpis])
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
            <Grid container spacing={2} style={{ margin: 0, width: '100%' }} >
                <Grid marginTop="1rem" marginLeft="0.2rem" item xs={12} lg={12} container display="flex" flexDirection="column" sx={{ paddingLeft: "0px" }} >
                    <Grid item xs={12} lg={12} container display="flex" alignItems="center" >
                        <Grid item xs={12} lg={7} display="flex" alignItems="center" >
                            <span style={{ fontSize: "18px", fontWeight: 600, color: "#202328" }} >
                                {getReduxInfo?.flowPlanttoString?.PanelName}
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
                    <Grid item xs={12} lg={12} display="flex" alignItems="center" >
                        <Box>
                            <Button
                                variant='text'
                                style={{ fontSize: "11px", color: "#91A1A9", textTransform: 'none', paddingLeft: "0px", minWidth: "38px" }}
                                onClick={() => navigate('/dashboard')}
                            >
                                Home
                            </Button>
                            < ArrowForwardIosIcon style={{ color: "#91A1A9", margin: "0px 6px -2px 6px", fontSize: "11px" }} />
                            <Button
                                variant='text'
                                style={{ fontSize: "11px", color: "#91A1A9", textTransform: 'none' }}
                                onClick={() => navigate('/plant/' + flowFromPlanttoString?.plantId)}
                            >
                                {getReduxInfo?.flowPlanttoString?.PlantName ?? flowFromPlanttoString?.plantId}
                            </Button>
                            < ArrowForwardIosIcon style={{ color: "#91A1A9", margin: "0px 6px -2px 6px", fontSize: "11px" }} />
                            <Button
                                variant='text'
                                style={{ fontSize: "11px", color: "#91A1A9", textTransform: 'none' }}
                                onClick={() => navigate('/inverterDetail/' + flowFromPlanttoString?.inverterId)}
                            >
                                {getReduxInfo?.flowPlanttoString?.InventerName ?? flowFromPlanttoString?.inverterId}
                            </Button>
                            < ArrowForwardIosIcon style={{ color: "#91A1A9", margin: "0px 6px -2px 6px", fontSize: "11px" }} />
                            <Button
                                variant='text'
                                style={{ fontSize: "11px", color: "#91A1A9", textTransform: 'none' }}
                                onClick={() => navigate('/stringDetail/' + flowFromPlanttoString?.stringId)}
                            >
                                {getReduxInfo?.flowPlanttoString?.StringName ?? flowFromPlanttoString?.stringId}
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
                <Grid margin={"0.2rem"} item xs={12} lg={12} container display="flex" alignItems="center" >
                    <PlantDetailTabs />
                </Grid>

                <Grid item xs={12} lg={8} flexGrow={1} >
                    <ItemLoses>
                        <Box width="100%" sx={{ padding: "0px" }} >
                            <span style={{ fontSize: "18px", fontWeight: 600, lineHeight: "120%", color: "#282B2E" }} >{t('PanelInformation')}</span>
                        </Box>

                        <Grid item xs={12} lg={12} container width="100%" sx={{ height: "-webkit-fill-available" }}>
                            <Grid item xs={12} lg={4}  >
                                <div className='lossesLeftBox' >
                                    <Box height="100%" width="30%" display="flex" justifyContent="center" flexDirection="column">
                                        <Box display="flex" flexDirection="column" justifyContent="start">
                                            <span  >{t('instantYield')} </span>
                                            <span style={{ fontSize: "20px", fontWeight: "500" }} >  585 <span style={{ fontSize: "0.875rem", fontWeight: "400" }} >kWh</span></span>
                                        </Box>
                                        <Box >
                                            <span style={{ fontSize: "32px", fontWeight: "500" }} >
                                                {getReduxInfo?.flowPlanttoString?.PanelName}
                                            </span>
                                        </Box>
                                    </Box>
                                    <Box width="70%"
                                    >
                                        <div style={{
                                            background: `url(${PlantImg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center center",
                                            height: "100%", width: "100%"
                                        }} >
                                        </div>

                                    </Box>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={8} display="flex" flexDirection="column" justifyContent="space-around" >
                                <Box width="100%" display="flex" >

                                    <div className='consumedBorder'>
                                        <div > <img src={boldCircle} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >6.52 <span className='consumedInfoDetail'>mWh</span> </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('produced')}</span>
                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={plant} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >2.097 <span className='consumedInfoDetail'>kWh</span> </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('capacity')}</span>
                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={voltageIcon} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  > 2 <span style={{ fontWeight: 400 }} className='consumedInfoDetail'>(V)</span> </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('current')}</span>

                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={currentAVal} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  > 2 <span style={{ fontWeight: 400 }} className='consumedInfoDetail'>(DV)</span> </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('voltage')}</span>

                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>

                    </ItemLoses>
                </Grid>
                <Grid item xs={12} lg={4} flexGrow={1}>
                    <ItemWeather>
                        <Box width="100%" display="flex" flexDirection="column" >
                            <Box fontSize="14px" width="100%" display="flex" flexDirection="row" justifyContent="space-between" >
                                <span style={{ fontSize: "18px", fontWeight: 600, lineHeight: "120%", color: "#282B2E" }} >{t('weather')}</span>

                                <span style={{ fontSize: "12px", opacity: "0.8", textAlign: 'center' }} > {date()} </span>
                            </Box>
                            <Box width="100%" display="flex" flexDirection="row" sx={{ gap: "24px", marginY: "24px" }} >
                                <Box width="50%" display="flex" flexDirection="row" >
                                    <Box >
                                        <img src={cloudLarge} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "32px", fontWeight: "500" }}>25°C </span>
                                        <span style={{ fontSize: "12px" }} >Extremely Cloudy</span>
                                    </Box>
                                </Box>
                                <Box width="50%" display="flex" flexDirection="column" >
                                    <Box display="flex" flexDirection="row" >
                                        <img src={location} alt="" style={{ marginRight: "16px" }} />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div>
                                                <span style={{ fontSize: "32px", fontWeight: "500" }}>
                                                    0.07
                                                    <span style={{ fontSize: "12px" }}  >kWh/m²</span>
                                                </span>
                                            </div>
                                            <span style={{ fontSize: "12px" }}> {t('irradiance')} </span>
                                        </div>
                                    </Box>
                                    <Box width="100%">
                                        <div style={{ position: 'relative' }} >
                                            <div style={{ position: 'absolute', width: '100%', marginTop: '1rem' }} className='absoluteProggres'></div>
                                            <div style={{ position: 'absolute', marginLeft: variableMargin, zIndex: '10' }}  >
                                                <img src={proggresIcon} alt="" />
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider style={{ opacity: "0.5", marginTop: "22px" }} />
                            <Box width="100%" display="flex" justifyContent="space-between" flexDirection="row" sx={{ marginTop: "24px" }} >
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "29px", marginRight: "8px" }} >
                                        <img style={{ width: "29px" }} src={sunny} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> Mon</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >27°C</span>
                                    </Box>
                                </Box>
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "42px", marginRight: "8px" }} >
                                        <img style={{ width: "42px" }} src={cloudLarge} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> Tue</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >25°C</span>
                                    </Box>
                                </Box>
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "18px", marginRight: "8px" }} >
                                        <img style={{ width: "18px" }} src={thunderstorm} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> Wed</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >21°C</span>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </ItemWeather>
                </Grid>
                <Grid item xs={12} lg={12} display="flex" alignItems="center" gap="8px" marginTopm="24px" >
                    <span className='kpiCompTitle'> {t('panelKPI')} </span>
                    <img src={settingIcon} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("daily-energy-production")}
                            realizedValue={plantKpisAwait?.currentPower}
                            img={icon1}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("average-d-production")}
                            realizedValue={26}
                            img={icon3}
                            titleIcon={orangeInfoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("monthly-energy-production")}
                            realizedValue={43.01}
                            img={icon5}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("performance-ratio")}
                            realizedValue={plantKpisAwait?.totalYield}
                            img={icon5}
                            titleIcon={redInfoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("revenueToday")}
                            realizedValue={plantKpisAwait?.totalEnergyCharged}
                            img={icon4}
                            titleIcon={infoIcon}
                            currency={"$"}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            title={t("AIForecast-Weekly")}
                            realizedValue={plantKpisAwait?.energyChargedToday}
                            img={icon2}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <div className='circleComponent'>
                        <span style={{
                            marginBottom: "1.5rem"
                        }} className='CompTitle'> {t('panel-status')} </span>

                        <ApexDonut label={t('total-inverter')} data={plantstatus} colors={["#64D993", "#ff0000", "#808080"]} labelArray={[t('online'), t('faulty'), t('ofline')]} />
                        <Divider style={{ marginTop: "0.5rem" }} />
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "24px",
                            alignItems: "center"
                        }}>
                            <div className='flexCenter' > <img src={online} alt="" style={{ marginRight: "6px" }} />{plantstatus?.online}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('online')}</span>  </div>
                            <div className='flexCenter'><img src={faulty} alt="" style={{ marginRight: "6px" }} />{plantstatus?.faulty}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('faulty')}  </span></div>
                            <div className='flexCenter'><img src={offline} alt="" style={{ marginRight: "6px" }} /> {plantstatus?.offline} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('offline')}</span></div>

                        </div>

                    </div>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <div className='circleComponent'>
                        <span style={{ marginBottom: "1.5rem" }} className='CompTitle'> {t('active-alarms')} </span>

                        <ApexDonut label={t('total-alarms')} data={activeAlarms} colors={["#FB7777", "#FF9D55", "#F2BB30", '#4FAFF5']} labelArray={[t('critical'), t('major'), t('minör'), t('warning')]} />
                        <Divider style={{ marginTop: "0.5rem" }} />
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "24px",
                            alignItems: "center"
                        }}>
                            <div className='flexCenter' > <img src={Critical} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.critical} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('critical')} </span>  </div>
                            <div className='flexCenter'><img src={Major} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.major} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('major')}</span></div>
                            <div className='flexCenter'><img src={Minör} alt="" style={{ marginRight: "6px" }} /> {activeAlarms?.minor}  <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('minör')}</span></div>
                            <div style={{ marginRight: "0px" }} className='flexCenter'>  <img src={Warning} alt="" style={{ marginRight: "6px" }} />{activeAlarms?.warning} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('warning')} </span></div>
                        </div>
                    </div>
                </Grid>


            </Grid>

        </Box >



    );
};

export default PanelDetailPage;
