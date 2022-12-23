import React from 'react';
import logo from '../../assets/logo-svg.svg';
import {  ButtonBase, Container, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

function LandingPage() {
    return (
        <Container 
            sx={{
                pt: 12,
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'space-around',
                display: 'flex',
                height: '75vh'
            }}>
            <Grid
                container
                spacing={2}
                xs={12}
                sm={12}
                md={7}
                lg={7}
                sx={{
                    marginLeft: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column-reverse',
                        sm: 'column-reverse',
                        md: 'column-reverse',
                        lg: 'row'
                    }
                }}>
                <Grid item md>
                    <Grid
                        direction="column"
                        spacing={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {/** TEXT */}
                        <Grid item >
                            <Container sx={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography gutterBottom variant="h3" style={{display: 'flex',  textAlign: 'center', alignItems: 'center'}}>
                                TJ Prohammer Portfolio
                            </Typography>
                            <Line />
                            <Typography
                                variant="body1"
                                gutterBottom
                                style={{display: 'flex',  textAlign: 'center', alignItems: 'center'}}>
                                A deep understanding of systems and
                            </Typography>
                            </Container>
                        </Grid>
                        
                    </Grid>

                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 300, height: 300, alignItems: 'center' }}>
                        <img alt="logo" src={logo} style={{ height: '300px', position: 'relative' }} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Container>
    );
}

const Line = styled.span`
    height: 1px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #43aa8b;
    width: 12em;
    display: flex;

`;

export default LandingPage;
