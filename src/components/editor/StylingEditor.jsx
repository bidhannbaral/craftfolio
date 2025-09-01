import React from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const StylingEditor = () => {
  const { currentPortfolio, updatePortfolioStyling } = usePortfolioStore();
  const { styling } = currentPortfolio;

  const handleStyleChange = (field, value) => {
    updatePortfolioStyling({ [field]: value });
  };

  const colorPresets = [
    { name: 'Blue Professional', primary: '#3b82f6', secondary: '#1e40af' },
    { name: 'Green Nature', primary: '#10b981', secondary: '#059669' },
    { name: 'Purple Creative', primary: '#8b5cf6', secondary: '#7c3aed' },
    { name: 'Red Bold', primary: '#ef4444', secondary: '#dc2626' },
    { name: 'Orange Warm', primary: '#f97316', secondary: '#ea580c' },
  ];

  const fontFamilies = [
    'Inter',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Poppins',
    'Source Sans Pro',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          Styling & Theme
        </h2>
        <p className="text-base-content/70 mb-6">
          Customize the look and feel of your portfolio.
        </p>
      </div>

      {/* Color Presets */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Color Presets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                handleStyleChange('primaryColor', preset.primary);
                handleStyleChange('secondaryColor', preset.secondary);
              }}
              className="p-4 border border-base-300 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  <div 
                    className="w-6 h-6 rounded-l-full"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <div 
                    className="w-6 h-6 rounded-r-full"
                    style={{ backgroundColor: preset.secondary }}
                  />
                </div>
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="space-y-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Primary Color</span>
            <span className="label-text-alt">Main theme color</span>
          </label>
          <div className="flex gap-3">
            <input
              type="color"
              className="w-16 h-12 rounded border border-base-300"
              value={styling.primaryColor}
              onChange={(e) => handleStyleChange('primaryColor', e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered flex-1"
              value={styling.primaryColor}
              onChange={(e) => handleStyleChange('primaryColor', e.target.value)}
              placeholder="#3b82f6"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Secondary Color</span>
            <span className="label-text-alt">Accent color</span>
          </label>
          <div className="flex gap-3">
            <input
              type="color"
              className="w-16 h-12 rounded border border-base-300"
              value={styling.secondaryColor}
              onChange={(e) => handleStyleChange('secondaryColor', e.target.value)}
            />
            <input
              type="text"
              className="input input-bordered flex-1"
              value={styling.secondaryColor}
              onChange={(e) => handleStyleChange('secondaryColor', e.target.value)}
              placeholder="#1e40af"
            />
          </div>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Typography</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Font Family</span>
            <span className="label-text-alt">Choose your portfolio font</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={styling.fontFamily}
            onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
          >
            {fontFamilies.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preview */}
      <div className="card bg-base-100 border">
        <div className="card-body">
          <h3 className="card-title">Preview</h3>
          <div 
            className="p-6 rounded-lg"
            style={{ 
              backgroundColor: styling.backgroundColor,
              color: styling.textColor,
              fontFamily: styling.fontFamily,
            }}
          >
            <h1 
              className="text-2xl font-bold mb-2"
              style={{ color: styling.primaryColor }}
            >
              Sample Heading
            </h1>
            <p className="mb-4">
              This is how your portfolio text will look with the current styling settings.
            </p>
            <button 
              className="px-4 py-2 rounded text-white"
              style={{ backgroundColor: styling.primaryColor }}
            >
              Sample Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingEditor;
