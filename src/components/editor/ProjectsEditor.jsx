import React, { useState } from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const ProjectsEditor = () => {
  const { 
    currentPortfolio, 
    addProjectItem, 
    updateProjectItem, 
    removeProjectItem 
  } = usePortfolioStore();
  
  const { projects } = currentPortfolio.sections;
  const [expandedProject, setExpandedProject] = useState(null);

  const handleAddProject = () => {
    addProjectItem({
      title: 'New Project',
      description: '',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      image: null,
    });
  };

  const handleProjectChange = (projectId, field, value) => {
    updateProjectItem(projectId, { [field]: value });
  };

  const handleTechnologyAdd = (projectId, technology) => {
    const project = projects.items.find(p => p.id === projectId);
    if (project && technology.trim() && !project.technologies.includes(technology.trim())) {
      const updatedTechnologies = [...project.technologies, technology.trim()];
      updateProjectItem(projectId, { technologies: updatedTechnologies });
    }
  };

  const handleTechnologyRemove = (projectId, technologyIndex) => {
    const project = projects.items.find(p => p.id === projectId);
    if (project) {
      const updatedTechnologies = project.technologies.filter((_, index) => index !== technologyIndex);
      updateProjectItem(projectId, { technologies: updatedTechnologies });
    }
  };

  const handleImageUpload = (projectId, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        updateProjectItem(projectId, { image: base64Image });
      };
      reader.readAsDataURL(file);
    }
  };

  const TechnologyInput = ({ projectId, technologies }) => {
    const [newTech, setNewTech] = useState('');

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && newTech.trim()) {
        handleTechnologyAdd(projectId, newTech);
        setNewTech('');
      }
    };

    return (
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="badge badge-primary gap-2">
              {tech}
              <button
                type="button"
                onClick={() => handleTechnologyRemove(projectId, index)}
                className="btn btn-ghost btn-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add technology (press Enter)"
          className="input input-bordered input-sm w-full"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">💼</span>
          Projects Section
        </h2>
        <p className="text-base-content/70 mb-6">
          Showcase your best work and demonstrate your skills through real projects.
        </p>
      </div>

      {/* Add Project Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Your Projects ({projects.items.length})</h3>
        <button
          onClick={handleAddProject}
          className="btn btn-primary btn-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Project
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.items.length === 0 ? (
          <div className="text-center py-12 bg-base-200 rounded-lg">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
            <p className="text-base-content/60 mb-4">
              Add your first project to start building your portfolio
            </p>
            <button
              onClick={handleAddProject}
              className="btn btn-primary"
            >
              Add Your First Project
            </button>
          </div>
        ) : (
          projects.items.map((project, index) => (
            <div key={project.id} className="card bg-base-100 border border-base-300">
              <div className="card-body">
                {/* Project Header */}
                <div className="flex items-center justify-between">
                  <h4 className="card-title text-lg">
                    Project {index + 1}: {project.title || 'Untitled'}
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )}
                      className="btn btn-ghost btn-sm"
                    >
                      {expandedProject === project.id ? '▼' : '▶'}
                    </button>
                    <button
                      onClick={() => removeProjectItem(project.id)}
                      className="btn btn-ghost btn-sm text-error"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="space-y-4 mt-4">
                    {/* Project Image */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Project Image</span>
                      </label>
                      <div className="flex items-start gap-4">
                        {project.image ? (
                          <div className="relative">
                            <img
                              src={project.image}
                              alt="Project preview"
                              className="w-32 h-24 object-cover rounded-lg border"
                            />
                            <button
                              type="button"
                              onClick={() => updateProjectItem(project.id, { image: null })}
                              className="absolute -top-2 -right-2 btn btn-circle btn-xs btn-error"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <div className="w-32 h-24 bg-base-300 rounded-lg flex items-center justify-center border-2 border-dashed border-base-content/20">
                            <svg className="w-8 h-8 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        <div className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(project.id, e)}
                            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                          />
                          <p className="text-sm text-base-content/60 mt-2">
                            Upload a screenshot or preview of your project
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Project Title */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Project Title</span>
                          <span className="label-text-alt text-error">Required</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., E-commerce Website"
                          className="input input-bordered w-full"
                          value={project.title}
                          onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Live URL */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold">Live URL</span>
                            <span className="label-text-alt">Optional</span>
                          </label>
                          <input
                            type="url"
                            placeholder="https://myproject.com"
                            className="input input-bordered w-full"
                            value={project.liveUrl}
                            onChange={(e) => handleProjectChange(project.id, 'liveUrl', e.target.value)}
                          />
                        </div>

                        {/* GitHub URL */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-semibold">GitHub Repository</span>
                            <span className="label-text-alt">Optional</span>
                          </label>
                          <input
                            type="url"
                            placeholder="https://github.com/username/project"
                            className="input input-bordered w-full"
                            value={project.githubUrl}
                            onChange={(e) => handleProjectChange(project.id, 'githubUrl', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Project Description</span>
                        <span className="label-text-alt text-error">Required</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-24 w-full"
                        placeholder="Describe what this project does, the problems it solves, and any notable features..."
                        value={project.description}
                        onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                      />
                    </div>

                    {/* Technologies */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Technologies Used</span>
                        <span className="label-text-alt">Optional</span>
                      </label>
                      <TechnologyInput projectId={project.id} technologies={project.technologies} />
                      <label className="label">
                        <span className="label-text-alt">
                          Add technologies like React, Node.js, Python, etc.
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Tips */}
      <div className="alert alert-info">
        <svg className="w-6 h-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">Project Tips:</h3>
          <div className="text-sm mt-1">
            <ul className="list-disc list-inside space-y-1">
              <li>Include 3-6 of your best projects</li>
              <li>Use high-quality screenshots or demos</li>
              <li>Explain the problem your project solves</li>
              <li>Mention specific technologies and your role</li>
              <li>Include both live demos and source code when possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEditor;
