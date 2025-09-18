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
  {
    id: 'minimalist3',
    name: 'Minimalist Hero',
    description: 'A hero-banner style template with centered profile and interactive project showcase.',
    preview: 'https://via.placeholder.com/400x300/e2e8f0/1e293b?text=Minimalist+Hero',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Hero banner',
      'Interactive projects with focus effect',
      'Modern responsive layout',
    ],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
  {
    id: 'minimalist4',
    name: 'Minimalist Showcase',
    description:
      'Fullscreen hero banner, two-column about section, masonry projects, and progress bar skills.',
    preview: 'https://via.placeholder.com/400x300/dbeafe/1e40af?text=Minimalist+Showcase',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Fullscreen hero banner',
      'Two-column about layout',
      'Masonry project grid',
      'Skill progress bars',
    ],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
  {
    id: 'minimalist5',
    name: 'Minimalist Sidebar Gallery',
    description:
      'Sidebar profile and contact info with a clean gallery grid for projects.',
    preview: 'https://via.placeholder.com/400x300/fef9c3/92400e?text=Minimalist+Sidebar+Gallery',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Sidebar profile and contact',
      'Project gallery grid',
      'Compact and modern design',
    ],
    sections: ['about', 'projects', 'skills', 'contact'],
  },
  {
  id: 'minimalist6',
  name: 'Minimalist Card Portfolio',
  description:
    'Card-style about section with vertical ABOUT ME, project showcase, skills, and experience.',
  preview: 'https://via.placeholder.com/400x300/fce7f3/be185d?text=Minimalist+Card',
  type: TEMPLATE_TYPES.MINIMAL,
  features: [
    'Card-based about section',
    'Vertical ABOUT ME text',
    'Project showcase grid',
    'Skills and experience side-by-side',
    'Simple footer contact bar',
  ],
  sections: ['about', 'projects', 'skills', 'experience', 'contact'],
},

];

export const getTemplatesByType = (type) =>
  templates.filter((template) => template.type === type);

export const getTemplateById = (id) =>
  templates.find((template) => template.id === id);
