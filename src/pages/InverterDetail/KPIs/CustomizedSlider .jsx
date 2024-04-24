import * as React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useMemo } from 'react';


const CheckMarkSlider = styled(Slider)(({ theme }) =>
({
    color: '#3a8589',
    height: 3,
    background: 'linear-gradient(90deg, #F56C61 0%, #FFD43D 49.86%, #52DEA4 100%)',
    padding: '4px 0',
    '& .MuiSlider-thumb':
    {
        height: 0,
        width: 0,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .checkmark-bar':
        {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track':
    {
        height: 0,
        background: 'linear-gradient(90deg, #F56C61 0%, #FFD43D 49.86%, #52DEA4 100%)',
        display: 'none'
    },
    '& .MuiSlider-rail':
    {
        background: 'linear-gradient(90deg, #F56C61 0%, #FFD43D 49.86%, #52DEA4 100%)',
        opacity: 1,
        height: 0,
        display: 'none'
    },


}))



const CheckMarkThumbComponent = (props) => {
    const { children, ...other } = props

    return (
        <SliderThumb {...other}>
            {children}
            <TurnedInIcon sx={{ color: 'black', height: '18px' }} />
        </SliderThumb>
    )
}

const CustomizedSlider = (props) => {
    
    const value = useMemo(() => props.value ?? 50, [props])
    // React.useEffect(() => {
    //     const intervalId = setInterval(() => setValue(Math.random() * 100), 500)
    //     return () => clearInterval(intervalId)
    // }, [value])

    return (
        <Box sx={{ width: '100%' }}>
            <CheckMarkSlider
                value={value}
                components={{ Thumb: CheckMarkThumbComponent }}
            />
        </Box>
    )
}

export default CustomizedSlider