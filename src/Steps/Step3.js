import React, { useState } from 'react';

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const { file } = formData;

  const validateFields = () => {
    const errors = {};

    if (!file) {
      errors.file = 'File upload is required';
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
      <label htmlFor="file" className="mb-2">
        File Upload (PNG/PDF):
      </label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".png,.pdf"
        onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
        className="mb-4"
      />

      {errors.file && <p className="text-red-500 mb-2">{errors.file}</p>}

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

export default Step3;
