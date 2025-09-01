import React, { useState } from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const AboutEditor = () => {
  const { currentPortfolio, updatePortfolioSection, updatePortfolioTitle } = usePortfolioStore();
  const { about } = currentPortfolio.sections;
  const [imagePreview, setImagePreview] = useState(about.profileImage);

  const handleInputChange = (field, value) => {
    updatePortfolioSection('about', { [field]: value });
  };

  const handleTitleChange = (value) => {
    updatePortfolioTitle(value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert to base64 for storage without backend
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setImagePreview(base64Image);
        handleInputChange('profileImage', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    handleInputChange('profileImage', null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">👤</span>
          About Section
        </h2>
        <p className="text-base-content/70 mb-6">
          Tell your story and make a great first impression. This section appears at the top of your portfolio.
        </p>
      </div>

      {/* Portfolio Title */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Portfolio Title</span>
          <span className="label-text-alt text-error">Required</span>
        </label>
        <input
          type="text"
          placeholder="e.g., John Doe - Full Stack Developer"
          className="input input-bordered w-full"
          value={currentPortfolio.title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
        <label className="label">
          <span className="label-text-alt">This will be the main title of your portfolio</span>
        </label>
      </div>

      {/* Profile Image */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Profile Image</span>
          <span className="label-text-alt">Optional</span>
        </label>
        
        <div className="flex items-start gap-4">
          {/* Image Preview */}
          <div className="flex-shrink-0">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-24 h-24 object-cover rounded-full border-4 border-base-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 btn btn-circle btn-xs btn-error"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="w-24 h-24 bg-base-300 rounded-full flex items-center justify-center border-2 border-dashed border-base-content/20">
                <svg className="w-8 h-8 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Upload Controls */}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <div className="mt-2">
              <p className="text-sm text-base-content/60">
                Upload a professional headshot or avatar image. Recommended: Square image, at least 300x300px.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
              <span className="label-text-alt text-error">Required</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              value={about.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          {/* Professional Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Professional Title</span>
              <span className="label-text-alt text-error">Required</span>
            </label>
            <input
              type="text"
              placeholder="Full Stack Developer"
              className="input input-bordered w-full"
              value={about.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="input input-bordered w-full"
              value={about.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phone</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="input input-bordered w-full"
              value={about.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <input
            type="text"
            placeholder="San Francisco, CA"
            className="input input-bordered w-full"
            value={about.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">About Me Description</span>
          <span className="label-text-alt text-error">Required</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-32"
          placeholder="Write a compelling description about yourself, your experience, and what makes you unique. This is your elevator pitch!"
          value={about.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
        <label className="label">
          <span className="label-text-alt">
            Character count: {about.description.length} | Recommended: 150-300 characters
          </span>
        </label>
      </div>

      {/* Tips */}
      <div className="alert alert-info">
        <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">Pro Tips for Your About Section:</h3>
          <div className="text-sm mt-1">
            <ul className="list-disc list-inside space-y-1">
              <li>Use a professional, high-quality headshot</li>
              <li>Write in first person and keep it conversational</li>
              <li>Highlight your unique value proposition</li>
              <li>Include keywords relevant to your industry</li>
              <li>Keep it concise but informative</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
