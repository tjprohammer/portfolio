import React, { useEffect, useRef, useState } from 'react';

type Skill = {
    name: string;
    slug: string;
    color: string;
};

const skills: Skill[] = [
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
    { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
    { name: 'Golang', slug: 'go', color: '#00ADD8' },
    { name: 'Python', slug: 'python', color: '#3776AB' },
    { name: 'AWS', slug: 'amazonaws', color: '#FF9900' },
    { name: 'Terraform', slug: 'terraform', color: '#844FBA' },
    { name: 'Vercel', slug: 'vercel', color: '#000000' },
    { name: 'GitHub Actions', slug: 'githubactions', color: '#2088FF' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
    { name: 'DynamoDB', slug: 'amazondynamodb', color: '#4053D6' },
    { name: 'Firebase', slug: 'firebase', color: '#DD2C00' },
    { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
    { name: 'Stripe', slug: 'stripe', color: '#635BFF' },
    { name: 'Docker', slug: 'docker', color: '#2496ED' },
    { name: 'Mapbox', slug: 'mapbox', color: '#4264FB' },
    { name: 'Playwright', slug: 'playwright', color: '#2EAD33' }
];

function iconUrl(slug: string) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
}

function SkillIcons() {
    const ref = useRef<HTMLUListElement | null>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setActive(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <ul className="skill-icons reveal" ref={ref}>
            {skills.map((skill) => (
                <li className="skill-icon" key={skill.name}>
                    <span
                        className="skill-icon__logo"
                        style={
                            active
                                ? {
                                      backgroundColor: skill.color,
                                      WebkitMaskImage: `url(${iconUrl(skill.slug)})`,
                                      maskImage: `url(${iconUrl(skill.slug)})`
                                  }
                                : { backgroundColor: 'transparent' }
                        }
                        aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    );
}

export default SkillIcons;
