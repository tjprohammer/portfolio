import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import alpineWeb from '../../assets/alpine-studio.webp';
import wildNetwork from '../../assets/wild-network.webp';
import photoWeb from '../../assets/tjprohammerweb.webp';

const projects = [
    {
        title: 'Wild Network',
        stack: 'React · Node · Firebase · PostGIS · Terraform · Stripe Connect · Vercel',
        description:
            'Outdoor discovery and host events marketplace — species/location search, geospatial map layers, host onboarding, slot-based booking, and Stripe Connect payouts. Multi-env Terraform and staging → production CI/CD.',
        url: 'https://wildnetwork.app',
        image: wildNetwork,
        cta: 'Visit site'
    },
    {
        title: 'The Alpine Studio',
        stack: 'React · TypeScript · Go · AWS Lambda · DynamoDB · Cognito · Stripe',
        description:
            'Serverless e-commerce and live auction platform for an art studio — checkout, webhook-driven order lifecycle, Cognito admin portal, and timed auction settlement with off-session charges.',
        url: 'https://thealpinestudio.com',
        image: alpineWeb,
        cta: 'Visit site'
    },
    {
        title: 'Nature Photography',
        stack: 'Mapbox · React · Sanity CMS',
        description:
            'Map-based photography journal with location pins, gear notes, and trip planning — a personal archive of landscapes across the US.',
        url: 'https://photo.tjprohammer.us',
        image: photoWeb,
        cta: 'View gallery'
    }
];

function Projects() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <section className="section" id="work" ref={ref}>
            <div className="container">
                <header className="section__header reveal">
                    <span className="section__eyebrow">Selected work</span>
                    <h2 className="section__title">Things I’ve built end-to-end</h2>
                    <p className="section__intro">
                        Marketplaces, serverless commerce, and tools I still use — focused on
                        reliability, payments, and clean ops.
                    </p>
                </header>
                <div className="projects">
                    {projects.map((project) => (
                        <article className="project reveal" key={project.title}>
                            <div className="project__media">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        width={1280}
                                        height={650}
                                    />
                                </a>
                            </div>
                            <div className="project__body">
                                <h3>{project.title}</h3>
                                <p className="project__stack">{project.stack}</p>
                                <p>{project.description}</p>
                                <a
                                    className="project__link"
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {project.cta}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
