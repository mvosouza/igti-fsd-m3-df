import React from 'react';
import { formatCurrency, formatPercentage } from '../helper/formatter';

export default function Installment({ id, installment }) {
  const {
    totalAmount,
    interestAmount,
    accumulatedInterestAmount,
    accumulatedInterestRate,
  } = installment;

  const amountStyle =
    interestAmount >= 0 ? styles.amount.positive : styles.amount.negative;
  const interestRateStyle =
    interestAmount >= 0
      ? styles.interestRate.positive
      : styles.interestRate.negative;

  return (
    <div className="col s4 m3 l2">
      <div className="card-panel" style={styles.flexRow}>
        <span style={styles.identification}>{id}</span>
        <div style={styles.flexColumn}>
          <span style={amountStyle}>{formatCurrency(totalAmount)}</span>
          <span style={amountStyle}>
            {interestAmount > 0 && '+'}
            {formatCurrency(accumulatedInterestAmount)}
          </span>
          <span style={interestRateStyle}>
            {formatPercentage(accumulatedInterestRate)}
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  identification: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginRight: '15px',
  },
  amount: {
    positive: { color: 'green', fontWeight: '600' },
    negative: { color: 'red', fontWeight: '600' },
  },
  interestRate: { positive: { color: 'blue' }, negative: { color: 'orange' } },
};
