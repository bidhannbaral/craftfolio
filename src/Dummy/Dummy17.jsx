// src/Dummy17.jsx
import React, { useState } from "react";
import Template17 from "../Template/Template17";

const Dummy17 = () => {
  const [form, setForm] = useState({
    fullName: "",
    profession: "",
    about: "",
    profile: null,
    personalInfo: {
      dob: "",
      nationality: "",
      relationship: "",
      address: "",
      phone: "",
      email: "",
    },
    education: [],
    experience: [],
    expertise: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      personalInfo: { ...form.personalInfo, [name]: value },
    });
  };

  const addEducation = () => {
    setForm({
      ...form,
      education: [...form.education, { university: "", degree: "", year: "" }],
    });
  };

  const updateEducation = (i, field, value) => {
    const updated = [...form.education];
    updated[i][field] = value;
    setForm({ ...form, education: updated });
  };

  const removeEducation = (i) => {
    const updated = form.education.filter((_, index) => index !== i);
    setForm({ ...form, education: updated });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [...form.experience, { title: "", time: "", description: "" }],
    });
  };

  const updateExperience = (i, field, value) => {
    const updated = [...form.experience];
    updated[i][field] = value;
    setForm({ ...form, experience: updated });
  };

  const removeExperience = (i) => {
    const updated = form.experience.filter((_, index) => index !== i);
    setForm({ ...form, experience: updated });
  };

  const addExpertise = () => {
    setForm({ ...form, expertise: [...form.expertise, ""] });
  };

  const updateExpertise = (i, value) => {
    const updated = [...form.expertise];
    updated[i] = value;
    setForm({ ...form, expertise: updated });
  };

  const removeExpertise = (i) => {
    const updated = form.expertise.filter((_, index) => index !== i);
    setForm({ ...form, expertise: updated });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Portfolio Form</h2>
      <div style={{ display: "flex", gap: "40px" }}>
        <form style={{ width: "50%" }}>
          <label>Full Name</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} />

          <label>Profession</label>
          <input name="profession" value={form.profession} onChange={handleChange} />

          <label>About Me</label>
          <textarea name="about" value={form.about} onChange={handleChange} />

          <label>Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, profile: URL.createObjectURL(e.target.files[0]) })}
          />

          <h3>Personal Info</h3>
          {["dob", "nationality", "relationship", "address", "phone", "email"].map((field) => (
            <div key={field}>
              <label>{field.toUpperCase()}</label>
              <input
                name={field}
                value={form.personalInfo[field]}
                onChange={handlePersonalInfoChange}
              />
            </div>
          ))}

          <h3>Education</h3>
          {form.education.map((edu, i) => (
            <div key={i}>
              <input
                placeholder="University"
                value={edu.university}
                onChange={(e) => updateEducation(i, "university", e.target.value)}
              />
              <input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(i, "degree", e.target.value)}
              />
              <input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => updateEducation(i, "year", e.target.value)}
              />
              <button type="button" onClick={() => removeEducation(i)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addEducation}>Add Education</button>

          <h3>Experience</h3>
          {form.experience.map((exp, i) => (
            <div key={i}>
              <input
                placeholder="Title"
                value={exp.title}
                onChange={(e) => updateExperience(i, "title", e.target.value)}
              />
              <input
                placeholder="Time Period"
                value={exp.time}
                onChange={(e) => updateExperience(i, "time", e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={exp.description}
                onChange={(e) => updateExperience(i, "description", e.target.value)}
              />
              <button type="button" onClick={() => removeExperience(i)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addExperience}>Add Experience</button>

          <h3>Expertise</h3>
          {form.expertise.map((skill, i) => (
            <div key={i}>
              <input
                placeholder="Expertise"
                value={skill}
                onChange={(e) => updateExpertise(i, e.target.value)}
              />
              <button type="button" onClick={() => removeExpertise(i)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addExpertise}>Add Expertise</button>
        </form>

        <div style={{ width: "50%", borderLeft: "2px solid #ccc", paddingLeft: "20px" }}>
          <Template17 data={form} />
        </div>
      </div>
    </div>
  );
};

export default Dummy17;
