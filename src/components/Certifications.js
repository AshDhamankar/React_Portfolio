import React from 'react';
import '../App.css';
import AwsCP from '../images/certifs/aws_cp.png'
import AwsAICP from '../images/certifs/AwsAICP.jpg'

function Certifications() {

    /* add certifications here */

    const certifications = [
        {
            certImgSrc: AwsAICP,
            certImgAlt: "AWS Certified AI Practitioner",
            certImgTitle: "AWS Certified AI Practitioner"
        },
        {
            certImgSrc: AwsCP,
            certImgAlt: "AWS Certified Cloud Practitioner",
            certImgTitle: "AWS Certified Cloud Practitioner"
        },
    ]

    return (
        <section id="certifications" className="container">
            <h2>Certifications</h2>
            <div id="image-certifs">
                {certifications.map((certification, id) => (
                <div className='certifs' key={id}>
                    <a href={certification.link} target="_blank" rel="noreferrer" title={certification.certImgTitle}>
                        <img height="150px" width="150px" src={certification.certImgSrc} alt={certification.certImgAlt} />
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;