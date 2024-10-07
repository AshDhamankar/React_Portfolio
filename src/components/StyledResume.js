import React from 'react';
import portfolioData from '../portfolioData.json';

const StyledResume = () => {
  const { personalInfo, skills, experience, education, certifications, languages, interests } = portfolioData;

  const styles = {
    resume: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      marginRight: '20px',
    },
    name: {
      fontSize: '2.5em',
      margin: '0',
    },
    title: {
      color: '#ff6b6b',
      margin: '5px 0',
    },
    section: {
      marginBottom: '20px',
    },
    sectionTitle: {
      borderBottom: '2px solid #4a69bd',
      paddingBottom: '5px',
      marginBottom: '10px',
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      listStyle: 'none',
      padding: 0,
    },
    skill: {
      backgroundColor: '#e3e3e3',
      padding: '5px 10px',
      borderRadius: '5px',
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '5px',
    },
  };

  return (
    <div style={styles.resume}>
      <div style={styles.header}>
        <img src={personalInfo.profileImage} alt={personalInfo.name} style={styles.profileImage} />
        <div>
          <h1 style={styles.name}>{personalInfo.name}</h1>
          <h2 style={styles.title}>{personalInfo.title}</h2>
          <p>{personalInfo.description}</p>
        </div>
      </div>

      <div style={styles.contactInfo}>
        <span style={styles.contactItem}>
          <i className="fa fa-envelope" style={styles.icon}></i>
          {personalInfo.email}
        </span>
        <span style={styles.contactItem}>
          <i className="fa fa-phone" style={styles.icon}></i>
          {personalInfo.phone}
        </span>
        <span style={styles.contactItem}>
          <i className="fa fa-map-marker" style={styles.icon}></i>
          {personalInfo.location}
        </span>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>SKILLS</h3>
        <ul style={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skill}>{skill.name}</li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>WORK EXPERIENCE</h3>
        {experience.map((job, index) => (
          <div key={index}>
            <h4>{job.title}</h4>
            <h5>{job.company} | {job.period}</h5>
            <ul>
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>EDUCATION</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree}</h4>
            <h5>{edu.institution} | {edu.period}</h5>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>CERTIFICATIONS</h3>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert.name}</li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>LANGUAGES</h3>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang.name} - {lang.proficiency}</li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>INTERESTS</h3>
        <ul style={styles.skillsList}>
          {interests.map((interest, index) => (
            <li key={index} style={styles.skill}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StyledResume;