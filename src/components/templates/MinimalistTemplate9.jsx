// src/components/templates/MinimalistTemplate9.jsx
import React from "react";

const MinimalistTemplate9 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const {
    about,
    projects, // used as "articles"
    skills,
    experience,
    achievements,
    socialProof,
    contact,
  } = sections;

  const { milestones = [], certificates = [] } = achievements || {};

  // Group skills by category
  const groupedSkills = skills.items.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

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
      className="min-h-screen"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Articles Section */}
      {projects.items.length > 0 && (
        <section id="articles" className="p-12 bg-gray-50">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: styling.primaryColor }}
          >
            Published Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.items.map((a) => (
              <div
                key={a.id}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                {a.image && (
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2">{a.title}</h3>
                  {a.description && (
                    <p className="text-sm text-gray-600 mb-3">{a.description}</p>
                  )}
                  <div className="text-sm text-gray-500 mb-2">
                    {a.publishDate && (
                      <p>
                        <strong>Published:</strong> {a.publishDate}
                      </p>
                    )}
                    {a.publication && (
                      <p>
                        <strong>Source:</strong> {a.publication}
                      </p>
                    )}
                  </div>
                  {a.liveUrl && (
                    <a
                      href={a.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      Read Article
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Two Column Layout */}
      <section className="grid md:grid-cols-2 gap-12 p-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Skills (grouped) */}
          {skills.items.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: styling.primaryColor }}
              >
                Skills
              </h2>
              {Object.keys(groupedSkills).map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="space-y-4">
                    {groupedSkills[category].map((s) => (
                      <div key={s.id}>
                        <div className="flex justify-between mb-2">
                          <span>{s.name}</span>
                          <span className="text-sm text-gray-500">
                            {s.level}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 rounded-full"
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

          {/* Achievements horizontal */}
          {milestones.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: styling.primaryColor }}
              >
                Achievements
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white shadow rounded-lg text-center w-48"
                  >
                    <h3
                      className="text-3xl font-extrabold"
                      style={{ color: styling.primaryColor }}
                    >
                      {m.number}
                    </h3>
                    <p className="text-sm text-gray-600">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* About */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              About Me
            </h2>
            {about.profileImage && (
              <img
                src={about.profileImage}
                alt={about.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
            )}
            <h3 className="text-xl font-semibold">{about.name || title}</h3>
            <p className="text-sm text-gray-500 mb-4">{about.title}</p>
            <p className="text-gray-600 mb-4">{about.description}</p>
            <p className="text-sm text-gray-500">
              {about.email && <>📧 {about.email} <br /></>}
              {about.phone && <>📞 {about.phone} <br /></>}
              {about.location && <>📍 {about.location}</>}
            </p>
          </div>
        </div>
      </section>

      {/* Experience + Certificates side by side */}
      {(experience.items.length > 0 || certificates.length > 0) && (
        <section className="grid md:grid-cols-2 gap-12 p-12 bg-gray-50">
          {/* Experience */}
          {experience.items.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: styling.primaryColor }}
              >
                Experience
              </h2>
              <div className="space-y-6">
                {experience.items.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 bg-white rounded-lg shadow border-l-4"
                    style={{ borderLeftColor: styling.primaryColor }}
                  >
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates (from achievements) */}
          {certificates.length > 0 && (
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: styling.primaryColor }}
              >
                Certificates
              </h2>
              <div className="space-y-6">
                {certificates.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-lg shadow"
                  >
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
            </div>
          )}
        </section>
      )}

      {/* Social Proof */}
      {(socialProof?.trustedBy?.length > 0 ||
        socialProof?.feedback?.length > 0) && (
        <section id="social" className="p-12">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: styling.primaryColor }}
          >
            Trusted By & Feedback
          </h2>
          {socialProof.trustedBy?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialProof.trustedBy.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.logo}
                  alt="Trusted logo"
                  className="h-16 object-contain grayscale"
                />
              ))}
            </div>
          )}
          {socialProof.feedback?.length > 0 && (
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

      {/* Contact */}
      <section id="contact" className="p-12 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">Let’s connect and collaborate on stories.</p>
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
          {contact.twitter && (
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded"
            >
              Twitter
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default MinimalistTemplate9;
