import React, { useState } from 'react';
import Template4 from '../Template/Template4';

const colorOptions = [
  { name: 'White', value: '#ffffff' },
  { name: 'Dark Blue', value: '#0A192F' },
  { name: 'Soft Gray', value: '#F7F6F2' },
  { name: 'Black', value: '#000000' },
];

const Dummy4 = () => {
  const [data, setData] = useState({
    color: '#ffffff',
    name: 'John Doe',
    profession: 'Software Developer',
    bio: 'Passionate developer with experience in React and Node.js.',
    phone: '+1 234 567 890',
    email: 'johndoe@example.com',
    location: 'San Francisco, CA',
    personality: ['Team Player', 'Creative', 'Problem Solver'],
    personalityInput: '',
    education: [
      { degree: 'B.Sc. Computer Science', institution: 'University of XYZ', year: '2018' }
    ],
    educationInput: {
      degree: '',
      institution: '',
      year: '',
    },
    skills: ['JavaScript', 'React', 'Node.js'],
    skillInput: '',
    works: ['Frontend Developer at ABC Corp', 'Intern at XYZ Ltd.'],
    workInput: '',
    projects: [
      {
        name: 'Portfolio Website',
        img: '', // You can add a base64 or URL image here if you want a default
        url: 'https://github.com/johndoe/portfolio',
      }
    ],
    project: {
      name: '',
      img: '',
      url: '',
    },
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addItem = (key, valueKey) => {
    if (data[valueKey].trim() !== '') {
      setData({
        ...data,
        [key]: [...data[key], data[valueKey].trim()],
        [valueKey]: '',
      });
    }
  };

  const removeItem = (key, index) => {
    const newList = data[key].filter((_, i) => i !== index);
    setData({ ...data, [key]: newList });
  };

  const addEducation = () => {
    const { degree, institution, year } = data.educationInput;
    if (degree && institution && year) {
      setData({
        ...data,
        education: [...data.education, { degree, institution, year }],
        educationInput: { degree: '', institution: '', year: '' },
      });
    }
  };

  const addProject = () => {
    if (data.project.name) {
      setData({
        ...data,
        projects: [...data.projects, { ...data.project }],
        project: { name: '', img: '', url: '' },
      });
    }
  };

  return (
    <div style={{ backgroundColor: data.color, padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Portfolio Builder</h2>

      <label>
        Color Palette:
        <select name="color" value={data.color} onChange={handleChange}>
          {colorOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      </label>

      <p>Full Name: <input name="name" value={data.name} onChange={handleChange} /></p>
      <p>Profession: <input name="profession" value={data.profession} onChange={handleChange} /></p>
      <p>Bio: <textarea name="bio" value={data.bio} onChange={handleChange} /></p>
      <p>Phone: <input name="phone" value={data.phone} onChange={handleChange} /></p>
      <p>Email: <input name="email" value={data.email} onChange={handleChange} /></p>
      <p>Location: <input name="location" value={data.location} onChange={handleChange} /></p>

      {/* Personality */}
      <p>
        Personality:
        <input
          value={data.personalityInput}
          onChange={(e) => setData({ ...data, personalityInput: e.target.value })}
        />
        <button onClick={() => addItem('personality', 'personalityInput')}>Add</button>
      </p>
      <ul>
        {data.personality.map((trait, i) => (
          <li key={i}>
            {trait} <button onClick={() => removeItem('personality', i)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Education */}
      <h3>Education</h3>
      <p>
        Degree:
        <input
          value={data.educationInput.degree}
          onChange={(e) =>
            setData({ ...data, educationInput: { ...data.educationInput, degree: e.target.value } })
          }
        />
      </p>
      <p>
        Institution:
        <input
          value={data.educationInput.institution}
          onChange={(e) =>
            setData({ ...data, educationInput: { ...data.educationInput, institution: e.target.value } })
          }
        />
      </p>
      <p>
        Year:
        <input
          value={data.educationInput.year}
          onChange={(e) =>
            setData({ ...data, educationInput: { ...data.educationInput, year: e.target.value } })
          }
        />
      </p>
      <button onClick={addEducation}>Add Education</button>

      <ul>
        {data.education.map((edu, i) => (
          <li key={i}>{edu.degree} - {edu.institution} ({edu.year})</li>
        ))}
      </ul>

      {/* Skills */}
      <p>
        Skills:
        <input
          value={data.skillInput}
          onChange={(e) => setData({ ...data, skillInput: e.target.value })}
        />
        <button onClick={() => addItem('skills', 'skillInput')}>Add</button>
      </p>
      <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>
            {skill} <button onClick={() => removeItem('skills', i)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Works */}
      <p>
        Works:
        <input
          value={data.workInput}
          onChange={(e) => setData({ ...data, workInput: e.target.value })}
        />
        <button onClick={() => addItem('works', 'workInput')}>Add</button>
      </p>
      <ul>
        {data.works.map((work, i) => (
          <li key={i}>
            {work} <button onClick={() => removeItem('works', i)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Projects */}
      <h3>Add Project</h3>
      <p>
        Project Name:
        <input
          value={data.project.name}
          onChange={(e) =>
            setData({ ...data, project: { ...data.project, name: e.target.value } })
          }
        />
      </p>
      <p>
        Project Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setData({
                  ...data,
                  project: {
                    ...data.project,
                    img: reader.result,
                  },
                });
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </p>
      <p>
        Project URL:
        <input
          value={data.project.url}
          onChange={(e) =>
            setData({ ...data, project: { ...data.project, url: e.target.value } })
          }
        />
      </p>
      <button onClick={addProject}>Add Project</button>

      <ul>
        {data.projects.map((proj, i) => (
          <li key={i}>
            <strong>{proj.name}</strong>
            {proj.img && (
              <div>
                <img src={proj.img} alt={proj.name} width="100" />
              </div>
            )}
            {proj.url && (
              <div>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  {proj.url}
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="portfolio-preview" style={{ marginTop: '3rem' }}>
        <h2>Live Preview</h2>
        <Template4 data={data} />
      </div>
    </div>
  );
};

export default Dummy4;
