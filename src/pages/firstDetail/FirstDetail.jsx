
import React from 'react';
import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FirstDetail = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()



    return (
        <Box sx={{ flexGrow: 1 }} marginTop="1.5rem">
            <Grid container spacing={1} style={{ margin: 0, width: '100%', }} >

                <Button
                    style={{ backgroundColor: "red", color: "white",marginLeft:"500px" }}
                    variant='outline'
                    onClick={() => navigate(-1)}
                >
                    {t('come-back')}
                </Button>
            </Grid>

            <Divider style={{ marginTop: "1rem" }} />
        </Box >

    );
};

export default FirstDetail;
