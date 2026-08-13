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
                <p className="hero__title">Full Stack Engineer · Cloud Engineer</p>
                <p className="hero__lede">
                    Building and fixing production systems across software and IT. Nature
                    photographer for 12+ years.
                </p>
                <div className="hero__actions">
                    <a className="btn btn--primary" href="#contact">
                        Get in touch
                    </a>
                    <a className="btn btn--ghost" href="#about">
                        About me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
