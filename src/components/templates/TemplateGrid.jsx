import React from 'react';
import PropTypes from 'prop-types';
import TemplateCard from './TemplateCard';

const TemplateGrid = ({ templates, onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onSelect={onSelectTemplate}
        />
      ))}
    </div>
  );
};

TemplateGrid.propTypes = {
  templates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['simple', 'custom']).isRequired,
    })
  ).isRequired,
  onSelectTemplate: PropTypes.func.isRequired,
};

export default TemplateGrid;
