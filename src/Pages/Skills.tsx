import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const groups = [
    {
        title: 'Languages',
        items: 'TypeScript, JavaScript, Node.js, Golang, Python, Bash'
    },
    {
        title: 'Cloud & IaC',
        items: 'AWS (Lambda, API Gateway, S3, CloudFront, DynamoDB, Cognito, IAM, CloudWatch, Route 53), Vercel, Terraform, GitHub Actions'
    },
    {
        title: 'Backend',
        items: 'REST APIs, serverless, authN/authZ, Stripe Connect webhooks, CI testing, logging & monitoring'
    },
    {
        title: 'Datastores',
        items: 'DynamoDB, Firestore, PostGIS, Postgres/SQL, MongoDB'
    }
];

function Skills() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <section className="section section--alt" id="skills" ref={ref}>
            <div className="container">
                <header className="section__header reveal">
                    <span className="section__eyebrow">Skills</span>
                    <h2 className="section__title">Tools I reach for daily</h2>
                    <p className="section__intro">
                        Strong in API design, SQL/NoSQL modeling, reliability, automation, and
                        documentation.
                    </p>
                </header>
                <div className="skills">
                    {groups.map((group) => (
                        <div className="skill-group reveal" key={group.title}>
                            <h3>{group.title}</h3>
                            <p>{group.items}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
