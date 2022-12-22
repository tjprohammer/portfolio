import React from 'react';
import logo from '../../assets/logo-svg.svg';
import { Button, ButtonBase, Container, Grid, Typography } from '@mui/material';

function LandingPage() {
    return (
        <Container
            sx={{
                pt: 16,
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
            }}>
            <Grid
                container
                spacing={2}
                xs={12}
                sm={12}
                md={7}
                lg={7}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                <Grid item xs={12} md container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid
                            item
                            xs
                            sx={{
                                textAlign: 'center'
                            }}>
                            <Typography gutterBottom variant="h3">
                                TJ Prohammer Portfolio
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                A deep understanding of systems and 
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                textAlign: 'center'
                            }}>
                            <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
                                About
                            </Button>

                            <Button variant="contained" color="primary">
                                About
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 300, height: 300, alignItems: 'center' }}>
                        <img alt="logo" src={logo} style={{ height: '300px' }} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Container>
    );
}

export default LandingPage;
