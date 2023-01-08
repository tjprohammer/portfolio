import React from 'react';
import logo from '../../assets/logo-svg.svg';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { motion, Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function LandingPage(props) {
    return (
        <Container
            sx={{
                pt: 8,
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'space-around',
                display: 'flex',
                height: '75vh'
            }}>
            <Grid
                item
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
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {/** TEXT */}
                        <Grid item>
                            <Container
                                sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 300 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        delay: 0.2,
                                        duration: 2,
                                        bounce: 0.6
                                    }}
                                    variants={itemVariants}>
                                    <Typography
                                        gutterBottom
                                        variant="h3"
                                        color="primary"
                                        style={{
                                            display: 'flex',
                                            textAlign: 'center',
                                            alignItems: 'center',
                                            letterSpacing: '.05em'
                                        }}>
                                        TJ Prohammer <br /> Portfolio
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 300 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        delay: 0.3,
                                        duration: 2,
                                        bounce: 0.6
                                    }}
                                    variants={itemVariants}>
                                    <Line />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 300 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring',
                                        delay: 0.5,
                                        duration: 2,
                                        bounce: 0.6
                                    }}
                                    variants={itemVariants}>
                                    <Typography
                                        variant="body1"
                                        gutterBottom
                                        sx={{
                                            display: 'flex',
                                            textAlign: 'center',
                                            alignItems: 'center',
                                            letterSpacing: '.05em',
                                            pt: 2
                                        }}>
                                        Solution focused IT professional with 4+ years of
                                        experience.
                                    </Typography>
                                </motion.div>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <motion.img
                        alt="logo"
                        src={logo}
                        style={{ height: '300px', position: 'relative' }}
                        whileHover={{ scale: 1.2 }}
                        initial={{ opacity: 0, y: 300 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', delay: 0.1, duration: 2, bounce: 0.6 }}
                        variants={itemVariants}
                    />
                </Grid>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        delay: 0.3,
                        duration: 2,
                        bounce: 0.6
                    }}
                    variants={itemVariants}>
                    <IconButton>
                        <NavLink to='/about'>
                            <svg
                                fill="teal"
                                viewBox="0 0 16 16"
                                height="3em"
                                width="3em"
                                {...props}>
                                <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </NavLink>
                    </IconButton>
                </motion.div>
            </Grid>
        </Container>
    );
}

export const Line = styled.span`
    height: 1px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #123c69;
    width: 12em;
    display: flex;
`;

export default LandingPage;
