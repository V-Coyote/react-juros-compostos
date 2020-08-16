import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% auto;

  width: 100%;
  height: 120px;

  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Period = styled.span`
  align-self: center;
`;

export const Info = styled.div.attrs((props) => {})`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;

  padding: 8px;

  span:nth-of-type(1) {
    color: #045c0c;
  }

  span:nth-of-type(2) {
    color: ${(props) => (props.negative ? 'red' : '#14cc24')};
  }

  span:nth-of-type(3) {
    color: ${(props) => (props.negative ? 'orange' : '#04b4dc')};
  }
`;
