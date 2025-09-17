import React, { useState } from 'react';
import Template1 from '../Template/Template1';

const Dummy1 = () => {
  const [user, setUser] = useState({
    name: '',
    bio: '',
    photo: '',
    color: '#F7F6F2',
    profession: '',
    skills: [],
    works: [],
    projects: [],
    phone: '',
    email: '',
    location: '',
    education: []
  });

  const [skillInput, setSkillInput] = useState('');
  const [workInput, setWorkInput] = useState({ title: '', description: '' });
  const [projectInput, setProjectInput] = useState({ title: '', description: '', url: '', image: '' });
  const [educationInput, setEducationInput] = useState({ degree: '', institution: '', year: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, photo: reader.result });
    };
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
    if (degree.trim() && institution.trim() && year.trim()) {
      setUser({ ...user, education: [...user.education, educationInput] });
      setEducationInput({ degree: '', institution: '', year: '' });
    }
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '420px',
    padding: '0.6rem 1rem',
    margin: '0.4rem 0 1rem 0',
    border: '1.5px solid #D6D3C9',
    borderRadius: '6px',
    fontSize: '1rem',
    color: '#6B705C',
    backgroundColor: '#ffffff',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
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

  const containerStyle = {
    padding: '2rem',
    minHeight: '100vh',
    backgroundColor: '#F7F6F2',
    color: '#1a1a1a',
    fontFamily: 'Arial, sans-serif'
  };

  const sectionTitleStyle = {
    color: '#2E8B57',
    marginTop: '2rem'
  };

  const labelStyle = { fontWeight: '600', marginBottom: '0.3rem', display: 'block' };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#2E8B57', marginBottom: '1rem' }}>Create Your Portfolio ✨</h1>

      <label style={labelStyle}>Choose Theme Color 🎨:</label>
      <select 
        value={user.color}
        onChange={(e) => setUser({ ...user, color: e.target.value })}
        style={inputStyle}
      >
        <option value="#F7F6F2">Nature (Default)</option>
        <option value="#E6F7FF">Light Blue</option>
        <option value="#FFE4E1">Pastel Pink</option>
        <option value="#E0F2F1">Mint Green</option>
        <option value="#1c1c1c">Dark Theme</option>
        <option value="#0077be">Ocean Blue</option>
      </select>

      <p style={{ fontWeight: 500, color: 'gray' }}>
        Selected Color: <strong>{user.color}</strong>
      </p>

      <label style={labelStyle}>Name:</label>
      <input name="name" placeholder="Full Name" onChange={handleChange} value={user.name} style={inputStyle} />

      <label style={labelStyle}>Bio:</label>
      <textarea name="bio" placeholder="About me" onChange={handleChange} value={user.bio} style={{...inputStyle, width:'800px', height:'240px'}} />

      <label style={labelStyle}>Email:</label>
      <input name="email" type="email" onChange={handleChange} value={user.email} style={inputStyle} />

      <label style={labelStyle}>Phone:</label>
      <input name="phone" type="tel" onChange={handleChange} value={user.phone} style={inputStyle} />

      <label style={labelStyle}>Location:</label>
      <input name="location" type="text" onChange={handleChange} value={user.location} style={inputStyle} />

      <label style={labelStyle}>Upload Photo 📷:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        style={{
          ...inputStyle,
          padding: '0.4rem 0.6rem'
        }}
      />
      {user.photo && (
        <img
          src={user.photo}
          alt="Preview"
          style={{
            maxWidth: '180px',
            height: 'auto',
            borderRadius: '8px',
            marginTop: '0.8rem',
            border: '2px solid #D6D3C9'
          }}
        />
      )}

      <label style={labelStyle}>Profession:</label>
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

      <h3 style={sectionTitleStyle}>Skills 💡</h3>
      <input value={skillInput} placeholder="Add Skill" onChange={(e) => setSkillInput(e.target.value)} style={inputStyle} />
      <button onClick={() => addItem('skills', skillInput)} disabled={!skillInput.trim()}  style={{
      ...inputStyle,
      cursor: 'pointer',
      backgroundColor: '#2E8B57',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
       width:'250px',
       marginLeft:'10px'
    }}>
        Add Skill
      </button>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => removeItem('skills', index)} style={removeButtonStyle}>Remove</button>
          </li>
        ))}
      </ul>

      <h3 style={sectionTitleStyle}>Work Experience 💼</h3>

<div>
  <label style={labelStyle}>Title:</label>
  <input
    placeholder="Title"
    value={workInput.title}
    onChange={(e) => setWorkInput({ ...workInput, title: e.target.value })}
    style={inputStyle}
  />
