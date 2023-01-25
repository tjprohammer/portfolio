import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import portrait from '../../assets/portrait.jpg';
import { motion } from 'framer-motion';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

type Props = {};

const About = (props: Props) => {
    const ref = useFadeInOnScroll();

    return (
        <>
            <Container
            ref={ref}
            style={{opacity: 0}}
                sx={{
                    pt: 14,
                    margin: 'auto',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    display: 'flex',
                    height: '90vh'
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
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row-reverse'
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
                                    id="/about"
                                    sx={{
                                        flexDirection: 'column',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pt: 10
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
                                                color="secondary"
                                                style={{
                                                    display: 'flex',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                    letterSpacing: '.08em'
                                                }}>
                                                About Me
                                            </Typography>
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
                                            sx={{ pb: 6, letterSpacing: '.08em' }}>
                                            Hello, my name is TJ Prohammer. I am an excellent
                                            problem solver with experience in a variety of
                                            programming languages, frameworks and tools. I am
                                            profiecient in Javascript, Typescript, React, Node.js
                                            and have some experience with Python, and C#. I have a
                                            bachelor's degree in Information Technology and have
                                            worked both frontend development and backend
                                            development.
                                        </Typography>
                                    </motion.div>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <motion.img
                            alt="portrait"
                            height="350px"
                            src={portrait}
                            style={{ position: 'relative' }}
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 300 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 0.1, duration: 2, bounce: 0.6 }}
                        />
                    </Grid>
                </Grid>
                {/* <motion.div
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        delay: 0.3,
                        duration: 2,
                        bounce: 0.6
                    }}>
                    <Link to="/about">
                        <KeyboardDoubleArrowDownRoundedIcon
                            fontSize="large"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                mt: 10
                            }}
                        />
                    </Link>
                </motion.div> */}
            </Container>
        </>
    );
};

export default About;
