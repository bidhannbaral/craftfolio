import React, { useState } from 'react';
import Template7 from '../Template/Template7';

const Dummy7 = () => {
  const [form, setForm] = useState({
    fullName: 'Sophia Taylor',
    profession: 'Photographer & Visual Artist',
    bio: 'Passionate photographer capturing moments and telling stories through the lens. Experienced in portrait, landscape, and event photography.',
    coverPic: null,
    profilePic: null,
    email: 'sophia.taylor@example.com',
    phone: '(305) 482-7190',
    location: 'New York, USA',
    images: [],
    skills: ['Portrait Photography', 'Photo Editing', 'Adobe Lightroom'],
    education: [
      { institution: 'NY Art School', degree: 'Bachelor of Fine Arts', year: '2017' },
    ],
    workExperience: [
      { company: 'Vision Studios', role: 'Senior Photographer', year: '2018–2023' },
    ],
  });

  const [temp, setTemp] = useState({
    skill: '',
    image: null,
    edu: { institution: '', degree: '', year: '' },
    work: { company: '', role: '', year: '' },
  });

  const updateField = (field, value) => setForm({ ...form, [field]: value });

  const addSkill = () => {
    if (temp.skill.trim()) {
      updateField('skills', [...form.skills, temp.skill]);
      setTemp({ ...temp, skill: '' });
    }
  };

  const removeSkill = (index) => {
    const updated = [...form.skills];
    updated.splice(index, 1);
    updateField('skills', updated);
  };

  const addImage = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    updateField('images', [...form.images, ...previews]);
  };

  const removeImage = (index) => {
    const updated = [...form.images];
    updated.splice(index, 1);
    updateField('images', updated);
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      updateField(field, URL.createObjectURL(file));
    }
  };

  const addEducation = () => {
    const { institution, degree, year } = temp.edu;
    if (institution && degree && year) {
      updateField('education', [...form.education, temp.edu]);
      setTemp({ ...temp, edu: { institution: '', degree: '', year: '' } });
    }
  };

  const removeEducation = (index) => {
    const updated = [...form.education];
    updated.splice(index, 1);
    updateField('education', updated);
  };

  const addWork = () => {
    const { company, role, year } = temp.work;
    if (company && role && year) {
      updateField('workExperience', [...form.workExperience, temp.work]);
      setTemp({ ...temp, work: { company: '', role: '', year: '' } });
    }
  };

  const removeWork = (index) => {
    const updated = [...form.workExperience];
    updated.splice(index, 1);
    updateField('workExperience', updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Portfolio Builder</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
          placeholder="Profession"
          value={form.profession}
          onChange={(e) => updateField('profession', e.target.value)}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
          placeholder="Email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
          placeholder="Phone Number"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value.replace(/\D/g, ''))}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 md:col-span-2"
          placeholder="Location"
          value={form.location}
          onChange={(e) => updateField('location', e.target.value)}
        />
      </div>

      <textarea
        className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 resize-y mb-6"
        placeholder="Bio"
        value={form.bio}
        onChange={(e) => updateField('bio', e.target.value)}
        rows={4}
      />

      {/* Cover Picture */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Upload Cover Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'coverPic')}
          className="mb-2"
        />
        {form.coverPic && (
          <img
            src={form.coverPic}
            alt="Cover"
            className="w-full max-h-56 object-cover rounded-md border border-gray-300"
          />
        )}
      </div>

      {/* Profile Picture */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Upload Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'profilePic')}
          className="mb-2"
        />
        {form.profilePic && (
          <img
            src={form.profilePic}
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border border-gray-300"
          />
        )}
      </div>

      {/* Extra Images */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Add Extra Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={addImage}
          className="mb-3"
        />
        <div className="flex flex-wrap gap-3">
          {form.images.map((img, idx) => (
            <div key={idx} className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-300">
              <img
                src={img}
                alt={`extra-${idx}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeImage(idx)}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-700"
                aria-label="Remove image"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Skills</label>
        <div className="flex gap-3 mb-3">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Skill"
            value={temp.skill}
            onChange={(e) => setTemp({ ...temp, skill: e.target.value })}
          />
          <button
            onClick={addSkill}
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-wrap gap-2 list-none p-0">
          {form.skills.map((skill, i) => (
            <li
              key={i}
              className="bg-gray-200 rounded-full flex items-center gap-2 px-3 py-1 text-gray-700"
            >
              {skill}
              <button
                onClick={() => removeSkill(i)}
                className="text-gray-600 hover:text-red-600 focus:outline-none"
                aria-label="Remove skill"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Education</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Institution"
            value={temp.edu.institution}
            onChange={(e) => setTemp({ ...temp, edu: { ...temp.edu, institution: e.target.value } })}
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Degree"
            value={temp.edu.degree}
            onChange={(e) => setTemp({ ...temp, edu: { ...temp.edu, degree: e.target.value } })}
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Year"
            value={temp.edu.year}
            onChange={(e) => setTemp({ ...temp, edu: { ...temp.edu, year: e.target.value } })}
          />
        </div>
        <button
          onClick={addEducation}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Education
        </button>
        <ul className="mt-3 space-y-2">
          {form.education.map((e, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-2">
              <span>{e.institution}, {e.degree} ({e.year})</span>
              <button
                onClick={() => removeEducation(i)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
                aria-label="Remove education"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Work Experience</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Company"
            value={temp.work.company}
            onChange={(e) => setTemp({ ...temp, work: { ...temp.work, company: e.target.value } })}
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Role"
            value={temp.work.role}
            onChange={(e) => setTemp({ ...temp, work: { ...temp.work, role: e.target.value } })}
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            placeholder="Year"
            value={temp.work.year}
            onChange={(e) => setTemp({ ...temp, work: { ...temp.work, year: e.target.value } })}
          />
        </div>
        <button
          onClick={addWork}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Work
        </button>
        <ul className="mt-3 space-y-2">
          {form.workExperience.map((w, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 rounded-md px-4 py-2">
              <span>{w.company}, {w.role} ({w.year})</span>
              <button
                onClick={() => removeWork(i)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
                aria-label="Remove work experience"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Live Preview */}
      <div className="mt-10 pt-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Preview</h2>
        <Template7 data={form} />
      </div>
    </div>
  );
};

export default Dummy7;
