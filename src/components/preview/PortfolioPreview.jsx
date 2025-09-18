import React from 'react';
import MinimalistTemplate from '../templates/MinimalistTemplate';
import MinimalistTemplate2 from '../templates/MinimalistTemplate2';
import MinimalistTemplate3 from '../templates/MinimalistTemplate3';
import MinimalistTemplate4 from '../templates/MinimalistTemplate4';
import MinimalistTemplate5 from '../templates/MinimalistTemplate5'; 
import MinimalistTemplate6 from '../templates/MinimalistTemplate6'
const PortfolioPreview = ({ portfolio }) => {
  const renderTemplate = () => {
    switch (portfolio.template) {
      case 'minimalist2':
        return <MinimalistTemplate2 portfolio={portfolio} />;

      case 'minimalist3':
        return <MinimalistTemplate3 portfolio={portfolio} />;

      case 'minimalist4':
        return <MinimalistTemplate4 portfolio={portfolio} />;

      case 'minimalist5':
        return <MinimalistTemplate5 portfolio={portfolio} />;
      case 'minimalist6':
        return <MinimalistTemplate6 portfolio={portfolio} />;
        
      case 'minimalist': // default
      default:
        return <MinimalistTemplate portfolio={portfolio} />;
    }
  };

  return (
    <div className="portfolio-preview bg-white rounded-lg shadow-lg overflow-hidden">
      {renderTemplate()}
    </div>
  );
};

export default PortfolioPreview;
