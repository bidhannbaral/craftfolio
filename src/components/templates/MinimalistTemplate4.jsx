import React, { useState, useMemo } from "react";

const MinimalistTemplate4 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;
  const [activeProject, setActiveProject] = useState(null);

  // Group skills by category
  const groupedSkills = useMemo(() => {
    const groups = {};
    skills.items.forEach((skill) => {
      const cat = skill.category || "Other";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(skill);
    });
    return groups;
  }, [skills.items]);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Hero Banner */}
      {(about.heroBanner || about.heroBannerImage) && (
        <div className="relative h-[80vh] flex items-center justify-center text-center text-white">
          <img
            src={about.heroBanner || about.heroBannerImage}
            alt="Hero Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-6">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ color: styling.primaryColor }}
            >
              {about.heroHeadline || about.name || title}
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              {"Creating with passion, delivering with purpose."}
            </p>
          </div>
        </div>
      )}

      {/* About + Skills side by side */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* About Section */}
        <div>
          {about.profileImage && (
            <img
              src={about.profileImage}
              alt={about.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-lg mb-6"
              style={{ borderColor: styling.primaryColor }}
            />
          )}
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: styling.primaryColor }}
          >
            {about.name}
          </h2>
          <h3
            className="text-xl font-medium mb-4"
            style={{ color: styling.secondaryColor }}
          >
            {about.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {about.description}
          </p>
        </div>

        {/* Skills Section */}
        {skills.items.length > 0 && (
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: styling.primaryColor }}
            >
              Skills
            </h2>
            <div className="space-y-8">
              {Object.keys(groupedSkills).map((cat) => (
                <div key={cat}>
                  <h3 className="text-lg font-semibold mb-4">{cat}</h3>
                  <div className="flex flex-wrap gap-3">
                    {groupedSkills[cat].map((skill) => (
                      <span
                        key={skill.id}
                        className="px-3 py-2 rounded-lg text-sm shadow bg-white border"
                        style={{ borderColor: styling.primaryColor }}
                      >
                        {skill.name}{" "}
                        <span className="text-xs text-gray-500">
                          ({skill.level})
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Projects Section - Hover expand + blur background */}
      {projects.items.length > 0 && (
        <section className="py-16 bg-gray-50 relative">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: styling.primaryColor }}
          >
            Projects
          </h2>
          <div className="flex gap-16 overflow-x-auto px-6 md:px-20 pb-6 scrollbar-hide h-[32rem] items-center">
            {projects.items.map((project, index) => {
              const isActive = activeProject === index;
              return (
                <div
                  key={project.id}
                  className={`flex-shrink-0 w-80 md:w-96 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 relative ${
                    isActive
                      ? "scale-140 z-20"
                      : "scale-95 opacity-70 hover:opacity-90"
                  }`}
                  style={{
                    filter:
                      activeProject !== null && !isActive ? "blur(4px)" : "none",
                  }}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
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
                      className="text-xl font-semibold mb-2"
                      style={{ color: styling.primaryColor }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex gap-3 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded text-white"
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
              );
            })}
          </div>
        </section>
      )}

      {/* Experience Section - Side by side cards */}
      {experience.items.length > 0 && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: styling.primaryColor }}
          >
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.items.map((exp) => (
              <div
                key={exp.id}
                className="p-6 bg-white rounded-lg shadow border-l-4"
                style={{ borderLeftColor: styling.primaryColor }}
              >
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                <p className="text-gray-600 whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <footer className="py-16 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 rounded text-white"
              style={{ backgroundColor: styling.primaryColor }}
            >
              Email
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded"
            >
              LinkedIn
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded"
            >
              GitHub
            </a>
          )}
          {contact.website && (
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded"
            >
              Website
            </a>
          )}
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate4;
