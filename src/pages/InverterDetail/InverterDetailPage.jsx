
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios'
import { date } from "../../customfunction/date";
import { Button, Divider, TextField } from '@mui/material';
import Critical from "../../assets/images/ActiveAlarms/critical.svg";
import Major from "../../assets/images/ActiveAlarms/major.svg";
import Minör from "../../assets/images/ActiveAlarms/minör.svg";
import Warning from "../../assets/images/ActiveAlarms/warning.svg";
import PlantImg from "../../assets/images/Loses/PlantImg.png";
import EnergyFlow from "../../assets/images/Loses/EnergyFlowInverter.png";
import cloudWifi from "../../assets/images/Loses/CloudWifi.svg";
import plant from "../../assets/images/Loses/Plant.svg";
import boldCircle from "../../assets/images/Loses/BoldCircle.svg";
import leavesIcon from "../../assets/images/Loses/LeavesIcon.svg";
import dolarIcon from "../../assets/images/Loses/DolarIcon.svg";
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
import infoIcon from "../../assets/images/Dashboard/infoIcon.svg"
import orangeInfoIcon from "../../assets/images/Dashboard/orangeInfoIcon.svg"
import redInfoIcon from "../../assets/images/Dashboard/redInfoIcon.svg"
import FilterIcon from "../../assets/images/FilterIcon.svg"
import ExportIcon from "../../assets/images/ExportIcon.svg"
import HeatMapIcon from "../../assets/images/HeatMapIcon.svg"
import forecastedLower from "../../assets/images/ForecastedLower.svg"
import forecastedUpper from "../../assets/images/ForecastedUpper.svg"
import forecast from "../../assets/images/Forecast.svg"
import Chip from '@mui/material/Chip';
import ApexRangeArea from './ApexRangeArea/ApexRangeArea';
import WarningIcon from '@mui/icons-material/Warning';
import settingIcon from "../../assets/images/PlantKPI/settingIcon.svg"
import PlantDetailTabs from './Tab/PlantDetailTabs';
import ApexDonut from './ApexDonut/ApexDonut'
import ApexHeatMap from './ApexHeatMap/ApexHeatMap'
import { makeStyles } from '@mui/styles';
import KPIsComp from './KPIs/KPIsComp';
import DataTable from './Table/DataTable';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import calenderIcon from "../../assets/images/CalenderIcon.svg";
import InputAdornment from '@mui/material/InputAdornment';
import DateModal from '../../components/DateModal/DateModal';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import StringListDataTable from '../Lists/String/StringListDataTable';
import { fromPlanttoPanelLocalStrg } from '../../customfunction/fromPlanttoPanelLocalStrg';
import "./InventerDetail.css";

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
    background: " linear-gradient(94deg, #F1F9FF 0%, #DBF0FF 100.03%)",
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
    ...theme.typography.body2,
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    fontSize: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
}));
const ItemRangeArea = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "24px",
    display: "flex",
    borderRadius: "16px",
    fontSize: "16px",
    boxShadow: "none",
    border: "1px solid #E9EEF0",
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

