import React from 'react';
import '../App.css';

function Skills() {
    const firstColumn = [
        {
            title: 'Front End / Web',
            items: [
                'ReactJS 18/19', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
                'SCSS', 'Bootstrap', 'Tailwind', 'jQuery', 'JSON'
            ]
        },
        {
            title: 'Frameworks / Libraries',
            items: [
                'Webpack MFE (Module Federation)', 'Vite', 'Angular 11/12/14/16', 'Angular Material',
                'Material UI', 'Zustand', 'Redux', 'TanStack Query', 'D3.js', 'RxJS', 'NgRx',
                'Ag-Grid', 'Adobe AEM '
            ]
        }
    ];

    const secondColumn = [
        {
            title: 'Backend',
            items: [
                'Java', 'Python', 'Kotlin', 'Spring Boot', 'Node.js', 'REST APIs', 'GraphQL',
                'MySQL', 'PostgreSQL'
            ]
        },
        {
            title: 'Cloud / CI/CD',
            items: [
                'AWS', 'AWS ECS', 'AWS CodeBuild', 'AWS CodePipeline', 'Jenkins', 'Harness',
                'Terraform', 'Docker'
            ]
        },
        {
            title: 'API / Testing',
            items: [
                'Bruno', 'Swagger', 'Postman', 'Jest', 'React Testing Library', 'Cypress',
                'Playwright', 'JUnit'
            ]
        }
    ];

    const thirdColumn = [
        {
            title: 'AI-Assisted Development',
            items: [
                'GitHub Copilot', 'Cline', 'Windsurf', 'DevGpt', 'ClaudeCode'
            ]
        },
        {
            title: 'IDE & Version Control',
            items: [
                'VS Code', 'IntelliJ', 'Git', 'GitHub', 'Bitbucket'
            ]
        },
        {
            title: 'Wireframe / UX Tools',
            items: [
                'Figma', 'Sketch', 'Balsamiq'
            ]
        },
        {
            title: 'Monitoring & Data',
            items: [
                'Kibana', 'Grafana', 'Splunk', 'Elasticsearch'
            ]
        },
        {
            title: 'Accessibility',
            items: [
                'WCAG', 'Section 508', 'ADA compliance', 'Axe DevTool', 'NVDA', 'JAWS'
            ]
        },
    ];

    return (
        <section id="skills" className="container">
            <div className="container">
                <h2>Skills</h2>
                <div className="technologies">
                    <ul className="technologies-row">
                        {firstColumn.map((group, groupIndex) => (
                            <li key={`first-${groupIndex}`}>
                                <h3>{group.title}</h3>
                                <ul className="technologies-sublist">
                                    {group.items.map((techno, i) => (
                                        <li key={`${group.title}-${i}`}>{techno}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <ul className="technologies-row">
                        {secondColumn.map((group, groupIndex) => (
                            <li key={`second-${groupIndex}`}>
                                <h3>{group.title}</h3>
                                <ul className="technologies-sublist">
                                    {group.items.map((techno, i) => (
                                        <li key={`${group.title}-${i}`}>{techno}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <ul className="technologies-row">
                        {thirdColumn.map((group, groupIndex) => (
                            <li key={`third-${groupIndex}`}>
                                <h3>{group.title}</h3>
                                <ul className="technologies-sublist">
                                    {group.items.map((techno, i) => (
                                        <li key={`${group.title}-${i}`}>{techno}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;