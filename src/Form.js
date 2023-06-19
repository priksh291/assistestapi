import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    file: null,
    multiFiles: [],
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderProgressBar = () => {
    const steps = ['Basic Details', 'Address', 'File Upload', 'Multi File Upload', 'Status'];
    const progress = ((currentStep - 1) / 4) * 100;

    return (
      <div className="mb-8">
        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-indigo-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm ${
                index < currentStep - 1 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-1/2">
      <div className="bg-white p-8 shadow rounded">
        {renderProgressBar()}

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}

          {currentStep === 2 && (
            <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}

          {currentStep === 3 && (
            <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}

          {currentStep === 4 && (
            <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}

          {currentStep === 5 && (
            <Step5 formData={formData} setFormData={setFormData} prevStep={prevStep} />
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                Previous
              </button>
            )}

            {currentStep < 5 && (
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
                Next
              </button>
            )}

            {currentStep === 5 && (
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
