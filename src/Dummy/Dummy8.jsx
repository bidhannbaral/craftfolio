import React, { useState } from 'react';
import Template8 from '../Template/Template8';

const Dummy8 = () => {
  const [form, setForm] = useState({
    fullName: 'Emma Harper',
    profession: 'Makeup Artist',
    bio: 'A passionate and creative makeup artist specializing in bridal and editorial looks.',
    profilePic: null,
    email: 'emmaharper@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Los Angeles, CA',
    topicSection: [],
  });

  const [topicInput, setTopicInput] = useState({
    title: '',
    description: '',
    image: null,
    url: '',
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateField(field, url);
    }
  };

  const handleTopicImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTopicInput({ ...topicInput, image: URL.createObjectURL(file) });
    }
  };

  const addTopic = () => {
    const { title, description, image, url } = topicInput;
    if (title && description) {
      setForm({
        ...form,
        topicSection: [...form.topicSection, { title, description, image, url }],
      });
      setTopicInput({ title: '', description: '', image: null, url: '' });
    }
  };

  const removeTopic = (index) => {
    const updated = [...form.topicSection];
    updated.splice(index, 1);
    setForm({ ...form, topicSection: updated });
  };

  return (
    <div className="builder-container">
      <h1 className="builder-title">Portfolio Builder</h1>

      <div className="form-grid">
        <input
          className="form-input"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Profession"
          value={form.profession}
          onChange={(e) => updateField('profession', e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Location"
          value={form.location}
          onChange={(e) => updateField('location', e.target.value)}
        />
      </div>

      <textarea
        className="form-textarea"
        placeholder="Bio"
        value={form.bio}
        onChange={(e) => updateField('bio', e.target.value)}
      />

      <div className="upload-section">
        <label>Upload Profile Picture (optional)</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profilePic')} />
        {form.profilePic && (
          <img src={form.profilePic} alt="Profile" className="profile-preview" />
        )}
      </div>

      <div>
        <h2>Add Topic</h2>
        <input
          className="form-input"
          placeholder="Topic Title"
          value={topicInput.title}
          onChange={(e) => setTopicInput({ ...topicInput, title: e.target.value })}
        />
        <textarea
          className="form-textarea"
          placeholder="Topic Description"
          value={topicInput.description}
          onChange={(e) => setTopicInput({ ...topicInput, description: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Optional URL (will open when image is clicked)"
          value={topicInput.url}
          onChange={(e) => setTopicInput({ ...topicInput, url: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleTopicImageUpload} />
        {topicInput.image && (
          <img src={topicInput.image} alt="Topic Preview" className="profile-preview" />
        )}
        <button onClick={addTopic} className="add-btn">Add Topic</button>
      </div>

      <ul className="tag-list">
        {form.topicSection.map((topic, index) => (
          <li key={index} className="tag">
            <strong>{topic.title}</strong>
            <button className="remove-btn" onClick={() => removeTopic(index)}>✕</button>
          </li>
        ))}
      </ul>

      <div className="preview-section">
        <h2>Live Preview</h2>
        <Template8 data={form} />
      </div>
    </div>
  );
};

export default Dummy8;
