import React from 'react';
import PropTypes from 'prop-types';

const NavigationControls = ({ currentSection, totalSections, onNext, onBack }) => {
  // Calculate progress percentage
  const progressPercentage = ((currentSection + 1) / totalSections) * 100;
  
  return (
    <div className="mt-8 pt-4 border-t border-base-300">
      {/* Progress bar */}
      <div className="w-full bg-base-200 rounded-full h-2.5 mb-4 dark:bg-base-300">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {/* Section indicator */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium">
          Section {currentSection + 1} of {totalSections}: 
          <span className="text-primary font-semibold ml-1">Progress {Math.round(progressPercentage)}%</span>
        </div>
        <div className="flex gap-1">
          {[...Array(totalSections)].map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full ${index === currentSection ? 'bg-primary' : index < currentSection ? 'bg-primary/40' : 'bg-base-300'}`}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          className={`btn ${currentSection === 0 ? 'btn-disabled' : 'btn-outline'}`}
          onClick={onBack}
          disabled={currentSection === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        <button
          className={`btn ${currentSection === totalSections - 1 ? 'btn-primary' : 'btn-primary btn-outline'}`}
          onClick={onNext}
        >
          {currentSection === totalSections - 1 ? (
            <>
              Finish
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

NavigationControls.propTypes = {
  currentSection: PropTypes.number.isRequired,
  totalSections: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default NavigationControls;
