// src/components/templates/MinimalistTemplate8.jsx
import React from "react";

const MinimalistTemplate8 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const {
    about,
    projects,
    skills,
    experience,
    achievements,
    certificates,
    socialProof,
    contact,
  } = sections;

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
      <aside
        className="w-72 bg-gray-900 text-white flex-shrink-0 p-6 flex flex-col items-center sticky top-0 h-screen"
        style={{ backgroundColor: styling.primaryColor }}
      >
        {about.profileImage && (
          <img
            src={about.profileImage}
            alt={about.name}
            className="w-32 h-32 rounded-full border-4 mb-4 object-cover"
            style={{ borderColor: styling.secondaryColor }}
          />
        )}
        <h2 className="text-2xl font-bold mb-1">{about.name || title}</h2>
        <p className="text-sm opacity-80 mb-6">{about.title}</p>

        {/* Quick Nav */}
        <nav className="flex flex-col space-y-3 w-full">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          {achievements?.milestones?.length > 0 && <a href="#achievements">Achievements</a>}
          {(socialProof?.trustedBy?.length > 0 || socialProof?.feedback?.length > 0) && (
            <a href="#social">Social Proof</a>
          )}
          {certificates?.length > 0 && <a href="#certificates">Certificates</a>}
          <a href="#contact">Contact</a>
        </nav>

        {/* Contact Buttons */}
        <div className="mt-auto space-y-2 w-full">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="block text-center py-2 bg-white text-black rounded"
            >
              Email
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 border border-white rounded"
            >
              LinkedIn
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 border border-white rounded"
            >
              GitHub
            </a>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* About */}
        <section id="about" className="p-12">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: styling.primaryColor }}
          >
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">{about.description}</p>
        </section>

        {/* Projects */}
        {projects.items.length > 0 && (
          <section id="projects" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10"
              style={{ color: styling.primaryColor }}
            >
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.items.map((p) => (
                <div
                  key={p.id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                    <div className="flex gap-3 text-sm">
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                        >
                          Live
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
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

        {/* Skills */}
        {skills.items.length > 0 && (
          <section id="skills" className="p-12">
            <h2
              className="text-3xl font-bold mb-10"
              style={{ color: styling.primaryColor }}
            >
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.items.map((s) => (
                <div key={s.id}>
                  <div className="flex justify-between mb-2">
                    <span>{s.name}</span>
                    <span className="text-sm text-gray-500">{s.level}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width:
                          s.level === "Expert"
                            ? "100%"
                            : s.level === "Advanced"
                            ? "75%"
                            : s.level === "Intermediate"
                            ? "50%"
                            : "25%",
                        backgroundColor: styling.primaryColor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.items.length > 0 && (
          <section id="experience" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10"
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
          </section>
        )}

        {/* Achievements */}
        {achievements?.milestones?.length > 0 && (
          <section id="achievements" className="p-12">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {achievements.milestones.map((m, idx) => (
                <div key={idx} className="p-6 bg-white shadow rounded-lg">
                  <h3 className="text-3xl font-extrabold">{m.number}</h3>
                  <p className="text-sm text-gray-600">{m.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Social Proof */}
        {(socialProof?.trustedBy?.length > 0 ||
          socialProof?.feedback?.length > 0) && (
          <section id="social" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Trusted By & Feedback
            </h2>

            {/* Trusted By */}
            {socialProof?.trustedBy?.length > 0 && (
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {socialProof.trustedBy.map((item) => (
                  <img
                    key={item.id}
                    src={item.logo}
                    alt="Trusted logo"
                    className="h-12 object-contain grayscale"
                  />
                ))}
              </div>
            )}

            {/* Feedback */}
            {socialProof?.feedback?.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {socialProof.feedback.map((fb) => (
                  <div
                    key={fb.id}
                    className="p-6 bg-white rounded-lg shadow text-center"
                  >
                    {fb.avatar && (
                      <img
                        src={fb.avatar}
                        alt="Client avatar"
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      />
                    )}
                    {fb.message && (
                      <p className="text-gray-600 italic">“{fb.message}”</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Certificates */}
        {certificates?.length > 0 && (
          <section id="certificates" className="p-12">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Certificates
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((c, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg shadow">
                  <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
                  <p className="text-gray-600">{c.issuer}</p>
                  <p className="text-sm text-gray-500">{c.date}</p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm underline mt-2 inline-block"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="contact" className="p-12 bg-gray-900 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4">I’d love to connect with you.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 rounded bg-white text-black"
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
        </section>
      </main>
    </div>
  );
};

export default MinimalistTemplate8;
