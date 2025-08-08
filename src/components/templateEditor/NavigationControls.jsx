import React from 'react';
import PropTypes from 'prop-types';

const NavigationControls = ({ currentSection, totalSections, onNext, onBack }) => {
  return (
    <div className="flex justify-between mt-8 pt-4 border-t border-base-300">
      <button
        className={`btn ${currentSection === 0 ? 'btn-disabled' : 'btn-ghost'}`}
        onClick={onBack}
        disabled={currentSection === 0}
      >
        Back
      </button>
      <div className="text-sm text-base-content/70">
        Section {currentSection + 1} of {totalSections}
      </div>
      <button
        className={`btn ${currentSection === totalSections - 1 ? 'btn-primary' : 'btn-ghost'}`}
        onClick={onNext}
      >
        {currentSection === totalSections - 1 ? 'Finish' : 'Next'}
      </button>
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
