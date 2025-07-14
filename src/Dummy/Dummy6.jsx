import React, { useState } from 'react';
import Template6 from '../Template/Template6';

const Dummy6 = () => {
  const [formData, setFormData] = useState({
    name: 'Emma Thomas',
    profession: 'Content Writer',
    photo: null,
    bio: 'Creative and strategic content writer with 5+ years of experience writing compelling copy for tech, lifestyle, and health brands.',
    hobbies: 'Reading, Hiking, Blogging',
    personality: 'Curious, Detail-Oriented, Empathetic',
    slogan: 'Crafting Words That Convert and Connect.',
    phone: '+1 555-123-4567',
    email: 'emma.contentwriter@example.com',
    location: 'Brooklyn, NY',
    skills: [
      { name: 'SEO Writing', level: 90 },
      { name: 'Copywriting', level: 85 },
      { name: 'Content Strategy', level: 80 },
    ],
    education: [
      { degree: 'B.A. in English Literature', institution: 'University of California', year: '2019' },
    ],
    projects: [
      { name: 'Wellness Weekly Newsletter', img: 'https://via.placeholder.com/150', url: 'https://example.com/wellness' },
      { name: 'GreenTech Blog Revamp', img: 'https://via.placeholder.com/150', url: 'https://example.com/greentech' },
    ],
    workExperience: [
      'Content Writer at BrightHealth Blog (2021–Present)',
      'Freelance Copywriter for startups (2019–2021)',
    ],
  });

  const [skillInput, setSkillInput] = useState({ name: '', level: 50 });
  const [eduInput, setEduInput] = useState({ degree: '', institution: '', year: '' });
  const [projectInput, setProjectInput] = useState({ name: '', img: '', url: '' });
  const [workInput, setWorkInput] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const addSkill = () => {
    if (skillInput.name.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput],
      }));
      setSkillInput({ name: '', level: 50 });
    }
  };

  const addEducation = () => {
    if (eduInput.degree && eduInput.institution && eduInput.year) {
      setFormData((prev) => ({
        ...prev,
        education: [...prev.education, eduInput],
      }));
      setEduInput({ degree: '', institution: '', year: '' });
    }
  };

  const addProject = () => {
    if (projectInput.name && projectInput.img && projectInput.url) {
      setFormData((prev) => ({
        ...prev,
        projects: [...prev.projects, projectInput],
      }));
      setProjectInput({ name: '', img: '', url: '' });
    }
  };

  const addWork = () => {
    if (workInput.trim() !== '') {
      setFormData((prev) => ({
        ...prev,
        workExperience: [...prev.workExperience, workInput],
      }));
      setWorkInput('');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Inputs */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Profession"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="input mb-3 w-full"
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Short Bio"
            className="input mb-3 w-full p-2 border rounded resize-none"
          />
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Hobbies"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            placeholder="Personality Traits"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="slogan"
            value={formData.slogan}
            onChange={handleChange}
            placeholder="Your Slogan"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input mb-3 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="input mb-3 w-full p-2 border rounded"
          />

          {/* Skills */}
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Add Skills</h2>
            <input
              type="text"
              value={skillInput.name}
              placeholder="Skill name"
              onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={skillInput.level}
              onChange={(e) => setSkillInput({ ...skillInput, level: Number(e.target.value) })}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mb-2">{skillInput.level}%</div>
            <button onClick={addSkill} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Add Skill
            </button>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Add Education</h2>
            <input
              type="text"
              placeholder="Degree"
              value={eduInput.degree}
              onChange={(e) => setEduInput({ ...eduInput, degree: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <input
              type="text"
              placeholder="Institution"
              value={eduInput.institution}
              onChange={(e) => setEduInput({ ...eduInput, institution: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <input
              type="text"
              placeholder="Year"
              value={eduInput.year}
              onChange={(e) => setEduInput({ ...eduInput, year: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <button onClick={addEducation} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Add Education
            </button>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Add Projects</h2>
            <input
              type="text"
              placeholder="Project Name"
              value={projectInput.name}
              onChange={(e) => setProjectInput({ ...projectInput, name: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={projectInput.img}
              onChange={(e) => setProjectInput({ ...projectInput, img: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <input
              type="text"
              placeholder="Project URL"
              value={projectInput.url}
              onChange={(e) => setProjectInput({ ...projectInput, url: e.target.value })}
              className="p-2 border rounded w-full mb-1"
            />
            <button onClick={addProject} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Add Project
            </button>
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Add Work Experience</h2>
            <input
              type="text"
              placeholder="Work Experience"
              value={workInput}
              onChange={(e) => setWorkInput(e.target.value)}
              className="p-2 border rounded w-full mb-1"
            />
            <button onClick={addWork} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Add Work Experience
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Live Preview</h2>
          <Template6 data={formData} />
        </div>
      </div>
    </div>
  );
};

export default Dummy6;
