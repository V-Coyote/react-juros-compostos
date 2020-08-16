import React, { useState, useEffect } from 'react';

import { Container, Period, Info } from './styles';

import { formatNumber } from '../../utils/numberFormat';

function Card({ id, capital, profit, percentage }) {
  const [negative, setNegative] = useState(false);

  useEffect(() => {
    if (profit < 0) {
      setNegative(true);
    }
  }, [profit, percentage]);

  return (
    <>
      <Container>
        <Period style={{ text: 'center' }}>{id}</Period>
        <Info negative={negative}>
          <span>{formatNumber(capital)}</span>
          <span>
            {profit > 0
              ? `+${formatNumber(profit)}`
              : `${formatNumber(profit)}`}
          </span>
          <span>{`${percentage}%`}</span>
        </Info>
      </Container>
    </>
  );
}

export default Card;
