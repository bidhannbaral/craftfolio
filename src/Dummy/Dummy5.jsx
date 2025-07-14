
import React, { useState } from 'react';
import Template5 from '../Template/Template5'
const Dummy5 = () => {
  const [data, setData] = useState({
    profilePic: '',
    name: 'Lily West',
    profession: 'Creative Designer',
    about: "I'm a passionate designer blending creativity with technology.",
    phone: '+977 9800000000',
    email: 'lilywest@example.com',
    location: 'Kathmandu, Nepal',
    skills: ['Figma', 'Illustrator', 'UI/UX'],
    skillInput: '',
    languages: ['English', 'Nepali'],
    languageInput: '',
    personality: ['Empathetic', 'Detail-Oriented'],
    personalityInput: '',
    education: [
      { degree: 'B.Des in Communication Design', institution: 'Kathmandu University', year: '2023' }
    ],
    educationInput: { degree: '', institution: '', year: '' },
    experience: [
      { role: 'UI Designer', company: 'PixelWave Studio', duration: '2023 - Present' }
    ],
    experienceInput: { role: '', company: '', duration: '' },
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setData({ ...data, profilePic: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const addItem = (key, valueKey) => {
    if (data[valueKey].trim()) {
      setData({ ...data, [key]: [...data[key], data[valueKey].trim()], [valueKey]: '' });
    }
  };

  const removeItem = (key, i) => {
    const newList = data[key].filter((_, index) => index !== i);
    setData({ ...data, [key]: newList });
  };

  const addStructuredItem = (key, inputKey) => {
    const newItem = data[inputKey];
    if (Object.values(newItem).every(Boolean)) {
      setData({
        ...data,
        [key]: [...data[key], newItem],
        [inputKey]: Object.fromEntries(Object.keys(newItem).map(k => [k, '']))
      });
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Create Your Portfolio</h2>

      <label>
        Profile Photo:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {data.profilePic && <img src={data.profilePic} alt="Profile" width={100} style={{ borderRadius: '50%' }} />}

      <p>Full Name: <input name="name" value={data.name} onChange={handleChange} /></p>
      <p>Profession: <input name="profession" value={data.profession} onChange={handleChange} /></p>
      <p>About Me: <textarea name="about" value={data.about} onChange={handleChange} /></p>
      <p>Phone: <input name="phone" value={data.phone} onChange={handleChange} /></p>
      <p>Email: <input name="email" value={data.email} onChange={handleChange} /></p>
      <p>Location: <input name="location" value={data.location} onChange={handleChange} /></p>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        <input value={data.skillInput} onChange={e => setData({ ...data, skillInput: e.target.value })} />
        <button onClick={() => addItem('skills', 'skillInput')}>Add</button>
        <ul>{data.skills.map((s, i) => <li key={i}>{s} <button onClick={() => removeItem('skills', i)}>X</button></li>)}</ul>
      </section>

      {/* Languages */}
      <section>
        <h3>Languages</h3>
        <input value={data.languageInput} onChange={e => setData({ ...data, languageInput: e.target.value })} />
        <button onClick={() => addItem('languages', 'languageInput')}>Add</button>
        <ul>{data.languages.map((l, i) => <li key={i}>{l} <button onClick={() => removeItem('languages', i)}>X</button></li>)}</ul>
      </section>

      {/* Personality */}
      <section>
        <h3>Personality</h3>
        <input value={data.personalityInput} onChange={e => setData({ ...data, personalityInput: e.target.value })} />
        <button onClick={() => addItem('personality', 'personalityInput')}>Add</button>
        <ul>{data.personality.map((p, i) => <li key={i}>{p} <button onClick={() => removeItem('personality', i)}>X</button></li>)}</ul>
      </section>

      {/* Education */}
      <section>
        <h3>Education</h3>
        <input placeholder="Degree" value={data.educationInput.degree} onChange={e => setData({ ...data, educationInput: { ...data.educationInput, degree: e.target.value } })} />
        <input placeholder="Institution" value={data.educationInput.institution} onChange={e => setData({ ...data, educationInput: { ...data.educationInput, institution: e.target.value } })} />
        <input placeholder="Year" value={data.educationInput.year} onChange={e => setData({ ...data, educationInput: { ...data.educationInput, year: e.target.value } })} />
        <button onClick={() => addStructuredItem('education', 'educationInput')}>Add</button>
        <ul>{data.education.map((e, i) => <li key={i}>{e.degree} at {e.institution} ({e.year})</li>)}</ul>
      </section>

      {/* Experience */}
      <section>
        <h3>Experience</h3>
        <input placeholder="Role" value={data.experienceInput.role} onChange={e => setData({ ...data, experienceInput: { ...data.experienceInput, role: e.target.value } })} />
        <input placeholder="Company" value={data.experienceInput.company} onChange={e => setData({ ...data, experienceInput: { ...data.experienceInput, company: e.target.value } })} />
        <input placeholder="Duration" value={data.experienceInput.duration} onChange={e => setData({ ...data, experienceInput: { ...data.experienceInput, duration: e.target.value } })} />
        <button onClick={() => addStructuredItem('experience', 'experienceInput')}>Add</button>
        <ul>{data.experience.map((exp, i) => <li key={i}>{exp.role} at {exp.company} ({exp.duration})</li>)}</ul>
      </section>
       <h2 style={{ marginTop: '2rem', color: '#2E8B57' }}>Live Preview</h2>
            <Template5 data={data} />
    </div>
  );
};

export default Dummy5;
