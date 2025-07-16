import React, { useState } from 'react';
import Template10 from '../Template/Template10';

const Dummy10 = () => {
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    bio: '',
    phone: '',
    email: '',
    location: '',
    education: [],
    skills: [],
    projects: [],
  });

  const [edu, setEdu] = useState({ degree: '', institution: '', year: '' });
  const [skill, setSkill] = useState('');
  const [project, setProject] = useState({ title: '', description: '', link: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addEducation = () => {
    if (edu.degree && edu.institution && edu.year) {
      setForm({ ...form, education: [...form.education, edu] });
      setEdu({ degree: '', institution: '', year: '' });
    }
  };

  const addSkill = () => {
    if (skill) {
      setForm({ ...form, skills: [...form.skills, skill] });
      setSkill('');
    }
  };

  const addProject = () => {
    if (project.title && project.description) {
      setForm({ ...form, projects: [...form.projects, project] });
      setProject({ title: '', description: '', link: '' });
    }
  };

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '30px' }}>
      <form style={{ width: '40%' }}>
        <h2>Portfolio Information</h2>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} /><br />
        <input name="profession" placeholder="Profession" onChange={handleChange} /><br />
        <textarea name="bio" placeholder="Bio" onChange={handleChange} /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="location" placeholder="Location" onChange={handleChange} /><br />

        <h3>Add Education</h3>
        <input value={edu.degree} placeholder="Degree" onChange={(e) => setEdu({ ...edu, degree: e.target.value })} /><br />
        <input value={edu.institution} placeholder="Institution" onChange={(e) => setEdu({ ...edu, institution: e.target.value })} /><br />
        <input value={edu.year} placeholder="Year" onChange={(e) => setEdu({ ...edu, year: e.target.value })} /><br />
        <button type="button" onClick={addEducation}>Add Education</button>

        <h3>Add Skill</h3>
        <input value={skill} placeholder="Skill" onChange={(e) => setSkill(e.target.value)} /><br />
        <button type="button" onClick={addSkill}>Add Skill</button>

        <h3>Add Project</h3>
        <input value={project.title} placeholder="Title" onChange={(e) => setProject({ ...project, title: e.target.value })} /><br />
        <input value={project.description} placeholder="Description" onChange={(e) => setProject({ ...project, description: e.target.value })} /><br />
        <input value={project.link} placeholder="Link (optional)" onChange={(e) => setProject({ ...project, link: e.target.value })} /><br />
        <button type="button" onClick={addProject}>Add Project</button>
      </form>

      <div style={{ width: '60%' }}>
        <Template10 data={form} />
      </div>
    </div>
  );
};
export default Dummy10;
