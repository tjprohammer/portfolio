import { AppBar, Typography } from '@mui/material';
import React from 'react';

function LandingPage() {
    return (
        <>
            <AppBar color="default" sx={{mt: 10, p: 9, pt: 2 }}>
                <Typography variant='h1' color="primary">TJ Prohammer Portfolio</Typography>
                <Typography variant='h2' color="primary">TJ Prohammer Portfolio</Typography>
                <Typography variant='h3' color="primary">TJ Prohammer Portfolio</Typography>
                <Typography variant='h4' color="primary">TJ Prohammer Portfolio</Typography>
                <Typography variant='h5' color="primary">TJ Prohammer Portfolio</Typography>
                <Typography variant='subtitle1' color="secondary">Resume Attached</Typography>
                <Typography variant='h4' color="secondary">Testing</Typography>
                
            </AppBar>

        </>
    );
}

export default LandingPage;
