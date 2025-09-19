import { create } from 'zustand';

// Default portfolio structure
const defaultPortfolio = {
  id: null,
  template: 'minimalist',
  title: 'My Portfolio',
  sections: {
    about: {
      name: '',
      tagline: '',
      description: '',
      email: '',
      phone: '',
      location: '',
      profileImage: null,
      heroBanner: null,
      heroBannerImage: null,
      heroHeadline: '',
      heroSubtext: '',
    },
    projects: {
      items: [],
    },
    skills: {
      items: [],
    },
    experience: {
      items: [],
    },
    education: {
      items: [],
    },
    contact: {
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      website: '',
    },
    achievements: {
      milestones: [],
      certificates: [],
    },
    socialProof: {
      trustedBy: [],
      feedback: [],
    },
    media: {
       images: [],
       videos: []
    },
  },
  styling: {
    primaryColor: '#3b82f6',
    secondaryColor: '#1e40af',
    fontFamily: 'Inter',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
  },
  lastModified: null,
};

export const usePortfolioStore = create((set, get) => {
  // Load saved portfolios from localStorage
  const loadSavedPortfolios = () => {
    try {
      const saved = localStorage.getItem('craftfolio-portfolios');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to load saved portfolios:', error);
      return [];
    }
  };

  // Save portfolios to localStorage
  const saveToLocalStorage = (portfolios) => {
    try {
      localStorage.setItem('craftfolio-portfolios', JSON.stringify(portfolios));
    } catch (error) {
      console.error('Failed to save portfolios:', error);
    }
  };

  return {
    // Current portfolio being edited
    currentPortfolio: { ...defaultPortfolio },

    // Saved portfolios list
    savedPortfolios: loadSavedPortfolios(),

    // UI state
    isEditing: false,
    selectedTemplate: null,

    // Actions
    createNewPortfolio: (templateId) => {
      let defaultStyling = {
        primaryColor: '#3b82f6',
        secondaryColor: '#1e40af',
        fontFamily: 'Inter',
        backgroundColor: '#ffffff',
        textColor: '#1f2937',
      };

      if (templateId === 'minimalist2') {
        defaultStyling = {
          ...defaultStyling,
          primaryColor: '#ef4444',
          secondaryColor: '#991b1b',
        };
      }

      if (templateId === 'minimalist3') {
        defaultStyling = {
          ...defaultStyling,
          primaryColor: '#16a34a',
          secondaryColor: '#14532d',
        };
      }

      const newPortfolio = {
        ...defaultPortfolio,
        id: Date.now().toString(),
        template: templateId,
        styling: defaultStyling,
        lastModified: new Date().toISOString(),
      };
      set({
        currentPortfolio: newPortfolio,
        selectedTemplate: templateId,
        isEditing: true,
      });
    },

    updatePortfolioSection: (sectionName, data) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          [sectionName]: {
            ...currentPortfolio.sections[sectionName],
            ...data,
          },
        },
        lastModified: new Date().toISOString(),
      };

      const { savedPortfolios } = get();
      const existingIndex = savedPortfolios.findIndex(
        (p) => p.id === updatedPortfolio.id
      );
      let updatedPortfolios = [...savedPortfolios];
      if (existingIndex >= 0) {
        updatedPortfolios[existingIndex] = updatedPortfolio;
      }
      saveToLocalStorage(updatedPortfolios);

      set({
        currentPortfolio: updatedPortfolio,
        savedPortfolios: updatedPortfolios,
      });
    },

    updatePortfolioStyling: (stylingData) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedPortfolio = {
        ...currentPortfolio,
        styling: {
          ...currentPortfolio.styling,
          ...stylingData,
        },
        lastModified: new Date().toISOString(),
      };

      const { savedPortfolios } = get();
      const existingIndex = savedPortfolios.findIndex(
        (p) => p.id === updatedPortfolio.id
      );
      let updatedPortfolios = [...savedPortfolios];
      if (existingIndex >= 0) {
        updatedPortfolios[existingIndex] = updatedPortfolio;
      }
      saveToLocalStorage(updatedPortfolios);

      set({
        currentPortfolio: updatedPortfolio,
        savedPortfolios: updatedPortfolios,
      });
    },

    updatePortfolioTitle: (title) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedPortfolio = {
        ...currentPortfolio,
        title,
        lastModified: new Date().toISOString(),
      };

      const { savedPortfolios } = get();
      const existingIndex = savedPortfolios.findIndex(
        (p) => p.id === updatedPortfolio.id
      );
      let updatedPortfolios = [...savedPortfolios];
      if (existingIndex >= 0) {
        updatedPortfolios[existingIndex] = updatedPortfolio;
      }
      saveToLocalStorage(updatedPortfolios);

      set({
        currentPortfolio: updatedPortfolio,
        savedPortfolios: updatedPortfolios,
      });
    },

    savePortfolio: () => {
      const { currentPortfolio, savedPortfolios } = get();
      const existingIndex = savedPortfolios.findIndex(
        (p) => p.id === currentPortfolio.id
      );

      let updatedPortfolios;
      if (existingIndex >= 0) {
        updatedPortfolios = [...savedPortfolios];
        updatedPortfolios[existingIndex] = currentPortfolio;
      } else {
        updatedPortfolios = [...savedPortfolios, currentPortfolio];
      }

      saveToLocalStorage(updatedPortfolios);
      set({ savedPortfolios: updatedPortfolios });
      return currentPortfolio;
    },

    loadPortfolio: (portfolioId) => {
      const { savedPortfolios } = get();
      const portfolio = savedPortfolios.find((p) => p.id === portfolioId);
      if (portfolio) {
        set({
          currentPortfolio: portfolio,
          selectedTemplate: portfolio.template,
          isEditing: true,
        });
      }
    },

    deletePortfolio: (portfolioId) => {
      const { savedPortfolios } = get();
      const updatedPortfolios = savedPortfolios.filter(
        (p) => p.id !== portfolioId
      );
      saveToLocalStorage(updatedPortfolios);
      set({ savedPortfolios: updatedPortfolios });
    },

    resetCurrentPortfolio: () => {
      set({
        currentPortfolio: { ...defaultPortfolio },
        isEditing: false,
        selectedTemplate: null,
      });
    },

    // ✅ Project helpers
    addProjectItem: (project) => {
      const currentPortfolio = get().currentPortfolio;
      const newProject = {
        id: Date.now().toString(),
        title: '',
        description: '',
        technologies: [],
        liveUrl: '',
        githubUrl: '',
        image: null,
        ...project,
      };

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          projects: {
            items: [...currentPortfolio.sections.projects.items, newProject],
          },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    updateProjectItem: (projectId, data) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedProjects =
        currentPortfolio.sections.projects.items.map((project) =>
          project.id === projectId ? { ...project, ...data } : project
        );

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          projects: { items: updatedProjects },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    removeProjectItem: (projectId) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedProjects =
        currentPortfolio.sections.projects.items.filter(
          (project) => project.id !== projectId
        );

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          projects: { items: updatedProjects },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    // ✅ Skills helpers
    addSkillItem: (skill) => {
      const currentPortfolio = get().currentPortfolio;
      const newSkill = {
        id: Date.now().toString(),
        name: '',
        level: 'Intermediate',
        category: 'Technical',
        ...skill,
      };

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          skills: {
            items: [...currentPortfolio.sections.skills.items, newSkill],
          },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    updateSkillItem: (skillId, data) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedSkills =
        currentPortfolio.sections.skills.items.map((skill) =>
          skill.id === skillId ? { ...skill, ...data } : skill
        );

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          skills: { items: updatedSkills },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    removeSkillItem: (skillId) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedSkills =
        currentPortfolio.sections.skills.items.filter(
          (skill) => skill.id !== skillId
        );

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          skills: { items: updatedSkills },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    // ✅ Experience helpers
    addExperienceItem: (experience) => {
      const currentPortfolio = get().currentPortfolio;
      const newExperience = {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        ...experience,
      };

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          experience: {
            items: [...currentPortfolio.sections.experience.items, newExperience],
          },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    // ✅ Education helpers
    addEducationItem: (education) => {
      const currentPortfolio = get().currentPortfolio;
      const newEducation = {
        id: Date.now().toString(),
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: '',
        ...education,
      };

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          education: {
            items: [...currentPortfolio.sections.education.items, newEducation],
          },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    // ✅ Media helpers
    addMediaItem: (media) => {
      const currentPortfolio = get().currentPortfolio;
      const newMedia = {
        id: Date.now().toString(),
        type: 'image', // or 'video'
        url: '',
        thumbnail: '',
        caption: '',
        ...media,
      };

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          media: {
            items: [...currentPortfolio.sections.media.items, newMedia],
          },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    updateMediaItem: (mediaId, data) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedMedia =
        currentPortfolio.sections.media.items.map((m) =>
          m.id === mediaId ? { ...m, ...data } : m
        );

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          media: { items: updatedMedia },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },

    removeMediaItem: (mediaId) => {
      const currentPortfolio = get().currentPortfolio;
      const updatedMedia =
        currentPortfolio.sections.media.items.filter((m) => m.id !== mediaId);

      const updatedPortfolio = {
        ...currentPortfolio,
        sections: {
          ...currentPortfolio.sections,
          media: { items: updatedMedia },
        },
        lastModified: new Date().toISOString(),
      };
      set({ currentPortfolio: updatedPortfolio });
    },
  };
});
