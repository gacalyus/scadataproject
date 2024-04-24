

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon } from '@mui/material';
import homeLogo from "../../assets/images/homeLogo.svg"
import collapseArrowIcon from "../../assets/images/CollapseArrowIcon.svg"
import vector from "../../assets/images/Vector.svg"
import monitoring from "../../assets/images/MenuIcon/monitoring.svg"
import monitoringBlue from "../../assets/images/MenuIcon/monitoringBlue.svg"
import plantList from "../../assets/images/MenuIcon/plantList.svg"
import plantListBlue from "../../assets/images/MenuIcon/plantListBlue.svg"
import weather from "../../assets/images/MenuIcon/weather.svg"
import weatherBlue from "../../assets/images/MenuIcon/weatherBlue.svg"
import report from "../../assets/images/MenuIcon/report.svg"
import efforts from "../../assets/images/MenuIcon/efforts.svg"
import analysis from "../../assets/images/MenuIcon/analysis.svg"
import forcasting from "../../assets/images/MenuIcon/forcasting.svg"
import alerts from "../../assets/images/MenuIcon/alerts.svg"
import alertsBlue from "../../assets/images/MenuIcon/alertsBlue.svg"
import company from "../../assets/images/MenuIcon/company.svg"
import customer from "../../assets/images/MenuIcon/customer.svg"
import people from "../../assets/images/MenuIcon/people.svg"
import product from "../../assets/images/MenuIcon/product.svg"
import sales from "../../assets/images/MenuIcon/sales.svg"
import states from "../../assets/images/MenuIcon/states.svg"
import role from "../../assets/images/MenuIcon/role.svg"
import custom from "../../assets/images/MenuIcon/custom.svg"
import "./AppSidebar.css"

const AppSidebar = ({ showMenu, setShowMenu }) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const location = useLocation();
    const menüItems = [
        { id: 1, name: t('dashboard'), disabled: false, path: "/dashboard", svg: monitoring, svgBlue: monitoringBlue },
        { id: 2, name: t('lists'), disabled: true, path: "/listPage", svg: plantList, svgBlue: plantListBlue }, 
        { id: 4, name: t('alerts'), disabled: true, path: "/alerts", svg: alerts, svgBlue: alertsBlue },
        { id: 5, name: t('page-weather'), disabled: true, path: "/weather", svg: weather, svgBlue: weatherBlue }, 
        { id: 7, name: t('company'), disabled: true, path: "/ilkDetaySayfa", svg: company },
        { id: 17, name: t('customer'), disabled: true, path: "/ilkDetaySayfa", svg: customer },
        { id: 8, name: t('data-sources'), disabled: true, path: "/ilkDetaySayfa", svg: plantList },
        { id: 9, name: t('product'), disabled: true, path: "/ilkDetaySayfa", svg: product },
        { id: 10, name: t('custom-field'), disabled: true, path: "/ilkDetaySayfa", svg: custom },
        { id: 11, name: t('states'), disabled: true, path: "/ilkDetaySayfa", svg: states },
        { id: 12, name: t('people-teams'), disabled: true, path: "/ilkDetaySayfa", svg: people },
        { id: 13, name: t('role'), disabled: true, path: "/ilkDetaySayfa", svg: role },
        { id: 14, name: t('efforts'), disabled: true, path: "/ilkDetaySayfa", svg: efforts },
        { id: 15, name: t('forcasting'), disabled: true, path: "/ilkDetaySayfa", svg: forcasting },
        { id: 16, name: t('sales'), disabled: true, path: "/ilkDetaySayfa", svg: sales },
    ]
    return (
        <>
            <aside style={{ borderRight: "1px solid rgba(145, 158, 171, 0.16)" }} className={`sidebar ${showMenu ? "open" : ""}`}>
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className={`sidebar-toggle ${showMenu ? "" : "sidebar-toggle-close"}`}
                >
                    {
                        showMenu ?
                            <img src={collapseArrowIcon} alt=" " /> :
                            <img src={vector} alt=" " />
                    }

                </button>

                <nav>
                    <div onClick={() => navigate('/dashboard')} style={{
                        height: "64px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: "1px solid rgba(145, 158, 171, 0.16)"
                    }}><img src={homeLogo} alt=" " /></div>

                    <div style={{ overflow: "auto", height: "640px" }} className='menüItems' >
                        <div style={{ overflow: "auto", height: "640px" }}   >
                            <List >
                                {menüItems.map((item) => (
                                    <ListItem key={item.id} color='blue' disablePadding sx={{
                                        marginTop: (item.id === 4 || item.id === 7 || item.id === 11) && "30px"
                                    }}>
                                        <ListItemButton
                                            onClick={() => navigate(item.path)}
                                            disabled={item.disabled}
                                            selected={location.pathname === item.path}
                                            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                                        >
                                            <ListItemIcon>
                                                <img src={location.pathname === item.path && item.svgBlue ? item.svgBlue : item.svg} alt=" " />
                                            </ListItemIcon>
                                            <span className='menuListItemText' style={{
                                                color: location.pathname === item.path ? "#3B74C8" : "#91A1A9"
                                            }}  >{item.name}  </span>
                                        </ListItemButton>
                                    </ListItem>
                                ))}

                            </List>
                        </div>
                    </div>
                </nav>
            </aside >
            <div style={{ borderRight: "1px solid rgba(145, 158, 171, 0.16)" }} className="sidebar-border" >
                <div style={{ borderBottom: "1px solid rgba(145, 158, 171, 0.16)", height: "64px", }} > </div>
            </div>
        </>
    );
};

export default AppSidebar;
