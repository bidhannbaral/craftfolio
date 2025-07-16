import React, { useState } from 'react';
import Template9 from '../Template/Template9'; 
import Profilepicture from '../Assets/Profilepicture'
import Hero_banner from '../Assets/Hero_banner'
const Dummy9 = () => {
  const [form, setForm] = useState({
    fullName: 'Ben Harper',
    profession: 'Professor',
    about: 'Passionate educator and researcher in artificial intelligence and data science with over 15 years of experience in higher education. Dedicated to mentoring the next generation of computer scientists and advancing machine learning research.',
    profilePic: Profilepicture,
    coverPic: Hero_banner,
    phone: '+1 (555) 123-4567',
    email: 'ben.harper@gmail.com',
    address: 'Cambridge, Massachusetts, USA',
    interests: ['Reading AI papers', 'Mentoring', 'Chess'],
    skills: [ { name: 'Machine Learning', level: 90 },
  { name: 'Python', level: 95 }],
    education: [ { degree: 'Ph.D. in Computer Science', institution: 'MIT', year: '2010' },],
    experience: ['Professor of Computer Science at Harvard (2016–Present)',],
    topicSection: [{
    title: 'AI for Social Good',
    description: 'Developed ML models to optimize resource distribution.',
    image: Hero_banner,
    
  },]
  });

  const [interestInput, setInterestInput] = useState('');
  const [skillInput, setSkillInput] = useState({ name: '', level: 50 });
  const [topicInput, setTopicInput] = useState({ title: '', description: '', image: null, url: '' });
  const [experienceInput, setExperienceInput] = useState('');
  const [educationInput, setEducationInput] = useState({ degree: '', institution: '', year: '' });

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, [field]: url }));
    }
  };

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addInterest = () => {
    if (interestInput) {
      setForm({ ...form, interests: [...form.interests, interestInput] });
      setInterestInput('');
    }
  };

  const removeInterest = (index) => {
    const updated = [...form.interests];
    updated.splice(index, 1);
    setForm({ ...form, interests: updated });
  };

  const addSkill = () => {
    if (skillInput.name) {
      setForm({ ...form, skills: [...form.skills, { ...skillInput }] });
      setSkillInput({ name: '', level: 50 });
    }
  };

  const removeSkill = (index) => {
    const updated = [...form.skills];
    updated.splice(index, 1);
    setForm({ ...form, skills: updated });
  };

  const addTopic = () => {
    const { title, description, image, url } = topicInput;
    if (title && description) {
      setForm({
        ...form,
        topicSection: [...form.topicSection, { title, description, image, url }]
      });
      setTopicInput({ title: '', description: '', image: null, url: '' });
    }
  };

  const removeTopic = (index) => {
    const updated = [...form.topicSection];
    updated.splice(index, 1);
    setForm({ ...form, topicSection: updated });
  };

  const addExperience = () => {
    if (experienceInput) {
      setForm({ ...form, experience: [...form.experience, experienceInput] });
      setExperienceInput('');
    }
  };

  const removeExperience = (index) => {
    const updated = [...form.experience];
    updated.splice(index, 1);
    setForm({ ...form, experience: updated });
  };

  const addEducation = () => {
    const { degree, institution, year } = educationInput;
    if (degree && institution && year) {
      setForm({
        ...form,
        education: [...form.education, educationInput]
      });
      setEducationInput({ degree: '', institution: '', year: '' });
    }
  };

  const removeEducation = (index) => {
    const updated = [...form.education];
    updated.splice(index, 1);
    setForm({ ...form, education: updated });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Portfolio Builder</h1>

      <input placeholder="Full Name" onChange={(e) => updateField('fullName', e.target.value)} className="block w-full mb-2" />
      <input placeholder="Profession" onChange={(e) => updateField('profession', e.target.value)} className="block w-full mb-2" />
      <textarea placeholder="About Me" onChange={(e) => updateField('about', e.target.value)} className="block w-full mb-2" />

      <label>Profile Picture</label>
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profilePic')} className="block mb-2" />
      <label>Cover Picture</label>
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'coverPic')} className="block mb-2" />

      <input placeholder="Phone" onChange={(e) => updateField('phone', e.target.value)} className="block w-full mb-2" />
      <input placeholder="Email" onChange={(e) => updateField('email', e.target.value)} className="block w-full mb-2" />
      <input placeholder="Address" onChange={(e) => updateField('address', e.target.value)} className="block w-full mb-4" />

      {/* Interests */}
      <h2 className="text-lg font-semibold mt-4">My Interests</h2>
      <input value={interestInput} onChange={(e) => setInterestInput(e.target.value)} className="block w-full mb-2" />
      <button onClick={addInterest} className="mb-2 bg-blue-500 text-white px-4 py-1">Add Interest</button>
      <ul className="mb-4">
        {form.interests.map((interest, index) => (
          <li key={index} className="flex justify-between items-center">
            {interest}
            <button onClick={() => removeInterest(index)} className="text-red-500 ml-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <h2 className="text-lg font-semibold">Skills</h2>
      <input placeholder="Skill Name" value={skillInput.name} onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })} className="block w-full mb-2" />
      <label>Skill Level</label>
      <input type="range" min="0" max="100" value={skillInput.level} onChange={(e) => setSkillInput({ ...skillInput, level: e.target.value })} className="block w-full mb-2" />
      <button onClick={addSkill} className="mb-2 bg-green-600 text-white px-4 py-1">Add Skill</button>
      <ul className="mb-4">
        {form.skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center">
            {skill.name} ({skill.level}%)
            <button onClick={() => removeSkill(index)} className="text-red-500 ml-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Experience */}
      <h2 className="text-lg font-semibold">Work Experience</h2>
      <input value={experienceInput} onChange={(e) => setExperienceInput(e.target.value)} className="block w-full mb-2" />
      <button onClick={addExperience} className="mb-2 bg-indigo-600 text-white px-4 py-1">Add Experience</button>
      <ul className="mb-4">
        {form.experience.map((exp, index) => (
          <li key={index} className="flex justify-between items-center">
            {exp}
            <button onClick={() => removeExperience(index)} className="text-red-500 ml-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Education */}
      <h2 className="text-lg font-semibold">Education</h2>
      <input placeholder="Degree" value={educationInput.degree} onChange={(e) => setEducationInput({ ...educationInput, degree: e.target.value })} className="block w-full mb-2" />
      <input placeholder="Institution" value={educationInput.institution} onChange={(e) => setEducationInput({ ...educationInput, institution: e.target.value })} className="block w-full mb-2" />
      <input placeholder="Year" value={educationInput.year} onChange={(e) => setEducationInput({ ...educationInput, year: e.target.value })} className="block w-full mb-2" />
      <button onClick={addEducation} className="mb-2 bg-teal-600 text-white px-4 py-1">Add Education</button>
      <ul className="mb-4">
        {form.education.map((edu, index) => (
          <li key={index} className="flex justify-between items-center">
            {edu.degree} at {edu.institution} ({edu.year})
            <button onClick={() => removeEducation(index)} className="text-red-500 ml-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Topics */}
      <h2 className="text-lg font-semibold">Topics</h2>
      <input placeholder="Topic Title" value={topicInput.title} onChange={(e) => setTopicInput({ ...topicInput, title: e.target.value })} className="block w-full mb-2" />
      <textarea placeholder="Description" value={topicInput.description} onChange={(e) => setTopicInput({ ...topicInput, description: e.target.value })} className="block w-full mb-2" />
      <input placeholder="Optional URL" value={topicInput.url} onChange={(e) => setTopicInput({ ...topicInput, url: e.target.value })} className="block w-full mb-2" />
      <input type="file" accept="image/*" onChange={(e) => {
        const file = e.target.files[0];
        if (file) setTopicInput({ ...topicInput, image: URL.createObjectURL(file) });
      }} className="block mb-2" />
      <button onClick={addTopic} className="mb-2 bg-purple-600 text-white px-4 py-1">Add Topic</button>
      <ul className="mb-4">
        {form.topicSection.map((topic, index) => (
          <li key={index} className="flex justify-between items-center">
            {topic.title}
            <button onClick={() => removeTopic(index)} className="text-red-500 ml-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Live Preview */}
      <h2 className="text-lg font-semibold mt-8">Live Preview</h2>
      <Template9 data={form} />
    </div>
  );
};

export default Dummy9;
