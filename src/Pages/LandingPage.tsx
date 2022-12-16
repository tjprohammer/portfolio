
import { Box, Typography } from '@mui/material';
import React from 'react';

function LandingPage() {
    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2', columnGap: '3'}}>
                <Typography
                    variant="h4"
                    color="primary.dark"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    TJ Prohammer Portfolio
                </Typography>
                <Typography
                    variant="h4"
                    color="primary.dark"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    TJ Prohammer Portfolio
                </Typography>
            </Box>
        </>
    );
}

export default LandingPage;
