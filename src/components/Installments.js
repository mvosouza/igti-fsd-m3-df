import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  return (
    <div className="row">
      {installments.map((installment, index) => (
        <Installment key={index} id={index + 1} installment={installment} />
      ))}
    </div>
  );
}
