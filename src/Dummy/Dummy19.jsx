import React, { useState } from "react";
import './Dummy19.css';
import Template19 from '../Template/Template19';

const Dummy19 = () => {
  const [form, setForm] = useState({
    companyName: "",
    aboutUs: "",
    coverPhoto: null,
    profilePhoto: null,
    services: [
      { topic: "", items: [""] }
    ],
    phoneNumbers: [""],
    email: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleServiceTopicChange = (index, value) => {
    const updated = [...form.services];
    updated[index].topic = value;
    setForm({ ...form, services: updated });
  };

  const handleServiceItemChange = (topicIndex, itemIndex, value) => {
    const updated = [...form.services];
    updated[topicIndex].items[itemIndex] = value;
    setForm({ ...form, services: updated });
  };

  const addServiceTopic = () => {
    setForm({ ...form, services: [...form.services, { topic: "", items: [""] }] });
  };

  const removeServiceTopic = (index) => {
    const updated = [...form.services];
    updated.splice(index, 1);
    setForm({ ...form, services: updated });
  };

  const addServiceItem = (topicIndex) => {
    const updated = [...form.services];
    updated[topicIndex].items.push("");
    setForm({ ...form, services: updated });
  };

  const removeServiceItem = (topicIndex, itemIndex) => {
    const updated = [...form.services];
    updated[topicIndex].items.splice(itemIndex, 1);
    setForm({ ...form, services: updated });
  };

  const handlePhoneChange = (index, value) => {
    const updated = [...form.phoneNumbers];
    updated[index] = value;
    setForm({ ...form, phoneNumbers: updated });
  };

  const addPhone = () => {
    setForm({ ...form, phoneNumbers: [...form.phoneNumbers, ""] });
  };

  const removePhone = (index) => {
    const updated = [...form.phoneNumbers];
    updated.splice(index, 1);
    setForm({ ...form, phoneNumbers: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h2>Company Portfolio Form</h2>

      <label>Company Name:</label>
      <input type="text" name="companyName" value={form.companyName} onChange={handleInputChange} />

      <label>About Us:</label>
      <textarea name="aboutUs" value={form.aboutUs} onChange={handleInputChange}></textarea>

      <label>Cover Photo:</label>
      <input type="file" name="coverPhoto" onChange={handleFileChange} />

      <label>Profile Photo:</label>
      <input type="file" name="profilePhoto" onChange={handleFileChange} />

      <h3>Services:</h3>
      {form.services.map((serviceGroup, topicIndex) => (
        <div key={topicIndex} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <label>Service Topic:</label>
          <input
            type="text"
            value={serviceGroup.topic}
            onChange={(e) => handleServiceTopicChange(topicIndex, e.target.value)}
          />

          <label>Services:</label>
          {serviceGroup.items.map((item, itemIndex) => (
            <div key={itemIndex} style={{ display: "flex", marginBottom: "5px" }}>
              <input
                type="text"
                value={item}
                onChange={(e) => handleServiceItemChange(topicIndex, itemIndex, e.target.value)}
              />
              <button type="button" onClick={() => removeServiceItem(topicIndex, itemIndex)} disabled={serviceGroup.items.length === 1}>
                ❌
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addServiceItem(topicIndex)}>➕ Add Service</button>
          <br />
          <button type="button" onClick={() => removeServiceTopic(topicIndex)} disabled={form.services.length === 1}>
            🗑️ Remove Service Topic
          </button>
        </div>
      ))}
      <button type="button" onClick={addServiceTopic}>➕ Add Service Topic</button>

      <h3>Phone Numbers:</h3>
      {form.phoneNumbers.map((phone, idx) => (
        <div key={idx} style={{ display: "flex", marginBottom: "5px" }}>
          <input
            type="text"
            value={phone}
            onChange={(e) => handlePhoneChange(idx, e.target.value)}
          />
          <button type="button" onClick={() => removePhone(idx)} disabled={form.phoneNumbers.length === 1}>
            ❌
          </button>
        </div>
      ))}
      <button type="button" onClick={addPhone}>➕ Add Phone</button>

      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleInputChange} />

      <label>Location:</label>
      <input type="text" name="location" value={form.location} onChange={handleInputChange} />

      <br />
      <br />
      <Template19 data={form} />
    </form>
  );
};

export default Dummy19;