import React, { useState } from 'react';
import Template15 from '../Template/Template15';

const Dummy15 = () => {
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    age: '',
    gender: '',
    profile: '',
    profilePic: null,
    email: '',
    phone: '',
    location: '',
    skills: [''],
    experiences: [{ topic: '', description: '' }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleProfilePic = (e) => {
    setForm({ ...form, profilePic: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...form.skills];
    updatedSkills[index] = value;
    setForm({ ...form, skills: updatedSkills });
  };

  const addSkill = () => setForm({ ...form, skills: [...form.skills, ''] });
  const removeSkill = (index) => {
    const updatedSkills = form.skills.filter((_, i) => i !== index);
    setForm({ ...form, skills: updatedSkills });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...form.experiences];
    updated[index][field] = value;
    setForm({ ...form, experiences: updated });
  };

  const addExperience = () =>
    setForm({ ...form, experiences: [...form.experiences, { topic: '', description: '' }] });

  const removeExperience = (index) => {
    const updated = form.experiences.filter((_, i) => i !== index);
    setForm({ ...form, experiences: updated });
  };

  return (
    <div>
      <form style={{ maxWidth: '600px', marginBottom: '40px' }}>
        <h2>Portfolio Form</h2>

        <input type="text" name="fullName" placeholder="Full Name" onChange={handleInputChange} /><br />
        <input type="text" name="profession" placeholder="Profession" onChange={handleInputChange} /><br />
        <input type="number" name="age" placeholder="Age" onChange={handleInputChange} /><br />
        <select name="gender" onChange={handleInputChange}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br />
        <textarea name="profile" placeholder="Profile/About Me" onChange={handleInputChange}></textarea><br />
        <input type="file" onChange={handleProfilePic} /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /><br />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} /><br />
        <input type="text" name="location" placeholder="Location" onChange={handleInputChange} /><br />

        <h3>Skills</h3>
        {form.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder="Skill"
            />
            <button type="button" onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>

        <h3>Experience</h3>
        {form.experiences.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Topic"
              value={exp.topic}
              onChange={(e) => handleExperienceChange(index, 'topic', e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
            />
            <button type="button" onClick={() => removeExperience(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addExperience}>Add Experience</button>
      </form>

      <Template15 data={form} />
    </div>
  );
};

export default Dummy15;
