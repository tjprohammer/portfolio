import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const roles = [
    {
        company: 'Vagabond Studio',
        title: 'Full Stack Engineer',
        dates: 'Jan 2023 — Current',
        summary:
            'Building Wild Network — outdoor discovery, geospatial data, and a host events marketplace — from APIs through checkout and cloud infra.',
        points: [
            'Built Wild Network’s host events marketplace end-to-end: discovery and detail pages, host onboarding and listing wizard, slot-based booking, and Stripe Connect checkout with webhook-driven booking lifecycle and host payouts.',
            'Developed a Go-based backend that processes and serves geospatial data for wild food observations, with OAuth2 authentication and paid subscription verification.',
            'Engineered a scalable stack with PostgreSQL/PostGIS for spatial data, Redis for caching, and containerized services — plus AWS (ECS, RDS, ElastiCache) provisioned with Terraform and automated CI/CD.',
            'Architected multi-env infrastructure on Vercel, Firebase, and AWS PostGIS (~30k seeded map features), with GitHub Actions CI (path-scoped checks, vulnerability scanning, OIDC migrations) and a staging → production promotion flow.'
        ]
    },
    {
        company: 'The Alpine Studio',
        title: 'Full Stack Engineer',
        dates: 'Feb 2019 — Oct 2023',
        summary:
            'Owned a serverless e-commerce and live-auction platform for an art business — storefront, admin, payments, and AWS infra as code.',
        points: [
            'Architected and ran a serverless e-commerce platform on AWS (Lambda, API Gateway, S3, CloudFront, DynamoDB) with a React/TypeScript SPA and Go Lambdas, all managed with Terraform.',
            'Implemented Stripe Checkout with webhook signature verification, persisted order lifecycle in DynamoDB, and stored secrets in Secrets Manager.',
            'Delivered a Cognito-secured admin portal with MFA and a Lambda authorizer for product CRUD, image upload/resize, sales/fulfillment, and auction closeout.',
            'Shipped live auctions end-to-end: verified bidding, card-on-file, anti-snipe extensions, timed settlement, unpaid grace/forfeit, and post-win shipping collection.',
            'Built GitHub Actions CI/CD for infrastructure, Lambda updates, and frontend deploys with CloudFront invalidation — plus separate test/dev environments (databases and APIs) while sharing CloudFront where it made sense.'
        ]
    },
    {
        company: 'Sussman Shank LLP',
        title: 'Information Technology Support Specialist',
        dates: 'Oct 2020 — Jul 2023',
        summary:
            'Kept a law firm’s people and systems productive — endpoints, access, incidents, and coordination with systems administration.',
        points: [
            'Supported attorneys and staff day-to-day: troubleshooting workstations, printers, email, and office apps so legal work stayed unblocked.',
            'Imaged and provisioned Windows PCs from USB media with firm presets and required software; repaired broken machines and kept endpoints patched and compliant.',
            'Managed mailbox and calendar delegate access, and supported remote desktops via VMware Horizon for hybrid and remote staff.',
            'Maintained the knowledge base — common issues, resolutions, and troubleshooting procedures — and documented security incidents and system malfunctions from end users.',
            'Worked closely with the System Administrator to coordinate maintenance: software updates, patches, and hardware upgrades.'
        ]
    }
];

function Experience() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <section className="section section--alt" id="experience" ref={ref}>
            <div className="container">
                <header className="section__header reveal">
                    <span className="section__eyebrow">Experience</span>
                    <h2 className="section__title">Shipped systems, not just demos</h2>
                    <p className="section__intro">
                        Full-stack platforms, cloud infrastructure, and hands-on IT support —
                        building new products and keeping production environments healthy.
                    </p>
                </header>
                <div className="experience">
                    {roles.map((role) => (
                        <article className="job reveal" key={role.company}>
                            <div className="job__meta">
                                <div>
                                    <h3 className="job__role">{role.title}</h3>
                                    <p className="job__company">{role.company}</p>
                                </div>
                                <p className="job__dates">{role.dates}</p>
                            </div>
                            <p className="job__summary">{role.summary}</p>
                            <ul className="job__points">
                                {role.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
