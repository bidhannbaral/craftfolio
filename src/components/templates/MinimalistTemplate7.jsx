import React from "react";

const MinimalistTemplate7 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const { about, projects, skills, experience, contact, achievements } = sections;
  const { milestones = [], certificates = [] } = achievements || {};

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
              {about.heroSubtext ||
                "Creating with passion, delivering with purpose."}
            </p>
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 rounded-lg font-medium border shadow"
                style={{
                  borderColor: styling.primaryColor,
                  color: styling.primaryColor,
                }}
              >
                Contact Me
              </a>
            )}
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-lg mx-auto"
            style={{ borderColor: styling.primaryColor }}
          />
        )}
        <div>
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
          <p className="text-sm text-gray-500">
            {about.email && (
              <>
                📧 {about.email} <br />
              </>
            )}
            {about.phone && (
              <>
                📞 {about.phone} <br />
              </>
            )}
            {about.location && <>📍 {about.location}</>}
          </p>
        </div>
      </section>

      {/* Milestones Section */}
      {milestones.length > 0 && (
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-12"
            style={{ color: styling.primaryColor }}
          >
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div
                key={m.id}
                className="p-6 bg-white rounded-lg shadow"
              >
                <h3
                  className="text-4xl font-extrabold mb-2"
                  style={{ color: styling.primaryColor }}
                >
                  {m.number}
                </h3>
                <p className="text-gray-600">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.items.length > 0 && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: styling.primaryColor }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.items.map((project) => (
              <div
                key={project.id}
                className="rounded-xl shadow bg-white overflow-hidden"
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
        </section>
      )}

      {/* Skills + Experience */}
      {(skills.items.length > 0 || experience.items.length > 0) && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Skills */}
            {skills.items.length > 0 && (
              <div className="flex-1">
                <h2
                  className="text-3xl font-bold mb-8"
                  style={{ color: styling.primaryColor }}
                >
                  Skills
                </h2>
                <div className="space-y-6">
                  {skills.items.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span className="text-sm text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width:
                              skill.level === "Expert"
                                ? "100%"
                                : skill.level === "Advanced"
                                ? "75%"
                                : skill.level === "Intermediate"
                                ? "50%"
                                : "25%",
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
                        {exp.startDate} -{" "}
                        {exp.current ? "Present" : exp.endDate}
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
      )}

      {/* Certificates */}
      {certificates.length > 0 && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: styling.primaryColor }}
          >
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: styling.primaryColor }}
                >
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline"
                    style={{ color: styling.primaryColor }}
                  >
                    View Certificate
                  </a>
                )}
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
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate7;
