// Template categories
export const TEMPLATE_TYPES = {
  SIMPLE: 'simple',
  CUSTOM: 'custom',
};

// Template data
export const templates = [
  {
    id: 'simple-1',
    name: 'Minimalist Portfolio',
    description: 'A clean and minimalist template perfect for showcasing your work.',
    preview: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Minimalist',
    type: TEMPLATE_TYPES.SIMPLE,
  },
  {
    id: 'simple-2',
    name: 'Classic Resume',
    description: 'Traditional resume layout with a modern twist.',
    preview: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Classic',
    type: TEMPLATE_TYPES.SIMPLE,
  },
  {
    id: 'custom-1',
    name: 'Creative Studio',
    description: 'Bold and creative template for artists and designers.',
    preview: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Creative',
    type: TEMPLATE_TYPES.CUSTOM,
  },
  {
    id: 'custom-2',
    name: 'Tech Professional',
    description: 'Modern template focused on technical skills and projects.',
    preview: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Tech',
    type: TEMPLATE_TYPES.CUSTOM,
  },
];

// Helper functions
export const getTemplatesByType = (type) => {
  return templates.filter(template => template.type === type);
};

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id);
};
