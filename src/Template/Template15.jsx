import React from 'react';

const Template15 = ({ data }) => {
  if (!data) return null;

  const {
    fullName,
    profession,
    age,
    gender,
    profile,
    profilePic,
    email,
    phone,
    location,
    skills,
    experiences,
  } = data;

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    }}>
      {/* Top Section: Contact & Image */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={{ flex: '1 1 60%' }}>
          <h2 style={{ marginBottom: '10px', color: '#555' }}>📞 Contact Info</h2>
          <p><strong>Email:</strong> {email || 'your@email.com'}</p>
          <p><strong>Phone:</strong> {phone || '123-456-7890'}</p>
          <p><strong>Location:</strong> {location || 'Your City'}</p>
          <div style={{ marginTop: '15px', display: 'flex', gap: '20px' }}>
            <p><strong>Age:</strong> {age || 'N/A'}</p>
            <p><strong>Gender:</strong> {gender || 'N/A'}</p>
          </div>
        </div>

        {profilePic && (
          <div style={{ flex: '1 1 150px', textAlign: 'right' }}>
            <img
              src={profilePic}
              alt="Profile"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '12px',
                border: '3px solid #ddd',
              }}
            />
          </div>
        )}
      </div>

      <hr style={{ border: 'none', height: '1px', background: '#ccc', margin: '30px 0' }} />

      {/* Name & Bio */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: '0', fontSize: '32px', color: '#222' }}>{fullName || 'Your Name'}</h1>
        <h3 style={{ margin: '8px 0', fontWeight: 'normal', color: '#666' }}>{profession || 'Your Profession'}</h3>
        <p style={{ fontSize: '15px', maxWidth: '600px', margin: '10px auto', color: '#444' }}>
          {profile || 'Short bio or profile description goes here. Talk about your passion, goals, or what makes you unique.'}
        </p>
      </div>

      <hr style={{ border: 'none', height: '1px', background: '#ccc', marginBottom: '25px' }} />

      {/* Skills */}
      <div>
        <h2 style={{ marginBottom: '15px', color: '#555' }}> Skills</h2>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px 20px',
          listStyle: 'square inside',
          paddingLeft: '0'
        }}>
          {skills.filter(skill => skill.trim() !== '').map((skill, i) => (
            <li key={i} style={{ color: '#333' }}>{skill}</li>
          ))}
        </ul>
      </div>

      <hr style={{ border: 'none', height: '1px', background: '#ccc', margin: '30px 0' }} />

      {/* Experience */}
      <div>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Experience</h2>
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              marginBottom: '20px',
              padding: '15px 20px',
              background: '#fff',
              borderLeft: '5px solid #007bff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <h4 style={{ margin: '0 0 5px' }}>{exp.topic || 'Untitled Role'}</h4>
            <p style={{ margin: 0 }}>{exp.description || 'No description provided.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template15;
