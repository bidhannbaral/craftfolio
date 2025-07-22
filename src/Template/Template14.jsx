import React from 'react';

const Template14 = ({ data }) => {
  if (!data) return null;

  const {
    fullName = 'Your Name',
    profession = 'Your Profession',
    about = 'A little about yourself...',
    email = 'example@email.com',
    phone = '123-456-7890',
    address = 'City, Country',
    profile,
    skills = [],
    education = [],
    works = [],
    languages = [],
  } = data;

  return (
    <div className="flex flex-row gap-10 p-8 bg-white border border-gray-300 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Left Section */}
      <div className="flex-1 border-r border-gray-200 pr-6">
        {profile && (
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-gray-300"
          />
        )}
        <div className="text-2xl font-bold mb-1">{fullName}</div>
        <div className="text-lg text-gray-600 mb-4">{profession}</div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">About Me</h3>
          <p className="text-sm text-gray-700">{about}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Contact</h3>
          <p className="text-sm"><strong>Email:</strong> {email}</p>
          <p className="text-sm"><strong>Phone:</strong> {phone}</p>
          <p className="text-sm"><strong>Address:</strong> {address}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Skills</h3>
          <div className="flex flex-col gap-3">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 pl-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Education</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {education.map((edu, idx) => (
              <li key={idx}>{edu.degree} at {edu.institution} ({edu.year})</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Works</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {works.map((work, idx) => (
              <li key={idx}><strong>{work.topic}</strong>: {work.description}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">Languages</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template14;
