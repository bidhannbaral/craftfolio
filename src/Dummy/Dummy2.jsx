import React, { useState } from 'react';
import Template2 from '../Template/Template2';

const Dummy2 = () => {
  const [user, setUser] = useState({
    name: '',
    profession: '',
    bio: '',
    photo: '',
    email: '',
    slogan: '',
    primaryColor: '#F7F6F2',
    secondaryColor: '#2E8B57',
    tertiaryColor: '#555555',
    skills: [],
    works: [],
    projects: [],
    education: [],
    personality: []
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setUser((prev) => ({ ...prev, photo: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleNestedChange = (type, idx, field, value) => {
    const updated = [...user[type]];
    updated[idx][field] = value;
    setUser((prev) => ({ ...prev, [type]: updated }));
  };

  const addArrayItem = (type, item) => {
    setUser((prev) => ({ ...prev, [type]: [...prev[type], item] }));
  };

  const removeArrayItem = (type, index) => {
    const updated = [...user[type]];
    updated.splice(index, 1);
    setUser((prev) => ({ ...prev, [type]: updated }));
  };

  return (
    <div className="flex flex-wrap gap-8 max-w-screen-2xl mx-auto p-4">
      <div className="flex-1 min-w-[600px] bg-gray-50 rounded-xl shadow-md p-8">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-6">Create Your Portfolio</h2>

        <label className="block font-bold text-green-700 text-lg mb-2">Personal Information</label>

        <p>Name:</p>
        <input name="name" placeholder="Name" onChange={handleChange} value={user.name} className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-700" />

        <p>Profession:</p>
        <input name="profession" placeholder="Profession" onChange={handleChange} value={user.profession} className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-700" />

        <p>Email:</p>
        <input name="email" placeholder="Email" onChange={handleChange} value={user.email} className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-700" />

        <p>About me:</p>
        <textarea name="bio" placeholder="About Me" onChange={handleChange} value={user.bio} className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md min-h-[80px] resize-y" />

        <p>Slogan:</p>
        <input name="slogan" placeholder="Slogan / Motto" onChange={handleChange} value={user.slogan} className="w-3/4 p-2 mb-4 border border-gray-300 rounded-md" />

        <label className="block font-bold text-green-700 text-lg mt-6 mb-2">Personality Traits</label>
        {user.personality.map((item, idx) => (
          <div key={idx} className="mb-5 flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Enter a personality trait"
              value={item.trait}
              onChange={(e) => handleNestedChange('personality', idx, 'trait', e.target.value)}
              className="flex-grow min-w-[200px] p-2 border border-gray-300 rounded-md"
            />
            <button className="bg-red-500 text-white font-bold px-3 h-8 rounded hover:bg-red-700" onClick={() => removeArrayItem('personality', idx)}>x</button>
          </div>
        ))}
        <button onClick={() => addArrayItem('personality', { trait: '' })} className="bg-green-700 text-white font-semibold px-4 py-1 rounded hover:bg-green-800">Add Personality Trait</button>

        <label className="block font-bold text-green-700 text-lg mt-6 mb-2">Profile Photo</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="p-1 w-3/4 border border-gray-300 rounded mb-2" />
        {user.photo && <img src={user.photo} alt="Preview" className="w-24 h-24 object-cover rounded-full border-4 border-green-700 mb-4" />}

        <label className="block font-bold text-green-700 text-lg mt-4 mb-2">Primary Color (Background)</label>
        <input type="color" name="primaryColor" value={user.primaryColor} onChange={handleChange} className="w-12 h-9 rounded-md mr-4" />

        <label className="block font-bold text-green-700 text-lg mt-4 mb-2">Secondary Color (Bold Text)</label>
        <input type="color" name="secondaryColor" value={user.secondaryColor} onChange={handleChange} className="w-12 h-9 rounded-md mr-4" />

        <label className="block font-bold text-green-700 text-lg mt-4 mb-2">Tertiary Color (Normal Text)</label>
        <input type="color" name="tertiaryColor" value={user.tertiaryColor} onChange={handleChange} className="w-12 h-9 rounded-md mb-4" />

        {/* Skills */}
        <h4 className="mt-6 font-semibold">Skills</h4>
        {user.skills.map((skill, idx) => (
          <div key={idx} className="mb-5 flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Enter a skill"
              value={skill.name}
              onChange={(e) => handleNestedChange('skills', idx, 'name', e.target.value)}
              className="flex-grow min-w-[200px] p-2 border border-gray-300 rounded-md"
            />
            <button className="bg-red-500 text-white font-bold px-3 h-8 rounded hover:bg-red-700" onClick={() => removeArrayItem('skills', idx)}>x</button>
          </div>
        ))}
        <button onClick={() => addArrayItem('skills', { name: '' })} className="bg-green-700 text-white font-semibold px-4 py-1 rounded hover:bg-green-800">Add Skill</button>

        {/* Education */}
        <h4 className="mt-6 font-semibold">Education</h4>
        {user.education.map((edu, idx) => (
          <div key={idx} className="mb-5">
            <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleNestedChange('education', idx, 'degree', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleNestedChange('education', idx, 'institution', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleNestedChange('education', idx, 'year', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <button onClick={() => removeArrayItem('education', idx)} className="bg-red-500 text-white font-bold px-3 h-8 rounded hover:bg-red-700">x</button>
          </div>
        ))}
        <button onClick={() => addArrayItem('education', { degree: '', institution: '', year: '' })} className="bg-green-700 text-white font-semibold px-4 py-1 rounded hover:bg-green-800">Add Education</button>

        {/* Work Experience */}
        <h4 className="mt-6 font-semibold">Work Experience</h4>
        {user.works.map((work, idx) => (
          <div key={idx} className="mb-5">
            <input type="text" placeholder="Role / Title" value={work.title} onChange={(e) => handleNestedChange('works', idx, 'title', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Company" value={work.company} onChange={(e) => handleNestedChange('works', idx, 'company', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Duration" value={work.time} onChange={(e) => handleNestedChange('works', idx, 'time', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <textarea placeholder="Description" value={work.description} onChange={(e) => handleNestedChange('works', idx, 'description', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md min-h-[80px] resize-y" />
            <button onClick={() => removeArrayItem('works', idx)} className="bg-red-500 text-white font-bold px-3 h-8 rounded hover:bg-red-700">x</button>
          </div>
        ))}
        <button onClick={() => addArrayItem('works', { title: '', company: '', time: '', description: '' })} className="bg-green-700 text-white font-semibold px-4 py-1 rounded hover:bg-green-800">Add Work Experience</button>

        {/* Projects */}
        <h4 className="mt-6 font-semibold">Projects</h4>
        {user.projects.map((project, idx) => (
          <div key={idx} className="mb-5">
            <input placeholder="Title" value={project.title} onChange={(e) => handleNestedChange('projects', idx, 'title', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <textarea placeholder="Description" value={project.description} onChange={(e) => handleNestedChange('projects', idx, 'description', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md min-h-[80px] resize-y" />
            <input placeholder="URL" value={project.url} onChange={(e) => handleNestedChange('projects', idx, 'url', e.target.value)} className="w-3/4 p-2 mb-2 border border-gray-300 rounded-md" />
            <input type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => handleNestedChange('projects', idx, 'image', reader.result);
              if (file) reader.readAsDataURL(file);
            }} className="w-3/4 p-1 border border-gray-300 rounded mb-2" />
            {project.image && <img src={project.image} alt="Project Preview" className="w-24 h-24 object-cover rounded border border-gray-300 shadow mb-2" />}
            <button onClick={() => removeArrayItem('projects', idx)} className="bg-red-500 text-white font-bold px-3 h-8 rounded hover:bg-red-700">x</button>
          </div>
        ))}
        <button onClick={() => addArrayItem('projects', { title: '', description: '', url: '', image: '' })} className="bg-green-700 text-white font-semibold px-4 py-1 rounded hover:bg-green-800">Add Project</button>
      </div>

      <div className="flex-1 min-w-[300px]">
        <h2 className="text-center text-2xl font-bold text-green-700 mt-4">Live Preview</h2>
        <Template2 user={user} />
      </div>
    </div>
  );
};

export default Dummy2;