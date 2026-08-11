import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function Contact() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <>
            <section className="section" id="contact" ref={ref}>
                <div className="container">
                    <header className="section__header reveal">
                        <span className="section__eyebrow">Contact</span>
                        <h2 className="section__title">Let’s build something solid</h2>
                        <p className="section__intro">
                            Open to cloud and full-stack roles — especially AWS, serverless, and
                            platforms that need careful ops.
                        </p>
                    </header>
                    <div className="contact reveal">
                        <ul className="contact__list">
                            <li>
                                <a href="mailto:tj@tjprohammer.us">tj@tjprohammer.us</a>
                            </li>
                            <li>
                                <a href="tel:+17325985266">(732) 598-5266</a>
                            </li>
                            <li>
                                <span>Surprise, AZ</span>
                            </li>
                            <li>
                                <a
                                    href="https://photo.tjprohammer.us"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    photo.tjprohammer.us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://resume-tjprohammer.s3.amazonaws.com/TJ+Prohammer_Resumee.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Download resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container footer__inner">
                    <p>© {new Date().getFullYear()} TJ Prohammer</p>
                    <p>BS Information Technology — Oregon Institute of Technology</p>
                </div>
            </footer>
        </>
    );
}

export default Contact;
