import React from 'react';
import Profilepicture from '../Assets/Profilepicture'
const Template10 = ({ data }) => {
  const {
    fullName = 'Your Name',
    profession = 'Your Profession',
    bio = 'Your bio goes here...',
    phone,
    email,
    location,
    education = [],
    skills = [],
    projects = [],
  } = data;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <h1 className="text-3xl font-bold mb-1">{fullName}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{profession}</h2>
      <p className="mb-6">{bio}</p>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <div className="space-y-1">
          <p className="flex items-center gap-2 text-sm">
            <strong className="w-20">Phone:</strong>
            <span className="font-mono">{phone}</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <strong className="w-20">Email:</strong>
            <span>{email}</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <strong className="w-20">Location:</strong>
            <span>{location}</span>
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {education.map((e, i) => (
            <li key={i}>
              <strong>{e.degree}</strong> at {e.institution}{' '}
              <span className="font-mono">({e.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((s, i) => (
            <li key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 p-4 mb-4 rounded-md shadow-sm"
          >
            <h4 className="text-md font-semibold mb-1">{project.title}</h4>
            <p className="text-sm mb-2">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Template10;
