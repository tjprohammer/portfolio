import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {};
const Skills = (props: Props) => {
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
                Skills
            </Typography>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Skills
            </Typography>
        </Box>
    );
};
export default Skills;
