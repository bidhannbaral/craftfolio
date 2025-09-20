import React from "react";

const MinimalistTemplate5 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;

  return (
    <div
      className="min-h-screen flex"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg p-6 flex flex-col">
        {/* Profile */}
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 shadow"
            style={{ borderColor: styling.primaryColor }}
          />
        )}
        <h1
          className="text-2xl font-bold text-center"
          style={{ color: styling.primaryColor }}
        >
          {about.name || title}
        </h1>
        <h2
          className="text-md font-medium text-center mb-4"
          style={{ color: styling.secondaryColor }}
        >
          {about.title}
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          {about.description}
        </p>

        {/* About Details */}
        <div className="mb-6 text-sm text-gray-700 space-y-1">
          {about.email && <p>📧 {about.email}</p>}
          {about.phone && <p>📞 {about.phone}</p>}
          {about.location && <p>📍 {about.location}</p>}
        </div>

        {/* Skills */}
        {skills.items.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: styling.primaryColor }}
            >
              Skills
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {skills.items.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Work Experience */}
        {experience.items.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: styling.primaryColor }}
            >
              Work Experience
            </h3>
            <div className="space-y-4 text-sm">
              {experience.items.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 rounded-lg border-l-4 bg-gray-50 shadow-sm"
                  style={{ borderLeftColor: styling.primaryColor }}
                >
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-xs text-gray-500">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </p>
                  <p className="text-gray-600 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="mt-auto">
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: styling.primaryColor }}
          >
            Contact
          </h3>
          <ul className="text-sm space-y-1 text-gray-700">
            {contact.email && <li>📧 {contact.email}</li>}
            {contact.phone && <li>📞 {contact.phone}</li>}
            {contact.linkedin && (
              <li>
                🔗{" "}
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  {contact.linkedin}
                </a>
              </li>
            )}
            {contact.github && (
              <li>
                💻{" "}
                <a href={contact.github} target="_blank" rel="noreferrer">
                  {contact.github}
                </a>
              </li>
            )}
            {contact.website && (
              <li>
                🌐{" "}
                <a href={contact.website} target="_blank" rel="noreferrer">
                  {contact.website}
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-gray-50">
        <h2
          className="text-2xl font-bold mb-8 text-center"
          style={{ color: styling.primaryColor }}
        >
          My Work
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: styling.primaryColor }}
                >
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-sm text-gray-600">{project.description}</p>
                )}
                <div className="flex gap-3 mt-3 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-white"
                      style={{ backgroundColor: styling.primaryColor }}
                    >
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border rounded"
                      style={{
                        borderColor: styling.primaryColor,
                        color: styling.primaryColor,
                      }}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MinimalistTemplate5;
