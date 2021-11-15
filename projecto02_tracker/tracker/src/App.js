import React from 'react';
import GetLocation from './Components/Geolocation.Component';
import { Wrapper, Banner, Title } from './Components/Styles';




function App() {
  return (
    <Wrapper>
      <Title>IP Adress Tracker</Title>
      <Banner></Banner>
      <GetLocation></GetLocation>
    </Wrapper>
  );
}

export default App;
