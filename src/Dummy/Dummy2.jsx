import React, { useState } from 'react';
import Template2 from '../Template/Template2';

const Dummy2 = () => {
  const [user, setUser] = useState({
    name: '',
    bio: '',
    photo: '',
    color: '#F7F6F2',
    profession: '',
    skills: [],
    works: [],
    projects: [],
    email: '',
    education: [],
    slogan: '',
    personality: '',
    behavior: ''
  });

  const [skillInput, setSkillInput] = useState('');
  const [workInput, setWorkInput] = useState({ title: '', description: '' });
  const [projectInput, setProjectInput] = useState({ title: '', description: '', url: '', image: '' });
  const [educationInput, setEducationInput] = useState({ degree: '', institution: '', year: '' });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUser({ ...user, photo: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const addItem = (type, value) => {
    if (typeof value === 'string' && value.trim()) {
      setUser({ ...user, [type]: [...user[type], value] });
      if (type === 'skills') setSkillInput('');
    } else if (typeof value === 'object' && Object.values(value).some(v => v.trim())) {
      setUser({ ...user, [type]: [...user[type], value] });
      if (type === 'works') setWorkInput({ title: '', description: '' });
      if (type === 'projects') setProjectInput({ title: '', description: '', url: '', image: '' });
    }
  };

  const removeItem = (type, index) => {
    const updated = [...user[type]];
    updated.splice(index, 1);
    setUser({ ...user, [type]: updated });
  };

  const addEducation = () => {
    const { degree, institution, year } = educationInput;
    if (degree && institution && year) {
      setUser({ ...user, education: [...user.education, educationInput] });
      setEducationInput({ degree: '', institution: '', year: '' });
    }
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '420px',
    padding: '0.6rem 1rem',
    marginBottom: '1rem',
    border: '1.5px solid #D6D3C9',
    borderRadius: '6px',
    fontSize: '1rem',
    backgroundColor: '#fff'
  };

  const removeButtonStyle = {
    backgroundColor: '#F2EDD7',
    color: '#2E8B57',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '1rem'
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#2E8B57' }}>Customize Your Portfolio</h2>

      <label>Theme Color:</label>
      <select value={user.color} onChange={(e) => setUser({ ...user, color: e.target.value })} style={inputStyle}>
        <option value="#F7F6F2">Nature (Default)</option>
        <option value="#E6F7FF">Light Blue</option>
        <option value="#FFE4E1">Pastel Pink</option>
        <option value="#E0F2F1">Mint Green</option>
        <option value="#1c1c1c">Dark Theme</option>
        <option value="#0077be">Ocean Blue</option>
      </select>

      <input name="name" placeholder="Name" onChange={handleChange} value={user.name} style={inputStyle} />
      <input name="email" placeholder="Email" onChange={handleChange} value={user.email} style={inputStyle} />
      <input name="slogan" placeholder="Slogan / Motto" onChange={handleChange} value={user.slogan} style={inputStyle} />

      <select name="profession" onChange={handleChange} value={user.profession} style={inputStyle}>
        <option value="">-- Select Profession --</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Photographer">Photographer</option>
        <option value="Model">Model</option>
        <option value="Web Developer">Web Developer</option>
        <option value="Content Writer">Content Writer</option>
        <option value="Fashion Designer">Fashion Designer</option>
        <option value="Architect">Architect</option>
        <option value="Artist">Artist</option>
      </select>

      <textarea name="bio" placeholder="About Me" onChange={handleChange} value={user.bio} style={{ ...inputStyle, height: '120px' }} />
      <textarea name="personality" placeholder="Personality Traits" onChange={handleChange} value={user.personality} style={{ ...inputStyle, height: '100px' }} />
      <textarea name="behavior" placeholder="Behavior / Work Style" onChange={handleChange} value={user.behavior} style={{ ...inputStyle, height: '100px' }} />

      <input type="file" accept="image/*" onChange={handlePhotoUpload} style={inputStyle} />
      {user.photo && <img src={user.photo} alt="Preview" style={{ maxWidth: '150px', borderRadius: '8px', marginBottom: '1rem' }} />}

      <h4>Skills</h4>
      <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add Skill" style={inputStyle} />
      <button onClick={() => addItem('skills', skillInput)} disabled={!skillInput.trim()}>Add</button>
      <ul>
        {user.skills.map((skill, i) => (
          <li key={i}>{skill}<button onClick={() => removeItem('skills', i)} style={removeButtonStyle}>Remove</button></li>
        ))}
      </ul>

      <h4>Education</h4>
      <input placeholder="Degree" value={educationInput.degree} onChange={(e) => setEducationInput({ ...educationInput, degree: e.target.value })} style={inputStyle} />
      <input placeholder="Institution" value={educationInput.institution} onChange={(e) => setEducationInput({ ...educationInput, institution: e.target.value })} style={inputStyle} />
      <input placeholder="Year" value={educationInput.year} onChange={(e) => setEducationInput({ ...educationInput, year: e.target.value })} style={inputStyle} />
      <button onClick={addEducation}>Add</button>
      <ul>
        {user.education.map((edu, i) => (
          <li key={i}>{edu.degree}, {edu.institution}, {edu.year}
            <button onClick={() => removeItem('education', i)} style={removeButtonStyle}>Remove</button>
          </li>
        ))}
      </ul>

      <h4>Work Experience</h4>
      <input placeholder="Title" value={workInput.title} onChange={(e) => setWorkInput({ ...workInput, title: e.target.value })} style={inputStyle} />
      <textarea placeholder="Description" value={workInput.description} onChange={(e) => setWorkInput({ ...workInput, description: e.target.value })} style={inputStyle} />
      <button onClick={() => addItem('works', workInput)} disabled={!workInput.title.trim() && !workInput.description.trim()}>Add</button>
      <ul>
        {user.works.map((work, i) => (
          <li key={i}><strong>{work.title}</strong>: {work.description}
            <button onClick={() => removeItem('works', i)} style={removeButtonStyle}>Remove</button>
          </li>
        ))}
      </ul>

      <h4>Projects</h4>
      <input placeholder="Title" value={projectInput.title} onChange={(e) => setProjectInput({ ...projectInput, title: e.target.value })} style={inputStyle} />
      <textarea placeholder="Description" value={projectInput.description} onChange={(e) => setProjectInput({ ...projectInput, description: e.target.value })} style={inputStyle} />
      <input placeholder="URL" value={projectInput.url} onChange={(e) => setProjectInput({ ...projectInput, url: e.target.value })} style={inputStyle} />
      <input type="file" accept="image/*" onChange={(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setProjectInput({ ...projectInput, image: reader.result });
        if (file) reader.readAsDataURL(file);
      }} style={inputStyle} />
      <button onClick={() => addItem('projects', projectInput)} disabled={!projectInput.title.trim()}>Add</button>
      <ul>
        {user.projects.map((project, i) => (
          <li key={i}><strong>{project.title}</strong>: {project.description}
            <button onClick={() => removeItem('projects', i)} style={removeButtonStyle}>Remove</button>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem', color: '#2E8B57' }}>Live Preview</h2>
      <Template2 user={user} />
    </div>
  );
};

export default Dummy2;
