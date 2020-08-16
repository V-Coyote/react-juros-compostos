import React, { useState, useEffect } from 'react';

import Form from './components/Form/';
import Cards from './components/Cards/';

import { Container } from './styles/global';

function App() {
  const [capital, setCapital] = useState(0);
  const [tax, setTax] = useState(0);
  const [period, setPeriod] = useState(0);
  const [cards, setCards] = useState(false);

  useEffect(() => {
    if (capital !== 0 && tax !== 0 && period !== 0) {
      return () => {
        setCapital(0);
        setTax(0);
        setPeriod(0);
      };
    }
  }, [cards]);

  const handleValues = (initialCapital, interestTax, countPeriod) => {
    if (cards) {
      setCards(false);
    }

    setCapital(initialCapital);
    setTax(interestTax);
    setPeriod(countPeriod);

    setCards(true);
  };

  return (
    <>
      <Container>
        <h1 style={{ textAlign: 'center' }}>React - Juros Composto</h1>
        <Form onSave={handleValues} />
        {cards && <Cards capital={capital} tax={tax} period={period} />}
      </Container>
    </>
  );
}

export default App;
