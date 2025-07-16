import React from 'react';

const Template9 = ({ data }) => {
  const {
    fullName = 'Your Name',
    profession = 'Your Profession',
    about = 'About you goes here...',
    profilePic,
    coverPic,
    email = 'example@email.com',
    phone = '123-456-7890',
    address = 'Your Address',
    interests = [],
    skills = [],
    education = [],
    experience = [],
    topicSection = [],
  } = data;

  const renderImage = (src, url, className) => {
    if (!src) return null;
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="topic" className={className} />
      </a>
    ) : (
      <img src={src} alt="topic" className={className} />
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-xl shadow-md text-gray-800">
      <div className="relative h-52 mb-36">
        {coverPic && (
          <img src={coverPic} alt="Cover" className="w-full h-full object-cover opacity-20 blur-sm absolute top-0 left-0 z-0" />
        )}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] pt-36 text-center bg-white rounded-xl shadow-lg z-10">
          {profilePic && (
            <img src={profilePic} alt="Profile" className="w-30 h-30 object-cover rounded-full border-4 border-white -mt-24 mx-auto mb-3 bg-white" />
          )}
          <h1 className="text-xl font-semibold">{fullName}</h1>
          <h3 className="text-md text-gray-600 mb-2">{profession}</h3>
          <p className="text-sm">{about}</p>
          <p className="text-sm"><strong>Email:</strong> {email}</p>
          <p className="text-sm"><strong>Phone:</strong> {phone}</p>
          <p className="text-sm"><strong>Address:</strong> {address}</p>
        </div>
      </div>

      {interests.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">My Interests</h2>
          <ul className="flex flex-wrap gap-2">
            {interests.map((int, i) => (
              <li key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{int}</li>
            ))}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          {skills.map((skill, i) => (
            <div key={i} className="mb-3">
              <span className="font-bold block mb-1">{skill.name}</span>
              <div className="bg-gray-200 h-2 rounded">
                <div className="bg-blue-600 h-full rounded" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">Work Experience</h2>
          <ul className="list-disc pl-6">
            {experience.map((exp, i) => <li key={i} className="mb-1 text-sm">{exp}</li>)}
          </ul>
        </div>
      )}

      {education.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <ul className="list-disc pl-6">
            {education.map((edu, i) => (
              <li key={i} className="mb-1 text-sm">
                <strong>{edu.degree}</strong> at {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {topicSection.length > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-2">Content</h2>
          {topicSection.map((topic, i) => (
            <div key={i} className={`flex flex-wrap items-center justify-between my-5 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1 p-3">
                <h3 className="text-md font-semibold mb-1 text-gray-800">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </div>
              {renderImage(topic.image, topic.url, 'w-64 h-40 object-cover rounded-lg m-2 flex-shrink-0')}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template9;
