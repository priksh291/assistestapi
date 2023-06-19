import React from 'react';

const Step5 = ({ formData, prevStep }) => {
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">Status</h2>
      <p className="mb-4">Form successfully submitted!</p>

      <div className="flex justify-between mt-8">
        <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Previous
        </button>
      </div>
    </div>
  );
};

export default Step5;
