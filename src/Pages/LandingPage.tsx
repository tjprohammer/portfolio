import React from 'react';
import styled from '@emotion/styled';
import { Element } from 'react-scroll';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

function LandingPage(props) {
    return (
        <>
            <Element>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </Element>
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

export default LandingPage;
