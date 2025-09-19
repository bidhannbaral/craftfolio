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
  {
    id: 'minimalist7',
    name: 'Minimalist Achievements',
    description:
      'Showcases milestones and certificates alongside projects, skills, and experience.',
    preview: 'https://via.placeholder.com/400x300/ede9fe/5b21b6?text=Minimalist+Achievements',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Hero banner with overlay',
      'About section with contact details',
      'Milestones grid for achievements',
      'Certificates showcase',
      'Projects, skills, and experience sections',
      'Modern footer with social/contact links',
    ],
    sections: [
      'about',
      'milestones',
      'projects',
      'skills',
      'experience',
      'certificates',
      'contact',
    ],
  },
  {
    id: 'minimalist8',
    name: 'Minimalist Sidebar Pro',
    description:
      'A sidebar-focused design with vertical navigation, compact profile, and wide project display.',
    preview: 'https://via.placeholder.com/400x300/f0fdfa/0f766e?text=Minimalist+Sidebar+Pro',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Fixed sidebar with navigation',
      'Compact profile section',
      'Wide content area for projects/skills',
      'Modern responsive design',
    ],
    sections: ['about', 'projects', 'skills', 'experience', 'contact'],
  },
  {
    id: 'minimalist9',
    name: 'Minimalist Journalist',
    description:
      'A journalist-focused layout that highlights published articles first, with supporting skills, milestones, and experience.',
    preview: 'https://via.placeholder.com/400x300/fef2f2/b91c1c?text=Minimalist+Journalist',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Article-first layout',
      'Two-column structure for About and Skills',
      'Milestones and Experience highlights',
      'Certificates and Social Proof support',
      'Clean responsive design',
    ],
    sections: [
      'projects', // treated as "Articles"
      'about',
      'skills',
      'milestones',
      'experience',
      'certificates',
      'socialProof',
      'contact',
    ],
  },
  {
    id: 'minimalist10',
    name: 'Minimalist Performer',
    description:
      'A performer/actor style layout with hero image + about, showreel video, milestones, skills/experience, gallery, and projects.',
    preview: 'https://via.placeholder.com/400x300/fee2e2/991b1b?text=Minimalist+Performer',
    type: TEMPLATE_TYPES.MINIMAL,
    features: [
      'Hero with background + About overlay',
      'Showreel and featured videos',
      'Milestones section',
      'Side-by-side Skills & Experience',
      'Horizontal photo gallery',
      'Projects and contact footer',
    ],
    sections: [
      'about',
      'media',
      'milestones',
      'skills',
      'experience',
      'gallery',
      'projects',
      'contact',
    ],
  },
];

export const getTemplatesByType = (type) =>
  templates.filter((template) => template.type === type);

export const getTemplateById = (id) =>
  templates.find((template) => template.id === id);
