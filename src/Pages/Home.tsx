import React from 'react';
import portrait from '../../assets/portrait.webp';

function Home() {
    return (
        <section className="hero" id="home">
            <img
                className="hero__bg-img"
                src={portrait}
                alt=""
                width={1600}
                height={1600}
                decoding="async"
                {...{ fetchPriority: 'high' }}
            />
            <div className="hero__bg" aria-hidden="true" />
            <div className="container hero__content">
                <h1 className="hero__name">TJ Prohammer</h1>
                <p className="hero__title">Software / Cloud Engineer</p>
                <p className="hero__lede">
                    Problem solver in software and IT — building, fixing, and operating production
                    systems. Nature photographer for 12+ years.
                </p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="#contact">
                        Get in touch
                    </a>
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
