import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginPageLeft from './view/LoginPageLeft';
import LoginPageRight from './view/LoginPageRight';

const LoginPage = () => {
   
    // const browserHasKey = localStorage.getItem('user');

    // if (browserHasKey) {

    //     return <Redirect to="/dashboard" />;
    // }

    return (

        <Grid container component={Box} height="100vh" m={-1}>
            <Grid item md={6} lg={8}>
                <Box
                    component={Grid}
                    item
                    display={{ xs: 'none', md: 'block' }}
                    height={1}
                >
                    <LoginPageLeft />
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <LoginPageRight />
            </Grid>
        </Grid>
    );
};

export default LoginPage;
