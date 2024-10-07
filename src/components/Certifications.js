import React from 'react';
import '../App.css';
import portfolioData from '../portfolioData.json';

// Import all certification images
import AwsCP from '../images/certifs/aws_cp.png';
import gitlab from '../images/certifs/gitlab.png';
import k8sgcp from '../images/certifs/k8s_gcp.png';
import k8s from '../images/certifs/k8s.png';
import AWSSAA from '../images/certifs/saa.png';

// Create an object to map certification names to their respective images
const certificationImages = {
  "AWS Certified Cloud Practitioner": AwsCP,
  "GitLab Certified Associate": gitlab,
  "Kubernetes on Google Cloud": k8sgcp,
  "Certified Kubernetes Administrator": k8s,
  "AWS Certified Solutions Architect": AWSSAA
};

function Certifications() {
    const { certifications } = portfolioData;

    return (
        <section id="certifications" className="container">
            <h2>Certifications</h2>
            <div id="image-certifs">
                {certifications.map((certification, id) => (
                <div className='certifs' key={id}>
                    <a href={certification.link} target="_blank" rel="noopener noreferrer" title={certification.name}>
                        <img height="150px" width="150px" src={certificationImages[certification.name]} alt={certification.name} />
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;