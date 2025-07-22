import React, { useState } from 'react';
import Template13 from '../Template/Template13';

const Dummy13 = () => {
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    profile: '',
    profilePic: null,
    phone: '',
    location: '',
    email: '',
    linkedIn: '',
    skills: [],
    workExperience: [],
    education: [],
    references: [],
  });

  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState({ company: '', role: '', duration: '' });
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '' });
  const [newReference, setNewReference] = useState({ name: '', contact: '' });

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profilePic: file });
    }
  };

  const removeProfilePic = () => {
    setForm({ ...form, profilePic: null });
  };

  const removeField = (section, index) => {
    const updated = [...form[section]];
    updated.splice(index, 1);
    setForm({ ...form, [section]: updated });
  };

  const addField = (section, value) => {
    setForm({ ...form, [section]: [...form[section], value] });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Portfolio Form</h2>

      <input placeholder="Full Name" value={form.fullName} onChange={(e) => handleChange(e, 'fullName')} />
      <input placeholder="Profession" value={form.profession} onChange={(e) => handleChange(e, 'profession')} />
      <textarea placeholder="Profile Bio" value={form.profile} onChange={(e) => handleChange(e, 'profile')} />
      <input placeholder="Phone Number" value={form.phone} onChange={(e) => handleChange(e, 'phone')} />
      <input placeholder="Location" value={form.location} onChange={(e) => handleChange(e, 'location')} />
      <input placeholder="Email" value={form.email} onChange={(e) => handleChange(e, 'email')} />
      <input placeholder="LinkedIn Username" value={form.linkedIn} onChange={(e) => handleChange(e, 'linkedIn')} />

      <div>
        <label>Profile Picture: </label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        {form.profilePic && (
          <div>
            <p>Selected: {form.profilePic.name}</p>
            <button onClick={removeProfilePic}>Remove Profile Picture</button>
          </div>
        )}
      </div>

      <h3>Skills</h3>
      {form.skills.map((skill, i) => (
        <div key={i}>
          <input value={skill} readOnly />
          <button onClick={() => removeField('skills', i)}>Remove</button>
        </div>
      ))}
      <input
        placeholder="Add a skill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button
        onClick={() => {
          if (newSkill.trim()) {
            addField('skills', newSkill.trim());
            setNewSkill('');
          }
        }}
      >
        Add Skill
      </button>

      <h3>Work Experience</h3>
      {form.workExperience.map((exp, i) => (
        <div key={i}>
          <input value={exp.company} readOnly />
          <input value={exp.role} readOnly />
          <input value={exp.duration} readOnly />
          <button onClick={() => removeField('workExperience', i)}>Remove</button>
        </div>
      ))}
      <input placeholder="Company" value={newExperience.company} onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })} />
      <input placeholder="Role" value={newExperience.role} onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })} />
      <input placeholder="Duration" value={newExperience.duration} onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })} />
      <button
        onClick={() => {
          if (newExperience.company && newExperience.role && newExperience.duration) {
            addField('workExperience', newExperience);
            setNewExperience({ company: '', role: '', duration: '' });
          }
        }}
      >
        Add Experience
      </button>

      <h3>Education</h3>
      {form.education.map((edu, i) => (
        <div key={i}>
          <input value={edu.institution} readOnly />
          <input value={edu.degree} readOnly />
          <input value={edu.year} readOnly />
          <button onClick={() => removeField('education', i)}>Remove</button>
        </div>
      ))}
      <input placeholder="Institution" value={newEducation.institution} onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })} />
      <input placeholder="Degree" value={newEducation.degree} onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })} />
      <input placeholder="Year" value={newEducation.year} onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })} />
      <button
        onClick={() => {
          if (newEducation.institution && newEducation.degree && newEducation.year) {
            addField('education', newEducation);
            setNewEducation({ institution: '', degree: '', year: '' });
          }
        }}
      >
        Add Education
      </button>

      <h3>References</h3>
      {form.references.map((ref, i) => (
        <div key={i}>
          <input value={ref.name} readOnly />
          <input value={ref.contact} readOnly />
          <button onClick={() => removeField('references', i)}>Remove</button>
        </div>
      ))}
      <input placeholder="Name" value={newReference.name} onChange={(e) => setNewReference({ ...newReference, name: e.target.value })} />
      <input placeholder="Contact Info" value={newReference.contact} onChange={(e) => setNewReference({ ...newReference, contact: e.target.value })} />
      <button
        onClick={() => {
          if (newReference.name && newReference.contact) {
            addField('references', newReference);
            setNewReference({ name: '', contact: '' });
          }
        }}
      >
        Add Reference
      </button>

      <br /><br />
      <button onClick={() => console.log('Submitted Data:', form)}>Submit</button>

      <div style={{ width: '60%' }}>
        <Template13 data={form} />
      </div>
    </div>
  );
};

export default Dummy13;
