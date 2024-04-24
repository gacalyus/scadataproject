
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import PlantListTabs from './ListTabs';

const options = ['', 'Option 1', 'Option 2'];

const ListPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    return (
        <Grid container spacing={1} style={{ margin: 0, width: '100%' }} >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    padding: "24px",
                    borderRadius: "16px",
                    flexDirection: "column",
                }}  >
                <Grid container xs={12} lg={12} width="100%"  >
                    <PlantListTabs />
                </Grid>
            </div>
        </Grid>
    );
};

export default ListPage;
