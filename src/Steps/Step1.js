import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const { name, email, phone } = formData;

  const validateFields = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!phone) {
      errors.phone = 'Phone number is required';
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

  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-2">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

      <label htmlFor="email" className="mb-2">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

      <label htmlFor="phone" className="mb-2">
        Phone Number:
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}

      <button onClick={handleNext} className="bg-indigo-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Step1;
