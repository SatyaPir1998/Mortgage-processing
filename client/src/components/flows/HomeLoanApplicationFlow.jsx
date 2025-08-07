import React, { useState } from 'react';
import FormFillingStep from './steps/FormFillingStep';
import DocumentUploadStep from './steps/DocumentUploadStep';
import InitialReviewStep from './steps/InitialReviewStep';
import VerificationStep from './steps/VerificationStep';
import ApprovalStep from './steps/ApprovalStep';

const HomeLoanApplicationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState({});

  const allSteps = [
    {
      id: '1',
      label: 'Form Filling',
      type: 'manual',
      component: FormFillingStep
    },
    {
      id: '2',
      label: 'Document Upload',
      type: 'manual',
      component: DocumentUploadStep
    },
    {
      id: '3',
      label: 'Initial Review',
      type: 'automation',
      component: InitialReviewStep
    },
    {
      id: '4',
      label: 'Verification',
      type: 'automation',
      component: VerificationStep
    },
    {
      id: '5',
      label: 'Approval',
      type: 'manual',
      component: ApprovalStep
    }
  ];

  const handleStepComplete = (data) => {
    setStepData(prev => ({
      ...prev,
      [currentStep]: data
    }));
    
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All steps completed
      console.log('Case completed:', stepData);
      // TODO: Handle case completion
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = allSteps[currentStep]?.component;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Home Loan Application
            </h1>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {allSteps.length}
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / allSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current step */}
        {CurrentStepComponent && (
          <CurrentStepComponent
            onComplete={handleStepComplete}
            onBack={handleStepBack}
          />
        )}
      </div>
    </div>
  );
};

export default HomeLoanApplicationFlow;