</div>

<div>
  <label style={labelStyle}>Description:</label>
  <textarea
    placeholder="Description"
    value={workInput.description}
    onChange={(e) => setWorkInput({ ...workInput, description: e.target.value })}
    style={inputStyle}
  />
</div>

<div>
  <button
    onClick={() => addItem('works', workInput)}
    disabled={!workInput.title.trim() && !workInput.description.trim()}
    style={{
      ...inputStyle,
      cursor: 'pointer',
      backgroundColor: '#2E8B57',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
       width:'250px',
       marginLeft:'10px'
    }}
  >
    Add Work
  </button>
</div>

<ul>
  {user.works.map((work, index) => (
    <li key={index}>
      <strong>{work.title}</strong>: {work.description}
      <button
        onClick={() => removeItem('works', index)}
        style={removeButtonStyle}
      >
        Remove
      </button>
    </li>
  ))}
</ul>
<h3 style={sectionTitleStyle}>Education 🎓</h3>

<div>
  <label style={labelStyle}>Degree:</label>
  <input
    placeholder="Degree"
    value={educationInput.degree}
    onChange={(e) => setEducationInput({ ...educationInput, degree: e.target.value })}
    style={inputStyle}
  />
</div>

<div>
  <label style={labelStyle}>Institution:</label>
  <input
    placeholder="Institution"
    value={educationInput.institution}
    onChange={(e) => setEducationInput({ ...educationInput, institution: e.target.value })}
    style={inputStyle}
  />
</div>

<div>
  <label style={labelStyle}>Year:</label>
  <input
    placeholder="Year"
    value={educationInput.year}
    onChange={(e) => setEducationInput({ ...educationInput, year: e.target.value })}
    style={inputStyle}
  />
</div>

<div>
  <button
    onClick={addEducation}
    disabled={
      !educationInput.degree.trim() ||
      !educationInput.institution.trim() ||
      !educationInput.year.trim()
    }
    style={{
      ...inputStyle,
      cursor: 'pointer',
      backgroundColor: '#2E8B57',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
      width:'250px',
       marginLeft:'10px'
    }}
  >
    Add Education
  </button>
</div>

<ul>
  {user.education.map((edu, index) => (
    <li key={index}>
      {edu.degree}, {edu.institution}, {edu.year}
      <button
        onClick={() => removeItem('education', index)}
        style={removeButtonStyle}
      >
        Remove
      </button>
    </li>
  ))}
</ul>

 <h3 style={sectionTitleStyle}>Projects 🚀</h3>

<div style={{ marginBottom: '1rem' }}>
  <label>
    Title: <br />
    <input
      placeholder="Title"
      value={projectInput.title}
      onChange={(e) => setProjectInput({ ...projectInput, title: e.target.value })}
      style={inputStyle}
    />
  </label>
</div>

<div style={{ marginBottom: '1rem' }}>
  <label>
    Description: <br />
    <textarea
      placeholder="Description"
      value={projectInput.description}
      onChange={(e) => setProjectInput({ ...projectInput, description: e.target.value })}
      style={inputStyle}
    />
  </label>
</div>

<div style={{ marginBottom: '1rem' }}>
  <label>
    URL: <br />
    <input
      placeholder="URL"
      value={projectInput.url}
      onChange={(e) => setProjectInput({ ...projectInput, url: e.target.value })}
      style={inputStyle}
    />
  </label>
</div>

<div style={{ marginBottom: '1rem' }}>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectInput({ ...projectInput, image: reader.result });
      };
      if (file) reader.readAsDataURL(file);
    }}
    style={inputStyle}
  />
</div>

<div style={{ marginBottom: '1.5rem' }}>
  <button
    onClick={() => addItem('projects', projectInput)}
    disabled={!projectInput.title.trim() && !projectInput.description.trim()}
     style={{
      ...inputStyle,
      cursor: 'pointer',
      backgroundColor: '#2E8B57',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
       width:'250px',
       marginLeft:'10px'
    }}
   
  >
    Add Project
  </button>
</div>

<ul>
  {user.projects.map((project, index) => (
    <li key={index}>
      <strong>{project.title}</strong>: {project.description}
      <button onClick={() => removeItem('projects', index)} style={removeButtonStyle}>
        Remove
      </button>
    </li>
  ))}
</ul>


      <h2 style={sectionTitleStyle}>Live Preview 👀:</h2>
      <Template1 user={user} />
    </div>
  );
};

export default Dummy1;
