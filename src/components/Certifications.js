import React from 'react';
import '../App.css';
import AwsCP from '../images/certifs/aws_cp.png'
import AWSSAA from '../images/certifs/saa.png'

function Certifications() {

    /* add certifications here */

    const certifications = [
        {
            link: "https://www.credly.com/badges/24a9cc00-1aa9-46f9-ad1d-6a3b1168bcbb/public_url",
            certImgSrc: AWSSAA,
            certImgAlt: "AWS Certified Solutions Architect",
            certImgTitle: "AWS Certified Solutions Architect"
        },
        {
            link: "https://www.credly.com/badges/4d602eaf-0e6b-48b9-a56d-f34b64fc13f9/public_url",
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