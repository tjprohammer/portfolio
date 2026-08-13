import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}

export default LandingPage;
