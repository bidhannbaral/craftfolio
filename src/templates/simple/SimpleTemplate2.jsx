import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PreviewPane from '../../components/templateEditor/PreviewPane';
import FormSection from '../../components/templateEditor/FormSection';
import NavigationControls from '../../components/templateEditor/NavigationControls';

const SimpleTemplate2 = () => {
  const { templateId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  // Different form sections for this template
  const sections = [
    {
      title: 'Basic Information',
      description: "Let's start with the essentials for your portfolio.",
      fields: [
        { 
          id: 'name', 
          label: 'Your Name', 
          type: 'text',
          required: true,
          placeholder: 'Jane Smith',
          helpText: 'Your full name as you want it to appear on your portfolio'
        },
        { 
          id: 'headline', 
          label: 'Professional Headline', 
          type: 'text',
          required: true,
          placeholder: 'UX Designer & Researcher',
          helpText: 'A short phrase that describes what you do'
        },
        { 
          id: 'location', 
          label: 'Location', 
          type: 'text',
          placeholder: 'San Francisco, CA',
          helpText: "Where you're based (city, country)"
        },
        { 
          id: 'bio', 
          label: 'Short Bio', 
          type: 'textarea',
          rows: 3,
          placeholder: "I'm a UX designer with 5 years of experience creating user-centered digital products...",
          helpText: 'A brief introduction about yourself (2-3 sentences)'
        },
      ],
    },
    {
      title: 'Skills & Expertise',
      description: 'Tell visitors about your professional capabilities.',
      fields: [
        { 
          id: 'skills', 
          label: 'Key Skills', 
          type: 'text',
          placeholder: 'UX Design, User Research, Wireframing, Prototyping',
          helpText: 'List your main skills separated by commas'
        },
        { 
          id: 'tools', 
          label: 'Tools & Technologies', 
          type: 'text',
          placeholder: 'Figma, Sketch, Adobe XD, InVision',
          helpText: "Software, platforms, and technologies you're proficient with"
        },
        { 
          id: 'specialization', 
          label: 'Specialization', 
          type: 'select',
          placeholder: 'Select your main specialization',
          options: [
            { value: 'frontend', label: 'Frontend Development' },
            { value: 'backend', label: 'Backend Development' },
            { value: 'fullstack', label: 'Full Stack Development' },
            { value: 'design', label: 'UI/UX Design' },
            { value: 'product', label: 'Product Management' },
            { value: 'other', label: 'Other' },
          ],
          helpText: 'Your primary area of expertise'
        },
      ],
    },
    {
      title: 'Contact Information',
      description: 'How would you like potential clients or employers to reach you?',
      fields: [
        { 
          id: 'email', 
          label: 'Email Address', 
          type: 'email',
          required: true,
          placeholder: 'jane.smith@example.com',
          helpText: 'Your primary contact email'
        },
        { 
          id: 'website', 
          label: 'Personal Website', 
          type: 'url',
          placeholder: 'https://www.janesmith.com',
          helpText: 'Link to your existing website (if you have one)'
        },
        { 
          id: 'linkedin', 
          label: 'LinkedIn Profile', 
          type: 'url',
          placeholder: 'https://www.linkedin.com/in/janesmith',
          helpText: 'Your LinkedIn profile URL'
        },
        { 
          id: 'contactPreference', 
          label: 'Preferred Contact Method', 
          type: 'select',
          options: [
            { value: 'email', label: 'Email' },
            { value: 'linkedin', label: 'LinkedIn Message' },
            { value: 'form', label: 'Contact Form' },
          ],
          helpText: 'How would you prefer to be contacted?'
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
            <div className="badge badge-primary p-3">Simple Template 2</div>
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
                templateId="simple-2"
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

export default SimpleTemplate2;
