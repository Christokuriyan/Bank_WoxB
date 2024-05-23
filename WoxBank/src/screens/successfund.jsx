import React from 'react';
import SuccessMessage from './path/to/SuccessMessage';

const SomeComponent = () => {
  const handleGoBack = () => {
    // Your custom logic for going back
    window.history.back();
  };

  return (
    <SuccessMessage 
      amount="100,000" 
      message="has been sent to your Bank Account!" 
      onGoBack={handleGoBack}
    />
  );
};

export default SomeComponent;
