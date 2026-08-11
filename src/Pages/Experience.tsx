import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const roles = [
    {
        company: 'Vagabond Studio',
        title: 'Cloud Engineer',
        dates: 'March 2023 — Current',
        points: [
            'Built Wild Network’s host events marketplace end-to-end: discovery and detail pages, host onboarding and listing wizard, slot-based booking, and Stripe Connect checkout with webhook-driven booking lifecycle and host payouts.',
            'Architected the platform on Vercel, Firebase, and AWS PostGIS, including multi-env Terraform (VPC, private RDS/PostGIS, Lambda) for geospatial APIs and ~30k seeded map features.',
            'Implemented GitHub Actions CI (path-scoped checks, vulnerability scanning, OIDC migrations) and a staging → production promotion flow via Vercel to reduce deploy risk and config drift.'
        ]
    },
    {
        company: 'The Alpine Studio',
        title: 'Full Stack / Cloud Engineer',
        dates: 'Feb 2020 — January 2023',
        points: [
            'Built and operated a serverless e-commerce platform on AWS: React/TypeScript SPA on S3 + CloudFront, Go Lambdas behind API Gateway, and DynamoDB for products, orders, and auction state.',
            'Implemented Stripe Checkout with webhook signature verification, persisted order lifecycle in DynamoDB, and stored secrets in Secrets Manager.',
            'Delivered a Cognito-secured admin portal with MFA and a Lambda authorizer for product CRUD, image upload/resize, sales/fulfillment, and auction closeout.',
            'Shipped live auctions end-to-end: verified bidding, card-on-file, anti-snipe extensions, timed settlement, unpaid grace/forfeit, and post-win shipping collection.'
        ]
    },
    {
        company: 'Sussman Shank LLP',
        title: 'IT Support Specialist',
        dates: 'Oct 2020 — Jul 2023',
        points: [
            'Imaged, deployed, and patched Windows endpoints to keep firm devices compliant and up to date.'
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
                        Five-plus years building full-stack and cloud platforms — from marketplace
                        bookings to serverless commerce and auction settlement.
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
