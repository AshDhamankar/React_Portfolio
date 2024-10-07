import React, { useState } from "react";
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardHeader, CardContent } from '../components/ui/card';
const PortfolioGenerator = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    titles: [""],
    description: "",
    cvLink: "",
    socialLinks: {
      twitter: "",
      github: "",
      linkedin: "",
    },
  });

  const [skills, setSkills] = useState([""]);
  const [experience, setExperience] = useState([
    { company: "", title: "", period: "", link: "" },
  ]);
  const [education, setEducation] = useState([
    { institution: "", degree: "", period: "", link: "" },
  ]);
  const [projects, setProjects] = useState([
    {
      title: "",
      stack: "",
      image: "",
      category: [""],
      description: "",
      link: "",
    },
  ]);
  const [certifications, setCertifications] = useState([
    { name: "", link: "" },
  ]);
  const [contactInfo, setContactInfo] = useState({
    description: "",
    phone: "",
    email: "",
    location: "",
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (setState, index, value) => {
    setState((prev) => {
      const newArray = [...prev];
      newArray[index] = value;
      return newArray;
    });
  };

  const handleObjectArrayChange = (setState, index, field, value) => {
    setState((prev) => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], [field]: value };
      return newArray;
    });
  };

  const addArrayItem = (setState, initialValue) => {
    setState((prev) => [...prev, initialValue]);
  };

  const removeArrayItem = (setState, index) => {
    setState((prev) => prev.filter((_, i) => i !== index));
  };

  const generateJSON = () => {
    const portfolioData = {
      personalInfo,
      menuItems: [
        { to: "hero", label: "Home" },
        { to: "hero", label: "About me" },
        { to: "experience", label: "Experience" },
        { to: "education", label: "Education" },
        { to: "skills", label: "Skills" },
        { to: "projects", label: "Projects" },
        { to: "certifications", label: "Certifications" },
        { to: "blog", label: "Blog" },
        { to: "contact-me", label: "Contact" },
      ],
      skills: skills.map((name) => ({ name })),
      experience,
      education,
      projectsSection: { title: "Projects" },
      projectTags: ["all", ...new Set(projects.flatMap((p) => p.category))],
      projects,
      certifications,
      contactInfo,
    };

    const jsonString = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "portfolio-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Portfolio Information Generator
      </h1>

      <Card className="mb-4">
        <CardHeader>Personal Information</CardHeader>
        <CardContent>
          <Input
            placeholder="Name"
            value={personalInfo.name}
            onChange={(e) => handlePersonalInfoChange(e)}
            name="name"
            className="mb-2"
          />
          <Textarea
            placeholder="Description"
            value={personalInfo.description}
            onChange={(e) => handlePersonalInfoChange(e)}
            name="description"
            className="mb-2"
          />
          <Input
            placeholder="CV Link"
            value={personalInfo.cvLink}
            onChange={(e) => handlePersonalInfoChange(e)}
            name="cvLink"
            className="mb-2"
          />
          <Input
            placeholder="Twitter"
            value={personalInfo.socialLinks.twitter}
            onChange={(e) => handleSocialLinkChange(e)}
            name="twitter"
            className="mb-2"
          />
          <Input
            placeholder="GitHub"
            value={personalInfo.socialLinks.github}
            onChange={(e) => handleSocialLinkChange(e)}
            name="github"
            className="mb-2"
          />
          <Input
            placeholder="LinkedIn"
            value={personalInfo.socialLinks.linkedin}
            onChange={(e) => handleSocialLinkChange(e)}
            name="linkedin"
            className="mb-2"
          />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Skills</CardHeader>
        <CardContent>
          {skills.map((skill, index) => (
            <div key={index} className="flex mb-2">
              <Input
                placeholder="Skill"
                value={skill}
                onChange={(e) =>
                  handleArrayChange(setSkills, index, e.target.value)
                }
                className="mr-2"
              />
              <Button onClick={() => removeArrayItem(setSkills, index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={() => addArrayItem(setSkills, "")}>Add Skill</Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Experience</CardHeader>
        <CardContent>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4 p-2 border rounded">
              <Input
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setExperience,
                    index,
                    "company",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Title"
                value={exp.title}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setExperience,
                    index,
                    "title",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Period"
                value={exp.period}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setExperience,
                    index,
                    "period",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Link"
                value={exp.link}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setExperience,
                    index,
                    "link",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Button onClick={() => removeArrayItem(setExperience, index)}>
                Remove Experience
              </Button>
            </div>
          ))}
          <Button
            onClick={() =>
              addArrayItem(setExperience, {
                company: "",
                title: "",
                period: "",
                link: "",
              })
            }
          >
            Add Experience
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Education</CardHeader>
        <CardContent>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 p-2 border rounded">
              <Input
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setEducation,
                    index,
                    "institution",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setEducation,
                    index,
                    "degree",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Period"
                value={edu.period}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setEducation,
                    index,
                    "period",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Link"
                value={edu.link}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setEducation,
                    index,
                    "link",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Button onClick={() => removeArrayItem(setEducation, index)}>
                Remove Education
              </Button>
            </div>
          ))}
          <Button
            onClick={() =>
              addArrayItem(setEducation, {
                institution: "",
                degree: "",
                period: "",
                link: "",
              })
            }
          >
            Add Education
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Projects</CardHeader>
        <CardContent>
          {projects.map((project, index) => (
            <div key={index} className="mb-4 p-2 border rounded">
              <Input
                placeholder="Title"
                value={project.title}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "title",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Stack"
                value={project.stack}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "stack",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Image"
                value={project.image}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "image",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Category (comma-separated)"
                value={project.category.join(", ")}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "category",
                    e.target.value.split(", ")
                  )
                }
                className="mb-2"
              />
              <Textarea
                placeholder="Description"
                value={project.description}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "description",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Input
                placeholder="Link"
                value={project.link}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setProjects,
                    index,
                    "link",
                    e.target.value
                  )
                }
                className="mb-2"
              />
              <Button onClick={() => removeArrayItem(setProjects, index)}>
                Remove Project
              </Button>
            </div>
          ))}
          <Button
            onClick={() =>
              addArrayItem(setProjects, {
                title: "",
                stack: "",
                image: "",
                category: [""],
                description: "",
                link: "",
              })
            }
          >
            Add Project
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Certifications</CardHeader>
        <CardContent>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2 flex">
              <Input
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setCertifications,
                    index,
                    "name",
                    e.target.value
                  )
                }
                className="mr-2"
              />
              <Input
                placeholder="Certification Link"
                value={cert.link}
                onChange={(e) =>
                  handleObjectArrayChange(
                    setCertifications,
                    index,
                    "link",
                    e.target.value
                  )
                }
                className="mr-2"
              />
              <Button onClick={() => removeArrayItem(setCertifications, index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button
            onClick={() =>
              addArrayItem(setCertifications, { name: "", link: "" })
            }
          >
            Add Certification
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>Contact Information</CardHeader>
        <CardContent>
          <Textarea
            placeholder="Description"
            value={contactInfo.description}
            onChange={(e) =>
              setContactInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="mb-2"
          />
          <Input
            placeholder="Phone"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="mb-2"
          />
          <Input
            placeholder="Email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mb-2"
          />
          <Input
            placeholder="Location"
            value={contactInfo.location}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, location: e.target.value }))
            }
            className="mb-2"
          />
        </CardContent>
      </Card>

      <Button onClick={generateJSON}>Generate JSON</Button>
    </div>
  );
};

export default PortfolioGenerator;
