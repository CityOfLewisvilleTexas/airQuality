import React from 'react';
// import logo from './logo.svg';
import { Container } from './appStyles'
import AirQuality from './components/AirQuality';
import DiscussionText from './components/DiscussionText'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Roboto Mono:300,400,600', 'sans-serif']
    }
})
function App() {
  return (
    <div className="App">
      <Container>
        <AirQuality/>
        <DiscussionText/>
      </Container>
    </div>
  );
}

export default App;
