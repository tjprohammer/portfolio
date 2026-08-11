import React from 'react';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function LandingPage() {
    return (
        <main>
            <Home />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default LandingPage;
