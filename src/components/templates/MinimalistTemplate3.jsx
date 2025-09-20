import React, { useMemo, useState } from "react";

const MinimalistTemplate3 = ({ portfolio }) => {
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
      className="min-h-screen text-gray-800"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Hero Banner */}
      {(about.heroBanner || about.heroBannerImage) && (
        <div className="relative h-72 md:h-96 w-full">
          <img
            src={about.heroBanner || about.heroBannerImage}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* About Section */}
      <section className="relative -mt-20 text-center px-6">
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 shadow-lg mx-auto mb-6 bg-white object-cover"
            style={{ borderColor: styling.primaryColor }}
          />
        )}
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ color: styling.primaryColor }}
        >
          {about.name || title}
        </h1>
        <h2
          className="text-lg md:text-xl mb-4"
          style={{ color: styling.secondaryColor }}
        >
          {about.title}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          {about.description}
        </p>
      </section>

      {/* Main Content: Projects (Left) + Skills & Experience (Right) */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side - Projects */}
        {projects.items.length > 0 && (
          <div className="lg:col-span-2 space-y-8">
            <h2
              className="text-3xl font-bold mb-8 text-center lg:text-left"
              style={{ color: styling.primaryColor }}
            >
              Featured Projects
            </h2>
            {projects.items.map((project, index) => {
              const isActive = activeProject === index;
              return (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                    isActive ? "scale-[1.02] z-10" : "hover:scale-[1.01]"
                  }`}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: styling.primaryColor }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full text-white"
                            style={{ backgroundColor: styling.secondaryColor }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded text-white"
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
                          className="text-sm px-4 py-2 border rounded"
                          style={{
                            borderColor: styling.primaryColor,
                            color: styling.primaryColor,
                          }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Right Side - Skills & Experience */}
        <div className="space-y-12">
          {/* Skills */}
          {skills.items.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
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

          {/* Experience */}
          {experience.items.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: styling.primaryColor }}
              >
                Work Experience
              </h2>
              <div className="space-y-6">
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
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 px-6 text-center bg-gray-900 text-white">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: styling.primaryColor }}
        >
          Let's Connect
        </h2>
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
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate3;
