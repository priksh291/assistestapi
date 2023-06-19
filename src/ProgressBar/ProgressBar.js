import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const steps = ['Basic Details', 'Address', 'File Upload', 'Multi File Upload', 'Status'];

  return (
    <div className="bg-gray-200 h-2 rounded">
      <div
        className={`bg-indigo-500 h-full rounded transition-width duration-500 ease-in-out w-${(currentStep / steps.length) * 100}`}
      ></div>
    </div>
  );
};

export default ProgressBar;