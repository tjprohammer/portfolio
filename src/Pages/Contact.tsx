import React from 'react';
import { Container, Typography } from '@mui/material';

type Props = {};

export const Contact = (props: Props) => {
    return (
        <Container
            id="/contact"
            sx={{
                pt: 0,
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '.08em'
                }}>
                Get In Touch
            </Typography>
            <Typography
                variant="h4"
                color="primary.dark"
                sx={{
                    pt: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '.08em'
                }}>
                <a href="mailto:tj@tjprohammer.us">Email TJ Prohammer</a>
            </Typography>
        </Container>
    );
};

export default Contact;
