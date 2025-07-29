import React from "react";

const Template20 = ({ data }) => {
  const {
    companyName,
    aboutUs,
    profilePhoto,
    coverPhoto,
    services,
    phoneNumbers,
    email,
    location,
  } = data;

  const coverURL = coverPhoto ? URL.createObjectURL(coverPhoto) : null;
  const profileURL = profilePhoto ? URL.createObjectURL(profilePhoto) : null;

  return (
    <div className="font-sans text-[#1f3c88] max-w-[900px] mx-auto bg-[#f7faff] shadow-md rounded-xl overflow-hidden p-5">
      {/* Cover Section */}
      <div
        className="relative h-[250px] bg-cover bg-center rounded-lg flex items-center justify-center"
        style={{ backgroundImage: `url(${coverURL})`, opacity: 0.3 }}
      >
        <h1 className="absolute text-[#1f3c88] text-3xl font-bold bg-white bg-opacity-70 px-5 py-2 rounded-md">
          {companyName || "Company Name"}
        </h1>
      </div>

      {/* Profile & About */}
      <div className="flex items-start gap-5 mt-8">
        {profileURL && (
          <img
            src={profileURL}
            alt="Profile"
            className="w-[270px] h-[150px] object-cover rounded-full border-4 border-[#1f3c88]"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-800 text-sm">{aboutUs || "About information here..."}</p>
        </div>
      </div>

      {/* Services */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-5">Our Services</h2>
        {services.map((srv, i) => (
          <div key={i} className="bg-white p-4 border border-[#e0e6f0] rounded-lg mb-5">
            <h4 className="text-[#1f3c88] font-semibold mb-1">{srv.topic}</h4>
            {srv.image && (
              <img
                src={URL.createObjectURL(srv.image)}
                alt="service"
                className="w-full h-auto rounded-md my-2"
              />
            )}
            <p className="text-sm text-gray-700 mb-1">{srv.description}</p>
            <p className="text-sm font-medium">
              <span className="font-bold">Cost:</span> {srv.cost}
            </p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-10 pt-5 border-t border-gray-300">
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        {phoneNumbers.map((ph, i) => (
          <p key={i} className="text-sm mb-1">
            <strong>Phone:</strong> {ph}
          </p>
        ))}
        <p className="text-sm mb-1">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-sm">
          <strong>Location:</strong> {location}
        </p>
      </div>
    </div>
  );
};

export default Template20;
