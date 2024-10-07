import React, { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Label } from '../components/ui/label';
import { PlusCircle, MinusCircle, Upload } from 'lucide-react';
import PDFResumeGenerator from './PDFResumeGenerator';
const PortfolioDataGenerator = () => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          // Update state with the loaded data
          setPersonalInfo(json.personalInfo || {});
          setSkills(json.skills || []);
          setExperience(json.experience || []);
          setEducation(json.education || []);
          setProjects(json.projects || []);
          setCertifications(json.certifications || []);
          setContactInfo(json.contactInfo || {});
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          alert("Error parsing JSON file. Please make sure it's a valid portfolio-data.json file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
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

  const [skills, setSkills] = useState([{ name: '' }]);
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

  const renderSkillInputs = () => (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input
            placeholder="Skill name"
            value={skill.name}
            onChange={(e) => {
              const newSkills = [...skills];
              newSkills[index].name = e.target.value;
              setSkills(newSkills);
            }}
            className="flex-grow"
          />
          <Button 
            onClick={() => setSkills(skills.filter((_, i) => i !== index))}
            variant="outline"
            size="icon"
          >
            <MinusCircle className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button 
        onClick={() => setSkills([...skills, { name: '' }])}
        variant="outline"
        className="w-full"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Skill
      </Button>
    </div>
  );

  const renderInputField = (label, value, onChange, name, placeholder = '') => (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full"
      />
    </div>
  );

  const renderArrayInputs = (items, setItems, itemName, fields) => (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold">{itemName} {index + 1}</h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeArrayItem(setItems, index)}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
          {fields.map(field => (
            <div key={field.name} className="mb-2">
              <Label htmlFor={`${field.name}-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </Label>
              <Input
                id={`${field.name}-${index}`}
                value={item[field.name]}
                onChange={(e) => handleObjectArrayChange(setItems, index, field.name, e.target.value)}
                placeholder={field.placeholder}
                className="w-full"
              />
            </div>
          ))}
        </Card>
      ))}
      <Button
        onClick={() => addArrayItem(setItems, fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}))}
        className="w-full"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add {itemName}
      </Button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Portfolio Data Generator</h1>

      <div className="mb-4">
        <Button onClick={triggerFileInput} className="w-full">
          <Upload className="mr-2 h-4 w-4" /> Upload Existing Data
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".json"
          style={{ display: 'none' }}
        />
      </div>
      
      <Tabs defaultValue="personal" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              {renderInputField('Name', personalInfo.name, handlePersonalInfoChange, 'name', 'Your full name')}
              {renderInputField('Titles (comma-separated)', personalInfo.titles.join(', '), 
                (e) => setPersonalInfo(prev => ({ ...prev, titles: e.target.value.split(',').map(t => t.trim()) })), 
                'titles', 'e.g. Full Stack Developer, UI/UX Designer')}
              <div className="mb-4">
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={personalInfo.description}
                  onChange={handlePersonalInfoChange}
                  placeholder="A brief description about yourself"
                  className="w-full"
                  rows={4}
                />
              </div>
              {renderInputField('CV Link', personalInfo.cvLink, handlePersonalInfoChange, 'cvLink', 'Link to your CV')}
              
              <h3 className="text-lg font-semibold mb-2">Social Links</h3>
              {renderInputField('Twitter', personalInfo.socialLinks.twitter, handleSocialLinkChange, 'twitter', 'Your Twitter profile URL')}
              {renderInputField('GitHub', personalInfo.socialLinks.github, handleSocialLinkChange, 'github', 'Your GitHub profile URL')}
              {renderInputField('LinkedIn', personalInfo.socialLinks.linkedin, handleSocialLinkChange, 'linkedin', 'Your LinkedIn profile URL')}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience & Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
              {renderArrayInputs(experience, setExperience, 'Experience', [
                { name: 'company', label: 'Company', placeholder: 'Company name' },
                { name: 'title', label: 'Title', placeholder: 'Your job title' },
                { name: 'period', label: 'Period', placeholder: 'e.g. Jan 2020 - Present' },
                { name: 'link', label: 'Link', placeholder: 'Company website or related link' }
              ])}
              
              <h3 className="text-lg font-semibold mb-2 mt-6">Education</h3>
              {renderArrayInputs(education, setEducation, 'Education', [
                { name: 'institution', label: 'Institution', placeholder: 'School/University name' },
                { name: 'degree', label: 'Degree', placeholder: 'Degree obtained' },
                { name: 'period', label: 'Period', placeholder: 'e.g. 2016 - 2020' },
                { name: 'link', label: 'Link', placeholder: 'Institution website or related link' }
              ])}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              {renderArrayInputs(projects, setProjects, 'Project', [
                { name: 'title', label: 'Title', placeholder: 'Project title' },
                { name: 'stack', label: 'Stack', placeholder: 'Technologies used' },
                { name: 'image', label: 'Image', placeholder: 'Image URL or filename' },
                { name: 'category', label: 'Category', placeholder: 'Project categories (comma-separated)' },
                { name: 'description', label: 'Description', placeholder: 'Brief project description' },
                { name: 'link', label: 'Link', placeholder: 'Project URL or repository link' }
              ])}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {renderSkillInputs()}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="other">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              {renderArrayInputs(skills, setSkills, 'Skill', [
                { name: 'name', label: 'Skill Name', placeholder: 'e.g. JavaScript, Python, React' }
              ])}
              
              <h3 className="text-lg font-semibold mb-2 mt-6">Certifications</h3>
              {renderArrayInputs(certifications, setCertifications, 'Certification', [
                { name: 'name', label: 'Certification Name', placeholder: 'e.g. AWS Certified Developer' },
                { name: 'link', label: 'Certification Link', placeholder: 'Link to credential or certificate' }
              ])}
              
              <h3 className="text-lg font-semibold mb-2 mt-6">Contact Information</h3>
              <div className="mb-4">
                <Label htmlFor="contactDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Description
                </Label>
                <Textarea
                  id="contactDescription"
                  value={contactInfo.description}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief message for potential contacts"
                  className="w-full"
                  rows={3}
                />
              </div>
              {renderInputField('Phone', contactInfo.phone, (e) => setContactInfo(prev => ({ ...prev, phone: e.target.value })), 'phone', 'Your contact number')}
              {renderInputField('Email', contactInfo.email, (e) => setContactInfo(prev => ({ ...prev, email: e.target.value })), 'email', 'Your email address')}
              {renderInputField('Location', contactInfo.location, (e) => setContactInfo(prev => ({ ...prev, location: e.target.value })), 'location', 'Your location')}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-4 flex space-x-4">
        <Button onClick={generateJSON} className="w-full">Generate JSON</Button>
        <PDFResumeGenerator 
            data={{
              personalInfo,
              skills,
              experience,
              education,
              projects,
              certifications,
              contactInfo
            }}
          />
      </div>

      

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Upload an existing portfolio-data.json file to update it, or start filling out the form from scratch.</li>
          <li>Fill out or update the form with your portfolio information.</li>
          <li>Click the "Generate JSON" button to download your updated portfolio-data.json file.</li>
          <li>Click the "Generate PDF Resume" button to create a PDF version of your resume.</li>
          <li>Replace the existing portfolio-data.json file in your forked repository with your newly generated file.</li>
          <li>Commit and push the changes to your repository.</li>
          <li>Deploy your updated portfolio using Netlify or your preferred hosting service.</li>
        </ol>
      </div>
    </div>
  );
};

export default PortfolioDataGenerator;
