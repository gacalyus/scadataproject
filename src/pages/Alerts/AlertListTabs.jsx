import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import plusIcon from "../../assets/images/plusIcon.svg"
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AlertList from './Lists/Alert/AlertList';


const tabHeight = '44px'
const useStyles = makeStyles((theme) => ({
    indicator: {
        display: 'none', // MUI v5'de göstergeyi kaldırmak için
    },
    tabsRoot: {
        minHeight: tabHeight,
        height: tabHeight
    },
    tabRoot: {
        minHeight: tabHeight,
        height: tabHeight

    }
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            style={{ width: "100%" }}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}

        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}




const AlertsPage = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const { t } = useTranslation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%', }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="secondary tabs example"

                >
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={0}
                        label="Alarm"
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={1}
                        label="Plant"
                        disabled
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={2}
                        {...a11yProps(2)}
                        label="Inverter"
                        disabled
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={3}
                        label="String"
                        disabled
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={3}
                        label="Panel"
                        disabled
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value="six"
                        label={<img src={plusIcon} alt=" " />}
                        classes={{
                            root: classes.tabRoot
                        }}
                        disabled={true}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AlertList />
            </CustomTabPanel>
        </>
    );
}

export default AlertsPage;
