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


export default function DashBoardTab() {
    const [value, setValue] = React.useState('one');
    const classes = useStyles();
    const { t } = useTranslation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
            // classes={{
            //     indicator: classes.indicator,
            //     root: classes.tabsRoot,
            // }}
            >
                <Tab
                    style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        paddingLeft: "0px"
                    }}
                    value="one"
                    label="Dashboard 1"
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
                    value="two"
                    label="Dashboard 2"
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
                    value="four"
                    label={<img src={plusIcon} alt=" " />}
                    classes={{
                        root: classes.tabRoot
                    }}
                    disabled={true}
                />

            </Tabs>
        </Box>
    );
}