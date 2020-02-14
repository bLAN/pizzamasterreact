import React from 'react';
import './App.css';
import OrderPage from './pages/OrderPage'
import styled from 'styled-components'
const Wrapper = styled.div`
  margin: 0;
  padding: 2rem;
`

function App() {
  return (
      <Wrapper>
        <OrderPage />
      </Wrapper>
  );
}

export default App;
