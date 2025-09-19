// src/components/templates/MinimalistTemplate10.jsx
import React from "react";

const MinimalistTemplate10 = ({ portfolio }) => {
  const { sections, styling, title } = portfolio;
  const {
    about,
    skills,
    experience,
    achievements,
    projects,
    contact,
    socialProof,
    media,
  } = sections;

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: styling.fontFamily,
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
      }}
    >
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${about.heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto w-full px-8 flex justify-end">
          <div className="bg-white/80 p-6 rounded-lg shadow-lg max-w-md">
            {about.profileImage && (
              <img
                src={about.profileImage}
                alt={about.name}
                className="w-28 h-28 rounded-full mb-4 object-cover mx-auto"
              />
            )}
            <h1 className="text-3xl font-bold text-center mb-2">
              {about.name || title}
            </h1>
            <p className="text-center text-gray-700 mb-4">{about.title}</p>
            <p className="text-sm text-gray-600">{about.description}</p>
          </div>
        </div>
      </section>

      {/* First Video Section */}
      {media?.videos?.length > 0 && (
        <section className="p-12 bg-gray-50">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: styling.primaryColor }}
          >
            Showreel
          </h2>
          <div className="flex justify-center">
            <iframe
              src={media.videos[0].url}
              title="Showreel"
              className="w-full md:w-3/4 h-96 rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Milestones */}
      {achievements?.milestones?.length > 0 && (
        <section className="p-12">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: styling.primaryColor }}
          >
            Milestones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.milestones.map((m, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-3xl font-extrabold">{m.number}</h3>
                <p className="text-sm text-gray-600">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Second Video Section */}
      {media?.videos?.length > 1 && (
        <section className="p-12 bg-gray-50">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: styling.primaryColor }}
          >
            Featured Performance
          </h2>
          <div className="flex justify-center">
            <iframe
              src={media.videos[1].url}
              title="Performance"
              className="w-full md:w-3/4 h-96 rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Skills + Experience Side by Side */}
      <section className="grid md:grid-cols-2 gap-12 p-12">
        {/* Skills */}
        {skills.items.length > 0 && (
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: styling.primaryColor }}
            >
              Skills
            </h2>
            <div className="space-y-4">
              {skills.items.map((s) => (
                <div key={s.id}>
                  <div className="flex justify-between mb-2">
                    <span>{s.name}</span>
                    <span className="text-sm text-gray-500">{s.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full"
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
          </div>
        )}

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
                  className="p-4 bg-white rounded-lg shadow border-l-4"
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
      </section>

      {/* ✅ Photo Gallery using media.images */}
      {media?.images?.length > 0 && (
        <section className="p-12 bg-gray-50">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: styling.primaryColor }}
          >
            Gallery
          </h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {media.images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={`Gallery ${idx}`}
                className="h-60 rounded-lg shadow flex-shrink-0"
              />
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.items.length > 0 && (
        <section id="projects" className="p-12">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: styling.primaryColor }}
          >
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.items.map((p) => (
              <div key={p.id} className="bg-white shadow rounded-lg overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="p-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
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
        </div>
      </section>
    </div>
  );
};

export default MinimalistTemplate10;
