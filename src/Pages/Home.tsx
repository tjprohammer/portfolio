import React from 'react';
import logo from '../../assets/logo-svg.svg';
import { Container, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function Home(props) {
    return (
        <>
            <Container
                sx={{
                    pt: 4,
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
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            default: {
                                                duration: 0.3,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            },
                                            scale: {
                                                type: 'spring',
                                                damping: 5,
                                                stiffness: 100,
                                                restDelta: 0.001
                                            }
                                        }}>
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
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            default: {
                                                duration: 0.3,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            },
                                            scale: {
                                                type: 'spring',
                                                damping: 5,
                                                stiffness: 100,
                                                restDelta: 0.001
                                            }
                                        }}>
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
                                            Software Developer and an IT Professional <br />{' '}
                                            Functionality
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
                </Grid>
            </Container>
        </>
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

export default Home;
