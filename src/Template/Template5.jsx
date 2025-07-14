const Template5 = ({ data }) => {
  return (
    <div className="min-h-screen w-full px-8 py-6 bg-gray-100 flex justify-between items-start">
      {/* Left Box */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg">
        {/* Profile Pic */}
        {data.profilePic ? (
          <img
            src={data.profilePic}
            alt="Profile"
            className="rounded-full w-28 h-28 object-cover mx-auto"
          />
        ) : (
          <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center mx-auto text-gray-600 font-semibold">
            No Photo
          </div>
        )}
        <h2 className="text-center text-xl font-bold mt-4">{data.name}</h2>

        <div className="mt-6 space-y-3">
          <div>
            <h3 className="font-semibold border-b pb-1 mb-1">Contact</h3>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Location:</strong> {data.location}</p>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-1 mb-1">Skills</h3>
            <ul className="list-disc list-inside">
              {data.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-1 mb-1">Personality</h3>
            <ul className="list-disc list-inside">
              {data.personality.map((trait, i) => (
                <li key={i}>{trait}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold border-b pb-1 mb-1">Languages</h3>
            <ul className="list-disc list-inside">
              {data.languages.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-3/4 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">{data.profession}</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">About Me</h2>
          <p>{data.about}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">Education</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.education.map((edu, i) => (
              <li key={i}>
                <span className="font-semibold">{edu.degree}</span> at {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.experience.map((exp, i) => (
              <li key={i}>
                <span className="font-semibold">{exp.role}</span> at {exp.company} ({exp.duration})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template5;
