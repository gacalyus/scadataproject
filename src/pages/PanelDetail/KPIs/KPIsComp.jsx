import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CustomizedSlider from './CustomizedSlider ';
import { useTranslation } from 'react-i18next';

export default function KPIsComp({ title, img, titleIcon, realizedValue, currency }) {
    const { t } = useTranslation();
    return (

        <Box width='100%' display='flex' >
            <Box width='10%'>
                <img src={img} alt='' />
            </Box>
            <Box width='90%'>
                <Box width='100%' display='flex' justifyContent='space-between' >
                    <span style={{ fontSize: '14px', fontWeight: '500' }} >{title} </span>
                    <span> <img src={titleIcon} alt="" /> </span>
                </Box>
                <Box width='100%' marginTop='24px'>
                    <Box width='100%' display='flex' justifyContent='space-between' sx={{ marginBottom: '-5px' }} >
                        <Box >
                            <span style={{ fontSize: '12px', color: '#91A1A9' }} >{t('realized')} </span>
                        </Box>
                        <Box >
                            <span style={{ fontSize: '12px', color: '#91A1A9' }} >{t('target')}</span>
                        </Box>
                    </Box>
                    <Box width='100%' display='flex' justifyContent='space-between' alignItems='end'>
                        <Box >
                            <span style={{ fontSize: '32px', fontWeight: '500', whiteSpace: 'nowrap' }} > {realizedValue ?? 58.48}
                                <span style={{ fontSize: '12px', fontWeight: '500' }} >{currency ?? "kWh"}</span>
                            </span>
                        </Box>
                        <Box >
                            <span style={{ fontSize: '24px', fontWeight: '500', color: '#91A1A9', whiteSpace: 'nowrap' }} >%00.00 </span>
                        </Box>
                        <Box >
                            <span style={{ fontSize: '24px', fontWeight: '500' }} >9.00
                                <span style={{ fontSize: '12px', fontWeight: '500' }} >{currency ?? "kWh"}</span>
                            </span>
                        </Box>
                    </Box>

                    <Box width='100%'>
                        <CustomizedSlider value={realizedValue ?? 50} />
                        <Stack sx={{ width: '100%', marginTop: '0px' }} spacing={2}>
                            <LinearProgress variant="determinate" value={realizedValue ? 100 - realizedValue : 50} sx={{
                                height: "2px",
                                backgroundColor: '#9874FF',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#D2DCE0'
                                }
                            }} />
                        </Stack>
                        <Box width='100%' display='flex' justifyContent='space-between' sx={{ marginBottom: '-10px' }} >
                            <Box >
                                <span style={{ fontSize: '12px', color: '#91A1A9' }} >{t('CustomBar')}</span>
                            </Box>
                            <Box >
                                <span style={{ fontSize: '12px', color: '#91A1A9' }} >{t('CustomValue')}</span>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}