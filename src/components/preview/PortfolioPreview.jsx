import React from 'react';
import MinimalistTemplate from '../templates/MinimalistTemplate';

const PortfolioPreview = ({ portfolio }) => {
  return (
    <div className="portfolio-preview bg-white rounded-lg shadow-lg overflow-hidden">
      <MinimalistTemplate portfolio={portfolio} />
    </div>
  );
};

export default PortfolioPreview;
