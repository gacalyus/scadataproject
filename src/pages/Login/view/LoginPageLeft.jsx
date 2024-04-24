

import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import leftBgImage from '../../../assets/images/wb_login_left.jpg';



export default function LoginPageLeft() {

    return (
        <div style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            backgroundImage: `url(${leftBgImage})`
        }} >
            <Box width={1} textAlign="center" pt="20vh">
                <Typography
                    variant="h3"
                    component="h1"
                >
                    WELCOME TO OUR COMMUNITY
                </Typography>
            </Box>
        </div>
    );
}
