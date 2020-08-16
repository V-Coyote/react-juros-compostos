import React, { useState, useEffect } from 'react';

import { Container } from './styles';

function Form({ onSave }) {
  const [capital, setCapital] = useState(0);
  const [tax, setTax] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleCapital = (e) => {
    setCapital(e.target.value);
  };

  const handleTax = (e) => {
    setTax(e.target.value);
  };

  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(capital, tax, period);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="input-field col s6">
            <input
              id="capital"
              type="number"
              className="validate"
              value={capital}
              onChange={handleCapital}
              min="0"
              max="100000"
              autoFocus
            />
            <label htmlFor="capital">Capital Inicial :</label>
          </div>

          <div className="input-field col s6">
            <input
              id="interest-tax"
              type="number"
              className="validate"
              value={tax}
              onChange={handleTax}
              min="-12"
              max="12"
              step="0.1"
            />
            <label htmlFor="interest-tax">Taxa de Juros Mensal :</label>
          </div>

          <div className="input-field col s6">
            <input
              id="period"
              type="number"
              className="validate"
              value={period}
              onChange={handlePeriod}
              min="1"
            />
            <label htmlFor="period">Período Meses :</label>
          </div>
          <div>
            <button className="btn waves-effect waves-light">Calcular</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Form;
