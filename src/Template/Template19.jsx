import React from "react";

const Template19 = ({ data }) => {
  const {
    companyName,
    aboutUs,
    coverPhoto,
    profilePhoto,
    services,
    phoneNumbers,
    email,
    location,
  } = data;

  const coverURL = coverPhoto ? URL.createObjectURL(coverPhoto) : null;
  const profileURL = profilePhoto ? URL.createObjectURL(profilePhoto) : null;

  return (
    <div className="font-sans text-gray-800 max-w-3xl mx-auto rounded-lg overflow-hidden bg-blue-50 shadow-md">
      {/* Page 1: Cover Photo with Company Name */}
      <div className="relative h-72 w-full">
        {coverURL && (
          <div
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-30 z-0"
            style={{ backgroundImage: `url(${coverURL})` }}
          />
        )}
        <div className="absolute top-0 left-0 z-10 h-full w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black bg-white bg-opacity-80 px-6 py-2 rounded-xl shadow">
            {companyName || "Company Name"}
          </h1>
        </div>
      </div>

      {/* Page 2: Profile + About + Services */}
      <div className="flex flex-wrap p-8 gap-8">
        {/* Left: Profile */}
        <div className="flex-1 min-w-[250px] flex justify-center items-start">
          {profileURL && (
            <img
              src={profileURL}
              alt="Profile"
              className="w-44 h-44 object-cover rounded-full border-4 border-white shadow bg-white"
            />
          )}
        </div>

        {/* Right: About + Services */}
        <div className="flex-2 min-w-[300px]">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p>{aboutUs || "About company goes here..."}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Our Services</h2>
          <div className="flex flex-col gap-4 mt-2">
            {services &&
              services.map((srv, i) => (
                <div className="bg-blue-100 p-4 rounded-md shadow-sm" key={i}>
                  <h4 className="font-semibold text-lg mb-1">
                    {srv.topic || "Service Topic"}
                  </h4>
                  <ul className="list-disc list-inside">
                    {srv.items &&
                      srv.items.map((item, j) => (
                        <li key={j}>{item || "Service detail"}</li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            {phoneNumbers.map((ph, i) => (
              <p key={i}>
                <strong>Phone:</strong> {ph || "N/A"}
              </p>
            ))}
            <p>
              <strong>Email:</strong> {email || "N/A"}
            </p>
            <p>
              <strong>Location:</strong> {location || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template19;