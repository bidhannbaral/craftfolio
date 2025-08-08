import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PreviewPane from '../../components/templateEditor/PreviewPane';
import FormSection from '../../components/templateEditor/FormSection';
import NavigationControls from '../../components/templateEditor/NavigationControls';

const CustomTemplate1 = () => {
  const { templateId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  // Form sections for custom template 1
  const sections = [
    {
      title: 'Project Details',
      description: 'Tell us about your featured project or portfolio piece.',
      fields: [
        { 
          id: 'projectName', 
          label: 'Project Name', 
          type: 'text',
          required: true,
          placeholder: 'E-commerce Redesign',
          helpText: 'The name of your featured project'
        },
        { 
          id: 'client', 
          label: 'Client/Company', 
          type: 'text',
          placeholder: 'Fashion Retailer Inc.',
          helpText: 'Who was this project for? (Use "Personal Project" if self-initiated)'
        },
        { 
          id: 'year', 
          label: 'Year Completed', 
          type: 'number',
          min: 2000,
          max: new Date().getFullYear(),
          placeholder: '2023',
          helpText: 'When was this project completed?'
        },
        { 
          id: 'projectType', 
          label: 'Project Type', 
          type: 'select',
          options: [
            { value: 'web', label: 'Web Development' },
            { value: 'mobile', label: 'Mobile App' },
            { value: 'design', label: 'UI/UX Design' },
            { value: 'branding', label: 'Branding' },
            { value: 'other', label: 'Other' },
          ],
          helpText: 'What type of project is this?'
        },
        { 
          id: 'projectDescription', 
          label: 'Project Description', 
          type: 'textarea',
          rows: 4,
          placeholder: 'Briefly describe the project, its goals, and your role...',
          helpText: 'A short summary of the project (100-200 words)'
        },
      ],
    },
    {
      title: 'Design Elements',
      description: 'Customize the visual aspects of your portfolio.',
      fields: [
        { 
          id: 'colorScheme', 
          label: 'Color Scheme', 
          type: 'select',
          options: [
            { value: 'light', label: 'Light & Minimal' },
            { value: 'dark', label: 'Dark & Professional' },
            { value: 'colorful', label: 'Colorful & Creative' },
            { value: 'monochrome', label: 'Monochrome' },
            { value: 'custom', label: 'Custom (specify below)' },
          ],
          helpText: 'Choose a color palette that represents your style'
        },
        { 
          id: 'customColors', 
          label: 'Custom Colors', 
          type: 'text',
          placeholder: '#FF5733, #33FF57, #5733FF',
          helpText: 'If you selected "Custom" above, list your preferred colors (hex codes or names)'
        },
        { 
          id: 'layout', 
          label: 'Layout Preference', 
          type: 'select',
          options: [
            { value: 'grid', label: 'Grid Layout' },
            { value: 'masonry', label: 'Masonry Grid' },
            { value: 'list', label: 'List View' },
            { value: 'cards', label: 'Card Layout' },
          ],
          helpText: 'How would you like your projects displayed?'
        },
        { 
          id: 'typography', 
          label: 'Typography Style', 
          type: 'select',
          options: [
            { value: 'modern', label: 'Modern Sans-Serif' },
            { value: 'classic', label: 'Classic Serif' },
            { value: 'minimal', label: 'Minimal' },
            { value: 'creative', label: 'Creative Mix' },
          ],
          helpText: 'Choose a font style that matches your brand'
        },
      ],
    },
    {
      title: 'Media & Assets',
      description: 'Add visual elements to showcase your work.',
      fields: [
        { 
          id: 'featuredImage', 
          label: 'Featured Image URL', 
          type: 'url',
          placeholder: 'https://example.com/my-project-image.jpg',
          helpText: 'A high-quality image that represents your project (1200×800px recommended)'
        },
        { 
          id: 'gallery', 
          label: 'Additional Images', 
          type: 'textarea',
          rows: 3,
          placeholder: 'https://example.com/image1.jpg\nhttps://example.com/image2.jpg',
          helpText: 'Add URLs to additional project images (one per line, up to 5)'
        },
        { 
          id: 'videoUrl', 
          label: 'Video URL', 
          type: 'url',
          placeholder: 'https://youtube.com/watch?v=abcdefg or https://vimeo.com/1234567',
          helpText: 'Link to a demo video or presentation (YouTube or Vimeo)'
        },
      ],
    },
  ];

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Custom Template Editor</h1>
            <p className="text-base-content/70 mt-1">Create your portfolio with our step-by-step guide</p>
          </div>
          <div className="hidden md:block">
            <div className="badge badge-secondary p-3">Custom Template 1</div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1 bg-base-100 p-6 rounded-lg shadow-lg border border-base-300">
            <FormSection 
              section={sections[currentSection]} 
              formData={formData}
              onChange={handleInputChange}
            />
            <NavigationControls 
              currentSection={currentSection}
              totalSections={sections.length}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>

          {/* Preview Section */}
          <div className={`${showPreview ? 'block' : 'hidden'} lg:block w-full lg:w-[450px] flex-shrink-0 transition-all duration-300`}>
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">Live Preview</h2>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-ghost" title="Download">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="lg:hidden btn btn-sm btn-ghost" onClick={() => setShowPreview(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <PreviewPane 
                templateId="custom-1"
                formData={formData} 
                onClose={() => setShowPreview(false)}
              />
              <div className="mt-4 text-center text-sm text-base-content/60">
                <p>This is how your portfolio will look to visitors</p>
              </div>
            </div>
          </div>

          {/* Mobile preview toggle button */}
          <button 
            className="lg:hidden btn btn-primary gap-2 fixed bottom-4 right-4 z-10 shadow-lg"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Hide Preview
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTemplate1;
