import React from 'react';

const MinimalistTemplate2 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact } = sections;

  return (
    <div
      className="min-h-screen grid grid-cols-1 lg:grid-cols-4"
      style={{ fontFamily: styling.fontFamily, color: styling.textColor }}
    >
      {/* Sidebar */}
      <aside
        className="p-6 lg:p-10 bg-gray-50 border-r flex flex-col items-center"
        style={{ backgroundColor: '#f9fafb' }}
      >
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-28 h-28 rounded-full object-cover mb-6 border-4"
            style={{ borderColor: styling.primaryColor }}
          />
        )}
        <h1 className="text-2xl font-bold text-center mb-2" style={{ color: styling.primaryColor }}>
          {about.name || title}
        </h1>
        <h2 className="text-lg text-center mb-4" style={{ color: styling.secondaryColor }}>
          {about.title}
        </h2>
        <p className="text-sm text-center leading-relaxed">{about.description}</p>
        <div className="mt-6 text-xs text-center space-y-2">
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
            <h2 className="text-xl font-bold mb-4" style={{ color: styling.primaryColor }}>
              Projects
            </h2>
            <div className="space-y-6">
              {projects.items.map((p) => (
                <div key={p.id}>
                  <h3 className="font-semibold" style={{ color: styling.secondaryColor }}>
                    {p.title}
                  </h3>
                  <p className="text-sm">{p.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
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
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.items.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: styling.primaryColor }}>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.items.map((exp) => (
                <div key={exp.id}>
                  <h3 className="font-semibold">
                    {exp.position} – {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="text-sm mt-1 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.items.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: styling.primaryColor }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.items.map((s) => (
                <span
                  key={s.id}
                  className="px-3 py-1 text-sm rounded-full text-white"
                  style={{
                    backgroundColor:
                      s.level === 'Expert'
                        ? '#10b981'
                        : s.level === 'Advanced'
                        ? '#3b82f6'
                        : s.level === 'Intermediate'
                        ? '#f59e0b'
                        : '#6b7280',
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {(contact.email || contact.linkedin || contact.github || contact.website) && (
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: styling.primaryColor }}>
              Contact
            </h2>
            <div className="flex flex-col gap-2 text-sm">
              {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
              {contact.linkedin && <a href={contact.linkedin}>LinkedIn</a>}
              {contact.github && <a href={contact.github}>GitHub</a>}
              {contact.website && <a href={contact.website}>Website</a>}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default MinimalistTemplate2;
