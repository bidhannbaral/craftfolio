import React from "react";

const Template17 = ({ data }) => {
  const {
    fullName,
    profession,
    about,
    profile,
    personalInfo,
    education,
    experience,
    expertise,
  } = data;

  const profileURL = profile ? URL.createObjectURL(profile) : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7faff",
        color: "#1f3c88",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* LEFT SECTION */}
      <div
        style={{
          width: "40%",
          backgroundColor: "#d6e6ff",
          padding: "20px",
          borderRadius: "8px",
          marginRight: "20px",
        }}
      >
        <h1 style={{ fontSize: "28px", margin: "10px 0" }}>{fullName || "Your Name"}</h1>
        <h2 style={{ fontSize: "20px", fontWeight: "normal" }}>{profession || "Your Profession"}</h2>

        <section>
          <h3>About Me</h3>
          <p>{about || "Write something about yourself..."}</p>
        </section>

        <section>
          <h3>Personal Info</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {Object.entries(personalInfo || {}).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Education</h3>
          {education && education.length > 0 ? (
            <ul>
              {education.map((edu, i) => (
                <li key={i}>
                  <strong>{edu.degree}</strong> - {edu.university} ({edu.year})
                </li>
              ))}
            </ul>
          ) : (
            <p>No education added yet.</p>
          )}
        </section>
      </div>

      {/* RIGHT SECTION */}
      <div style={{ width: "60%", padding: "20px" }}>
        {profileURL && (
          <img
            src={profileURL}
            alt="Profile"
            style={{ width: "200px", height: "auto", borderRadius: "8px", marginBottom: "20px" }}
          />
        )}

        <section>
          <h3>Experience</h3>
          {experience && experience.length > 0 ? (
            experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "15px" }}>
                <h4>{exp.title}</h4>
                <em>{exp.time}</em>
                <p>{exp.description}</p>
              </div>
            ))
          ) : (
            <p>No experience listed yet.</p>
          )}
        </section>

        <section>
          <h3>Expert In</h3>
          {expertise && expertise.length > 0 ? (
            <ul>
              {expertise.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          ) : (
            <p>No expertise listed yet.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Template17;
