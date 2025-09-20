// src/components/templates/MinimalistTemplate8.jsx
import React, { useState } from "react";

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

  const [hoveredProject, setHoveredProject] = useState(null);

  // Group skills by category
  const groupedSkills = skills.items.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  // Skill bar width
  const getSkillWidth = (level) => {
    switch (level) {
      case "Expert":
        return "100%";
      case "Advanced":
        return "75%";
      case "Intermediate":
        return "50%";
      case "Beginner":
        return "25%";
      default:
        return "0%";
    }
  };

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
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#skills">Skills & Experience</a>
          <a href="#projects">Projects</a>
          {socialProof?.trustedBy?.length > 0 ||
          socialProof?.feedback?.length > 0 ? (
            <a href="#social">Social Proof</a>
          ) : null}
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
          <p className="text-gray-600 leading-relaxed mb-4">
            {about.description}
          </p>
          <p className="text-sm text-gray-500">
            {about.email && <>📧 {about.email} <br /></>}
            {about.phone && <>📞 {about.phone} <br /></>}
            {about.location && <>📍 {about.location} <br /></>}
          </p>
        </section>

        {/* Achievements below About */}
        {achievements?.milestones?.length > 0 && (
          <section id="achievements" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Achievements
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {achievements.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="min-w-[220px] max-w-[260px] p-6 bg-white rounded-lg shadow text-center"
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

        {/* Skills + Experience side by side */}
        {(skills.items.length > 0 || experience.items.length > 0) && (
          <section id="skills" className="p-12">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Skills & Experience
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Skills grouped by category */}
              {skills.items.length > 0 && (
                <div className="flex-1">
                  {Object.keys(groupedSkills).map((cat) => (
                    <div key={cat} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{cat}</h3>
                      <div className="space-y-4">
                        {groupedSkills[cat].map((s) => (
                          <div key={s.id}>
                            <div className="flex justify-between mb-1">
                              <span>{s.name}</span>
                              <span className="text-sm text-gray-500">
                                {s.level}
                              </span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full">
                              <div
                                className="h-3 rounded-full"
                                style={{
                                  width: getSkillWidth(s.level),
                                  backgroundColor: styling.primaryColor,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience */}
              {experience.items.length > 0 && (
                <div className="flex-1">
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
        )}

        {/* Projects */}
        {projects.items.length > 0 && (
          <section id="projects" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.items.map((p, idx) => (
                <div
                  key={p.id}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`bg-white rounded-lg overflow-hidden transform transition duration-300 ${
                    hoveredProject === idx
                      ? "scale-125 z-20"
                      : hoveredProject !== null
                      ? "blur-sm"
                      : "scale-100"
                  }`}
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3
                      className="font-semibold text-xl mb-2"
                      style={{ color: styling.primaryColor }}
                    >
                      {p.title}
                    </h3>
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

        {/* Social Proof */}
        {(socialProof?.trustedBy?.length > 0 ||
          socialProof?.feedback?.length > 0) && (
          <section id="social" className="p-12">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Trusted By & Feedback
            </h2>

            {/* Trusted By */}
            {socialProof?.trustedBy?.length > 0 && (
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {socialProof.trustedBy.map((item) => (
                  <img
                    key={item.id}
                    src={item.logo}
                    alt="Trusted logo"
                    className="h-20 object-contain grayscale"
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
                    className="p-6 bg-white rounded-lg shadow text-left"
                  >
                    {fb.avatar && (
                      <img
                        src={fb.avatar}
                        alt="Client avatar"
                        className="w-16 h-16 rounded-full mb-4 object-cover"
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
          <section id="certificates" className="p-12 bg-gray-50">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: styling.primaryColor }}
            >
              Certificates
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((c, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg shadow">
                  <h3
                    className="font-semibold text-xl mb-2"
                    style={{ color: styling.primaryColor }}
                  >
                    {c.title}
                  </h3>
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
        </section>
      </main>
    </div>
  );
};

export default MinimalistTemplate8;
