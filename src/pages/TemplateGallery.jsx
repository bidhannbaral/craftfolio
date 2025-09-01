import React from 'react';
import { useNavigate } from 'react-router-dom';
import { templates, TEMPLATE_TYPES } from '../data/templates';
import { usePortfolioStore } from '../store/portfolioStore';

const TemplateGallery = () => {
  const navigate = useNavigate();
  const createNewPortfolio = usePortfolioStore((state) => state.createNewPortfolio);

  const handleTemplateSelect = (templateId) => {
    createNewPortfolio(templateId);
    navigate('/editor');
  };

  return (
    <div className="flex-1 bg-base-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Choose Your Template
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Select a professionally designed template and customize it to create your perfect portfolio
          </p>
        </div>



        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Template Preview */}
              <figure className="px-4 pt-4">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </figure>
              
              {/* Template Info */}
              <div className="card-body">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="card-title text-lg">{template.name}</h2>
                  <div className={`badge badge-sm ${
                    template.type === TEMPLATE_TYPES.MINIMAL ? 'badge-info' :
                    template.type === TEMPLATE_TYPES.CREATIVE ? 'badge-secondary' :
                    'badge-accent'
                  }`}>
                    {template.type}
                  </div>
                </div>
                
                <p className="text-base-content/70 text-sm mb-4">
                  {template.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {template.features.map((feature, index) => (
                      <span key={index} className="badge badge-outline badge-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Sections Included */}
                <div className="mb-6">
                  <p className="text-xs text-base-content/60 mb-2">Includes sections:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.sections.map((section, index) => (
                      <span key={index} className="badge badge-ghost badge-xs">
                        {section}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="card-actions justify-end">
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      // TODO: Implement preview modal
                      console.log('Preview template:', template.id);
                    }}
                  >
                    Preview
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    Use Template
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Need something custom?</h3>
            <p className="text-base-content/70 mb-6">
              All templates are fully customizable. Choose any template and modify colors, fonts, layout, and content to match your style.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-outline">
                Learn More
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleTemplateSelect('minimalist')}
              >
                Start with Minimal Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;
