import React, { useState } from "react";

const MinimalistTemplate6 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div
      className="min-h-screen antialiased"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Hero Banner & Profile */}
      <section className="relative flex flex-col items-center py-12 px-4 md:px-8 overflow-hidden">
        {/* Banner container */}
        <div className="relative w-full max-w-6xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
          {(about.heroBanner || about.heroBannerImage) && (
            <img
              src={about.heroBanner || about.heroBannerImage}
              alt="Hero Banner"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 opacity-20 hover:scale-105 opacity-90"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>

          {/* Profile Picture + Info */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-between p-8 md:p-12 pb-20">
            {/* Profile Picture */}
            {about.profileImage && (
              <div
                className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 md:border-8 shadow-2xl z-10 transition-transform duration-300 hover:scale-105 bg-white"
                style={{ borderColor: styling.primaryColor }}
              >
                <img
                  src={about.profileImage}
                  alt={about.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Name, Profession + Contact Info */}
            <div className="text-right text-white drop-shadow-lg">
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                {about.name || title}
              </h1>
              <h2 className="text-lg sm:text-2xl font-medium mt-2">
                {about.title}
              </h2>

              {/* Contact Info */}
              <div className="mt-4 space-y-1 text-sm sm:text-base opacity-90">
                {about.email && <p>📧 {about.email}</p>}
                {about.phone && <p>📱 {about.phone}</p>}
                {about.location && <p>📍 {about.location}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-6 mt-16 md:mt-0">
        <div className="flex-1 text-right mt-8 md:mt-0 md:pl-12">
          <p className="text-black-700 dark:text-black-300 leading-relaxed max-w-xl ml-auto">
            {about.description ||
              "Passionate professional eager to make an impact with creativity and clarity."}
          </p>
        </div>
        <div className="md:h-64 flex items-center justify-center md:pl-12">
          <h2
            className="text-xl font-bold opacity-70 whitespace-nowrap transform -rotate-90"
            style={{ color: styling.primaryColor }}
          >
            ABOUT ME
          </h2>
        </div>
      </section>

      {/* Projects */}
      {projects.items.length > 0 && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-12"
            style={{ color: styling.primaryColor }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.items.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl || "#"}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative rounded-2xl shadow-xl bg-white dark:bg-gray-800 overflow-hidden transform transition-all duration-300 ${
                  hoveredProject === project.id
                    ? "scale-125 z-20"
                    : hoveredProject
                    ? "opacity-50"
                    : "scale-100"
                }`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: styling.primaryColor }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Skills + Experience */}
      {(skills.items.length > 0 || experience.items.length > 0) && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Skills */}
            {skills.items.length > 0 && (
              <div className="flex-1">
                <h2
                  className="text-3xl font-bold mb-8"
                  style={{ color: styling.primaryColor }}
                >
                  Skills
                </h2>
                <div className="space-y-4">
                  {skills.items.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-sm text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-3 rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: skill.level,
                            backgroundColor: styling.primaryColor,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience */}
            {experience.items.length > 0 && (
              <div className="flex-1">
                <h2
                  className="text-3xl font-bold mb-8"
                  style={{ color: styling.primaryColor }}
                >
                  Work Experience
                </h2>
                <div className="space-y-8">
                  {experience.items.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-l-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                      style={{ borderLeftColor: styling.primaryColor }}
                    >
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact */}
      <footer className="py-12 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 hover:bg-white hover:text-gray-900"
              style={{ backgroundColor: styling.primaryColor }}
            >
              📧 Email
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 hover:bg-white hover:text-gray-900"
              style={{ backgroundColor: styling.primaryColor }}
            >
              🔗 LinkedIn
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 hover:bg-white hover:text-gray-900"
              style={{ backgroundColor: styling.primaryColor }}
            >
              💻 GitHub
            </a>
          )}
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate6;
