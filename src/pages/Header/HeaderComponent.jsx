import React, { useState, useEffect } from "react";
import { Box, Button, Grid, ListItemIcon, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import notifacitionIcon from "../../assets/images/Header/NotifacitionIcon.svg"
import chatIcon from "../../assets/images/Header/ChatIcon.svg"
import menuIcon from "../../assets/images/Header/menu.svg"
import worldIcon from "../../assets/images/Header/WorldIcon.svg"
import userCircleIcon from "../../assets/images/Header/UserCircleIcon.svg"
import userLoadIcon from "../../assets/images/Header/UserLoadIcon.svg"
import upSquareIcon from "../../assets/images/Header/UpSquareIcon.svg"
import settingMenu from "../../assets/images/Header/SettingMenu.svg"
import logout from "../../assets/images/Header/Logout.svg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import i18n from 'i18next';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './Header.css';

const HeaderComponent = ({ setShowMenu, showMenu }) => {
    const navigate = useNavigate()
    const { t } = useTranslation();

    const [langAnchorEl, setLangAnchorEl] = useState(null);
    const languageMenuOpen = Boolean(langAnchorEl);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleLanguageMenu = (event) => {
        setLangAnchorEl(event.currentTarget);
    };
    const [selectedIndex, setSelectedIndex] = useState(1);

    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);
    const handleClickProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setAnchorElProfile(null);
    };


    const [anchorElApp, setAnchorElApp] = useState(null);
    const openApp = Boolean(anchorElApp);
    let currentLang = localStorage.getItem('currentLang');
    const handleClickApp = (event) => {
        setAnchorElApp(event.currentTarget);
    };
    const handleCloseApp = () => {
        setAnchorElApp(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setLangAnchorEl(null);
    };
    const handleOnClickLanguage = (languageSelection) => {
        setSelectedIndex(() => (languageSelection === 'tr' ? 1 : 0));
        localStorage.setItem('currentLang', languageSelection)
        i18n.changeLanguage(languageSelection);
        handleClose();
    };

    const changeLanguage = () => {
        currentLang === 'tr' ? i18n.changeLanguage('en-US') : i18n.changeLanguage('tr');
    };

    useEffect(() => {
        //Sayfa yenileme işlemi olduğunda mevcut dil tercihini korumak için 
        handleOnClickLanguage(currentLang === 'tr' ? 'tr' : 'en-US')
    }, []);

    const logoutFunc = () => {
        localStorage.clear();
        navigate("/auth/login")
    }

    return (
        <Paper className="header-paper" style={{ backgroundColor: "#F8FAFB" }}  >
            <Grid container display="flex" alignItems="center"  >

                <Grid item xs={12} container  >
                    <Grid item xs={7} display="flex" alignItems="center" flexDirection="row" >

                        <Paper
                            component="form"
                            sx={{
                                marginLeft: showMenu ? "220px" : "1.5rem",
                                maxHeight: "18px",
                                p: '9px 12px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 300,
                                backgroundColor: "#F6F6FB",
                                boxShadow: "none",
                                borderRadius: '6px'
                            }}
                        >

                            <InputBase
                                sx={{ ml: 1, flex: 1, fontSize: "14px", padding: '0px' }}
                                placeholder={t('search')}
                                inputProps={{ 'aria-label': 'search google maps' }}
                                size="small"
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>


                    </Grid>
                    <Grid item xs={5} display="flex" alignItems="center" justifyContent="end" gap="1.5rem" flexDirection="row" >

                        <img src={notifacitionIcon} alt="" />

                        <img src={chatIcon} alt="" />
                        <img src={menuIcon} alt="" />


                        <Button
                            aria-controls="menu-profile"
                            aria-haspopup="true"
                            aria-expanded={openProfile ? 'true' : undefined}
                            onClick={handleClickProfile}
                            color='inherit'
                            size="small"
                            sx={{ p: '10px', textTransform: "none", color: "#1F384C" }}>

                            <Avatar
                                style={{ marginRight: "10px" }}
                                alt="Buse Tilbe Göktaş"
                                src="https://smartplain.servissoft.net/Buse_Tilbe_Goktas.jpg"
                            />
                            Buse Tilbe Göktaş
                        </Button>
                        <Menu
                            id='menu-profile'
                            anchorEl={anchorElProfile}
                            open={openProfile}
                            onClose={handleCloseProfile}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            style={{ border: "1px solid red" }}
                        >
                            <MenuItem disabled >
                                <ListItemIcon >
                                    <img src={userCircleIcon} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={t('profile')} />
                            </MenuItem>
                            <MenuItem disabled >
                                <ListItemIcon >
                                    <img src={userLoadIcon} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={t('change-account')} />
                            </MenuItem>
                            <MenuItem disabled >
                                <ListItemIcon >
                                    <img src={upSquareIcon} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={t('upgrade-the-plan')} />
                            </MenuItem>
                            <MenuItem onClick={() => handleOnClickLanguage(selectedIndex == 0 ? 'tr' : 'en-US')} >
                                <ListItemIcon >
                                    <img src={worldIcon} alt="" />
                                </ListItemIcon>
                                <Box display="flex" justifyContent="space-around" alignItems="center" width="100%" sx={{ fontSize: "14px", color: "#91A1A9" }}>
                                    <ListItemText primary={"Language"} />
                                    <span style={{ marginLeft: "auto" }}> {selectedIndex == 0 ? "EN" : "TR"} </span>
                                </Box>
                            </MenuItem>
                            <MenuItem disabled >
                                <ListItemIcon >
                                    <img src={settingMenu} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={t('settings')} />
                            </MenuItem>
                            <MenuItem onClick={logoutFunc}>
                                <ListItemIcon >
                                    <img src={logout} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={t('log-out')} />
                            </MenuItem>
                        </Menu>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>

    );
};

export default HeaderComponent;
