import React, { useState, useEffect } from 'react';

import Card from '../Card/';

import { formatNumber } from '../../utils/numberFormat';

import { Container } from './styles';

function Cards({ capital, tax, period }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    calcProfit();
  }, [capital, tax, period]);

  const calcProfit = () => {
    let valueProfit = parseInt(capital);

    let arrValues = [];
    let accumulator = 0;

    for (let i = 0; i < period; i++) {
      let profit = valueProfit * (tax / 100);

      valueProfit += profit;
      accumulator += profit;

      let profitPercent = 100 / (capital / accumulator);

      arrValues.push({
        id: i + 1,
        capital: valueProfit.toFixed(2),
        profit: accumulator.toFixed(2),
        percentage: profitPercent.toFixed(2),
      });
    }

    setValues(arrValues);
  };

  return (
    <>
      <Container>
        {values.map(({ id, capital, profit, percentage }) => {
          return (
            <Card
              key={id}
              id={id}
              capital={capital}
              profit={profit}
              percentage={percentage}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Cards;
