import React, { useState } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [interest, setInterest] = useState(1);
  const [installments, setInstallments] = useState(1);

  const handleInitialValue = (value) => {
    setInitialValue(+value);
  };
  const handleInterests = (value) => {
    setInterest(+value);
  };
  const handleInstallments = (value) => {
    setInstallments(+value);
  };

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <Form
        initialValue={initialValue}
        interests={interest}
        installments={installments}
        onInitialValueChange={handleInitialValue}
        onInterestsChange={handleInterests}
        onInstallmentsChange={handleInstallments}
      />
      <Installments />
    </div>
  );
}
