import React from 'react';

export default function Form(props) {
  const { initialValue, interests, installments } = props;

  const handleIntialValueChange = (e) => {
    props.onInitialValueChange(e.target.value);
  };
  const handleInterestsChange = (e) => {
    props.onInterestsChange(e.target.value);
  };
  const handleInstallmentsChange = (e) => {
    props.onInstallmentsChange(e.target.value);
  };

  return (
    <div className="row">
      <div className="input-field col s4">
        <input
          type="number"
          name="initialValue"
          id="initialValue"
          value={initialValue}
          onChange={handleIntialValueChange}
          min="0"
          max="100000"
          step="100"
        />
        <label className="active" htmlFor="initialValue">
          Montante inicial:
        </label>
      </div>

      <div className="input-field col s4">
        <input
          type="number"
          name="interests"
          id="interests"
          value={interests}
          onChange={handleInterestsChange}
          min="-12"
          max="12"
          step="0.1"
        />
        <label className="active" htmlFor="interests">
          Taca de juros mensal:
        </label>
      </div>

      <div className="input-field col s4">
        <input
          type="number"
          name="installments"
          id="installments"
          value={installments}
          onChange={handleInstallmentsChange}
          min="1"
          max="36"
          step="1"
        />
        <label className="active" htmlFor="installments">
          Período (meses):
        </label>
      </div>
    </div>
  );
}
