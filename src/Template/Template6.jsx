import React from 'react';

const Template6 = ({ data }) => {
  const {
    name,
    profession,
    photo,
    bio,
    slogan,
    hobbies,
    personality,
    phone,
    email,
    location,
    skills,
    education,
    projects,
    workExperience,
  } = data;

  return (
    <div className="max-w-[1200px] mx-auto my-8 bg-white p-8 rounded-lg shadow-xl text-gray-800 font-serif">
      {/* Top Profession Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wide mb-1">{profession || 'Your Profession'}</h1>
        <hr className="w-[150px] border-2 border-[#2c3e50] mx-auto rounded" />
      </header>

      <div className="flex gap-8 relative">
        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0 left-[33.33%] w-[2px] bg-gray-400"></div>
        <div className="absolute top-0 bottom-0 left-[66.66%] w-[2px] bg-gray-400"></div>

        {/* Left Column */}
        <div className="flex-1 pl-0 pr-8">
          {/* Skills */}
          <section className="mb-8">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-4 text-xl">Skills</h2>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium mb-1">{skill.name}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    disabled
                    className="w-full h-1 bg-gray-300 rounded appearance-none cursor-default accent-[#2c3e50]"
                  />
                  <span className="text-xs text-gray-600">{skill.level}%</span>
                </div>
              ))
            ) : (
              <p className="italic text-gray-400">No skills added.</p>
            )}
          </section>

          {/* Personality */}
          <section className="mb-8">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-2 text-xl">Personality</h2>
            <p>{personality || 'Kind, Creative, Curious'}</p>
          </section>

          {/* Slogan */}
          <section className="mb-8">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-2 text-xl">Slogan</h2>
            <p className="italic text-[#2c3e50]">{slogan || 'Your personal slogan'}</p>
          </section>

          {/* Education */}
          <section>
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-4 text-xl">Education</h2>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <div key={index} className="mb-2 text-sm">
                  🎓 {edu.degree} - {edu.institution} ({edu.year})
                </div>
              ))
            ) : (
              <p className="italic text-gray-400">No education details added.</p>
            )}
          </section>
        </div>

        {/* Middle Column */}
        <div className="flex-1 px-8 text-center">
          {/* Photo and Name */}
          <div className="mb-6">
            {photo ? (
              <img
                src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)}
                alt="Profile"
                className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-[#2c3e50] mb-4"
              />
            ) : (
              <div className="mx-auto w-40 h-40 bg-gray-300 rounded-full border-4 border-[#2c3e50] flex items-center justify-center text-gray-600 italic mb-4">
                No Photo
              </div>
            )}
            <h2 className="text-3xl font-bold tracking-wide">{name || 'Your Name'}</h2>
          </div>

          {/* Bio */}
          <section className="mb-6 text-left">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-2 text-xl">About Me</h2>
            <p>{bio || 'A short professional bio goes here.'}</p>
          </section>

          {/* Hobbies */}
          <section className="mb-6 text-left">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-2 text-xl">Hobbies</h2>
            <p>{hobbies || 'Reading, Traveling, Photography'}</p>
          </section>

          {/* Contact Info */}
          <section className="text-left">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-2 text-xl">Contact</h2>
            <p>📞 {phone || 'Not provided'}</p>
            <p>📧 {email || 'Not provided'}</p>
            <p>📍 {location || 'Not provided'}</p>
          </section>
        </div>

        {/* Right Column */}
        <div className="flex-1 pr-0 pl-8">
          {/* Projects */}
          <section className="mb-8">
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-4 text-xl">Projects</h2>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={index} className="mb-4 text-sm">
                  <p>{project.name}</p>
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full max-w-xs my-2 rounded shadow-md"
                    />
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Visit Project
                  </a>
                </div>
              ))
            ) : (
              <p className="italic text-gray-400">No projects added.</p>
            )}
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="font-serif font-bold border-b-2 border-[#2c3e50] pb-1 mb-4 text-xl">Work Experience</h2>
            {workExperience.length > 0 ? (
              workExperience.map((work, index) => (
                <div key={index} className="mb-2 text-sm">
                  💼 {work}
                </div>
              ))
            ) : (
              <p className="italic text-gray-400">No work experience added.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template6;
