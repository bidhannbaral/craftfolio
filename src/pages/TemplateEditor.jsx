import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PreviewPane from '../components/templateEditor/PreviewPane';
import FormSection from '../components/templateEditor/FormSection';
import NavigationControls from '../components/templateEditor/NavigationControls';

const TemplateEditor = () => {
  const { templateId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  // Sample form sections
  const sections = [
    {
      title: 'Personal Information',
      fields: [
        { id: 'name', label: 'Full Name', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'phone', label: 'Phone Number', type: 'tel' },
      ],
    },
    {
      title: 'Professional Details',
      fields: [
        { id: 'jobTitle', label: 'Job Title', type: 'text' },
        { id: 'company', label: 'Company', type: 'text' },
        { id: 'experience', label: 'Years of Experience', type: 'number' },
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
        <h1 className="text-3xl font-bold mb-8">Template Editor</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1 bg-base-100 p-6 rounded-lg shadow">
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

          {/* Preview Section - hidden on small screens unless toggled */}
          <div className={`${showPreview ? 'block' : 'hidden'} lg:block w-full lg:w-96 flex-shrink-0`}>
            <PreviewPane 
              templateId={templateId} 
              formData={formData} 
              onClose={() => setShowPreview(false)}
            />
          </div>

          {/* Mobile preview toggle button */}
          <button 
            className="lg:hidden btn btn-primary fixed bottom-4 right-4 z-10"
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
