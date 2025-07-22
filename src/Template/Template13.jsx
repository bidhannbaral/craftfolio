import React from 'react';

const Template13 = ({ data }) => {
  if (!data) return null;

  const {
    fullName = 'Your Name',
    profession = 'Your Profession',
    profile = 'Profile description...',
    profilePic,
    email = 'example@email.com',
    phone = '123-456-7890',
    linkedIn = 'linkedin-username',
    location = 'Your Location',
    skills = [],
    workExperience = [],
    education = [],
    references = [],
  } = data;

  return (
    <div className="flex flex-col md:flex-row w-full border border-gray-300 mt-5 bg-gray-50 shadow-md">
      {/* Left Section */}
      <div className="flex-1 p-5 bg-gray-100">
        <h1 className="text-2xl font-bold mb-1">{fullName}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{profession}</h2>
        <p className="text-sm mb-4">{profile}</p>

        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Middle Section */}
      <div className="flex-1 p-5 text-center bg-white border-l border-r border-gray-300">
        {profilePic && (
          <img
            src={URL.createObjectURL(profilePic)}
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-gray-400 mb-4"
          />
        )}
        <div className="text-sm space-y-2">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>LinkedIn:</strong> {linkedIn}</p>
          <p><strong>Location:</strong> {location}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-5 bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
        {workExperience.map((exp, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{exp.company}</p>
            <p className="text-sm">{exp.role} ({exp.duration})</p>
          </div>
        ))}

        <h3 className="text-lg font-semibold mt-6 mb-2">Education</h3>
        {education.map((edu, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{edu.institution}</p>
            <p className="text-sm">{edu.degree}, {edu.year}</p>
          </div>
        ))}

        <h3 className="text-lg font-semibold mt-6 mb-2">References</h3>
        {references.map((ref, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{ref.name}</p>
            <p className="text-sm">{ref.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template13;
