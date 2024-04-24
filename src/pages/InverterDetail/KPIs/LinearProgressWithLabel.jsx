import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function LinearProgressWithLabel(props) {
    return (
        <Box marginTop={props.marginTop} >
            <Tooltip title={`${Math.round(props.value)}%`}>

                <Stack sx={{ width: '100%', color: 'red' }} spacing={2}>
                    <LinearProgress variant="determinate" {...props} />
                </Stack>
                <Box sx={{ minWidth: 35, display: 'flex', alignItems: 'center' }} >
                    <Typography variant="body2" color="text.secondary">{props.labelValue}</Typography>

                </Box>
            </Tooltip>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
    marginTop: PropTypes.string,
};