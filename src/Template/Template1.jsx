import React from 'react';

const Template1 = ({ user }) => {
  const {
    fullName,
    profession,
    bio,
    profilePhoto,
    email,
    phone,
    location,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    socialLinks,
    skills,
    education,
    experience,
    projects,
  } = user;

  return (
    <div
      className="max-w-[900px] mx-auto font-sans leading-relaxed shadow-md rounded-xl bg-white p-8"
      style={{ '--primary': primaryColor, '--secondary': secondaryColor, '--tertiary': tertiaryColor }}
    >
      <div className="flex flex-wrap gap-8">
        {/* Left Box */}
        <div className="flex-1 max-w-[300px] border-r-2 pr-6" style={{ borderColor: 'var(--secondary)' }}>
          {/* Profile Photo */}
          <div className="text-center mb-6">
            {profilePhoto ? (
              <img
                src={URL.createObjectURL(profilePhoto)}
                alt="Profile"
                className="w-[150px] h-[150px] rounded-full object-cover border-4 mx-auto"
                style={{ borderColor: 'var(--secondary)' }}
              />
            ) : (
              <div
                className="w-[150px] h-[150px] rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto"
                style={{ backgroundColor: secondaryColor }}
              >
                {fullName ? fullName[0].toUpperCase() : '?'}
              </div>
            )}
          </div>

          <h1 className="text-center mb-1 font-bold text-xl" style={{ color: 'var(--secondary)' }}>
            {fullName || 'Your Name'}
          </h1>
          <h3 className="text-center mb-6 font-normal" style={{ color: 'var(--tertiary)' }}>
            {profession || 'Your Profession'}
          </h3>

          {/* Contact */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>
              Contact
            </h2>
            <ul className="text-sm space-y-1" style={{ color: 'var(--tertiary)' }}>
              {email && <li><strong style={{ color: 'var(--secondary)' }}>Email:</strong> {email}</li>}
              {phone && <li><strong style={{ color: 'var(--secondary)' }}>Phone:</strong> {phone}</li>}
              {location && <li><strong style={{ color: 'var(--secondary)' }}>Location:</strong> {location}</li>}
            </ul>
          </section>

          {/* Social Links */}
          {socialLinks?.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>
                Social Links
              </h2>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ platform, url }, i) => (
                  url && (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold py-1.5 px-3 rounded-full shadow hover:opacity-80 transition-all"
                      style={{ backgroundColor: primaryColor, boxShadow: `0 2px 5px ${secondaryColor}80` }}
                    >
                      {platform || url}
                    </a>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills?.filter(s => s.trim()).length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>Skills</h2>
              <ul className="grid grid-cols-2 gap-3 list-none p-0">
                {skills.filter(s => s.trim()).map((skill, i) => (
                  <li
                    key={i}
                    className="text-center text-white font-semibold py-1.5 px-3 rounded-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {education?.filter(e => e.institution || e.degree || e.year).length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>Education</h2>
              <ul>
                {education.map(({ institution, degree, year }, i) => (
                  <li key={i} className="mb-2">
                    <div className="font-bold" style={{ color: 'var(--secondary)' }}>{degree || 'Degree'} — {institution || 'Institution'}</div>
                    {year && <div className="text-sm" style={{ color: 'var(--tertiary)' }}>{year}</div>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Box */}
        <div className="flex-1">
          {/* About Me */}
          {bio && (
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--secondary)' }}>About Me</h2>
              <p className="text-base" style={{ color: 'var(--tertiary)' }}>{bio}</p>
            </section>
          )}

          {/* Experience */}
          {experience?.filter(e => e.role || e.company || e.duration || e.description).length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>Experience</h2>
              <ul>
                {experience.map(({ role, company, duration, description }, i) => (
                  <li key={i} className="mb-4">
                    <div className="font-bold" style={{ color: 'var(--secondary)' }}>{role} at {company}</div>
                    <div className="italic text-sm" style={{ color: 'var(--tertiary)' }}>{duration}</div>
                    {description && <p style={{ color: 'var(--tertiary)' }}>{description}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Projects */}
          {projects?.filter(p => p.title || p.description || p.link).length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--secondary)' }}>Projects</h2>
              <ul className="list-none p-0">
                {projects.map(({ title, description, link, image }, i) => (
                  <li key={i} className="mb-4 p-4 rounded-lg" style={{ border: `1px solid ${primaryColor}` }}>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--secondary)' }}>{title}</h3>
                    {image && (
                      <img
                        src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                        alt={title}
                        className="w-full max-h-[200px] object-cover rounded mb-2"
                      />
                    )}
                    <p className="text-sm mb-1" style={{ color: 'var(--tertiary)' }}>{description}</p>
                    {link && <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: primaryColor }}>View Project</a>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1;
