import React from 'react';
import { Link } from 'react-scroll';
import portrait from '../../assets/portrait.jpg';

function Home() {
    return (
        <section className="hero" id="home">
            <div
                className="hero__bg"
                aria-hidden="true"
                style={{ backgroundImage: `url(${portrait})` }}
            />
            <div className="container hero__content">
                <h1 className="hero__name">TJ Prohammer</h1>
                <p className="hero__title">Software / Cloud Engineer</p>
                <p className="hero__lede">
                    Building and operating production systems on AWS and Vercel — serverless APIs,
                    infrastructure as code, and reliable checkout flows.
                </p>
                <div className="hero__actions">
                    <Link className="btn btn--primary" to="contact" smooth duration={500} offset={-72}>
                        Get in touch
                    </Link>
                    <a
                        className="btn btn--ghost"
                        href="https://resume-tjprohammer.s3.amazonaws.com/TJ+Prohammer_Resumee.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
