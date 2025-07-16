import React from 'react';

const Template2 = ({ user }) => {
  return (
    <div
      className="p-8 font-sans text-gray-800"
      style={{ backgroundColor: user.color || '#F7F6F2' }}
    >
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-4xl m-0">{user.name || 'Your Name'}</h1>
          <h2 className="text-xl text-gray-600 my-2">{user.profession || 'Your Profession'}</h2>
          {user.slogan && (
            <p className="italic mb-2 text-gray-700">"{user.slogan}"</p>
          )}
          <p className="text-blue-600 font-medium">{user.email || 'you@example.com'}</p>
        </div>
        <div className="w-40 h-40 flex-shrink-0">
          {user.photo && (
            <img
              src={user.photo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-gray-300"
            />
          )}
        </div>
      </div>

      {/* About, Personality, Behavior Sections */}
      <div className="space-y-6">
        <section>
          <h3 className="mb-2 text-green-700 text-xl font-semibold">About Me</h3>
          <p>{user.bio || 'This is a detailed description about you.'}</p>
        </section>

        {user.personality && (
          <section>
            <h3 className="mb-2 text-green-700 text-xl font-semibold">Personality</h3>
            <p>{user.personality}</p>
          </section>
        )}

        {user.behavior && (
          <section>
            <h3 className="mb-2 text-green-700 text-xl font-semibold">Behavior</h3>
            <p>{user.behavior}</p>
          </section>
        )}
      </div>

      {/* Skills & Education */}
      <div className="flex flex-wrap justify-between gap-8 mt-8">
        <div className="flex-1 min-w-[220px]">
          <h3 className="mb-2 text-green-700 text-xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            {user.skills?.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[220px]">
          <h3 className="mb-2 text-green-700 text-xl font-semibold">Education</h3>
          <ul className="list-disc list-inside">
            {user.education?.map((edu, i) => (
              <li key={i}>
                <strong>{edu.degree}</strong>
                <br />
                {edu.institution} - {edu.year}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-8">
        <h3 className="text-green-700 text-xl font-semibold mb-2">Work Experience</h3>
        <ul className="list-square list-inside">
          {user.works?.map((work, i) => (
            <li key={i}>
              <strong>{work.title}</strong>: {work.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="mt-8">
        <h3 className="text-green-700 text-xl font-semibold mb-2">Projects</h3>
        <ul className="list-square list-inside space-y-4">
          {user.projects?.map((project, i) => (
            <li key={i}>
              <strong>{project.title}</strong>: {project.description}
              <br />
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              )}
              {project.image && (
                <img
                  src={project.image}
                  alt="Project"
                  className="block mt-2 max-w-[220px] rounded-lg border-2 border-gray-300"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template2;
