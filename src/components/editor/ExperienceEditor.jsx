import React, { useState } from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const ExperienceEditor = () => {
  const { currentPortfolio, addExperienceItem, updatePortfolioSection } = usePortfolioStore();
  const { experience } = currentPortfolio.sections;
  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleAddExperience = () => {
    addExperienceItem({
      company: 'New Company',
      position: 'New Position',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    });
  };

  const handleExperienceChange = (expId, field, value) => {
    const updatedExperience = experience.items.map(exp =>
      exp.id === expId ? { ...exp, [field]: value } : exp
    );
    updatePortfolioSection('experience', { items: updatedExperience });
  };

  const handleRemoveExperience = (expId) => {
    const updatedExperience = experience.items.filter(exp => exp.id !== expId);
    updatePortfolioSection('experience', { items: updatedExperience });
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    // If it's already in YYYY-MM format, return as is
    if (dateString.match(/^\d{4}-\d{2}$/)) return dateString;
    // If it's a full date, extract year and month
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    }
    return dateString;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">📈</span>
          Experience Section
        </h2>
        <p className="text-base-content/70 mb-6">
          Add your work experience, internships, and relevant positions.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Work Experience ({experience.items.length})</h3>
        <button 
          onClick={handleAddExperience} 
          className="btn btn-primary btn-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Experience
        </button>
      </div>

      {experience.items.length === 0 ? (
        <div className="text-center py-12 bg-base-200 rounded-lg">
          <div className="text-6xl mb-4">💼</div>
          <h3 className="text-xl font-semibold mb-2">No experience added yet</h3>
          <p className="text-base-content/60 mb-4">
            Add your first work experience to start building your career timeline
          </p>
          <button
            onClick={handleAddExperience}
            className="btn btn-primary"
          >
            Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {experience.items.map((exp, index) => (
            <div key={exp.id} className="card bg-base-100 border border-base-300">
              <div className="card-body">
                {/* Experience Header */}
                <div className="flex items-center justify-between">
                  <h4 className="card-title text-lg">
                    Experience {index + 1}: {exp.position || 'New Position'} at {exp.company}
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedExperience(
                        expandedExperience === exp.id ? null : exp.id
                      )}
                      className="btn btn-ghost btn-sm"
                    >
                      {expandedExperience === exp.id ? '▼' : '▶'}
                    </button>
                    <button
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="btn btn-ghost btn-sm text-error"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedExperience === exp.id && (
                  <div className="space-y-6 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Company</span>
                          <span className="label-text-alt text-error">Required</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Google, Microsoft, Startup Inc."
                          className="input input-bordered w-full"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                        />
                      </div>

                      {/* Position */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Position</span>
                          <span className="label-text-alt text-error">Required</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Software Engineer, Marketing Manager"
                          className="input input-bordered w-full"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Start Date */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Start Date</span>
                          <span className="label-text-alt text-error">Required</span>
                        </label>
                        <input
                          type="month"
                          className="input input-bordered w-full"
                          value={formatDateForInput(exp.startDate)}
                          onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                        />
                      </div>

                      {/* End Date */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">End Date</span>
                          <span className="label-text-alt">Leave empty if current</span>
                        </label>
                        <input
                          type="month"
                          className="input input-bordered w-full"
                          value={formatDateForInput(exp.endDate)}
                          onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                          disabled={exp.current}
                        />
                      </div>

                      {/* Current Position */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Current Position</span>
                        </label>
                        <div className="flex items-center gap-3 mt-3">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={exp.current}
                            onChange={(e) => {
                              handleExperienceChange(exp.id, 'current', e.target.checked);
                              if (e.target.checked) {
                                handleExperienceChange(exp.id, 'endDate', '');
                              }
                            }}
                          />
                          <span className="label-text">I currently work here</span>
                        </div>
                      </div>
                    </div>

                    {/* Job Description */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Job Description</span>
                        <span className="label-text-alt text-error">Required</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-32 w-full"
                        placeholder="Describe your responsibilities, achievements, and key projects. Use bullet points or concise paragraphs..."
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          Character count: {exp.description.length} | Include specific achievements and technologies used
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="alert alert-info">
        <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">Experience Tips:</h3>
          <div className="text-sm mt-1">
            <ul className="list-disc list-inside space-y-1">
              <li>List experiences in reverse chronological order (most recent first)</li>
              <li>Include quantifiable achievements (e.g., "Increased sales by 25%")</li>
              <li>Mention specific technologies, tools, and methodologies used</li>
              <li>Focus on impact and results, not just responsibilities</li>
              <li>Keep descriptions concise but informative</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEditor;
