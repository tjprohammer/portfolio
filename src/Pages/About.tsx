import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import portrait from '../../assets/portrait.jpg';
import { Variants, motion } from 'framer-motion';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { Line } from './Home';

type Props = {};

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const About = (props: Props) => {
    const ref = useFadeInOnScroll();

    return (
        <>
            <Container
            
            ref={ref}
            style={{opacity: 0}}
                sx={{
                    pt: 18,
                    margin: 'auto',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    display: 'flex',
                    height: '100%',
                    width: '100%'
                }}>
                <Grid
                id="/about"
                    item
                    container
                    spacing={2}
                    xs={12}
                    sm={12}
                    md={7}
                    lg={7}
                    sx={{
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
                                justifyContent: 'center',
                            }}>
                            {/** TEXT */}
                            <Grid item>
                                <Container
                                    
                                    sx={{
                                        flexDirection: 'column',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',

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
                                                sx={{
                                                    display: 'flex',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                    letterSpacing: '.08em'
                                                }}>
                                                About Me
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
                                            sx={{ pt: 2, pb: 6, letterSpacing: '.08em' }}>
                                           Hello, I am TJ Prohammer. I possess a diverse set of skills and successfully crafted some innovative software solutions. I specialize in building intuitive and responsive frontend and backend applications. Moreover, I practice in arctitecting scalable, reliable and cost-effective infrastructure solutions tailored to meet the business needs. 
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
                            style={{ position: 'relative', paddingRight: 16, alignItems: 'center', borderRadius: '50%' }}
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 300 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', delay: 0.1, duration: 2, bounce: 0.6 }}
                        />
                    </Grid>
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
                                            sx={{ pt: 6, letterSpacing: '.08em' }}>
                                           <strong>Hobbies: </strong> <em> Photography, Backpacking, Fishing</em>
                                        </Typography>
                                    </motion.div>
                </Grid>
            </Container>
        </>
    );
};

export default About;
