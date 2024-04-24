import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import plusIcon from "../../../assets/images/plusIcon.svg"

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


export default function PlantDetailTabs() {
    const [value, setValue] = React.useState('one');
    const classes = useStyles();
    const { t } = useTranslation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginBottom: "24px" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"

            >
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        paddingLeft: "0px",
                        fontSize: "16px",
                        color: "#282B2E"
                    }}
                    value="one"
                    label={t('monitoring')}
                    classes={{
                        root: classes.tabRoot
                    }}
                />
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "16px"
                    }}
                    value="two"
                    label={t('detail')}
                    classes={{
                        root: classes.tabRoot
                    }} disabled={true}
                />
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "16px"
                    }}
                    value="three"
                    label={t('parameters')}
                    classes={{
                        root: classes.tabRoot
                    }} disabled={true}
                />
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "16px"
                    }}
                    value="four"
                    label={t('layouts')}
                    classes={{
                        root: classes.tabRoot
                    }} disabled={true}
                />
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "16px"
                    }}
                    value="five"
                    label={t('alarm-definitions')}
                    classes={{
                        root: classes.tabRoot
                    }} disabled={true}
                />
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize"
                    }}
                    value="six"
                    label={<img src={plusIcon} alt=" " />
                    }
                    classes={{
                        root: classes.tabRoot
                    }}
                    disabled={true}
                />

            </Tabs>
        </Box>
    );
}