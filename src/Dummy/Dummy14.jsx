// Dummy14.jsx
import React, { useState } from 'react';
import Template14 from '../Template/Template14';

const Dummy14 = () => {
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    about: '',
    email: '',
    phone: '',
    address: '',
    profile: null,
    skills: [{ name: '', level: 50 }],
    education: [{ institution: '', degree: '', year: '' }],
    works: [{ topic: '', description: '' }],
    languages: ['']
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, profile: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleArrayChange = (field, index, key, value) => {
    const updated = [...form[field]];
    updated[index][key] = value;
    setForm({ ...form, [field]: updated });
  };

  const addField = (field, template) => setForm({ ...form, [field]: [...form[field], template] });
  const removeField = (field, index) => {
    const updated = [...form[field]];
    updated.splice(index, 1);
    setForm({ ...form, [field]: updated });
  };

  return (
    <div>
      <h2>Portfolio Builder</h2>
      <input type="text" placeholder="Full Name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} /><br />
      <input type="text" placeholder="Profession" value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })} /><br />
      <textarea placeholder="About Me" value={form.about} onChange={(e) => setForm({ ...form, about: e.target.value })} /><br />

      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><br />
      <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /><br />
      <input type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /><br />

      <input type="file" onChange={handleImageUpload} /><br />

      <h3>Skills</h3>
      {form.skills.map((skill, idx) => (
        <div key={idx}>
          <input type="text" placeholder="Skill" value={skill.name} onChange={(e) => handleArrayChange('skills', idx, 'name', e.target.value)} />
          <input type="range" min="0" max="100" value={skill.level} onChange={(e) => handleArrayChange('skills', idx, 'level', parseInt(e.target.value))} />
          <button onClick={() => removeField('skills', idx)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addField('skills', { name: '', level: 50 })}>Add Skill</button>

      <h3>Education</h3>
      {form.education.map((edu, idx) => (
        <div key={idx}>
          <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleArrayChange('education', idx, 'institution', e.target.value)} />
          <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleArrayChange('education', idx, 'degree', e.target.value)} />
          <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleArrayChange('education', idx, 'year', e.target.value)} />
          <button onClick={() => removeField('education', idx)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addField('education', { institution: '', degree: '', year: '' })}>Add Education</button>

      <h3>Works</h3>
      {form.works.map((work, idx) => (
        <div key={idx}>
          <input type="text" placeholder="Topic" value={work.topic} onChange={(e) => handleArrayChange('works', idx, 'topic', e.target.value)} />
          <input type="text" placeholder="Description" value={work.description} onChange={(e) => handleArrayChange('works', idx, 'description', e.target.value)} />
          <button onClick={() => removeField('works', idx)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addField('works', { topic: '', description: '' })}>Add Work</button>

      <h3>Languages</h3>
      {form.languages.map((lang, idx) => (
        <div key={idx}>
          <input type="text" placeholder="Language" value={lang} onChange={(e) => {
            const updated = [...form.languages];
            updated[idx] = e.target.value;
            setForm({ ...form, languages: updated });
          }} />
          <button onClick={() => removeField('languages', idx)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addField('languages', '')}>Add Language</button>

      <Template14 data={form} />
    </div>
  );
};

export default Dummy14;