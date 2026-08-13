import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function About() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <header className="section__header reveal">
                    <span className="section__eyebrow">About</span>
                    <h2 className="section__title">More than a resume line</h2>
                    <p className="section__intro">
                        Full-stack and cloud work with a bias toward shipping, fixing, and keeping
                        systems reliable — plus 12+ years behind the camera outdoors.
                    </p>
                </header>

                <div className="about reveal">
                    <div className="about__copy">
                        <p>
                            Versatile full-stack and cloud engineer with deep experience building
                            and optimizing high-performance e-commerce and marketplace platforms.
                            Comfortable across React, TypeScript, and Go, with a strong focus on
                            serverless architectures, AWS, and infrastructure as code with Terraform
                            — always with an eye on scalability, reliability, and performance.
                        </p>
                        <p>
                            Day to day that means designing APIs, wiring CI/CD, hardening
                            environments, and solving the messy production problems that show up
                            after launch. Strong in Agile delivery, collaboration, and picking up
                            new tools when the problem demands it.
                        </p>
                        <p>
                            Outside of engineering I&apos;ve spent 12+ years as a nature
                            photographer — chasing light, landscapes, and the kind of patient
                            observation that also shows up in how I debug systems.
                        </p>
                    </div>

                    <aside className="about__aside">
                        <div className="about__block">
                            <h3>Education</h3>
                            <p className="about__school">Oregon Institute of Technology</p>
                            <p>BS, Information Technology</p>
                        </div>
                        <div className="about__block">
                            <h3>Focus</h3>
                            <ul>
                                <li>Serverless &amp; cloud platforms</li>
                                <li>E-commerce &amp; marketplace systems</li>
                                <li>IaC, CI/CD, and reliable ops</li>
                                <li>IT problem-solving &amp; support</li>
                            </ul>
                        </div>
                        <div className="about__block">
                            <h3>Based in</h3>
                            <p>Boulder, CO</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default About;
