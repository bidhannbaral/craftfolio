import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PreviewPane from '../../components/templateEditor/PreviewPane';
import FormSection from '../../components/templateEditor/FormSection';
import NavigationControls from '../../components/templateEditor/NavigationControls';

const CustomTemplate2 = () => {
  const { templateId } = useParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  // Form sections for custom template 2
  const sections = [
    {
      title: 'Portfolio Content',
      description: 'Tell your story and showcase your professional identity.',
      fields: [
        { 
          id: 'name', 
          label: 'Your Name', 
          type: 'text',
          required: true,
          placeholder: 'Alex Johnson',
          helpText: 'Your full name as you want it to appear on your portfolio'
        },
        { 
          id: 'title', 
          label: 'Professional Title', 
          type: 'text',
          required: true,
          placeholder: 'Creative Director & Photographer',
          helpText: 'Your job title or professional role'
        },
        { 
          id: 'bio', 
          label: 'Professional Bio', 
          type: 'textarea',
          rows: 5,
          required: true,
          placeholder: "I'm a creative professional with over 8 years of experience in...",
          helpText: 'A compelling introduction about yourself and your work (150-250 words)'
        },
        { 
          id: 'specialty', 
          label: 'Specialty/Focus', 
          type: 'text',
          placeholder: 'Brand Photography, Portrait Photography, Commercial Work',
          helpText: 'Your main areas of expertise or specialization (comma separated)'
        },
      ],
    },
    {
      title: 'Visual Identity',
      description: 'Define the visual elements of your portfolio.',
      fields: [
        { 
          id: 'coverImage', 
          label: 'Cover/Hero Image URL', 
          type: 'url',
          required: true,
          placeholder: 'https://example.com/my-hero-image.jpg',
          helpText: 'A high-quality image for your portfolio header (1920×1080px recommended)'
        },
        { 
          id: 'profilePhoto', 
          label: 'Profile Photo URL', 
          type: 'url',
          placeholder: 'https://example.com/my-profile-photo.jpg',
          helpText: 'A professional headshot or portrait (square format recommended)'
        },
        { 
          id: 'logoUrl', 
          label: 'Personal Logo URL', 
          type: 'url',
          placeholder: 'https://example.com/my-logo.png',
          helpText: 'Your personal or business logo (if you have one)'
        },
        { 
          id: 'theme', 
          label: 'Portfolio Theme', 
          type: 'select',
          options: [
            { value: 'minimal', label: 'Minimal & Clean' },
            { value: 'bold', label: 'Bold & Dramatic' },
            { value: 'artistic', label: 'Artistic & Creative' },
            { value: 'professional', label: 'Professional & Corporate' },
          ],
          helpText: 'The overall style and feel of your portfolio'
        },
      ],
    },
    {
      title: 'Media & Showcase',
      description: 'Add media elements to highlight your work.',
      fields: [
        { 
          id: 'video', 
          label: 'Featured Video URL', 
          type: 'url',
          placeholder: 'https://vimeo.com/123456789 or https://youtube.com/watch?v=abcdefg',
          helpText: 'A video that showcases your work or introduces yourself'
        },
        { 
          id: 'gallery', 
          label: 'Portfolio Gallery', 
          type: 'textarea',
          rows: 4,
          placeholder: 'https://example.com/work1.jpg\nhttps://example.com/work2.jpg\nhttps://example.com/work3.jpg',
          helpText: 'URLs of your work samples (one per line, up to 10 images)'
        },
        { 
          id: 'galleryLayout', 
          label: 'Gallery Layout', 
          type: 'select',
          options: [
            { value: 'grid', label: 'Grid (Equal Sized)' },
            { value: 'masonry', label: 'Masonry (Variable Heights)' },
            { value: 'carousel', label: 'Carousel/Slider' },
            { value: 'fullscreen', label: 'Fullscreen Gallery' },
          ],
          helpText: 'How you want your portfolio images to be displayed'
        },
      ],
    },
    {
      title: 'Contact & Social',
      description: 'How can people connect with you?',
      fields: [
        { 
          id: 'email', 
          label: 'Contact Email', 
          type: 'email',
          required: true,
          placeholder: 'alex@example.com',
          helpText: 'Your professional email address'
        },
        { 
          id: 'phone', 
          label: 'Phone Number', 
          type: 'tel',
          placeholder: '+1 (555) 123-4567',
          helpText: 'Your contact phone number (optional)'
        },
        { 
          id: 'socialLinks', 
          label: 'Social Media Links', 
          type: 'textarea',
          rows: 4,
          placeholder: 'Instagram: https://instagram.com/username\nBehance: https://behance.net/username\nLinkedIn: https://linkedin.com/in/username',
          helpText: 'Your social media profiles (label and URL on each line)'
        },
        { 
          id: 'contactForm', 
          label: 'Include Contact Form', 
          type: 'checkbox',
          checkboxLabel: 'Add a contact form to my portfolio',
          helpText: 'Allow visitors to contact you directly through your portfolio'
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
            <div className="badge badge-secondary p-3">Custom Template 2</div>
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
                templateId="custom-2"
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

export default CustomTemplate2;
