import React from 'react';
import { Typography, Box } from '@mui/material';
type Props = {};

const About = (props: Props) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2',
                columnGap: '3'
            }}>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                About
            </Typography>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                About
            </Typography>
        </Box>
    );
};

export default About;
