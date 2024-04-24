import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CustomizedSlider from './CustomizedSlider';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';

export default function KPIsComp({ title, img, titleIcon, realizedValue, infoTooltip }) {
    const { t } = useTranslation();

    /////////////////dashboard kpi boxes

    if (realizedValue == null)
        return;

    return (
        <Box width='100%' display='flex' >
            <Box width='10%'>
                <img src={img} alt='' />
            </Box>
            <Box width='90%'>
                <Box width='100%' display='flex' justifyContent='space-between' >
                    <span style={{ fontSize: '14px', fontWeight: '500', color: "#282B2E" }} >{title} </span>
                    <Tooltip title={infoTooltip}>
                        <img src={titleIcon} alt="" />
                    </Tooltip>

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
                            <span style={{ fontSize: '32px', fontWeight: '500', whiteSpace: 'nowrap', color: "#282B2E" }} >
                                {realizedValue ? realizedValue.value : 58.48}
                                <span style={{ fontSize: '12px', fontWeight: '400' }} > {realizedValue.unit ?? "kWh"} </span>
                            </span>
                        </Box>
                        <Box >
                            <span style={{ fontSize: '24px', fontWeight: '500', color: '#91A1A9', whiteSpace: 'nowrap' }} >
                                <span style={{ fontSize: '12px', fontWeight: '400' }} >%</span>
                                {realizedValue ? realizedValue?.ratio : 0.00}
                            </span>
                        </Box>
                        <Box >
                            <span style={{ fontSize: '24px', fontWeight: '500' }} >  {realizedValue ? realizedValue?.target : 0.00}
                                <span style={{ fontSize: '12px', fontWeight: '400' }} >{realizedValue.unit ?? "kWh"}</span>
                            </span>
                        </Box>
                    </Box>

                    <Box width='100%'>
                        <CustomizedSlider value={realizedValue ? realizedValue?.ratio : 50} />
                        <Stack sx={{ width: '100%', marginTop: '0px' }} spacing={2}>
                            <LinearProgress variant="determinate" value={realizedValue ? 100 - realizedValue.ratio : 50} sx={{
                                height: "2px",
                                backgroundColor: '#9874FF',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#D2DCE0'
                                }
                            }} />
                        </Stack>
                        <Box width='100%' display='flex' justifyContent='space-between' sx={{ marginBottom: '-10px' }} >
                            <Box >
                                <span style={{ fontSize: '12px', color: '#91A1A9' }} > {t('CustomBar')}  </span>
                            </Box>
                            <Box >
                                <span style={{ fontSize: '12px', color: '#91A1A9' }} >  {t('CustomValue')} </span>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}