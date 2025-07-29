import React, { useState } from "react";
import Template16 from '../Template/Template16'
const Dummy16 = () => {
  const [form, setForm] = useState({
    fullName: "",
    profession: "",
    profile: null,
    age: "",
    phone: "",
    email: "",
    location: "",
    experience: [{ topic: "", description: "" }],
    myWorks: [],
    skills: [""],
    achievements: [""],
  });

  const handleExperienceChange = (index, key, value) => {
    const updated = [...form.experience];
    updated[index][key] = value;
    setForm({ ...form, experience: updated });
  };

  const addExperience = () => {
    setForm({ ...form, experience: [...form.experience, { topic: "", description: "" }] });
  };

  const removeExperience = (index) => {
    const updated = form.experience.filter((_, i) => i !== index);
    setForm({ ...form, experience: updated });
  };

  const handleWorkChange = (files) => {
    const fileArray = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setForm({ ...form, myWorks: [...form.myWorks, ...fileArray] });
  };

  const removeWork = (index) => {
    const updated = form.myWorks.filter((_, i) => i !== index);
    setForm({ ...form, myWorks: updated });
  };

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleListChange = (key, index, value) => {
    const updated = [...form[key]];
    updated[index] = value;
    setForm({ ...form, [key]: updated });
  };

  const addToList = (key) => {
    setForm({ ...form, [key]: [...form[key], ""] });
  };

  const removeFromList = (key, index) => {
    const updated = form[key].filter((_, i) => i !== index);
    setForm({ ...form, [key]: updated });
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h2>Portfolio Builder</h2>

      <input type="text" placeholder="Full Name" value={form.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} />
      <input type="text" placeholder="Profession" value={form.profession} onChange={(e) => handleInputChange("profession", e.target.value)} />
      <input type="file" onChange={(e) => handleInputChange("profile", e.target.files[0])} />

      <h3>Personal Information</h3>
      <input type="text" placeholder="Age" value={form.age} onChange={(e) => handleInputChange("age", e.target.value)} />
      <input type="text" placeholder="Phone" value={form.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => handleInputChange("email", e.target.value)} />
      <input type="text" placeholder="Location" value={form.location} onChange={(e) => handleInputChange("location", e.target.value)} />

      <h3>Experience</h3>
      {form.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <input type="text" placeholder="Topic" value={exp.topic} onChange={(e) => handleExperienceChange(i, "topic", e.target.value)} />
          <textarea placeholder="Description" value={exp.description} onChange={(e) => handleExperienceChange(i, "description", e.target.value)} />
          <button onClick={() => removeExperience(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>

      <h3>My Works (Upload Images)</h3>
      <input type="file" multiple onChange={(e) => handleWorkChange(e.target.files)} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {form.myWorks.map((work, i) => (
          <div key={i} style={{ position: "relative" }}>
            <a href={work.url} target="_blank" rel="noreferrer">
              <img src={work.url} alt="work" width={100} height={100} />
            </a>
            <button onClick={() => removeWork(i)} style={{ position: "absolute", top: 0, right: 0 }}>X</button>
          </div>
        ))}
      </div>

      <h3>Skills</h3>
      {form.skills.map((skill, i) => (
        <div key={i}>
          <input type="text" value={skill} onChange={(e) => handleListChange("skills", i, e.target.value)} />
          <button onClick={() => removeFromList("skills", i)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addToList("skills")}>Add Skill</button>

      <h3>Key Achievements</h3>
      {form.achievements.map((ach, i) => (
        <div key={i}>
          <input type="text" value={ach} onChange={(e) => handleListChange("achievements", i, e.target.value)} />
          <button onClick={() => removeFromList("achievements", i)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addToList("achievements")}>Add Achievement</button>

      <br /><br />
     <button type="button" onClick={addExperience}>Add Experience</button>
      <Template16 data={form} />
    </div>
  );
};

export default Dummy16;
