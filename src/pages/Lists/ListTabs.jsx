import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import plusIcon from "../../assets/images/plusIcon.svg"
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import PlantList from './Plant/PlantList';
import InverterList from './Inverter/InverterList';
import StringList from './String/StringList';
import PanelList from './Panel/PanelList';

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


export default function ListTabs() {
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
                        label="Plant List"
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={1}
                        label="Inverter List"
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
                        label="String List"
                        classes={{
                            root: classes.tabRoot
                        }} />
                    <Tab
                        style={{
                            fontWeight: "bold",
                            textTransform: "capitalize"
                        }}
                        value={3}
                        label="Panel List"
                        classes={{
                            root: classes.tabRoot
                        }}
                        disabled={true}
                    />

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
                <PlantList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <InverterList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <StringList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <PanelList />
            </CustomTabPanel>
        </>
    );
}