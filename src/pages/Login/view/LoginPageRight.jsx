
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import lightLogo from '../../../assets/images/smartbe_logo_light.png';
import LoginForm from './LoginForm';
import ForgetPasswordForm from './ForgetPasswordForm';

// import LoginForm from '../../../components/LoginForm';


export default function LoginPageRight() {

    const [pageType, setPageType] = useState('login');
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={1}
        >
            <Box maxWidth="500px" width={0.9}>
                <Box width={1}>
                    <img
                        src={lightLogo}
                        alt="workyBeBigLogo"
                        style={{
                            width: '60%',
                            display: 'block',
                            margin: 'auto'
                        }}
                    />
                </Box>

                <Box my={3} display="flex" justifyContent="center">
                    <Typography
                        variant="h4"
                        color="textSecondary"
                        component="h2"
                        display="inline"
                    >
                        Log In
                    </Typography>
                </Box>
                <Divider />
                <Box my={3}>

                    {pageType === 'login' && <LoginForm />}
                    {pageType === 'forgetPassword' && <ForgetPasswordForm />}

                    <div style={{ textAlign: 'center', fontSize: "0.875rem", fontWeight: "400" }}  >
                        {pageType === 'login' && 'Did you forget your password then  '}
                        {pageType === 'forgetPassword' && 'Go to'}
                        <span
                            style={{ color: '#07c4f2', textDecoration: 'underline', fontSize: "0.875rem", fontWeight: "400" }}
                            onClick={() => { if (pageType === 'login') { setPageType('forgetPassword') } else { setPageType('login') } }}
                        >
                            {pageType === 'login' && 'Click'}
                            {pageType === 'forgetPassword' && 'Login'}
                        </span>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}
