import { create } from 'zustand';

// Default portfolio structure
const defaultPortfolio = {
  id: null,
  template: 'minimalist',
  title: 'My Portfolio',
  sections: {
    about: {
      name: '',
      title: '',
      description: '',
      email: '',
      phone: '',
      location: '',
      profileImage: null,
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
        const newPortfolio = {
          ...defaultPortfolio,
          id: Date.now().toString(),
          template: templateId,
          lastModified: new Date().toISOString(),
        };
        set({ 
          currentPortfolio: newPortfolio,
          selectedTemplate: templateId,
          isEditing: true 
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
        set({ currentPortfolio: updatedPortfolio });
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
        set({ currentPortfolio: updatedPortfolio });
      },
      
      updatePortfolioTitle: (title) => {
        const currentPortfolio = get().currentPortfolio;
        set({ 
          currentPortfolio: {
            ...currentPortfolio,
            title,
            lastModified: new Date().toISOString(),
          }
        });
      },
      
      savePortfolio: () => {
        const { currentPortfolio, savedPortfolios } = get();
        const existingIndex = savedPortfolios.findIndex(p => p.id === currentPortfolio.id);
        
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
        const portfolio = savedPortfolios.find(p => p.id === portfolioId);
        if (portfolio) {
          set({ 
            currentPortfolio: portfolio,
            selectedTemplate: portfolio.template,
            isEditing: true 
          });
        }
      },
      
      deletePortfolio: (portfolioId) => {
        const { savedPortfolios } = get();
        const updatedPortfolios = savedPortfolios.filter(p => p.id !== portfolioId);
        saveToLocalStorage(updatedPortfolios);
        set({ savedPortfolios: updatedPortfolios });
      },
      
      resetCurrentPortfolio: () => {
        set({ 
          currentPortfolio: { ...defaultPortfolio },
          isEditing: false,
          selectedTemplate: null 
        });
      },
      
      // Array manipulation helpers
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
        const updatedProjects = currentPortfolio.sections.projects.items.map(project =>
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
        const updatedProjects = currentPortfolio.sections.projects.items.filter(
          project => project.id !== projectId
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
      
      // Similar helpers for skills, experience, education
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
  };
});


