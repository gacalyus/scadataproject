import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

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


export default function DashBoardDate() {
    const [value, setValue] = React.useState('one');
    const classes = useStyles();
    const { t } = useTranslation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                    ]}
                >
                    <DemoItem  >
                        <DesktopDatePicker onChange={(v) => console.log(v.$d)} defaultValue={dayjs('2023-04-17')} />
                    </DemoItem>

                </DemoContainer>
            </LocalizationProvider>
        </Box>
    );
}