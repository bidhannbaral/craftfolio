import React from 'react';
import PropTypes from 'prop-types';

const PreviewPane = ({ templateId, formData, onClose }) => {
  return (
    <div className="bg-base-100 p-4 rounded-lg shadow-lg h-full sticky top-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Live Preview</h2>
        <button className="lg:hidden btn btn-sm btn-ghost" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="w-full h-[600px] overflow-auto border-2 border-base-300 rounded">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">Template Preview</h1>
          <p>Editing: {templateId}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Form Data:</h3>
            <pre className="text-xs bg-base-200 p-2 rounded">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

PreviewPane.propTypes = {
  templateId: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewPane;
