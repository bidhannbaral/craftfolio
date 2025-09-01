import React from 'react';

const MinimalistTemplate = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;

  const customStyles = {
    '--primary-color': styling.primaryColor,
    '--secondary-color': styling.secondaryColor,
    '--text-color': styling.textColor,
    '--bg-color': styling.backgroundColor,
    fontFamily: styling.fontFamily,
  };

  return (
    <div 
      className="min-h-screen text-gray-800"
      style={{
        ...customStyles,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Header Section */}
      <header className="py-20 px-8 text-center" style={{ backgroundColor: styling.backgroundColor }}>
        <div className="max-w-4xl mx-auto">
          {about.profileImage && (
            <img
              src={about.profileImage}
              alt={about.name}
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4"
              style={{ borderColor: styling.primaryColor }}
            />
          )}
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: styling.primaryColor }}
          >
            {about.name || title}
          </h1>
          <h2 
            className="text-2xl mb-6"
            style={{ color: styling.secondaryColor }}
          >
            {about.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            {about.description}
          </p>
          {(about.email || about.location) && (
            <div className="flex justify-center gap-6 mt-8 text-sm">
              {about.email && (
                <span className="flex items-center gap-2">
                  <span>📧</span> {about.email}
                </span>
              )}
              {about.location && (
                <span className="flex items-center gap-2">
                  <span>📍</span> {about.location}
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Projects Section */}
      {projects.items.length > 0 && (
        <section className="py-16 px-8" style={{ backgroundColor: '#f8fafc' }}>
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ color: styling.primaryColor }}
            >
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.items.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 
                      className="text-xl font-semibold mb-3"
                      style={{ color: styling.primaryColor }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs rounded-full text-white"
                              style={{ backgroundColor: styling.secondaryColor }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: styling.primaryColor }}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 border rounded hover:bg-gray-50 transition-colors"
                          style={{ borderColor: styling.primaryColor, color: styling.primaryColor }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.items.length > 0 && (
        <section className="py-16 px-8" style={{ backgroundColor: '#f8fafc' }}>
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ color: styling.primaryColor }}
            >
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.items.map((exp) => (
                <div 
                  key={exp.id} 
                  className="bg-white rounded-lg shadow-md p-6 border-l-4"
                  style={{ borderLeftColor: styling.primaryColor }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 
                        className="text-xl font-semibold mb-1"
                        style={{ color: styling.primaryColor }}
                      >
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.startDate ? new Date(exp.startDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Start Date'} - {' '}
                      {exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'End Date')}
                    </div>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skills.items.length > 0 && (
        <section className="py-16 px-8" style={{ backgroundColor: styling.backgroundColor }}>
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ color: styling.primaryColor }}
            >
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.items.map((skill) => (
                <div
                  key={skill.id}
                  className="text-center p-4 rounded-lg border-2"
                  style={{ borderColor: styling.primaryColor + '20' }}
                >
                  <div className="font-semibold mb-2" style={{ color: styling.primaryColor }}>
                    {skill.name}
                  </div>
                  <div 
                    className="text-sm px-2 py-1 rounded text-white"
                    style={{ 
                      backgroundColor: 
                        skill.level === 'Expert' ? '#10b981' :
                        skill.level === 'Advanced' ? '#3b82f6' :
                        skill.level === 'Intermediate' ? '#f59e0b' :
                        '#6b7280'
                    }}
                  >
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <footer className="py-16 px-8 text-center" style={{ backgroundColor: '#1f2937', color: 'white' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: styling.primaryColor }}>
            Let's Connect
          </h2>
          <p className="text-lg mb-8">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 rounded text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: styling.primaryColor }}
              >
                Email Me
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white rounded text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white rounded text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate;
