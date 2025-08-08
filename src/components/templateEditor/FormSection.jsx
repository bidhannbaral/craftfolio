import React from 'react';
import PropTypes from 'prop-types';

const FormSection = ({ section, formData, onChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
      <div className="space-y-4">
        {section.fields.map((field) => (
          <div key={field.id} className="form-control">
            <label className="label">
              <span className="label-text">{field.label}</span>
            </label>
            {field.type === 'textarea' ? (
              <textarea
                className="textarea textarea-bordered w-full"
                value={formData[field.id] || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
              />
            ) : (
              <input
                type={field.type}
                className="input input-bordered w-full"
                value={formData[field.id] || ''}
                onChange={(e) => onChange(field.id, e.target.value)}
              />
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
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSection;
