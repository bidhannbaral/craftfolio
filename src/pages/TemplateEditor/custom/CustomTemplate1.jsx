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
      fields: [
        { id: 'projectName', label: 'Project Name', type: 'text' },
        { id: 'client', label: 'Client', type: 'text' },
        { id: 'year', label: 'Year', type: 'number' },
      ],
    },
    {
      title: 'Design Elements',
      fields: [
        { id: 'colorScheme', label: 'Color Scheme', type: 'text' },
        { id: 'layout', label: 'Layout Preference', type: 'text' },
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
        <h1 className="text-3xl font-bold mb-8">Simple Template A1 Editor</h1>
        
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

          {/* Preview Section */}
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

export default CustomTemplate1;
