import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import SkillIcons from '../components/gridSkills/SkillIcons';

const groups = [
    {
        title: 'Languages & frameworks',
        items: 'JavaScript, TypeScript, React.js, Node.js, Golang, Python, Bash'
    },
    {
        title: 'Cloud & infrastructure',
        items: 'AWS (Lambda, API Gateway, S3, CloudFront, DynamoDB, Cognito, ECS, RDS, ElastiCache, IAM, CloudWatch, Route 53), Terraform, GitHub Actions, Vercel, Docker'
    },
    {
        title: 'Data & backend',
        items: 'PostgreSQL / PostGIS, Redis, DynamoDB, MongoDB, Firestore, REST APIs, OAuth2, serverless authN/authZ, Stripe / Stripe Connect'
    },
    {
        title: 'Tools & collaboration',
        items: 'Git, GitLab, GitHub Actions, Jira, Slack, Google Cloud, VMware Horizon, Agile / CI/CD workflows'
    }
];

function Skills() {
    const ref = useRevealOnScroll<HTMLElement>();

    return (
        <section className="section section--alt" id="skills" ref={ref}>
            <div className="container">
                <header className="section__header reveal">
                    <span className="section__eyebrow">Skills</span>
                    <h2 className="section__title">Stacks and tools</h2>
                    <p className="section__intro">
                        Daily drivers for full-stack product work, cloud platforms, and the
                        operational glue that keeps them running.
                    </p>
                </header>
                <SkillIcons />
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
