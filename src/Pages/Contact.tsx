import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {};

export const Contact = (props: Props) => {
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
                Contact
            </Typography>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Contact
            </Typography>
        </Box>
    );
};

export default Contact;
