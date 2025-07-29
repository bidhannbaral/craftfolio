import React, { useState } from "react";
import Template20 from "../Template/Template20";

const Dummy20 = () => {
  const [form, setForm] = useState({
    companyName: "",
    aboutUs: "",
    profilePhoto: null,
    coverPhoto: null,
    services: [],
    phoneNumbers: [""],
    email: "",
    location: "",
  });

  const handleServiceChange = (index, field, value) => {
    const updated = [...form.services];
    updated[index][field] = value;
    setForm({ ...form, services: updated });
  };

  const addService = () => {
    setForm({
      ...form,
      services: [...form.services, { topic: "", image: null, description: "", cost: "" }],
    });
  };

  const removeService = (index) => {
    const updated = form.services.filter((_, i) => i !== index);
    setForm({ ...form, services: updated });
  };

  const addPhone = () => {
    setForm({ ...form, phoneNumbers: [...form.phoneNumbers, ""] });
  };

  const removePhone = (index) => {
    const updated = form.phoneNumbers.filter((_, i) => i !== index);
    setForm({ ...form, phoneNumbers: updated });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div>
      <h1>Company Portfolio Builder</h1>

      <input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleInputChange} />
      <textarea name="aboutUs" placeholder="About Us" value={form.aboutUs} onChange={handleInputChange} />

      <label>Profile Photo:</label>
      <input name="profilePhoto" type="file" accept="image/*" onChange={handleInputChange} />

      <label>Cover Photo:</label>
      <input name="coverPhoto" type="file" accept="image/*" onChange={handleInputChange} />

      <h3>Our Services</h3>
      {form.services.map((srv, index) => (
        <div key={index}>
          <input
            placeholder="Service Topic"
            value={srv.topic}
            onChange={(e) => handleServiceChange(index, "topic", e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleServiceChange(index, "image", e.target.files[0])}
          />
          <textarea
            placeholder="Description"
            value={srv.description}
            onChange={(e) => handleServiceChange(index, "description", e.target.value)}
          />
          <input
            placeholder="Cost"
            value={srv.cost}
            onChange={(e) => handleServiceChange(index, "cost", e.target.value)}
          />
          <button onClick={() => removeService(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addService}>Add Service</button>

      <h3>Contact Numbers</h3>
      {form.phoneNumbers.map((ph, index) => (
        <div key={index}>
          <input
            placeholder="Phone Number"
            value={ph}
            onChange={(e) => {
              const updated = [...form.phoneNumbers];
              updated[index] = e.target.value;
              setForm({ ...form, phoneNumbers: updated });
            }}
          />
          <button onClick={() => removePhone(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addPhone}>Add Phone</button>

      <input name="email" placeholder="Email" value={form.email} onChange={handleInputChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleInputChange} />

      <hr />
      <Template20 data={form} />
    </div>
  );
};

export default Dummy20;
