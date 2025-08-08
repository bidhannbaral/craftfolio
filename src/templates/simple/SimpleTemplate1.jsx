import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PreviewPane from '../../components/templateEditor/PreviewPane';
import FormSection from '../../components/templateEditor/FormSection';
import NavigationControls from '../../components/templateEditor/NavigationControls';

const SimpleTemplate1 = () => {
  const { templateId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  // Form sections for simple template 1
  const sections = [
    {
      title: 'Personal Information',
      description: 'Tell us about yourself. This information will be displayed prominently on your portfolio.',
      fields: [
        { 
          id: 'name', 
          label: 'Your Name', 
          type: 'text',
          required: true,
          placeholder: 'John Doe',
          helpText: 'This will be displayed as the main heading of your portfolio'
        },
        { 
          id: 'email', 
          label: 'Email Address', 
          type: 'email',
          required: true,
          placeholder: 'john.doe@example.com',
          helpText: 'Your primary contact email (will be visible to visitors)'
        },
        { 
          id: 'phone', 
          label: 'Phone Number', 
          type: 'tel',
          placeholder: '(123) 456-7890',
          helpText: 'Optional: Add your phone number if you want to be contacted this way'
        },
        { 
          id: 'jobTitle', 
          label: 'Professional Title', 
          type: 'text',
          required: true,
          placeholder: 'Frontend Developer',
          helpText: "Your current role or the position you're seeking"
        },
        { 
          id: 'location', 
          label: 'Location', 
          type: 'text',
          placeholder: 'New York, NY',
          helpText: "City, State or Country where you're based"
        },
        { 
          id: 'availableForWork', 
          label: 'Work Status', 
          type: 'checkbox',
          checkboxLabel: 'I am available for new opportunities',
          helpText: "Let visitors know if you're open to job offers"
        },
      ],
    },
    {
      title: 'Professional Details',
      description: 'Share your work experience and professional background.',
      fields: [
        { 
          id: 'company', 
          label: 'Current/Most Recent Company', 
          type: 'text',
          placeholder: 'Acme Corporation',
          helpText: 'Where you currently work or your most recent employer'
        },
        { 
          id: 'experience', 
          label: 'Years of Experience', 
          type: 'number',
          min: 0,
          max: 50,
          step: 0.5,
          placeholder: '3',
          helpText: 'Your total years of professional experience in this field'
        },
        { 
          id: 'experienceLevel', 
          label: 'Experience Level', 
          type: 'select',
          placeholder: 'Select your experience level',
          options: [
            { value: 'entry', label: 'Entry Level (0-2 years)' },
            { value: 'mid', label: 'Mid Level (3-5 years)' },
            { value: 'senior', label: 'Senior (6-9 years)' },
            { value: 'expert', label: 'Expert (10+ years)' },
          ],
          helpText: 'How would you classify your level of expertise?'
        },
      ],
    },
    {
      title: 'Skills & Expertise',
      description: 'Highlight your key skills and areas of expertise.',
      fields: [
        { 
          id: 'skillsSummary', 
          label: 'Skills Summary', 
          type: 'textarea',
          rows: 3,
          placeholder: 'Briefly describe your key skills and expertise...',
          helpText: 'A short paragraph summarizing your professional capabilities'
        },
        { 
          id: 'primarySkills', 
          label: 'Primary Skills', 
          type: 'text',
          placeholder: 'React, JavaScript, UI/UX, Node.js',
          helpText: 'List your main skills separated by commas (these will be displayed as tags)'
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
            <h1 className="text-3xl font-bold">Simple Template Editor</h1>
            <p className="text-base-content/70 mt-1">Create your portfolio with our step-by-step guide</p>
          </div>
          <div className="hidden md:block">
            <div className="badge badge-primary p-3">Simple Template 1</div>
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
                templateId="simple-1"
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

export default SimpleTemplate1;
