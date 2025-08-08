import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TemplateGrid from '../components/templates/TemplateGrid';
import { getTemplatesByType, TEMPLATE_TYPES } from '../data/templates';

const SimpleTemplates = () => {
  const navigate = useNavigate();
  const templates = getTemplatesByType(TEMPLATE_TYPES.SIMPLE);

  const handleTemplateSelect = (template) => {
    navigate(`/editor/${template.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple Templates
          </h1>
          <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates. Perfect for beginners and quick setup.
          </p>
        </div>

        <TemplateGrid 
          templates={templates}
          onSelectTemplate={handleTemplateSelect}
        />

        <div className="text-center mt-8">
          <Link to="/create" className="btn btn-ghost">
            ← Back to Template Choice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleTemplates;