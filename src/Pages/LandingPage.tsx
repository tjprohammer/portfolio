import React from 'react';
import { Box, Typography } from '@mui/material';
// import SvgAnimation from '../components/SVGAnimation/SvgAnimation';



function LandingPage() {
    return (
        <>
            <Box
            
                sx={{
                    height: '88vh',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2',
                    columnGap: '3',
                    alignItems: 'center'
                }}>
                <Typography
                    variant="h4"
                    color="primary.dark"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    TJ Prohammer Portfolio
                </Typography>
                {/* <SvgAnimation /> */}
             

            </Box>
        </>
    );
}

export default LandingPage;
