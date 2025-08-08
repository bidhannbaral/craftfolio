import React from 'react';
import PropTypes from 'prop-types';

const TemplateCard = ({ template, onSelect }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <figure className="px-4 pt-4">
        <img 
          src={template.preview} 
          alt={template.name}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{template.name}</h2>
        <p className="text-sm text-base-content/70">{template.description}</p>
        <div className="card-actions justify-end mt-4">
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onSelect(template)}
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};

TemplateCard.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['simple', 'custom']).isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TemplateCard;
