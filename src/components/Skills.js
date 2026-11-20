import React from 'react';
import '../App.css';

function Skills() {
  const firstColumn = [
    {
      title: 'Front End / Web Frameworks / Libraries',
      items: [
        'ReactJS v18/19', 'Next.js', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
        'SCSS', 'Sass', 'LESS', 'Bootstrap', 'Tailwind', 'shadcn/ui', 'jQuery', 'JSON', 'Webpack MFE (Module Federation)', 'Vite', 'Angular 12/14/16/18', 'Angular Material',
        'Material UI', 'Zustand', 'Redux', 'NgRx', 'RxJS', 'TanStack Query', 'Zod', 'D3.js',
        'Ag-Grid', 'Adobe AEM', 'Design Systems', 'Component-Driven Design'
      ]
    }
  ];

  const secondColumn = [
    {
      title: 'Backend',
      items: [
        'Java 8/17/21', 'Python', 'Spring Boot', 'Spring Cloud Config', 'Node.js', 'REST APIs',
        'GraphQL', 'SOAP', 'Apache Kafka', 'RabbitMQ', 'Microservices'
      ]
    },
    {
      title: 'Databases',
      items: [
        'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Amazon DynamoDB', 'Snowflake', 'Databricks'
      ]
    },
    {
      title: 'Cloud / CI/CD',
      items: [
        'AWS', 'AWS ECS', 'AWS EKS', 'AWS CodeBuild', 'AWS CodePipeline', 'AWS Amplify', 'IAM',
        'Azure', 'Cloud Foundry', 'Jenkins', 'Harness', 'Terraform', 'Docker', 'Kubernetes'
      ]
    },
    {
      title: 'API / Testing',
      items: [
        'Bruno', 'Swagger', 'Postman', 'Jest', 'React Testing Library', 'Cypress',
        'Playwright', 'JUnit', 'Cucumber', 'Jasmine', 'Karma', 'TDD'
      ]
    }
  ];

  const thirdColumn = [
    {
      title: 'AI-Assisted Development',
      items: [
        'GitHub Copilot', 'Claude Code', 'Cline', 'Windsurf', 'DevGPT', 'MCP',
        'Prompt Engineering', 'Agentic / LLM Workflows', 'AWS Generative AI'
      ]
    },
    {
      title: 'IDE & Version Control',
      items: [
        'VS Code', 'IntelliJ', 'Git', 'GitHub', 'Bitbucket', 'AWS CodeCommit'
      ]
    },
    {
      title: 'Wireframe / UX Tools',
      items: [
        'Figma', 'Figma AI', 'Lucidchart', 'Sketch', 'Balsamiq'
      ]
    },
    {
      title: 'Monitoring & Data',
      items: [
        'Kibana', 'Grafana', 'Splunk', 'Elasticsearch', 'CloudWatch'
      ]
    },
    {
      title: 'Accessibility',
      items: [
        'WCAG', 'Section 508', 'ADA compliance', 'Axe DevTools', 'NVDA', 'JAWS', 'VoiceOver'
      ]
    },
    {
      title: 'SDLC / Product',
      items: [
        'Agile', 'JIRA', 'Confluence', 'SEO Principles', 'Technical Product Management'
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
