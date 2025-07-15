import React from 'react';

const Template7 = ({ data }) => {
  if (!data) return null;

  const {
    fullName,
    profession,
    bio,
    coverPic,
    profilePic,
    email,
    phone,
    location,
    images = [],
    skills = [],
    education = [],
    workExperience = [],
  } = data;

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white border border-gray-300 rounded-lg font-sans text-gray-800">
      {/* Cover Picture */}
      {coverPic && (
        <div className="mb-6">
          <img
            src={coverPic}
            alt="cover"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      )}

      {/* Profile Info Section */}
      <div className="flex gap-5 items-start mb-8">
        <div className="w-36 h-36 border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {profilePic ? (
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400 text-sm">No Image</div>
          )}
        </div>

        <div className="flex-1">
          <p className="text-blue-600 font-semibold text-lg mb-1">
            {profession || 'Profession'}
          </p>
          <h1 className="text-3xl font-bold leading-tight mb-3">
            {fullName || 'Your Name'}
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            {bio || 'This is your bio. Tell the world who you are.'}
          </p>

          <div className="space-y-1 text-gray-700 text-sm">
            {email && <div>📧 {email}</div>}
            {phone && <div>📞 {phone}</div>}
            {location && <div>📍 {location}</div>}
          </div>

          
        </div>
      </div>

      {/* Collection (Scrollable Large Images) */}
      {images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Collection</h2>
          <div className="flex overflow-x-auto gap-5 pb-2">
            {images.map((img, idx) => (
              <a
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`collection-${idx}`}
                  className="h-48 rounded-lg object-cover transition-transform duration-200 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {education.map((e, i) => (
              <li key={i}>
                <strong>{e.institution}</strong> — {e.degree} ({e.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {workExperience.map((w, i) => (
              <li key={i}>
                <strong>{w.company}</strong> — {w.role} ({w.year})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Template7;
