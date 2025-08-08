import React from 'react';
import PropTypes from 'prop-types';

const FormSection = ({ section, formData, onChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
      {section.description && (
        <p className="text-base-content/70 mb-6">{section.description}</p>
      )}
      
      <div className="space-y-6">
        {section.fields.map((field) => (
          <div key={field.id} className="form-control">
            <label className="label">
              <span className="label-text font-medium">{field.label}</span>
              {field.required && <span className="text-error">*</span>}
            </label>
            
            {field.description && (
              <p className="text-xs text-base-content/60 -mt-1 mb-2">{field.description}</p>
            )}
            
            {field.type === 'textarea' ? (
              <textarea
                className="textarea textarea-bordered w-full focus:textarea-primary"
                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                value={formData[field.id] || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
                rows={field.rows || 4}
              />
            ) : field.type === 'select' ? (
              <select
                className="select select-bordered w-full focus:select-primary"
                value={formData[field.id] || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
              >
                <option value="" disabled>{field.placeholder || `Select ${field.label.toLowerCase()}...`}</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={!!formData[field.id]}
                    onChange={(e) => onChange(field.id, e.target.checked)}
                  />
                  <span className="label-text">{field.checkboxLabel || field.label}</span>
                </label>
              </div>
            ) : (
              <input
                type={field.type}
                className="input input-bordered w-full focus:input-primary"
                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                value={formData[field.id] || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
                min={field.min}
                max={field.max}
                step={field.step}
              />
            )}
            
            {field.helpText && (
              <label className="label">
                <span className="label-text-alt text-base-content/60">{field.helpText}</span>
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

FormSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        required: PropTypes.bool,
        description: PropTypes.string,
        placeholder: PropTypes.string,
        helpText: PropTypes.string,
        checkboxLabel: PropTypes.string,
        rows: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  }).isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSection;
