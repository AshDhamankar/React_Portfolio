import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { Button } from '../components/ui/button';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingBottom: 5,
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#f0f0f0',
    padding: '3 6',
    marginRight: 5,
    marginBottom: 5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  jobDetails: {
    fontSize: 10,
    color: '#666',
  },
});

const PDFResume = ({ data }) => {
  const { personalInfo, skills, experience, education, certifications, contactInfo } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.titles[0]}</Text>
          <View style={styles.contact}>
            <Text>{contactInfo.email}</Text>
            <Text>{contactInfo.phone}</Text>
            <Text>{contactInfo.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.paragraph}>{personalInfo.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>{skill.name}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobDetails}>{job.company} | {job.period}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.jobDetails}>{edu.institution} | {edu.period}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((cert, index) => (
            <Text key={index} style={styles.paragraph}>{cert.name}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFResumeGenerator = ({ data }) => {
  const generatePDF = async () => {
    const blob = await pdf(<PDFResume data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={generatePDF} className="flex-1">
      Generate PDF Resume
    </Button>
  );
};

export default PDFResumeGenerator;