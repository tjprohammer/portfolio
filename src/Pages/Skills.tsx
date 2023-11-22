import React from 'react';
import { Container, Typography } from '@mui/material';
import { Line } from './Home';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import GridSkills from '../components/gridSkills/GridSkill';

type Props = {};
const Skills = (props: Props) => {
    const ref = useFadeInOnScroll();
    return (
        <Container ref={ref} style={{ opacity: 0 }}>
            <Container
                sx={{
                    pt: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto'
                }}>
                <Typography id="/skills" variant="h2" color="secondary" sx={{letterSpacing: '.08em'}}>
                    Skills
                </Typography>
                <Line />
                <Typography variant="body1" sx={{ pb: 6, textAlign: 'center', letterSpacing: '.08em' }}>
                    These are some of my favorite languages and tools I spend most of my time mastering.
                </Typography>
            </Container>
            <GridSkills />
        </Container>
    );
};

export default Skills;
