import React from 'react';

const Template8 = ({ data }) => {
  const {
    fullName = 'Your Name',
    profession = 'Your Profession',
    bio = 'A brief bio about yourself goes here.',
    profilePic,
    email = 'example@email.com',
    phone = '123-456-7890',
    location = 'Your City, Country',
    topicSection = [],
  } = data;

  const renderImage = (image, url, extraClass = '') => {
    if (!image) return null;

    const img = (
      <img
        src={image}
        alt="topic"
        className={`w-52 h-[330px] object-contain rounded-lg shadow-md ${extraClass}`}
      />
    );

    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    ) : (
      img
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-sans">
      {/* Header */}
      <div className="flex gap-8 items-center mb-10">
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-600"
          />
        )}
        <div className="flex-1">
          <h2 className="text-blue-600 font-bold text-lg uppercase tracking-wide">{profession}</h2>
          <h1 className="text-3xl font-extrabold text-gray-900">{fullName}</h1>
          <p className="text-gray-600 mt-2">{bio}</p>
          <div className="mt-3 text-sm text-gray-700">
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Location:</strong> {location}</p>
          </div>
        </div>
      </div>

      {/* Topics */}
      {topicSection.length > 0 && (
        <div className="flex flex-col gap-10">
          {topicSection.map((topic, i) => (
            <div
              key={i}
              className={`flex items-center gap-6 ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <h3 className="text-blue-600 text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-700">{topic.description}</p>
              </div>
              {renderImage(topic.image, topic.url)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Template8;
