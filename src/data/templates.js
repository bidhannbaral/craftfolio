// Template categories
export const TEMPLATE_TYPES = {
  MINIMAL: 'minimal',
  CREATIVE: 'creative',
  PROFESSIONAL: 'professional',
};

// Template data
export const templates = [
  {
    id: 'minimalist',
    name: 'Minimalist Portfolio',
    description: 'A clean and minimalist template perfect for showcasing your work with elegant simplicity.',
    preview: 'https://via.placeholder.com/400x300/f8fafc/64748b?text=Minimalist+Layout',
    type: TEMPLATE_TYPES.MINIMAL,
    features: ['Clean layout', 'Typography focused', 'Mobile responsive'],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
];

// Helper functions
export const getTemplatesByType = (type) => {
  return templates.filter(template => template.type === type);
};

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id);
};
