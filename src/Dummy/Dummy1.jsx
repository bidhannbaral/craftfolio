import React, { useState } from "react";
import Template1 from "../Template/Template1";

const Dummy1 = () => {
  const [form, setForm] = useState({
    name: "",
    profession: "",
    bio: "",
    photo: null,
    color: "#2e8b57",
    email: "",
    skills: [""],
    works: [""],
    education: [""],
    projects: [""],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleArrayChange = (e, index, key) => {
    const newArr = [...form[key]];
    newArr[index] = e.target.value;
    setForm({ ...form, [key]: newArr });
  };

  const addField = (key) => {
    setForm({ ...form, [key]: [...form[key], ""] });
  };

  const removeField = (index, key) => {
    const newArr = [...form[key]];
    newArr.splice(index, 1);
    setForm({ ...form, [key]: newArr });
  };

  return (
    <div className="flex flex-wrap gap-8 items-start max-w-[1800px] mx-auto my-6 p-4">
      <div className="flex-1 min-w-[600px] bg-[#fafafa] rounded-xl shadow-md p-8">
        <h2 className="text-center text-2xl mb-4 text-[#2e8b57] font-semibold">Portfolio Builder</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-[70%] mb-4 px-3 py-2 border-[1.8px] border-gray-300 rounded-md text-base focus:outline-none focus:border-[#2e8b57]"
        />

        <input
          name="profession"
          placeholder="Profession"
          value={form.profession}
          onChange={handleChange}
          className="w-[70%] mb-4 px-3 py-2 border-[1.8px] border-gray-300 rounded-md text-base focus:outline-none focus:border-[#2e8b57]"
        />

        <textarea
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
          className="w-[70%] mb-4 px-3 py-2 border-[1.8px] border-gray-300 rounded-md text-base resize-y min-h-[80px] focus:outline-none focus:border-[#2e8b57]"
        />

        <input
          type="file"
          name="photo"
          onChange={handleChange}
          className="mb-4"
        />
        {form.photo && (
          <img
            src={form.photo}
            alt="Preview"
            className="w-[100px] h-[100px] object-cover rounded-full border-[3px] border-[#2e8b57] block my-2"
          />
        )}

        <input
          type="color"
          name="color"
          value={form.color}
          onChange={handleChange}
          className="w-[50px] h-[34px] p-0 m-0 mr-4 mb-4 cursor-pointer align-middle rounded-md border-0"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-[70%] mb-4 px-3 py-2 border-[1.8px] border-gray-300 rounded-md text-base focus:outline-none focus:border-[#2e8b57]"
        />

        {/* Repeating sections */}
        {['skills', 'works', 'education', 'projects'].map((key) => (
          <div key={key}>
            <label className="block font-bold mt-6 mb-2 text-[#2e8b57] text-[1.1rem]">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            {form[key].map((item, index) => (
              <div key={index} className="mb-5 flex flex-wrap items-start gap-3">
                <input
                  value={item}
                  onChange={(e) => handleArrayChange(e, index, key)}
                  placeholder={`Enter ${key.slice(0, -1)} ${index + 1}`}
                  className="w-[70%] px-3 py-2 border-[1.8px] border-gray-300 rounded-md text-base focus:outline-none focus:border-[#2e8b57]"
                />
                <button
                  onClick={() => removeField(index, key)}
                  className="ml-5 bg-red-600 text-white font-bold cursor-pointer rounded px-2 w-[50px] h-[32px] transition-colors hover:bg-red-700"
                >
                  x
                </button>
              </div>
            ))}
            <button
              onClick={() => addField(key)}
              className="mt-2 px-4 py-1.5 bg-[#2e8b57] text-white font-semibold rounded-lg transition-colors hover:bg-[#276e47]"
            >
              + Add {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          </div>
        ))}
      </div>

      <div className="flex-1 min-w-[300px]">
        <Template1 user={form} />
      </div>
    </div>
  );
};

export default Dummy1;