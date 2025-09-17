export const TEMPLATE_TYPES = {
  MINIMAL: 'minimal',
  CREATIVE: 'creative',
  PROFESSIONAL: 'professional',
};

export const templates = [
  {
    id: 'minimalist',
    name: 'Minimalist Portfolio',
    description: 'A clean, centered layout perfect for showcasing work with simplicity.',
    preview: 'https://via.placeholder.com/400x300/f8fafc/64748b?text=Minimalist',
    type: TEMPLATE_TYPES.MINIMAL,
    features: ['Centered layout', 'Typography focused', 'Responsive'],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
  {
    id: 'minimalist2',
    name: 'Minimalist Sidebar',
    description: 'A sidebar-style minimalist template with resume-inspired structure.',
    preview: 'https://via.placeholder.com/400x300/f1f5f9/475569?text=Minimalist+Sidebar',
    type: TEMPLATE_TYPES.MINIMAL,
    features: ['Sidebar layout', 'Resume-like', 'Compact design'],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
 
];

export const getTemplatesByType = (type) =>
  templates.filter((template) => template.type === type);

export const getTemplateById = (id) =>
  templates.find((template) => template.id === id);