const options = ['', 'Option 1', 'Option 2'];
const inventerListPreset = [{ "stringId": 1, "plantName": "GAP GES 1", "inverterName": "Inverter 1", "stringName": "String 1", "status": 1, "trackerQty": 100, "trackerStatus": 1, "heathMap": "heathMap", "investor": "Smart", "panelQty": 1102, "brandModel": "XXX", "capacity": "1.905 kW", "stringCurrentCapacity": "100" }];
const InverterDetailPage = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    let currentLang = localStorage.getItem('currentLang');
    const navigate = useNavigate()
    const [inverterInfo, setInverterInfo] = useState(null);
    const [plantWeather, setPlantWeather] = useState(null);
    const [stringStatusOfInverter, setStringStatusOfInverter] = useState(null);
    const [stringListOfInverter, setStringListOfInverter] = useState(inventerListPreset);
    const [inverterActiveAlarms, setInverterActiveAlarms] = useState(null);
    const [inventerKpis, setInventerKpis] = useState(null);
    const [deviceList, setdeviceList] = useState(null);
    const [fetching, setFetching] = useState(true);
    const classes = useStyles();
    const [AutocompleteLabel, setAutocompleteLabel] = useState([t('plant-name'), t('status'), t('capacity'), t('alerts')]);
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    const variableMargin = '40%'
    let { id } = useParams();
    const hiddenColumns = { plantName: false, inverterName: false };
    const flowFromPlanttoString = JSON.parse(localStorage.getItem('flowFromPlanttoStringIds'));
    const getReduxInfo = useSelector((state) => state.dashboard)
    const fetchFunc = (url, value) => {
        const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImVyZW5Ac2Vydmlzc29mdC5uZXQiLCJjb21wYW55SWQiOiIxOGNkZTdhYi1lM2E0LTRiMzAtODMwYi0wNDg5NmJkNTNmMzciLCJ1c2VySWQiOiI4ZTJjZmZhOC1mMTljLTQ1ZWUtOTk0OS0yZDFjMjg3NmJkNTUiLCJmdWxsTmFtZSI6IkVyZW4gQVNJxJ5MSSIsImV4cCI6MTcwNTQ0NDcyMiwiaXNzIjoiaHR0cHM6Ly93d3cuc2Vydmlzc29mdC5uZXQiLCJhdWQiOiJTZXJ2aXNTb2Z0In0.WgoyeDbyp7tl7-f1bF9aM28wc53VEow71Z5V9YLwyWw";
        axios
            .get(url, { headers: { "Authorization": `Bearer ${tokenStr}` } })
            .then((response) => {
                switch (value) {
                    case "stringListOfInverter":
                        setStringListOfInverter(response.data);
                        break;
                    case "inverterInfo":
                        setInverterInfo(response.data);
                        break;
                    case "plantWeather":
                        setPlantWeather(response.data);
                        break;
                    case "stringStatusOfInverter":
                        setStringStatusOfInverter(response.data);
                        break;
                    case "inverterActiveAlarms":
                        setInverterActiveAlarms(response.data);
                        break;
                    case "inventerKpis":
                        setInventerKpis(response.data);
                    default:
                    // code block
                }

            }).catch((err) => console.log(err))
            .finally(() => setFetching(false));
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchFunc("https://etta-api.servissoft.net/smartplain/invertersDetail/inverterInfo/" + id, "inverterInfo");
        fetchFunc("https://etta-api.servissoft.net/smartplain/invertersDetail/stringsStatus/" + id, "stringStatusOfInverter")
        fetchFunc("https://etta-api.servissoft.net/smartplain/invertersDetail/activeAlarms/" + id, "inverterActiveAlarms");
        fetchFunc("https://etta-api.servissoft.net/smartplain/invertersDetail/stringsList/" + id, "stringListOfInverter");
        fetchFunc("https://etta-api.servissoft.net/smartplain/invertersDetail/inverterKpis/" + id, "inventerKpis");
        fetchFunc("https://etta-api.servissoft.net/weather/plantInfo/plantWeatherSummary/" + flowFromPlanttoString?.plantId, "plantWeather");
    }, []);

    useEffect(() => {
        fromPlanttoPanelLocalStrg({ id: id, type: "inverterId" });
    }, [id]);

    const plantWeatherAwait = useMemo(() => plantWeather, [plantWeather])
    const stringListOfInverterAwait = useMemo(() => stringListOfInverter, [stringListOfInverter]);
    const inverterInfoAwait = useMemo(() => inverterInfo, [inverterInfo]);
    const stringStatusOfInverterAwait = useMemo(() => stringStatusOfInverter, [stringStatusOfInverter]);
    const inventerActiveAlamrsAwait = useMemo(() => inverterActiveAlarms, [inverterActiveAlarms]);
    const inventerKpisAwait = useMemo(() => inventerKpis, [inventerKpis]);

    const apexInfoLineLabel = [
        { label: t('forecasted-lower-bound'), color: '#64D993', img: forecastedLower },
        { label: t('forecasted-upper-bound'), color: '#FB7777', img: forecastedUpper },
        { label: t('forecast'), color: '#4FAFF5', img: forecast },
        { label: t('actual-value'), color: '#282B2E' },
        { label: t('expected'), color: '#64D993' }
    ]
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
                <Grid marginLeft="0.2rem" item xs={12} lg={12} container display="flex" flexDirection="column" sx={{ paddingLeft: "0px" }} >
                    <Grid item xs={12} lg={12} container display="flex" alignItems="center" >
                        <Grid item xs={12} lg={7} display="flex" alignItems="center" >
                            <span style={{ fontSize: "18px", fontWeight: 600, color: "#202328" }} >
                                {inverterInfoAwait?.inventerName}
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
                    </Grid>
                </Grid>
                <Grid margin="0.2rem" item xs={12} lg={12} container display="flex" alignItems="center" >
                    <PlantDetailTabs />
                </Grid>

                <Grid item xs={12} lg={8} flexGrow={1} >
                    <ItemLoses>
                        <Grid item xs={12} lg={12} width="100%" display="flex" flexDirection="row" justifyContent="space-between" sx={{ padding: "0px" }} >
                            <span style={{ fontSize: "18px", fontWeight: 600, lineHeight: "120%", color: "#282B2E" }} >{t('InverterInformation')}</span>
                            <span style={{ fontSize: "12px", opacity: "0.8", textAlign: 'center' }} > {t('allTime')} </span>
                        </Grid>
                        <Grid item xs={12} lg={12} container width="100%" sx={{ height: "-webkit-fill-available" }}>
                            <Grid item xs={12} lg={4} display="flex">
                                <div className='lossesLeftBox' >
                                    <Box height="100%" width="30%" display="flex" justifyContent="center" flexDirection="column">
                                        <Box >
                                            <span style={{ fontSize: "32px", fontWeight: "500" }} >
                                                {/* {inverterInfoAwait?.inventerName} */}
                                            </span>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="start">
                                            <span  >{t('instantYield')} </span>
                                            <span style={{ fontSize: "20px", fontWeight: "500" }} >  585 <span style={{ fontSize: "0.875rem", fontWeight: "400" }} >kWh</span></span>
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
                                        <div > <img src={cloudWifi} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >{inverterInfoAwait?.inventerStatus == 1 ? t('online') : t('offline')}  </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('inverter-status')} </span>
                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={boldCircle} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >{inverterInfo?.inventerGeneration}
                                                <span className='consumedInfoDetail'>{inverterInfo?.inventerGenerationUnit}</span>
                                            </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('produced')}</span>
                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={plant} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >{inverterInfo?.inventerCapacity}
                                                <span className='consumedInfoDetail'>{inverterInfo?.inventerCapacityUnit}</span>
                                            </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('capacity')}</span>

                                        </div>
                                    </div>
                                    <div className='consumedBorder'>
                                        <div > <img src={leavesIcon} alt='' /> </div>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                            <span className='PlantConsumedInfo'  >{inverterInfo?.inventerCo2Saved}
                                                <span className='consumedInfoDetail'>{inverterInfo?.inventerCo2SavedUnit} </span>
                                            </span>
                                            <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>CO2 {t('saved')}</span>

                                        </div>
                                    </div>
                                </Box>
                                <Divider style={{ opacity: "0.5", marginTop: "-0.9rem" }} />
                                <Box width="100%" display="flex" flexDirection="column" >
                                    <Box width="100%" display="flex" >
                                        <Box width="50%" display="flex" fontSize="12px" > {t('instant-Revenue')}</Box>
                                        <Box width="50%" display="flex" fontSize="12px" >{t('potantial-additional-revenue')}</Box>
                                    </Box>
                                    <Box width="100%" display="flex" >
                                        <div className='consumedBorder'>
                                            <div style={{ marginTop: '-3px' }} > <img src={dolarIcon} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='PlantConsumedInfo'  >{inverterInfo?.inventerRealRevenueToday}
                                                    <span className='consumedInfoDetail'>{inverterInfo?.inventerRealRevenueTodayUnit}</span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('today')}</span>

                                            </div>
                                        </div>
                                        <div className='consumedBorder'>
                                            <div style={{ marginTop: '-3px' }} > <img src={dolarIcon} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='PlantConsumedInfo'  >{inverterInfo?.inventerRealRevenueMonth}
                                                    <span className='consumedInfoDetail'>{inverterInfo?.inventerRealRevenueMonthUnit}</span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('this-month')}</span>

                                            </div>
                                        </div>
                                        <div className='consumedBorder'>
                                            <div style={{ marginTop: '-3px' }} > <img src={dolarIcon} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='PlantConsumedInfo'  >{inverterInfo?.inventerForecastRevenueToday}
                                                    <span className='consumedInfoDetail'>{inverterInfo?.inventerForecastRevenueTodayUnit}</span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }} >{t('today')}</span>

                                            </div>
                                        </div>
                                        <div className='consumedBorder'>
                                            <div style={{ marginTop: '-3px' }} > <img src={dolarIcon} alt='' /> </div>
                                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.5rem", width: "100%" }}>
                                                <span className='PlantConsumedInfo'  >{inverterInfo?.inventerForecastRevenueMonth}
                                                    <span className='consumedInfoDetail'>{inverterInfo?.inventerForecastRevenueMonthUnit}</span>
                                                </span>
                                                <span className='consumedInfoDetail' style={{ opacity: "0.5" }}>{t('this-month')}</span>

                                            </div>
                                        </div>
                                    </Box>

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
                                {currentLang === "tr" ? plantWeatherAwait?.today?.dayNameTR : plantWeatherAwait?.today?.dayNameEN}  {plantWeatherAwait?.today?.theDate}
                            </Box>
                            <Box width="100%" display="flex" flexDirection="row" sx={{ gap: "24px", marginY: "24px" }} >
                                <Box width="50%" display="flex" flexDirection="row" >
                                    <Box >
                                        <img src={cloudLarge} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "32px", fontWeight: "500" }}>{plantWeatherAwait?.today?.temp?.toFixed()}°C </span>
                                        <span style={{ fontSize: "12px", minHeight: "34px" }}  > {t('extremelyCloudy')}  </span>
                                    </Box>
                                </Box>
                                <Box width="50%" display="flex" flexDirection="column" >
                                    <Box display="flex" flexDirection="row" >
                                        <img src={location} alt="" style={{ marginRight: "16px" }} />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <div>
                                                <span style={{ fontSize: "32px", fontWeight: "500" }}>
                                                    {plantWeather?.today?.UvIndex}
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
                            <Divider style={{ opacity: "0.5", marginTop: "20px" }} />
                            <Box width="100%" display="flex" justifyContent="space-between" flexDirection="row" sx={{ marginTop: "24px" }} >
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "29px", marginRight: "8px" }} >
                                        <img style={{ width: "29px" }} src={sunny} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> {plantWeatherAwait?.day1?.dayName}</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >{plantWeatherAwait?.day1?.temp} °C</span>
                                    </Box>
                                </Box>
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "42px", marginRight: "8px" }} >
                                        <img style={{ width: "42px" }} src={cloudLarge} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> {plantWeatherAwait?.day2?.dayName}</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >{plantWeatherAwait?.day2?.temp} °C</span>
                                    </Box>
                                </Box>
                                <Box width="30%" display="flex" justifyContent="center" alignItems="center">
                                    <Box sx={{ width: "18px", marginRight: "8px" }} >
                                        <img style={{ width: "18px" }} src={thunderstorm} alt="" />
                                    </Box>
                                    <Box display="flex" flexDirection="column" >
                                        <span style={{ fontSize: "10px" }}> {plantWeatherAwait?.day3?.dayName}</span>
                                        <span style={{ fontSize: "14px", fontWeight: "500" }} >{plantWeatherAwait?.day3?.temp} °C</span>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </ItemWeather>
                </Grid>
                <Grid item xs={12} lg={12} display="flex" alignItems="center" gap="8px" marginTop="24px" >
                    <span className='kpiCompTitle'>{t('inverterKPI')} </span>
                    <img src={settingIcon} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_aiforecast_daily')}
                            title={t("daily-energy-production")}
                            realizedValue={inventerKpisAwait?.aiForecastDaily}
                            img={icon1}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_aitforecast_weekly')}
                            title={t("AIForecast-Weekly")}
                            realizedValue={inventerKpisAwait?.aiForecastWeekly}
                            img={icon2}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_averageproduced_energy')}
                            title={t("average-d-production")}
                            realizedValue={inventerKpisAwait?.avrEnergyProduction}
                            img={icon3}
                            titleIcon={orangeInfoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_revenue_today')}
                            title={t("revenueToday")}
                            realizedValue={inventerKpisAwait?.revenueToday}
                            img={icon4}
                            titleIcon={infoIcon}
                            currency={"$"}
                        />
                    </ItemPlantKPIs>
                </Grid>


                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_aiforecast_monthly')}
                            title={t("monthly-energy-production")}
                            realizedValue={inventerKpisAwait?.aiForecastMonthly}
                            img={icon5}
                            titleIcon={infoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ItemPlantKPIs>
                        <KPIsComp
                            infoTooltip={t('info_performance_ratio')}
                            title={t("performance-ratio")}
                            realizedValue={inventerKpisAwait?.performanceRatioTarget}
                            img={icon5}
                            titleIcon={redInfoIcon}
                        />
                    </ItemPlantKPIs>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <ItemRangeArea >
                        <Box width="100%" display="flex" flexDirection="column" >
                            <Box fontSize="14px" width="100%" display="flex" flexDirection="row" justifyContent="space-between" sx={{ marginBottom: '8px' }} >
                                <span style={{ fontSize: "18px", fontWeight: 600 }} >{t('EnergyLineChart')} </span>
                                <span style={{ fontSize: "13px", opacity: "0.8" }} >
                                    <Chip
                                        style={{
                                            display: "flex", alignItems: 'center',
                                            backgroundColor: '#F2BB3033', color: '#DF9B19'
                                        }}
                                        icon={<WarningIcon color='warning' />}
                                        label="It is currently above expected values." />
                                </span>
                            </Box>

                            <ApexRangeArea />
                            <Box width='100%' sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: "-11px" }}>
                                <span style={{ fontSize: '14px' }} >{t('hour')}</span>
                            </Box>
                            <Box width='100%' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Box width='100%'  >
                                    <Divider style={{ margin: "24px 0px" }} />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', gap: '20px' }} >
                                    {apexInfoLineLabel.map((item) => (
                                        <div key={item.color} style={{ display: 'flex', alignItems: 'center' }}>
                                            {item.img ? (<img src={item.img} alt="" style={{ marginRight: '6px' }} />) : (
                                                <div style={{
                                                    backgroundColor: item.color,
                                                    marginRight: '6px',
                                                    display: 'flex',
                                                    width: '17px',
                                                    height: '2px',
                                                    borderRadius: '1px'
                                                }} > </div>
                                            )}
                                            <span style={{ color: '#91A1A9' }} >{item.label} </span>
                                        </div>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </ItemRangeArea >
                </Grid>
                <Grid item xs={12} lg={4} container>
                    <Grid item xs={12} lg={12} >
                        <div className='circleComponent'>
                            <span style={{ marginBottom: "23px" }} className='CompTitle'> {t('string-status')} </span>

                            <ApexDonut label={t('total-string')} data={stringStatusOfInverterAwait} colors={["#64D993", "#ff0000", "#808080"]} labelArray={[t('online'), t('faulty'), t('ofline')]} />
                            <Divider style={{ marginTop: "20px" }} />
                            <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px", alignItems: "center" }}>
                                <div className='flexCenter' > <img src={online} alt="" style={{ marginRight: "6px" }} />{stringStatusOfInverterAwait?.online}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('online')}</span>  </div>
                                <div className='flexCenter'><img src={faulty} alt="" style={{ marginRight: "6px" }} />{stringStatusOfInverterAwait?.faulty}<span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('faulty')}  </span></div>
                                <div className='flexCenter'><img src={offline} alt="" style={{ marginRight: "6px" }} /> {stringStatusOfInverterAwait?.offline} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('offline')}</span></div>

                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} lg={12} >
                        <div className='circleComponent'>
                            <span style={{ marginBottom: "23px" }} className='CompTitle'> {t('active-alarms')} </span>
                            {inventerActiveAlamrsAwait && inventerActiveAlamrsAwait?.total == 0 ?
                                <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "150px" }} >
                                    <VerifiedOutlinedIcon sx={{ fontSize: 75, color: "#64D993" }} />
                                </div> :
                                <ApexDonut label={t('total-alarms')} data={inventerActiveAlamrsAwait} colors={["#FB7777", "#FF9D55", "#F2BB30", '#4FAFF5']} labelArray={[t('critical'), t('major'), t('minör'), t('warning')]} />
                            }
                            <Divider style={{ marginTop: "20px" }} />
                            <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px", alignItems: "center" }}>
                                <div className='flexCenter' style={{ marginRight: "6px" }} > <img src={Critical} alt="" style={{ marginRight: "6px" }} />{inventerActiveAlamrsAwait?.critical} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('critical')} </span>  </div>
                                <div className='flexCenter' style={{ marginRight: "6px" }}><img src={Major} alt="" style={{ marginRight: "6px" }} />{inventerActiveAlamrsAwait?.major} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} > {t('major')}</span></div>
                                <div className='flexCenter' style={{ marginRight: "6px" }}><img src={Minör} alt="" style={{ marginRight: "6px" }} /> {inventerActiveAlamrsAwait?.minor}  <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('minör')}</span></div>
                                <div style={{ marginRight: "0px" }} className='flexCenter'>  <img src={Warning} alt="" style={{ marginRight: "6px" }} />{inventerActiveAlamrsAwait?.warning} <span style={{ opacity: "0.5", marginLeft: "0.3rem" }} >{t('warning')} </span></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={6}  >

                    <Box flexDirection="column" sx={{
                        padding: "24px",
                        display: "flex",
                        borderRadius: "16px",
                        fontSize: "16px",
                        boxShadow: "none",
                        border: "1px solid #E9EEF0",
                        backgroundColor: "#FFF",
                        height: "330px"
                    }} >

                        <Box fontSize="14px" width="100%" display="flex" flexDirection="row" justifyContent="space-between"  >
                            <span style={{ fontSize: "18px", fontWeight: 600 }} >{t('energyFlow')} </span>
                            <span style={{ color: '#91A1A9' }} >
                                {date()}
                            </span>
                        </Box>
                        <Box sx={{ width: "100%", height: "100%" }}>
                            <div style={{
                                background: `url(${EnergyFlow})`,
                                backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center center",
                                height: "100%", width: "100%"
                            }} >
                                <img style={{ width: "100%", height: "100%", visibility: "hidden" }} src={EnergyFlow} alt='' />
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>

                    <Box flexDirection="column" sx={{
                        padding: "24px",
                        display: "flex",
                        borderRadius: "16px",
                        fontSize: "16px",
                        boxShadow: "none",
                        border: "1px solid #E9EEF0",
                        backgroundColor: "#FFF",
                        height: "330px"
                    }} >

                        <Box fontSize="14px" width="100%" display="flex" flexDirection="row" justifyContent="space-between"  >
                            <span style={{ fontSize: "18px", fontWeight: 600 }} > {t('solar-generation')} </span>
                            <span style={{ color: '#91A1A9' }} >
                                {date()}
                            </span>
                        </Box>
                        <ApexHeatMap
                            label={t('total-inverter')}
                            data={inverterActiveAlarms}
                            colors={["#ff0000", "#FFA500", "#FFFF00", '#4FAFF5']} />
                        <Divider style={{ marginBottom: "24px" }} />
                        <Box fontSize="14px" width="100%" display="flex" flexDirection="row" justifyContent="space-between"  >
                            <span style={{ color: "#282B2E", fontSize: "12px" }}>AC Power ( kW / kWP)</span>
                            <div >
                                <div className='HeatMapLine' style={{ width: "131px", height: '4px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }} >
                                    <div style={{ width: "1px", height: '4px' }} >  </div>
                                    <div style={{ width: "1px", height: '4px', backgroundColor: 'white' }} >  </div>
                                    <div style={{ width: "1px", height: '4px', backgroundColor: 'white' }} >  </div>
                                    <div style={{ width: "1px", height: '4px', backgroundColor: 'white' }} >  </div>
                                    <div style={{ width: "1px", height: '4px' }} >  </div>
                                </div>
                                <div >
                                    <div style={{ marginTop: "2px", width: "131px", display: 'flex', justifyContent: 'space-between', fontSize: "11px", opacity: "0.4", color: "#202328" }} >

                                        <span> 0</span>
                                        <span> 0.25</span>
                                        <span> 0.5</span>
                                        <span> 0.75</span>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} lg={12} display="flex" justifyContent='center' >
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
                        <Grid container xs={12} lg={12} width="100%">
                            <Grid item xs={12} lg={6} display="flex" alignItems='center'>
                                <span style={{ fontSize: "18px", fontWeight: 600 }}>{t('stringList')} </span>
                            </Grid>
                            <Grid item xs={12} lg={6} display="flex" alignItems='center' justifyContent='space-between' spacing={2}>
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
                                <Button disabled={true} variant='text' className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                    <img src={HeatMapIcon} alt="" /> HeatMap
                                </Button   >
                                <Button disabled={true} className='TableButton' style={{ textTransform: 'none', color: '#91A1A9', fontSize: '14px' }} >
                                    <img src={ExportIcon} alt="" />Export
                                </Button>
                                <Button disabled={true} className='TableButton' style={{ textTransform: 'none', color: '#282B2E', fontSize: '14px' }} >

                                    <img src={FilterIcon} alt="" /> {t('filter')}
                                </Button>
                            </Grid>
                        </Grid>
                        <StringListDataTable rows={stringListOfInverterAwait} hiddenColumns={hiddenColumns} />
                    </div>
                </Grid>
            </Grid >

        </Box >



    );
};

export default InverterDetailPage;
