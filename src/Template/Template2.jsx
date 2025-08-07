import React from 'react';

const Template2 = ({ user }) => {
  const {
    name,
    profession,
    bio,
    slogan,
    photo,
    email,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    skills = [],
    works = [],
    projects = [],
    education = [],
    personality = [],
  } = user || {};

  return (
    <div className="p-10 font-sans min-h-screen" style={{ backgroundColor: primaryColor }}>
      {/* Top Section */}
      <div className="flex justify-between items-center flex-wrap mb-10">
        <div>
          <h2 className="text-2xl" style={{ color: secondaryColor }}>{profession}</h2>
          <h1 className="text-4xl font-bold" style={{ color: secondaryColor }}>{name}</h1>
          <p className="text-base" style={{ color: tertiaryColor }}>{bio}</p>
          <p className="text-sm" style={{ color: tertiaryColor }}>{email}</p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
          {photo && <img src={photo} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />}
        </div>
      </div>

      {/* Slogan Section */}
      {slogan && (
        <div className="text-center font-bold mb-10" style={{ color: secondaryColor }}>
          <h3>{slogan}</h3>
        </div>
      )}

      {/* Traits and Skills */}
      <div className="flex flex-wrap gap-10 mb-10">
        <div className="flex-1">
          <h3 className="text-xl mb-2 pl-2 border-l-4" style={{ color: secondaryColor, borderColor: secondaryColor }}>Personality Traits</h3>
          <ul className="flex flex-wrap gap-2 m-2 p-0 list-none">
            {personality.map((item, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-full font-semibold shadow"
                style={{ backgroundColor: secondaryColor, color: tertiaryColor, boxShadow: `0 2px 5px ${tertiaryColor}80` }}
              >
                {item.trait}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-2 pl-2 border-l-4" style={{ color: secondaryColor, borderColor: secondaryColor }}>Skills</h3>
          <ul className="flex flex-wrap gap-2 m-2 p-0 list-none">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-full font-semibold shadow"
                style={{ backgroundColor: secondaryColor, color: tertiaryColor, boxShadow: `0 2px 5px ${tertiaryColor}80` }}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-10">
        <div>
          <h3 className="text-xl mb-2 pl-2 border-l-4" style={{ color: secondaryColor, borderColor: secondaryColor }}>Education</h3>
          <ul>
            {education.map((edu, i) => (
              <li
                key={i}
                className="p-4 mb-3 rounded-lg"
                style={{ backgroundColor: secondaryColor, color: tertiaryColor }}
              >
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-2 pl-2 border-l-4" style={{ color: secondaryColor, borderColor: secondaryColor }}>Work Experience</h3>
          <ul>
            {works.map((work, i) => (
              <li
                key={i}
                className="p-4 mb-3 rounded-lg"
                style={{ backgroundColor: secondaryColor, color: tertiaryColor }}
              >
                <strong>{work.title}</strong> ({work.time})<br />
                {work.description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-2 pl-2 border-l-4" style={{ color: secondaryColor, borderColor: secondaryColor }}>Projects</h3>
          <ul>
            {projects.map((project, i) => (
              <li
                key={i}
                className="p-4 mb-3 rounded-lg"
                style={{ backgroundColor: secondaryColor, color: tertiaryColor }}
              >
                <strong>{project.name}</strong><br />
                {project.description}<br />
                {project.image && <img src={project.image} alt="Project" className="w-72 mt-2 rounded" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template2;
