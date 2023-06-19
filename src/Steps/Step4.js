import React, { useState } from 'react';

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const { multiFiles } = formData;

  const validateFields = () => {
    const errors = {};

    if (!multiFiles || multiFiles.length === 0) {
      errors.multiFiles = 'Multiple file upload is required';
    }

    return errors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const errors = validateFields();

    if (Object.keys(errors).length === 0) {
      setErrors({});
      nextStep();
    } else {
      setErrors(errors);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="multiFiles" className="mb-2">
        Multiple File Upload (PNG/PDF):
      </label>
      <input
        type="file"
        id="multiFiles"
        name="multiFiles"
        accept=".png,.pdf"
        multiple
        onChange={(e) => setFormData({ ...formData, multiFiles: Array.from(e.target.files) })}
        className="mb-4"
      />

      {errors.multiFiles && <p className="text-red-500 mb-2">{errors.multiFiles}</p>}

      <div className="flex justify-between mt-8">
        <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Previous
        </button>
        <button onClick={handleNext} className="bg-indigo-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
