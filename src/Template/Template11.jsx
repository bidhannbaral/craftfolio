import React from 'react';

const Template11 = ({ data }) => {
  if (!data) return null;

  const {
    fullName,
    profession,
    bio,
    profilePic,
    coverPhoto,
    phone,
    email,
    location,
    personality = [],
    skills = [],
    topics = [],
  } = data;

  return (
    <div className="text-gray-800 font-sans">
      {coverPhoto && (
        <div>
          <img
            src={URL.createObjectURL(coverPhoto)}
            alt="Cover"
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      {profilePic && (
        <div className="flex justify-center -mt-16 mb-4">
          <img
            src={URL.createObjectURL(profilePic)}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover bg-white"
          />
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">{fullName || 'Your Name'}</h1>
        <h2 className="text-xl text-gray-600">{profession || 'Your Profession'}</h2>
        <p className="mt-2">{bio || 'Your bio goes here...'}</p>
        <div className="mt-4 space-y-1 text-sm text-gray-700">
          <p><strong>Phone:</strong> {phone || 'N/A'}</p>
          <p><strong>Email:</strong> {email || 'N/A'}</p>
          <p><strong>Location:</strong> {location || 'N/A'}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-2">Personality Traits</h3>
          <ul className="list-disc list-inside space-y-1">
            {personality.map((trait, i) => (
              <li key={i}>{trait}</li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4">
        <h3 className="text-xl font-bold mb-4">Topics</h3>
        {topics.map((topic, index) => (
          <div key={index} className="mb-10">
            <div className="mb-3">
              <h4 className="text-lg font-semibold">{topic.title}</h4>
              <p className="text-gray-700">{topic.description}</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-3">
              {topic.images.map((img, i) => (
                <div key={i} className="min-w-[150px] flex-shrink-0 text-center">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Topic ${index}-${i}`}
                    className="w-full h-28 object-cover rounded-md"
                  />
                  {topic.urls[i] && (
                    <a
                      href={topic.urls[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm block mt-1 underline"
                    >
                      View More
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template11;
