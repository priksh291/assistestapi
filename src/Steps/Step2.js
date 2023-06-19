import React, { useState } from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const { address } = formData;

  const validateFields = () => {
    const errors = {};

    if (!address) {
      errors.address = 'Address is required';
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
      <label htmlFor="address" className="mb-2">
        Address:
      </label>
      <textarea
        id="address"
        name="address"
        value={address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="mb-4 p-2 border border-gray-300 rounded"
      ></textarea>

      {errors.address && <p className="text-red-500 mb-2">{errors.address}</p>}

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

export default Step2;
