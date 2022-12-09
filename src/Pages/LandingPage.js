import { Button, Card } from '@mui/material';
import React from 'react';

function LandingPage() {
    return (
        <>
            <Card color="primary" sx={{ mt: 10, p: 9, pt: 2 }}>
                <h1 color="primary">TJ Prohammer Portfolio</h1>
                <h2 color="secondary">Resume Attached</h2>
                <h5 color="secondary">Testing</h5>
                <Button color="primary" variant="contained">
                    LandingPage
                </Button>
                <Button color="warning" variant="contained">
                    LandingPage
                </Button>
                <Button color="secondary" variant="contained">
                    LandingPage
                </Button>
                <Button color="error" variant="contained">
                    LandingPage
                </Button>
                <Button color="success" variant="contained">
                    LandingPage
                </Button>
            </Card>
        </>
    );
}

export default LandingPage;
