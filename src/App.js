import React from 'react';
// import logo from './logo.svg';
import { Container } from './appStyles'
import AirQuality from './components/AirQuality';
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Muli:300,400,600', 'sans-serif']
    }
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Container>
        <AirQuality/>
      </Container>
    </div>
  );
}

export default App;
