import React, { useState } from "react";
import Template18 from '../Template/Template18';

const Dummy18 = () => {
  const [form, setForm] = useState({
    companyName: "",
    coverPhoto: null,
    profilePhoto: null,
    aboutUs: "",
    services: [],
    phone: "",
    email: "",
    location: "",
    qrPhoto: null,
    experience: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  // Services
  const addService = () => {
    setForm((prev) => ({ ...prev, services: [...prev.services, ""] }));
  };

  const updateService = (index, value) => {
    const updated = [...form.services];
    updated[index] = value;
    setForm((prev) => ({ ...prev, services: updated }));
  };

  const removeService = (index) => {
    const updated = form.services.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, services: updated }));
  };

  // Experience
  const addExperience = () => {
    setForm((prev) => ({
      ...prev,
      experience: [...prev.experience, { title: "", time: "", description: "" }],
    }));
  };

  const updateExperience = (index, field, value) => {
    const updated = [...form.experience];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, experience: updated }));
  };

  const removeExperience = (index) => {
    const updated = form.experience.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, experience: updated }));
  };

  return (
    <form style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Company Portfolio Form</h2>

      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </label>

      <label>
        Cover Photo:
        <input type="file" name="coverPhoto" onChange={handleFileChange} />
      </label>

      <label>
        Profile Photo:
        <input type="file" name="profilePhoto" onChange={handleFileChange} />
      </label>

      <label>
        About Us:
        <textarea
          name="aboutUs"
          value={form.aboutUs}
          onChange={handleChange}
          rows={5}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </label>

      <h3>Services We Provide</h3>
      {form.services.map((service, i) => (
        <div key={i} style={{ display: "flex", marginBottom: 6, alignItems: "center" }}>
          <input
            type="text"
            placeholder={`Service #${i + 1}`}
            value={service}
            onChange={(e) => updateService(i, e.target.value)}
            style={{ flex: 1 }}
          />
          <button type="button" onClick={() => removeService(i)} style={{ marginLeft: 8 }}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addService} style={{ marginBottom: 20 }}>
        Add Service
      </button>

      <label>
        Phone Number:
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </label>

      <label>
        QR Photo for Booking:
        <input type="file" name="qrPhoto" onChange={handleFileChange} />
      </label>

      <h3>Experience</h3>
      {form.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: 12, border: "1px solid #ccc", padding: 10 }}>
          <input
            type="text"
            placeholder="Title"
            value={exp.title}
            onChange={(e) => updateExperience(i, "title", e.target.value)}
            style={{ width: "100%", marginBottom: 6 }}
          />
          <input
            type="text"
            placeholder="Time (e.g., 2022 - Present)"
            value={exp.time}
            onChange={(e) => updateExperience(i, "time", e.target.value)}
            style={{ width: "100%", marginBottom: 6 }}
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => updateExperience(i, "description", e.target.value)}
            rows={3}
            style={{ width: "100%" }}
          />
          <button type="button" onClick={() => removeExperience(i)} style={{ marginTop: 6 }}>
            Remove Experience
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience} style={{ marginBottom: 20 }}>
        Add Experience
      </button>

      <Template18 data={form} />
    </form>
  );
};

export default Dummy18;
