// src/components/templates/MinimalistTemplate2.jsx
import React from "react";

const MinimalistTemplate2 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;

  // Group skills by category
  const groupedSkills = skills.items.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div
      className="min-h-screen grid grid-cols-1 lg:grid-cols-4"
      style={{ fontFamily: styling.fontFamily, color: styling.textColor }}
    >
      {/* Sidebar */}
      <aside
        className="p-6 lg:p-10 bg-gray-50 border-r flex flex-col items-center"
        style={{ backgroundColor: "#f9fafb" }}
      >
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-32 h-32 rounded-full object-cover mb-6 border-4"
            style={{ borderColor: styling.primaryColor }}
          />
        )}
        <h1
          className="text-4xl font-bold text-center mb-2"
          style={{ color: styling.primaryColor }}
        >
          {about.name || title}
        </h1>
        <h2
          className="text-3xl text-center mb-4"
          style={{ color: styling.secondaryColor }}
        >
          {about.title}
        </h2>
        <p className="text-lg text-center leading-relaxed">
          {about.description}
        </p>
        <div className="mt-6 text-xl text-center space-y-2">
          {about.email && <p>📧 {about.email}</p>}
          {about.phone && <p>📱 {about.phone}</p>}
          {about.location && <p>📍 {about.location}</p>}
        </div>
      </aside>

      {/* Content */}
      <main className="col-span-3 p-8 space-y-12">
        {/* Projects */}
        {projects.items.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.items.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{ color: styling.secondaryColor }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{p.description}</p>

                    {p.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded text-white"
                            style={{ backgroundColor: styling.secondaryColor }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="mt-auto flex gap-3">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-3 py-2 rounded text-white hover:opacity-90 transition"
                          style={{ backgroundColor: styling.primaryColor }}
                        >
                          Live Demo
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-3 py-2 border rounded hover:bg-gray-50 transition"
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
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.items.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              Experience
            </h2>
            <div className="space-y-6">
              {experience.items.map((exp) => (
                <div key={exp.id} className="border-l-4 pl-4">
                  <h3 className="font-semibold">
                    {exp.position} – {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </p>
                  <p className="text-sm mt-1 whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.items.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              Skills
            </h2>
            <div className="space-y-6">
              {Object.keys(groupedSkills).map((cat) => (
                <div key={cat}>
                  <h3 className="text-lg font-semibold mb-3">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {groupedSkills[cat].map((s) => (
                      <span
                        key={s.id}
                        className="px-3 py-1 text-sm rounded-full text-white"
                        style={{
                          backgroundColor:
                            s.level === "Expert"
                              ? "#10b981"
                              : s.level === "Advanced"
                              ? "#3b82f6"
                              : s.level === "Intermediate"
                              ? "#f59e0b"
                              : "#6b7280",
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact.email ||
          contact.linkedin ||
          contact.github ||
          contact.website) && (
          <section>
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              Contact
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 transition"
                >
                  📧 Email
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 transition"
                >
                  💼 LinkedIn
                </a>
              )}
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 transition"
                >
                  🐙 GitHub
                </a>
              )}
              {contact.website && (
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 transition"
                >
                  🌐 Website
                </a>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default MinimalistTemplate2;
