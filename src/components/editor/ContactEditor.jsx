import React from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const ContactEditor = () => {
  const { currentPortfolio, updatePortfolioSection } = usePortfolioStore();
  const { contact } = currentPortfolio.sections;

  const handleInputChange = (field, value) => {
    updatePortfolioSection('contact', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">📧</span>
          Contact Section
        </h2>
        <p className="text-base-content/70 mb-6">
          Provide ways for people to get in touch with you.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="input input-bordered w-full"
              value={contact.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">LinkedIn</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              className="input input-bordered w-full"
              value={contact.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">GitHub</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="url"
              placeholder="https://github.com/yourusername"
              className="input input-bordered w-full"
              value={contact.github}
              onChange={(e) => handleInputChange('github', e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Website</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              className="input input-bordered w-full"
              value={contact.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEditor;
