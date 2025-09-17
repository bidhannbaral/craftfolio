import React from 'react';
import MinimalistTemplate from '../templates/MinimalistTemplate';
import MinimalistTemplate2 from '../templates/MinimalistTemplate2';


const PortfolioPreview = ({ portfolio }) => {
  const renderTemplate = () => {
    switch (portfolio.template) {
      case 'minimalist2':
        return <MinimalistTemplate2 portfolio={portfolio} />;
      
      case 'minimalist': // default
      default:
        return <MinimalistTemplate portfolio={portfolio} />;
    }
  };

  return (
    <div className="portfolio-preview bg-white rounded-lg shadow-lg overflow-hidden">
      {renderTemplate()}
    </div>
  );};

export default PortfolioPreview;
