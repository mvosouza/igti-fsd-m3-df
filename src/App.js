import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';
import { calcCompoundInterest } from './helper/interestCalc';

export default function App() {
  const [inputInitialCapital, setInputInitialCapital] = useState(1000);
  const [inputInterest, setInputInterest] = useState(0.5);
  const [inputInstallments, setInputInstallments] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    let newInstallments = [];
    for (let i = 1; i <= inputInstallments; i++) {
      let auxInitialCap = inputInitialCapital;
      if (i > 1) auxInitialCap = newInstallments[i - 2].totalAmount;
      const totalAmount = calcCompoundInterest(auxInitialCap, inputInterest);
      const interestAmount = totalAmount - auxInitialCap;
      newInstallments.push({
        initialCap: inputInitialCapital,
        totalAmount,
        interestAmount,
      });
    }

    newInstallments = newInstallments.map((installment, index, array) => {
      const accumulatedInterestAmount = array.reduce(
        (aggr, curr, reduceIndex) => {
          if (reduceIndex <= index) return aggr + curr.interestAmount;
          return aggr;
        },
        0
      );
      const accumulatedInterestRate =
        accumulatedInterestAmount / installment.initialCap;
      return {
        ...installment,
        accumulatedInterestAmount,
        accumulatedInterestRate,
      };
    });

    setInstallments(newInstallments);
  }, [inputInitialCapital, inputInterest, inputInstallments]);

  const handleInitialCapital = (value) => {
    setInputInitialCapital(+value);
  };
  const handleInterests = (value) => {
    setInputInterest(+value);
  };
  const handleInstallments = (value) => {
    setInputInstallments(+value);
  };

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <Form
        initialValue={inputInitialCapital}
        interests={inputInterest}
        installments={inputInstallments}
        onInitialCapitalChange={handleInitialCapital}
        onInterestsChange={handleInterests}
        onInstallmentsChange={handleInstallments}
      />
      <Installments installments={installments} />
    </div>
  );
}
