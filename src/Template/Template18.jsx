import React from "react";

const Template18 = ({ data }) => {
  const {
    companyName,
    coverPhoto,
    profilePhoto,
    aboutUs,
    services,
    phone,
    email,
    location,
    qrPhoto,
  } = data;

  const coverURL = coverPhoto ? URL.createObjectURL(coverPhoto) : null;
  const profileURL = profilePhoto ? URL.createObjectURL(profilePhoto) : null;
  const qrURL = qrPhoto ? URL.createObjectURL(qrPhoto) : null;

  return (
    <div className="max-w-5xl mx-auto mt-5 font-sans text-black shadow-lg rounded-lg overflow-hidden bg-blue-50">
      {/* Top Section */}
      <div className="relative h-[350px] flex items-center justify-center">
        {coverURL && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${coverURL})` }}
          />
        )}

        <div className="relative z-10 w-[90%] flex items-center justify-between">
          {profileURL && (
            <img
              src={profileURL}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-md bg-white"
            />
          )}

          <div className="max-w-[60%] pl-5 text-black">
            <h1 className="text-3xl font-bold">{companyName || "Company Name"}</h1>
            <p className="mt-2 text-base">{aboutUs || "Write something about your company here..."}</p>
            <div className="mt-2 text-sm space-y-1">
              <p><strong>Phone:</strong> {phone || "N/A"}</p>
              <p><strong>Email:</strong> {email || "N/A"}</p>
              <p><strong>Location:</strong> {location || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-10 bg-blue-100 p-6 rounded-b-lg">
        {/* Services */}
        <div className="w-[60%]">
          <h2 className="text-xl font-semibold mb-2">Services We Provide</h2>
          {services && services.length > 0 ? (
            <ul className="list-disc pl-6 space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <p className="font-semibold">{service.topic}</p>
                  <p className="text-sm italic">{service.description}</p>
                  <p className="text-sm">Cost: {service.cost}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">No services listed yet.</p>
          )}
        </div>

        {/* QR Code */}
        <div className="w-[40%] flex flex-col items-center">
          {qrURL ? (
            <img
              src={qrURL}
              alt="QR Code"
              className="w-48 h-auto rounded-lg bg-white p-2 shadow"
            />
          ) : (
            <div className="w-48 h-48 bg-gray-400 rounded-lg flex items-center justify-center text-white mb-4">
              QR Code Preview
            </div>
          )}
          <h3 className="text-lg font-bold text-blue-900">Book Your Appointment</h3>
        </div>
      </div>
    </div>
  );
};

export default Template18;
