import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';

import About from './About';
import Home from './Home';

function LandingPage(props) {
    return (
        <>
            <Home />
            <Container sx={{}}>
                <About />
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

export default LandingPage;
