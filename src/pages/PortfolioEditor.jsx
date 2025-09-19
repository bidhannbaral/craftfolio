import React, { useState } from 'react';
import { usePortfolioStore } from '../store/portfolioStore';
import AboutEditor from '../components/editor/AboutEditor';
import ProjectsEditor from '../components/editor/ProjectsEditor';
import SkillsEditor from '../components/editor/SkillsEditor';
import ExperienceEditor from '../components/editor/ExperienceEditor';
import SocialProofEditor from '../components/editor/SocialProofEditor';
import ContactEditor from '../components/editor/ContactEditor';
import MediaShowcaseEditor from '../components/editor/MediaShowcaseEditor';
import StylingEditor from '../components/editor/StylingEditor';
import PortfolioPreview from '../components/preview/PortfolioPreview';
import AchievementsEditor from '../components/editor/AchievementsEditor'
import { exportPortfolioAsJSON, exportPortfolioAsHTML, importPortfolioFromJSON } from '../utils/exportUtils';


const PortfolioEditor = () => {
  const {
    currentPortfolio,
    savePortfolio,

    loadPortfolio,
  } = usePortfolioStore();

  const [activeTab, setActiveTab] = useState('about');
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

 const tabs = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'experience', label: 'Experience', icon: '📈' },
  ...(currentPortfolio.template &&
    ![
      "minimalist",
      "minimalist2",
      "minimalist3",
      "minimalist4",
      "minimalist5",
      "minimalist6",
      
    ].includes(currentPortfolio.template)
    ? [{ id: "achievements", label: "Achievements", icon: "🏅" }]
    : []),
  ...(currentPortfolio.template &&
    ![
      "minimalist",
      "minimalist2",
      "minimalist3",
      "minimalist4",
      "minimalist5",
      "minimalist6",
      "minimalist7", 
      "minimalist10",
    ].includes(currentPortfolio.template)
    ? [{ id: "socialProof", label: "Trusted & Feedback", icon: "🤝" }]
    : []),

    ...(currentPortfolio.template &&
  !["minimalist", "minimalist2", "minimalist3", "minimalist4", "minimalist5", "minimalist6", "minimalist7", "minimalist8", "minimalist9"]
    .includes(currentPortfolio.template)
  ? [{ id: "media", label: "Media Showcase", icon: "🎥" }]
  : []),

  { id: 'contact', label: 'Contact', icon: '📧' },
  { id: 'styling', label: 'Styling', icon: '🎨' },
];

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await savePortfolio();
      // Show success toast
      console.log('Portfolio saved successfully!');
    } catch (error) {
      console.error('Failed to save portfolio:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportJSON = () => {
    exportPortfolioAsJSON(currentPortfolio);
  };

  const handleExportHTML = () => {
    exportPortfolioAsHTML(currentPortfolio);
  };

  const handleImportJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      importPortfolioFromJSON(file)
        .then((portfolio) => {
          loadPortfolio(portfolio.id);
          console.log('Portfolio imported successfully!');
        })
        .catch((error) => {
          console.error('Failed to import portfolio:', error);
        });
    }
  };

  const renderTabContent = () => {
  switch (activeTab) {
    case 'about':
      return <AboutEditor />;
    case 'projects':
      return <ProjectsEditor />;
    case 'skills':
      return <SkillsEditor />;
    case 'experience':
      return <ExperienceEditor />;
    case 'achievements':
      return <AchievementsEditor />; 
    case 'contact':
      return <ContactEditor />;
    case 'styling':
      return <StylingEditor />;
    case 'socialProof':
      return <SocialProofEditor/>;
     case 'media':
      return <MediaShowcaseEditor/>;
    default:
      return <AboutEditor />;
  }
};


  if (showPreview) {
    return (
      <div className="min-h-screen bg-base-200">
        {/* Preview Header */}
        <div className="bg-base-100 shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Portfolio Preview</h1>
            <div className="flex gap-2">
            
              <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-base-content/80 bg-base-200 rounded-md hover:bg-base-300 hover:text-primary transition-colors duration-200"
              onClick={() => setShowPreview(false)}
              >
              <span className="text-lg">←</span>
              <span>Back to Editor</span>
              </button>
            
             <button
             className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary/80 rounded-md hover:bg-primary-focus transition-colors duration-200 shadow-sm hover:shadow-md hover:bg-primary/60"
            onClick={handleExportHTML}
            >
            <span>Export HTML</span>
            </button>
            </div>
          </div>
        </div>
        
        {/* Preview Content */}
        <div className="p-4">
          <PortfolioPreview portfolio={currentPortfolio} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Editor Header */}
      <div className="bg-base-100 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Portfolio Editor</h1>
              <p className="text-sm text-base-content/60">
                Template: {currentPortfolio.template} • Last saved: {
                  currentPortfolio.lastModified 
                    ? new Date(currentPortfolio.lastModified).toLocaleString()
                    : 'Never'
                }
              </p>
            </div>
            
            <div className="flex gap-2">
              {/* Import/Export */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button onClick={handleExportJSON}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Export JSON
                    </button>
                  </li>
                  <li>
                    <label htmlFor="import-file">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Import JSON
                    </label>
                    <input 
                      id="import-file"
                      type="file" 
                      accept=".json"
                      className="hidden"
                      onChange={handleImportJSON}
                    />
                  </li>
                </ul>
              </div>
              
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => setShowPreview(true)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview
              </button>
              
              <button 
                className={`btn btn-primary btn-sm ${isSaving ? 'loading' : ''}`}
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-base-100 rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4">Edit Sections</h3>
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-content'
                        : 'hover:bg-base-200'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-base-100 rounded-lg shadow-sm p-4 mt-4">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button 
                  className="btn btn-ghost btn-sm w-full justify-start"
                  onClick={() => setShowPreview(true)}
                >
                  <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Live Preview
                </button>
                <button 
                  className="btn btn-ghost btn-sm w-full justify-start"
                  onClick={handleSave}
                >
                  <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save Progress
                </button>
                <button 
                  className="btn btn-ghost btn-sm w-full justify-start"
                  onClick={handleExportHTML}
                >
                  <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export HTML
                </button>
              </div>
            </div>

            {/* Portfolio Status */}
            <div className="bg-base-100 rounded-lg shadow-sm p-4 mt-4">
              <h3 className="font-semibold mb-4">Portfolio Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>About Section</span>
                  <div className={`badge badge-sm ${currentPortfolio.sections.about.name && currentPortfolio.sections.about.title ? 'badge-success' : 'badge-warning'}`}>
                    {currentPortfolio.sections.about.name && currentPortfolio.sections.about.title ? 'Complete' : 'Incomplete'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Projects ({currentPortfolio.sections.projects.items.length})</span>
                  <div className={`badge badge-sm ${currentPortfolio.sections.projects.items.length > 0 ? 'badge-success' : 'badge-neutral'}`}>
                    {currentPortfolio.sections.projects.items.length > 0 ? 'Added' : 'None'}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
               <span>Media Showcase ({currentPortfolio.sections.media?.media?.length || 0})</span>
              <div
              className={`badge badge-sm ${
                currentPortfolio.sections.media?.media?.length > 0
                  ? 'badge-success'
                  : 'badge-neutral'
              }`}
            >
              {currentPortfolio.sections.media?.media?.length > 0 ? 'Added' : 'None'}
            </div>
          </div>

                <div className="flex items-center justify-between text-sm">
                  <span>Skills ({currentPortfolio.sections.skills.items.length})</span>
                  <div className={`badge badge-sm ${currentPortfolio.sections.skills.items.length > 0 ? 'badge-success' : 'badge-neutral'}`}>
                    {currentPortfolio.sections.skills.items.length > 0 ? 'Added' : 'None'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Experience ({currentPortfolio.sections.experience.items.length})</span>
                  <div className={`badge badge-sm ${currentPortfolio.sections.experience.items.length > 0 ? 'badge-success' : 'badge-neutral'}`}>
                    {currentPortfolio.sections.experience.items.length > 0 ? 'Added' : 'None'}
                  </div>

                </div>
                  {!["minimalist", "minimalist2", "minimalist3", "minimalist4", "minimalist5", "minimalist6"]
                  .includes(currentPortfolio.template) && (
                  <div className="flex items-center justify-between text-sm">
                    <span>Achievements</span>
                    <div
                      className={`badge badge-sm ${
                        (currentPortfolio.sections.achievements?.milestones?.length > 0 ||
                          currentPortfolio.sections.achievements?.certificates?.length > 0)
                          ? "badge-success"
                          : "badge-neutral"
                      }`}
                    >
                      {(currentPortfolio.sections.achievements?.milestones?.length > 0 ||
                        currentPortfolio.sections.achievements?.certificates?.length > 0)
                        ? "Added"
                        : "None"}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span>Trusted & Feedback</span>
                  <div
                    className={`badge badge-sm ${
                      (currentPortfolio.sections.socialProof?.trustedBy?.length > 0 ||
                        currentPortfolio.sections.socialProof?.feedback?.length > 0)
                        ? "badge-success"
                        : "badge-neutral"
                    }`}
                  >
                    {(currentPortfolio.sections.socialProof?.trustedBy?.length > 0 ||
                      currentPortfolio.sections.socialProof?.feedback?.length > 0)
                      ? "Added"
                      : "None"}
                  </div>
                </div>


                <div className="flex items-center justify-between text-sm">
                  <span>Contact Info</span>
                  <div className={`badge badge-sm ${currentPortfolio.sections.contact.email ? 'badge-success' : 'badge-neutral'}`}>
                    {currentPortfolio.sections.contact.email ? 'Added' : 'None'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-base-100 rounded-lg shadow-sm p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditor;
