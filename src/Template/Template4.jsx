import React, { useState } from 'react';

// Simple Template4 component to preview the portfolio
const Template4 = ({ data }) => {
  return (
    <div style={{
      color: data.color === '#000000' ? '#fff' : '#000',
      backgroundColor: data.color,
      padding: '1rem',
      borderRadius: '8px',
      maxWidth: '400px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    }}>
      {data.coverPhoto && (
        <img
          src={data.coverPhoto}
          alt="Cover"
          style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
      )}

      <div style={{ textAlign: 'center', marginTop: '-50px' }}>
        {data.profilePic ? (
          <img
            src={data.profilePic}
            alt="Profile"
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '3px solid white',
              objectFit: 'cover',
              backgroundColor: '#fff'
            }}
          />
        ) : (
          <div style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: '#ccc',
            display: 'inline-block',
            lineHeight: '100px',
            color: '#666',
            fontWeight: 'bold'
          }}>
            No Photo
          </div>
        )}
      </div>

      <h2 style={{ textAlign: 'center', margin: '10px 0 5px' }}>{data.name || 'Full Name'}</h2>
      <h4 style={{ textAlign: 'center', margin: '5px 0', fontStyle: 'italic' }}>{data.profession || 'Profession'}</h4>

      <p><strong>Bio:</strong> {data.bio || 'Short bio goes here.'}</p>
      <p><strong>Phone:</strong> {data.phone || 'N/A'}</p>
      <p><strong>Email:</strong> {data.email || 'N/A'}</p>
      <p><strong>Location:</strong> {data.location || 'N/A'}</p>

      <h3>Personality Traits</h3>
      <ul>
        {data.personality.length > 0 ? data.personality.map((trait, i) => (
          <li key={i}>{trait}</li>
        )) : <li>No traits added.</li>}
      </ul>

      <h3>Education</h3>
      <ul>
        {data.education.length > 0 ? data.education.map((edu, i) => (
          <li key={i}>{edu.degree} - {edu.institution} ({edu.year})</li>
        )) : <li>No education added.</li>}
      </ul>

      <h3>Skills</h3>
      <ul>
        {data.skills.length > 0 ? data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        )) : <li>No skills added.</li>}
      </ul>

      <h3>Works</h3>
      <ul>
        {data.works.length > 0 ? data.works.map((work, i) => (
          <li key={i}>{work}</li>
        )) : <li>No work experience added.</li>}
      </ul>

      <h3>Projects</h3>
      <ul>
        {data.projects.length > 0 ? data.projects.map((proj, i) => (
          <li key={i} style={{ marginBottom: '10px' }}>
            <strong>{proj.name}</strong>
            {proj.img && (
              <div>
                <img src={proj.img} alt={proj.name} style={{ width: '100px', marginTop: '5px' }} />
              </div>
            )}
            {proj.url && (
              <div>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">{proj.url}</a>
              </div>
            )}
          </li>
        )) : <li>No projects added.</li>}
      </ul>
    </div>
  );
};

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
    educationInput: { degree: '', institution: '', year: '' },
    skills: ['JavaScript', 'React', 'Node.js'],
    skillInput: '',
    works: ['Frontend Developer at ABC Corp', 'Intern at XYZ Ltd.'],
    workInput: '',
    projects: [
      { name: 'Portfolio Website', img: '', url: 'https://github.com/johndoe/portfolio' }
    ],
    project: { name: '', img: '', url: '' },
    profilePic: '',
    coverPhoto: '',
  });

  const colorOptions = [
    { name: 'White', value: '#ffffff' },
    { name: 'Dark Blue', value: '#0A192F' },
    { name: 'Soft Gray', value: '#F7F6F2' },
    { name: 'Black', value: '#000000' },
  ];

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

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({
          ...prev,
          [key]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Portfolio Builder</h2>

      <label>
        Color Palette:{' '}
        <select name="color" value={data.color} onChange={handleChange}>
          {colorOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      </label>

      <p>
        Full Name: <input name="name" value={data.name} onChange={handleChange} />
      </p>
      <p>
        Profession: <input name="profession" value={data.profession} onChange={handleChange} />
      </p>
      <p>
        Bio: <textarea name="bio" value={data.bio} onChange={handleChange} />
      </p>
      <p>
        Phone: <input name="phone" value={data.phone} onChange={handleChange} />
      </p>
      <p>
        Email: <input name="email" value={data.email} onChange={handleChange} />
      </p>
      <p>
        Location: <input name="location" value={data.location} onChange={handleChange} />
      </p>

      <p>
        Profile Picture:{' '}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 'profilePic')}
        />
      </p>

      <p>
        Cover Photo:{' '}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 'coverPhoto')}
        />
      </p>

      {/* Personality */}
      <p>
        Personality:{' '}
        <input
          value={data.personalityInput}
          onChange={(e) => setData({ ...data, personalityInput: e.target.value })}
        />
        <button onClick={() => addItem('personality', 'personalityInput')}>Add</button>
      </p>
      <ul>
        {data.personality.map((trait, i) => (
          <li key={i}>
            {trait}{' '}
            <button onClick={() => removeItem('personality', i)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Education */}
      <h3>Education</h3>
      <p>
        Degree:{' '}
        <input
          value={data.educationInput.degree}
          onChange={(e) =>
            setData({
              ...data,
              educationInput: { ...data.educationInput, degree: e.target.value },
            })
          }
        />
      </p>
      <p>
        Institution:{' '}
        <input
          value={data.educationInput.institution}
          onChange={(e) =>
            setData({
              ...data,
              educationInput: { ...data.educationInput, institution: e.target.value },
            })
          }
        />
      </p>
      <p>
        Year:{' '}
        <input
          value={data.educationInput.year}
          onChange={(e) =>
            setData({
              ...data,
              educationInput: { ...data.educationInput, year: e.target.value },
            })
          }
        />
      </p>
      <button onClick={addEducation}>Add Education</button>
      <ul>
        {data.education.map((edu, i) => (
          <li key={i}>
            {edu.degree} - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      {/* Skills */}
      <p>
        Skills:{' '}
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
        Works:{' '}
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
        Project Name:{' '}
        <input
          value={data.project.name}
          onChange={(e) =>
            setData({ ...data, project: { ...data.project, name: e.target.value } })
          }
        />
      </p>
      <p>
        Project Image:{' '}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setData(prev => ({
                  ...prev,
                  project: { ...prev.project, img: reader.result },
                }));
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      </p>
      <p>
        Project URL:{' '}
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
                <img src={proj.img} alt={proj.name} style={{ width: '100px', marginTop: '5px' }} />
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

      <div style={{ marginTop: '3rem' }}>
        <h2>Live Preview</h2>
        <Template4 data={data} />
      </div>
    </div>
  );
};

export default Dummy4;
