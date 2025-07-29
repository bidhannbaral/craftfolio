import React from "react";

const Template16 = ({ data }) => {
  const {
    fullName,
    profession,
    profile,
    age,
    phone,
    email,
    location,
    experience,
    myWorks,
    skills,
    achievements,
  } = data;

  const profileURL = profile ? URL.createObjectURL(profile) : null;

  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        color: '#2c3e50',
        background: '#f9f9f9',
        lineHeight: 1.6,
      }}
    >
      {/* Profile Section */}
      <div
        style={{
          display: 'flex',
          padding: '30px',
          background: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          borderBottom: '3px solid #e0e0e0',
        }}
      >
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          {profileURL && (
            <img
              src={profileURL}
              alt="Profile"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '3px solid #e0e0e0',
              }}
            />
          )}
        </div>
        <div style={{ flex: '3', paddingLeft: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '2.8rem', color: '#1a1a1a' }}>
            {fullName || "Your Name"}
          </h1>
          <h2 style={{ margin: '10px 0', fontSize: '1.8rem', color: '#777' }}>
            {profession || "Your Profession"}
          </h2>

          <h3
            style={{
              marginTop: '25px',
              fontSize: '1.3rem',
              borderBottom: '2px solid #3498db',
              display: 'inline-block',
              paddingBottom: '5px',
              marginBottom: '10px',
            }}
          >
            Personal Information
          </h3>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
      </div>

      {/* Experience Section */}
      <div style={{ padding: '40px 30px' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '30px',
            borderBottom: '2px solid #3498db',
            display: 'inline-block',
            paddingBottom: '8px',
          }}
        >
          Experience
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 calc(50% - 10px)',
                background: '#fff',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>{exp.topic}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Works Section */}
      <div style={{ padding: '30px' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '20px',
            borderBottom: '2px solid #e67e22',
            display: 'inline-block',
            paddingBottom: '8px',
          }}
        >
          My Works
        </h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '15px',
            paddingBottom: '10px',
          }}
        >
          {myWorks.map((work, i) => (
            <a
              key={i}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <img
                src={work.url}
                alt={`work-${i}`}
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  border: '2px solid #ddd',
                  transition: 'transform 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Skills & Achievements */}
      <div style={{ display: 'flex', padding: '30px', gap: '30px' }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              borderBottom: '2px solid #27ae60',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Skills
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            {skills.map((skill, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>{skill}</li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              borderBottom: '2px solid #e74c3c',
              display: 'inline-block',
              paddingBottom: '5px',
            }}
          >
            Key Achievements
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            {achievements.map((ach, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template16;