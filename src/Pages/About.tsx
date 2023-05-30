import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import portrait from '../../assets/portrait.jpg';
import { Variants, motion } from 'framer-motion';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { Line } from './Home';
import ResumeLinks from '../components/resumeLinks/ResumeLinks';

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
            <div
                ref={ref}
                style={{
                    paddingTop: 18,
                    margin: 'auto',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    display: 'flex',
                    height: '100%',
                    maxWidth: '1600px'
                }}>
                <Grid
                    id="/about"
                    item
                    container
                    spacing={2}
                    xs={12}
                    sm={7}
                    md={7}
                    lg={7}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        maxWidth: '1600px',
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
                                            I am a dedicated software engineer and IT expert with a
                                            zeal for developing cutting-edge software solutions that
                                            address intricate business problems. I possess hands-on
                                            experience in crafting practical applications using
                                            React, NodeJS, AWS and Terraform, while harboring a
                                            strong fascination for solution architecture. My forte
                                            lies in clear and efficient communication, which enables
                                            me to deliver favorable results for my clients and team
                                            members. As I transition towards a solutions architect
                                            position, I am eager to utilize my expertise in
                                            designing and enhancing operational systems to surpass
                                            business objectives.
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
                            style={{
                                position: 'relative',
                                paddingRight: 16,
                                alignItems: 'center',
                                borderRadius: '50%'
                            }}
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
                        <Typography variant="body1" sx={{ pt: 6, letterSpacing: '.08em', textAlign: 'center' }}>
                            <strong>
                                Hobbies: <br />{' '}
                            </strong>{' '}
                            <em> Nature Photography, Backpacking, Fly Fishing</em>
                            <ResumeLinks resumeUrl="https://docs.google.com/document/d/1ob4ychxajp6YrwU8TIwWSYHePDp4Wpij/edit?usp=sharing&ouid=108253229835955685676&rtpof=true&sd=true" />
                        </Typography>
                    </motion.div>
                </Grid>
            </div>
        </>
    );
};

export default About;
