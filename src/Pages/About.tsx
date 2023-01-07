import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Line } from './LandingPage';

type Props = {};

const About = (props: Props) => {
    return (
        <>
            <Container  sx={{ alignItems:'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h2" color="secondary" sx={{}}>
                    About
                </Typography>
                <Line />
                <Typography variant='body1' sx={{pb:6}}> About text........</Typography>
            </Container>
            <Container sx={{ maxWidth: ' 400px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card variant="outlined" sx={{ justifyContent: 'center', display: 'flex' }}>
                            <CardContent>Content...</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined" sx={{ justifyContent: 'center', display: 'flex' }}>
                            <CardContent>Content...</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined" sx={{ justifyContent: 'center', display: 'flex' }}>
                            <CardContent>Content...</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card variant="outlined" sx={{ justifyContent: 'center', display: 'flex' }}>
                            <CardContent>Content...</CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default About;
