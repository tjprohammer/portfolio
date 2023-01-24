import React from 'react';
import { Container, Typography } from '@mui/material';

type Props = {};

export const Contact = (props: Props) => {
    return (
        <Container
        id='/contact'
        sx={{
            pt: 0,
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'space-around',
            display: 'flex',
            height: '100vh'
        }}>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Get In Touch
            </Typography>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href="mailto:tj@tjprohammer.us">Email TJ Prohammer</a> 
            </Typography>
        </Container>
    );
};

export default Contact;
