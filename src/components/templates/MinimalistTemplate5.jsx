import React from "react";

const MinimalistTemplate5 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, contact } = sections;

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
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg p-6 md:sticky md:top-0 md:h-screen">
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

        {/* Contact */}
        <div>
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: styling.primaryColor }}
          >
            Contact
          </h3>
          <ul className="text-sm space-y-1 text-gray-700">
            {contact.email && <li>📧 {contact.email}</li>}
            {contact.phone && <li>📞 {contact.phone}</li>}
            {contact.linkedin && <li>🔗 {contact.linkedin}</li>}
            {contact.github && <li>💻 {contact.github}</li>}
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
