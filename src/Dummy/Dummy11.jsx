import React, { useState } from 'react';
import Template11 from '../Template/Template11';

const Dummy11 = () => {
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    bio: '',
    profilePic: null,
    coverPhoto: null,
    phone: '',
    email: '',
    location: '',
    personality: [],
    skills: [],
    topics: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files[0] });
  };

  const addToList = (field, value) => {
    if (value) {
      setForm({ ...form, [field]: [...form[field], value] });
      document.getElementById(`${field}Input`).value = '';
    }
  };

  const removeFromList = (field, index) => {
    const newList = [...form[field]];
    newList.splice(index, 1);
    setForm({ ...form, [field]: newList });
  };

  const addTopic = () => {
    setForm({
      ...form,
      topics: [...form.topics, { title: '', description: '', images: [], urls: [] }],
    });
  };

  const removeTopic = (index) => {
    const updatedTopics = [...form.topics];
    updatedTopics.splice(index, 1);
    setForm({ ...form, topics: updatedTopics });
  };

  const updateTopic = (index, key, value) => {
    const updatedTopics = [...form.topics];
    updatedTopics[index][key] = value;
    setForm({ ...form, topics: updatedTopics });
  };

  const addImageToTopic = (index, file) => {
    if (!file) return;
    const updatedTopics = [...form.topics];
    updatedTopics[index].images.push(file);
    updatedTopics[index].urls.push('');
    setForm({ ...form, topics: updatedTopics });
  };

  const removeImageFromTopic = (topicIndex, imgIndex) => {
    const updatedTopics = [...form.topics];
    updatedTopics[topicIndex].images.splice(imgIndex, 1);
    updatedTopics[topicIndex].urls.splice(imgIndex, 1);
    setForm({ ...form, topics: updatedTopics });
  };

  const updateTopicUrl = (topicIndex, urlIndex, value) => {
    const updatedTopics = [...form.topics];
    updatedTopics[topicIndex].urls[urlIndex] = value;
    setForm({ ...form, topics: updatedTopics });
  };

  return (
    <div>
      <h1>Create Your Portfolio</h1>
      <input type="text" name="fullName" placeholder="Full Name" onChange={handleInputChange} /><br />
      <input type="text" name="profession" placeholder="Profession" onChange={handleInputChange} /><br />
      <textarea name="bio" placeholder="Bio" onChange={handleInputChange}></textarea><br />
      <input type="file" name="profilePic" onChange={handleFileChange} /><br />
      <input type="file" name="coverPhoto" onChange={handleFileChange} /><br />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /><br />
      <input type="text" name="location" placeholder="Location" onChange={handleInputChange} /><br />

      <h3>Personality Traits</h3>
      <input type="text" id="personalityInput" placeholder="Enter personality" />
      <button onClick={() => addToList('personality', document.getElementById('personalityInput').value)}>Add</button>
      <ul>
        {form.personality.map((item, i) => (
          <li key={i}>{item} <button onClick={() => removeFromList('personality', i)}>Remove</button></li>
        ))}
      </ul>

      <h3>Skills</h3>
      <input type="text" id="skillsInput" placeholder="Enter skill" />
      <button onClick={() => addToList('skills', document.getElementById('skillsInput').value)}>Add</button>
      <ul>
        {form.skills.map((item, i) => (
          <li key={i}>{item} <button onClick={() => removeFromList('skills', i)}>Remove</button></li>
        ))}
      </ul>

      <h3>Topics</h3>
      <button onClick={addTopic}>Add Topic</button>
      {form.topics.map((topic, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <button onClick={() => removeTopic(i)} style={{ float: 'right' }}>Remove Topic</button>
          <input type="text" placeholder="Title" value={topic.title} onChange={(e) => updateTopic(i, 'title', e.target.value)} /><br />
          <textarea placeholder="Description" value={topic.description} onChange={(e) => updateTopic(i, 'description', e.target.value)}></textarea><br />
          
          <input type="file" onChange={(e) => addImageToTopic(i, e.target.files[0])} />
          <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', padding: '10px 0' }}>
            {topic.images.map((img, imgIndex) => (
              <div key={imgIndex} style={{ width: '150px', flexShrink: 0 }}>
                <img
                  src={URL.createObjectURL(img)}
                  alt={`img-${imgIndex}`}
                  style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <input
                  type="text"
                  placeholder="Optional URL"
                  value={topic.urls[imgIndex] || ''}
                  onChange={(e) => updateTopicUrl(i, imgIndex, e.target.value)}
                />
                <button onClick={() => removeImageFromTopic(i, imgIndex)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      ))}

     

      <div style={{ width: '60%' }}>
        <Template11 data={form} />
      </div>
    </div>
  );
};

export default Dummy11;
