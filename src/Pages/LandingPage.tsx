import React from 'react';
import { Box, Typography } from '@mui/material';
import SvgAnimation from '../components/SVGAnimation/SvgAnimation';
import Container from '@mui/material/Container';
// import logo from '../../assets/logo-svg.svg'

function LandingPage() {
    return (
        <>
            <Box
                sx={{
                    width: '100vw',
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
                {/* <img src={logo} /> */}
                <Container>
                    <SvgAnimation />
                </Container>
            </Box>
        </>
    );
}

export default LandingPage;
